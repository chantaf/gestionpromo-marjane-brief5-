var db=require('../database');
var adminCentreModel=require('../models/ModelAdminCentre');
var responsablerayonModel=require('../models/ModelResponsablerayon')



checkComptAdminCentreExist=async(req, res, next)=>{

    var data= await adminCentreModel.getAdminCentreByEmail(req, res);
     console.log(data);
    if(data.length>0) {
     
         res.status(400).send({
        message: "Failed! email is already in use!"
      });
    }  else{
      next();

    }  
}


checkComptResponsableRayonExist=async(req, res, next)=>{

  var data= await responsablerayonModel.getResponsablesrayonByEmail(req, res);
   console.log(data);
  if(data.length>0) {
   
       res.status(400).send({
      message: "Failed! email is already in use!"
    });
  }  else{
    next();

  }  
}

const verifySignUp = {
 
  checkComptAdminCentreExist: checkComptAdminCentreExist,
  checkComptResponsableRayonExist: checkComptResponsableRayonExist

};

module.exports = verifySignUp;