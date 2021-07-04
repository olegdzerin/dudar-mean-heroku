const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/users')
const router = express.Router();
const config = require('../config/db');
const passport = require('passport');
const jwt = require('jsonwebtoken');



router.post('/reg', (req, res) => {
    // console.log(req.body);
    // console.log(typeof(req.body));
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password,
    });
    User.addUser(newUser, (err, user) => {
        if(err)
         res.json({success: false, msg: "Користуввч не був добавлений"});
         else
         res.json({success: true, msg: "Користуввч  був добавлений"});
    });
});

router.post('/auth', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;  
    User.getUserByLogin(login, (err,user) => {
        if(err) throw err;
        if(!user) 
        return res.json({succes:false, msg:'Такий користувач не був знайдений'});
        User.comparePath(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
              const token = jwt.sign(user.toJSON(), config.secret, {
                  expiresIn: 3000 * 24
              })
              res.json({
                  success: true,
                  token: 'JWT' + token,
                  user: {
                      id: user._id,
                      name: user.name,
                      login: user.login,
                      password: user.password,
                  }
              })
            } else{
                return res.json({succes:false, msg:'Паролі не співпадають'});
            }
        }
        )
    })
});

router.get('/auth', () => console.log('authorithation'));

router.get('/dashboard',passport.authenticate('jwt', {session: false}) , (req,res) => res.send("<h1>dashbord</h1>"));
module.exports = router;