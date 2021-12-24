var db=require('../database');
const config = require("../config/auth.config");
var authModel=require('../models/ModelAuth')


var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  // Save User to Database
   var data=req.body;
   var password = bcrypt.hashSync(data.password, 8)
   data.password=password;
   return authModel.insertAdminGeneral(req,res,data);
};

exports.signin = async (req, res) => {

  var data =  await authModel.SignIn(req,res);
  var passwordIsValid =  bcrypt.compareSync(
    req.body.password,
    data[0].password
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!"
    });
  }

  var token = jwt.sign({ id: data.id }, config.secret, {
    expiresIn: 86400 // 24 hours
  });

  res.status(200).send({
    id: data.id,
    username: data.username,
    email: data.email,
    accessToken: token
  });

};