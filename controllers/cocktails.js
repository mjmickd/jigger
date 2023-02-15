const Cocktail = require('../models/cocktail');
const API_URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const fetch = require('node-fetch');
const { title } = require('process');
const { Z_SYNC_FLUSH, Z_FILTERED } = require('zlib');



module.exports= {
    index,
    //show,
    //new: newCocktail,
    //create
    search,
    searchPage,
    landing
    
};

function index(req, res) {
    Cocktail.find({}, function(err, cocktails) {
        res.render('cocktails/index', {title: 'All Cocktails', cocktails})
    })
}

function searchPage(req,res) {
    res.render('cocktails/search-page', {title: 'Search Page'})
}

async function search(req,res){
    try {
        const results = await fetch(`${API_URL}${req.body.search}`)
        const data = await results.json()
        res.render('cocktails/search-page', {title: 'Search Page', drinks:data.drinks} )
    } catch(err) {
        console.log(err)
    }
}

function landing(req,res) {
    res.render('cocktails/landing', {title: 'Home'})
}


// function getDrink() {
//   return new Promise((resolve, reject) => {
//     Cocktail.findOne({ enabled: true }, (err, dr) => {
//         if (err) {
//             return resolve({ success: false, error: err, status: 400 })
//         }
//         if (!dr) {
//             return resolve({ success: false, error: `No enabled cameras found to look for highest priority`, status: 404 })
//         }
//         return resolve({ success: true, data: cam })
//     }).sort({ processingPriority: -1 }) //sort highest to lowest (then 'findOne' grabs the first)
//   })
// }

// getHighestPriorityCamera = async (req, res) => {
//     cameryRepository.getHighestPriorityCamera().then(result => {
//       if (result.success) {
//         res.status(200).json({ success: true, data: result.data })
//       } else {
//         res.status(result.status).json({ success: false, error: result.error })
//       }
//     })
//   }

// module.exports = {
//   getHighestPriorityCamera
// }





// function show(req, res) {
//     Cocktail.findById(`${API_URL}${req.body.search},req.params.id`)
//     .populate('drinks')
//     .exec(function(err, cocktail) {
//         res.render('cocktails/show', {
//             title: `${API_URL}${req.body.search}`,
//             cocktail
//         });
//     });
// };


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
    

function showDrink(req, res, next) {
    // Note the cool "dot" syntax to query for a movie with a
    // review nested within an array
    Drinks.findOne({
      'idDrink._id': req.params.id,
      'reviews.user': req.user._id
    }).then(function(movie) {
      if (!drinks) return res.render('Not-Found');
      movie.save().then(function() {
        res.render(`${idDrink._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }















