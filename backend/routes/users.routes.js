const express = require('express');
let User = require('../models/user.model');

const router = express.Router()

// routes to perform CRUD operations for users.
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
  const username = req.body.username
  let newUser = new User({ username })

  newUser.save()
   .then(() => res.json('New user added.'))
   .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router