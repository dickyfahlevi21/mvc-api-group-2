const express = require('express');
const config = require('../../config/ongkir');
const axios = require('axios');
const http = require("http");
const request = require("request");
const qs = require("query-string");

router = express.Router();

router.get("/city",(req,res) =>{
    const options = {
        url: config.urlGetCity,
        headers:{
            key: config.key
        }
    };
    request(options, (err, response, results) =>{
        if(err) return err;

        if(!err && response.statusCode == 200){
            const data = JSON.parse(results);
            res.json(data.rajaongkir.results)
        }
    });
});


router.post('/', (req,res) =>{
    const dataParse = qs.stringify({
        origin: req.body.origin,
        destination: req.body.destination,
        weight: req.body.weight,
        courier: req.body.courier
    })

    const options ={
        headers:{
            key: process.env.API_KEY,
            "content-type" : "application/x-www-form-urlencoded"
        }
    }

    axios.post(process.env.URL_COST, dataParse, options).then((response) =>{
        const data = response.data.rajaongkir.results[0].costs;
        if(data.length > 0) {
            res.json({"rajaongkir": data});
        }else{
            res.json({msg: 'empty'});
        }
    });
});

module.exports = router