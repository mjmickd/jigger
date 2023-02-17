const Cocktail = require('../models/cocktail');
const API_URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const fetch = require('node-fetch');
const { title } = require('process');
const { Z_SYNC_FLUSH, Z_FILTERED } = require('zlib');



module.exports= {
    index,
    show,
    search,
    searchPage,
    landing,
    addToFavorites,
    favorites,
    removeFromFavorites
    
};

function index(req, res) {
    Cocktail.find({}, function(err, cocktails) {
        res.render('cocktails/index', {title: 'All Cocktails', cocktails})
    })
}

function searchPage(req,res) {
    res.render('cocktails/search-page', {title: 'Search Page', drinks:[]})
}

async function search(req,res){
    try {
        const results = await fetch(`${API_URL}${req.body.search}`)
        const data = await results.json()
        res.render('cocktails/search-page', {title: 'Search Page', drinks: data.drinks} )
    } catch(err) {
        console.log(err)
    }
}

function landing(req,res) {
    Cocktail.find({}, function(err, cocktails) {
        res.render('cocktails/landing', {title: 'Cocktails', cocktails })
        });
};

async function addToFavorites(req,res) {
    try { 
        const drinkInDb = await Cocktail.exists({cocktailId: req.body.cocktailId})
        if(drinkInDb) {
            Cocktail.findOne({cocktailId: req.body.cocktailId}, function(err, cocktail) {

                if (cocktail.favorites.some(f => f.equals(req.user._id))) {
                    res.redirect('/cocktails/landing');
                } else {
                    cocktail.favorites.push(req.user._id)
                    cocktail.save(function(err) { 
                        console.log(err, 'test')
                        if (err) return res.redirect ('/cocktails/search');
                        res.redirect('/cocktails/landing');
                })
                }
            })
        } else {
            const cocktail = new Cocktail(req.body);
            cocktail.favorites.push(req.user._id)
            cocktail.save(function(err) { 
                if (err) return res.redirect ('/cocktails/search');
                res.redirect('/cocktails/landing');
            })
        }
    } catch(err) {
    }
}

function show(req,res) {
    Cocktail.findById(req.params.id, function(err, cocktail) {
        res.render('cocktails/show', {title: 'Detail', cocktail})
    })
     

}
function favorites(req, res) {
    Cocktail.find({favorites: req.user._id}, function(err, cocktails) {
        res.render('cocktails/landing', {title: 'My Favorites', cocktails})
    })
}

function removeFromFavorites(req, res) {
    Cocktail.findOne({cocktailId: req.body.cocktailId}, function(err, cocktail) {
        const updatedFavorites = cocktail.favorites.filter(u => !u.equals(req.user._id));
        cocktail.favorites = updatedFavorites;
        cocktail.save(function() {
            res.redirect('/cocktails/landing')
        }) 
    });
};



 














