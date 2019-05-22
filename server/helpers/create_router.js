const express = require('express')
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

  const router = express.Router()

  router.get('/', (req,res) => {
    collection
      .find()
      .toArray()
      .then( (docs) => res.json(docs))
  })

  router.post('/', (req,res) => {
    console.log('Request body:', req.body);
    const newData = req.body
    collection
      .insertOne(newData)
      .then( () => collection.find().toArray())
      .then(docs => res.json(docs))
  })


  return router;
}





module.exports = createRouter;
