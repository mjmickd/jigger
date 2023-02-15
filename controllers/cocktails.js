const Cocktail = require('../models/cocktail');
const API_URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
const fetch = require('node-fetch');
module.exports= {
    index,
    //show,
    //new: newCocktail,
    //create
    search,
    searchPage
};

function index(req, res) {
    Cocktail.find({}, function(err, cocktails) {
        res.render('cocktails/index', {title: 'All Cocktails', cocktails})
    })
}

function searchPage(req,res) {
    res.render('cocktails/search-page', {title: 'Search Page'});
}

async function search(req,res){
    try {
        const results = await fetch(`${API_URL}${req.body.search}`)
        const data = await results.json()
        console.log(data,"drink-data")
    } catch(err) {
        console.log(err)
    }
}

// function show(req, res) {
//     Cocktail.findById(req.params.id)
//     .populate('drink')
//     .exec(function(err,cocktail) {
//         Recipe.find(
//             {_id: {$nin: cocktail.recipes}},
//             function(err, recipes) {
//                 console.log(recipes);
//                 res.render('cocktails/show', {
//                     title: 'Cocktail Details', 
//                     cocktail,
//                     recipes
                    
//                 });
//             }
//         );
//     });
// };

// function newCocktail(req, res) {
//     res.render('cocktails/new', { title: 'Add Cocktail' }); 
    
