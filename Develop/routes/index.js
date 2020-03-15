const express = require('express');
const goku = express.Router();
const path = require('path');
const db = require('./../models')

goku.get('/', (req,res)=>{
res.sendFile(path.join(__dirname, 'index.html'))
})

goku.get('/exercise', function( req, res){
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

goku.get('/stats', function( req, res){
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

goku.post('/api/workouts', function(req, res){
    console.log(req.body)
})

module.exports = goku;