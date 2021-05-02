const router = require('express').Router()
const userController = require('../controller/SistemcuciKendaraan')

router.post('/create/', (req, res)=> {
    sepedahmotorController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  router.get('/showalldata/', (req, res)=> {
    sepedahmotorController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  router.get('/showdatabyid/:id', (req, res)=> {
    sepedahmotorController.showbyID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  router.put('/update/:id', (req, res)=> {
    sepedahmotorController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })  
  router.delete('/delete/:id', (req, res)=> {
    sepedahmotorController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  module.exports = router