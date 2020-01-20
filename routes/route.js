var express = require('express')
var router = express.Router()
var db = require('../db_config/dbconfig')


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/GetAllEmployee', function (req, res) {
    db.GetAllEmp(req, res)
})

router.get('/GetEmployee/:_id', function (req, res) {
    db.GetEmp(req, res)
})

router.post('/InsertEmployee', function (req, res) {
    db.InsertEmp(req, res)
})

router.put('/UpdateEmployee', function (req, res) {
    db.UpdateEmp(req, res)
})

router.delete('/DeleteEmployee', function (req, res) {
    db.DeleteEmp(req, res)
})

module.exports = router