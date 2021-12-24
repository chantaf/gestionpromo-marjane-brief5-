var db=require('../database');
var ModelResponsablerayon=require('../models/ModelResponsablerayon');
const nodemailer = require('nodemailer');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const config = require("../config/auth.config");

module.exports= {
    getResponsablesrayons:  function (req, res) {
     return ModelResponsablerayon.getResponsablerayon(req,res);
    },

    getResponsablerayonById:  function (req, res) {
        var id=req.params.id;
     return ModelResponsablerayon.getResponsablerayonById(req,res,id);
    },

    addResponsablerayon:  function (req, res) {
         // Save User to Database
     var data=req.body;
     var generatPassword=Math.random().toString(36).substr(2) + req.body.prenom.split("@", 1);
     var password = bcrypt.hashSync(generatPassword, 8)
     data.password=password;

     var result=  ModelResponsablerayon.addResponsablerayon(req,res,data);
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
    },

    deleteResponsablerayon:  function (req, res) {
       var id=req.body.id;
     return ModelResponsablerayon.deleteResponsablerayon(req,res,id);
    },

    editResponsablerayon:  function (req, res) {
     var id=req.params.id;
     return ModelResponsablerayon.editResponsablerayon(req,res,id);
    },

    updateResponsablerayon:  function (req, res) {
        var data=req.body;
        return ModelResponsablerayon.updateResponsablerayon(req,res,data);
    },

  
}
