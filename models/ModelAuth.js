var db= require('../database');
module.exports={

    checkDuplicateEmail:function(req,res,data){

        var sql=`SELECT * FROM admingeneral WHERE`;

        db.query(sql, function (err, data, fields) {
            if (err) res.status(500).send({ message: err.message });
            res.send({ message: "admin centre was registered successfully!" });
        });
    },
    insertAdminGeneral:function(req,res,data){

        var sql=`INSERT INTO admingeneral(nom, prenom, email, password) VALUES ('${data.nom}','${data.prenom}','${data.email}','${data.password}')`;

        db.query(sql, function (err, data, fields) {
            if (err) res.status(500).send({ message: err.message });
            res.send({ message: "admin centre was registered successfully!" });
        });
    },
    SignIn: async function(req,res){
        var sql=`(SELECT * FROM ${req.body.role} WHERE email='${req.body.email}')`;
       var data= await  this.promise(sql);
       console.log(data);
       if (!data) {
        return res.status(404).send({ message: "User Not found." });
      }
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

}