const chalk = require('chalk');
const clear = require('clear');
const x = require('figlet')
const axios = require('axios');
const diffie = require('../shared/diffie');

var axiosClient = axios.create({
    baseURL: 'http://localhost:3000'
});

var a = diffie.getRandomNatural();
var A = diffie.getOpenKey(a);

axiosClient.post('/firstExchange', { A })
    .then(response => {
        console.log(responce)
    })
    .catch(e => {
        console.log(e);
    });