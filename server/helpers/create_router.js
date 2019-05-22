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

  router.delete('/:id', (req,res) => {
    // console.log("req", req);
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id)})
      .then( () => collection.find().toArray())
      .then((docs) => res.json(docs))
  })

  return router;
}





module.exports = createRouter;
