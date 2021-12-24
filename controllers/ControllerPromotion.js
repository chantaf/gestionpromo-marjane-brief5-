var db=require('../database');
var ModelPromotion=require('../models/ModelPromotion');
var produit=require('../models/ModelProduit');
var categorie =require('../models/ModelCategorie');

module.exports= {
    getPromotions: async function (req, res) {
        let date = new Date();
        var month = date.getUTCMonth() + 1; //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        let hours = date.getHours();
        // let minute = date.getMinutes;
        newdate = year + "-" + month + "-" + day;
        let data=await ModelPromotion.getPromotions(req,res);
        let arraydata=[];
        data.forEach(element => {
            if(element.datedebutpromo==newdate &&  hours>=8 && hours<= 12){
                arraydata.push(element);
            }
        });

        // console.log(minute)
        return res.json({data:arraydata});
    },

    getPromotionById:  function (req, res) {
        var id=req.params.id;
     return ModelPromotion.getPromotionById(req,res,id);
    },

    addPromotion: async function (req, res) {
        var data=req.body;
        var produitt=  await produit.getProduitById(req,res,data.idproduit);

        var categoriee=await categorie.getCategorieById(req,res,produitt[0].idcategorie);

        if((categoriee[0].nom=="multimedia" && data.pourcentage<=20) || (categoriee[0].nom!="multimedia" && data.pourcentage<=50)){
             var point=data.pourcentage*10;
             data.point=point;
             return ModelPromotion.addPromotion(req,res,data);

        }else{
                return res.json({ message: "error" });
        }
    },

    deletePromotion:  function (req, res) {
       var id=req.body.id;
     return ModelPromotion.deletePromotion(req,res,id);
    },

    editPromotion:  function (req, res) {
     var id=req.params.id;
     return ModelPromotion.editPromotion(req,res,id);
    },

    updatePromotion:  function (req, res) {
        var data=req.body;
        return ModelPromotion.updatePromotion(req,res,data);
    },

    updateStatusPromotion:  function (req, res) {
        let date = new Date();
        let hours = date.getHours();
        if(hours>=8 && hours<= 17){
        var data=req.body;
        return ModelPromotion.updateStatusPromotion(req,res,data);
        }else{
            return res.json({ message: "error fin temps" });
        }
        
    },

  
}
