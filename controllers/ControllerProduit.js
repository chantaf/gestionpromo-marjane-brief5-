var db=require('../database');
var ModelProduit=require('../models/ModelProduit');
module.exports= {
    getProduits:  function (req, res) {
     return ModelProduit.getProduits(req,res);
    },

    getProduitById:  function (req, res) {
        var id=req.params.id;
     return ModelProduit.getProduitById(req,res,id);
    },

    addProduit:  function (req, res) {
        var data=req.body;
     return ModelProduit.addProduit(req,res,data);
    },

    deleteProduit:  function (req, res) {
       var id=req.body.id;
     return ModelProduit.deleteProduit(req,res,id);
    },

    editProduit:  function (req, res) {
     var id=req.params.id;
     return ModelProduit.editProduit(req,res,id);
    },

    updateProduit:  function (req, res) {
        var data=req.body;
        return ModelProduit.updateProduit(req,res,data);
    },

  
}
