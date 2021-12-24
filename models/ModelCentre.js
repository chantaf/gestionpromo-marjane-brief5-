var db= require('../database');
module.exports={

    getCentres:function(req,res){
        var sql=`SELECT * FROM centre`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ centres: data });
        });
    },


    getCentreById:function(req,res,id){
        var sql=`SELECT * FROM centre WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ centre: data });
        });
    },
    
    addCentre:function(req,res,data){
        var sql=`INSERT INTO centre (nom,ville) VALUES ('${data.nom}','${data.ville}')`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ message: "centre est bien ajouter" });
        });
    },


    deleteCentre:function(req,res,id){
        var sql=`DELETE  FROM centre WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({ message:"le centre est bien supprimer" });
        });
    },
    editCentre:function(req,res,id){
        var sql=`SELECT * FROM centre WHERE id='${id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({centre:data});
        });
    },

    updateCentre:function(req,res,data){
        var sql=`UPDATE  centre SET nom='${data.nom}',ville='${data.ville}'  WHERE id='${data.id}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
          return  res.json({message:"centre bien modifier"});
        });
    },

}