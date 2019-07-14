var express = require('express');
var router = express.Router();

var user = require('../models/user');

// var user = [
//   {
//     id: 1,
//     name: 'Ajit',
//     email: 'ajit@gmail.com',
//     contactno: 1023654785
//   },
//   {
//     id: 2,
//     name: 'Siddhesh',
//     email: 'siddhesh@gmail.com',
//     contactno: 4512305579
//   }
// ]

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find({})
  .then((users) => {
    res.statusCode = 200;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  });
});

router.post('/', (req, res, next) => {
  let newUser = new user({
    id: req.body.id,
    name: req.body.name,
    contactno: req.body.contactno,
    email: req.body.email
  });
  console.log('new user', newUser)
  user.addUser(newUser, (err, user) => {
    if(err) {
      console.log('hello!');
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false, msg: 'error'});
    } else {
      res.statusCode = 200;
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.setHeader('Content-Type', 'application/json');
      res.json(user);
    }
  });
});

router.get('/:uid', (req, res, next) => {
  const id = req.params.uid;
  user.findOne({id: id}, (err, user) => {
    if (err) {
      console.log('hello!');
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false, msg: 'error'});
    } else if ( user ) {
      res.statusCode = 200;
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.setHeader('Content-Type', 'application/json');
      res.json(user);
    }
  });
});

router.put('/:uid', (req, res, next) => {
  const id = req.params.uid;
  user.findOneAndUpdate({id: id}, {
    $set: req.body
  }, { new: true})
  .then((user, err) => {
    if (err) {
      console.log('err', err);
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false, msg: 'error'});
    } else if ( user ) {
      console.log('user', user)
      res.statusCode = 200;
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.setHeader('Content-Type', 'application/json');
      res.json(user);
    }
  });
});

router.delete('/:uid', (req, res, next) => {
  const id = req.params.uid;
  user.findOneAndRemove({id: id}, (err, user) => {
    if (err) {
      console.log('err', err);
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false, msg: 'error'});
    } else if ( user ) {
      console.log('user', user)
      res.statusCode = 200;
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.setHeader('Content-Type', 'application/json');
      res.json(user);
    }
  });
});

module.exports = router;
