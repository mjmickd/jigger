// const Cocktail = require('../models/cocktail');
// const Recipe = require('../models/recipes')

// module.exports= {
    //index,
    //show,
    //new: newCocktail,
    //create
//};

// function index(req, res) {
//     Cocktail.find({}, function(err, cocktails) {
//         res.render('cocktails/index', {title: 'All Cocktails' cocktails})
//     })
// }

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
    
