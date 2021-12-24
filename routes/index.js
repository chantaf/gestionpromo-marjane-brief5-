// var express = require('express');
var ControllerCentre=require('../controllers/ControllerCentre');
var ControllerAdminCentre=require('../controllers/ControllerAdminCentre');
var ControllerCategorie=require('../controllers/ControllerCategorie');
var ControllerProduit=require('../controllers/ControllerProduit');
var ControllerResponsablerayon=require('../controllers/ControllerResponsablerayon');
var ControllerPromotion=require('../controllers/ControllerPromotion');

var ControllerAuth=require('../controllers/authController');
const  verifySignUp  = require("../middleware/verifySignUp");

var db=require('../database');
// var router = express.Router();

module.exports=(app)=>{


   
      // route inscription admin general
      app.post('/admingeneral/signup', ControllerAuth.signup);
      app.post('/auth', ControllerAuth.signin);

    //routes centre
    app.get('/view/centre', ControllerCentre.getCentres);
    app.get('/view/centre/:id', ControllerCentre.getCentreById);
    app.post('/view/addcentre', ControllerCentre.addCentre);
    app.delete('/view/deletecentre', ControllerCentre.deleteCentre);
    app.get('/view/editcentre/:id', ControllerCentre.editCentre);
    app.put('/view/updatecentre', ControllerCentre.updateCentre);


    //routes admin centre
    app.get('/view/admincentre',ControllerAdminCentre.getAdminCentres);
    app.get('/view/admincentre/:id',ControllerAdminCentre.getAdminCentreById);
    app.post('/view/addadmincentre',verifySignUp.checkComptAdminCentreExist,ControllerAdminCentre.addAdminCentre);
    app.delete('/view/deleteadmincentre',ControllerAdminCentre.deleteAdminCentre);
    app.get('/view/editadmincentre/:id',ControllerAdminCentre.editAdminCentre);
    app.put('/view/edit/updateadmincentre',ControllerAdminCentre.updateAdminCentre);


     //routes Responsablerayon
     app.get('/view/responsablerayon',ControllerResponsablerayon.getResponsablesrayons);
     app.get('/view/responsablerayon/:id',ControllerResponsablerayon.getResponsablerayonById);
     app.post('/view/addresponsablerayon',verifySignUp.checkComptResponsableRayonExist,ControllerResponsablerayon.addResponsablerayon);
     app.delete('/view/responsablerayon',ControllerResponsablerayon.deleteResponsablerayon);
     app.get('/view/responsablerayon/:id',ControllerResponsablerayon.editResponsablerayon);
     app.put('/view/edit/responsablerayon',ControllerResponsablerayon.updateResponsablerayon);

    //routes categorie
    app.get('/view/categorie',ControllerCategorie.getCategories);
    app.get('/view/categorie/:id',ControllerCategorie.getCategorieById);
    app.post('/view/addcategorie',ControllerCategorie.addCategorie);
    app.delete('/view/deletecategorie',ControllerCategorie.deleteCategorie);
    app.get('/view/editcategorie/:id',ControllerCategorie.editCategorie);
    app.put('/view/updatecategorie',ControllerCategorie.updateCategorie);

    //routes produit
    app.get('/view/produit',ControllerProduit.getProduits);
    app.get('/view/produit/:id',ControllerProduit.getProduitById);
    app.post('/view/addproduit',ControllerProduit.addProduit);
    app.delete('/view/deleteproduit',ControllerProduit.deleteProduit);
    app.get('/view/editproduit/:id',ControllerProduit.editProduit);
    app.put('/view/updateproduit',ControllerProduit.updateProduit);


    //routes promotion
    app.get('/view/promotion',ControllerPromotion.getPromotions);
    app.get('/view/promotion/:id',ControllerPromotion.getPromotionById);
    app.post('/view/addpromotion',ControllerPromotion.addPromotion);
    app.delete('/view/deletepromotion',ControllerPromotion.deletePromotion);
    app.get('/view/editpromotion/:id',ControllerPromotion.editPromotion);
    app.put('/view/updatepromotion',ControllerPromotion.updatePromotion);
    app.put('/view/updatestatuspromotion',ControllerPromotion.updateStatusPromotion);
    
};



