var db=require('../database');
var ModelCategorie=require('../models/ModelCategorie');
module.exports= {
    getCategories:  function (req, res) {
     return ModelCategorie.getCategories(req,res);
    },

    getCategorieById:  function (req, res) {
        var id=req.params.id;
     return ModelCategorie.getCategorieById(req,res,id);
    },

    addCategorie:  function (req, res) {
        var data=req.body;
     return ModelCategorie.addCategorie(req,res,data);
    },

    deleteCategorie:  function (req, res) {
       var id=req.body.id;
     return ModelCategorie.deleteCategorie(req,res,id);
    },

    editCategorie:  function (req, res) {
     var id=req.params.id;
     return ModelCategorie.editCategorie(req,res,id);
    },

    updateCategorie:  function (req, res) {
        var data=req.body;
        return ModelCategorie.updateCategorie(req,res,data);
    },

  
}
