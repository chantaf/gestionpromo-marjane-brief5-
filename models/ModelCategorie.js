var db= require('../database');
module.exports={

    getCategories:function(req,res){
        var sql=`SELECT * FROM categorie`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ categorie: data });
        });
    },


    getCategorieById:async function(req,res,id){
        var sql=`SELECT * FROM categorie WHERE id='${id}'`;
          var data= await  this.promise(sql);
          return data;
    },

    promise:  (query) => {
      return new Promise( (resolve, reject) => {
          db.query(query, function (err, result) {
              if (err) throw err;
              
              resolve(result);
          });
      });
  },
    
    addCategorie:function(req,res,data){
        var sql=`INSERT INTO categorie (nom) VALUES ('${data.nom}')`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ message: "categorie est bien ajouter" });
        });
    },


    deleteCategorie:function(req,res,id){
        var sql=`DELETE  FROM categorie WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ message:"le categorie est bien supprimer" });
        });
    },
    editCategorie:function(req,res,id){
        var sql=`SELECT * FROM categorie WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({categorie:data});
        });
    },

    updateCategorie:function(req,res,data){
        var sql=`UPDATE  categorie SET nom='${data.nom}'  WHERE id='${data.id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({message:"categorie bien modifier"});
        });
    },

}