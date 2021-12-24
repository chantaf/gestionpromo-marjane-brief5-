var db=require('../database');
const config = require("../config/auth.config");
var ModelAdminCentre=require('../models/ModelAdminCentre');
const nodemailer = require('nodemailer');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");


exports.addAdminCentre =  (req, res) => {
    // Save User to Database
     var data=req.body;
     var generatPassword=Math.random().toString(36).substr(2) + req.body.prenom.split("@", 1);
     var password = bcrypt.hashSync(generatPassword, 8)
     data.password=password;

     var result= ModelAdminCentre.insertAdminCentre(req,res,data);
     if(result){
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'testcoding975@gmail.com',
            pass: 'testCoding1998'
          }
        });    
        var mailOptions = {
          from: 'testcoding975@gmail.com',
          to: 'rafikcoding@gmail.com',
          subject: 'Voila votre nouveau compte, avec le password',
          text:'Votre password est : '+  generatPassword
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (err) {
                return log('Error occurs');
            }
        });
     }

     return result

  };

  exports.getAdminCentres=(req, res)=> {
    return ModelAdminCentre.getAdminCentres(req,res);
   }

   exports.getAdminCentreById= (req, res)=> {
       var id=req.params.id;
    return ModelAdminCentre.getAdminCentreById(req,res,id);
   }


  exports.deleteAdminCentre= (req, res)=> {
    var id=req.body.id;
  return ModelAdminCentre.deleteAdminCentre(req,res,id);
 }

 exports.editAdminCentre = (req, res) => {
  var id=req.params.id;
  return ModelAdminCentre.editAdminCentre(req,res,id);
 }

 exports.updateAdminCentre=  (req, res) =>{
     var data=req.body;
     return ModelAdminCentre.updateAdminCentre(req,res,data);
 }


  exports.getCategories= (req, res)=> {
  return ModelCategorie.getCategories(req,res);
 }

  exports.getCategorieById= (req, res) =>{
     var id=req.params.id;
  return ModelCategorie.getCategorieById(req,res,id);
 }

  exports.addCategorie= (req, res)=> {
     var data=req.body;
  return ModelCategorie.addCategorie(req,res,data);
 }

  exports.deleteCategorie= (req, res)=> {
    var id=req.params.id;
  return ModelCategorie.deleteCategorie(req,res,id);
 }

  exports.editCategorie= (req, res) =>{
  var id=req.params.id;
  return ModelCategorie.editCategorie(req,res,id);
 }

  exports.updateCategorie= (req, res)=> {
     var data=req.body;
     return ModelCategorie.updateCategorie(req,res,data);
 }