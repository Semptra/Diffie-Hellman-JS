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

console.log('p: ' + diffie.p);
console.log('g: ' + diffie.g);

console.log('Private key on client: ' + a);
console.log('Public key on client: ' + A);

axiosClient.post('/exchange', { A })
    .then(response => {
        var B = response.data;

        console.log('Public key comes from server: ' + B);

        var s = diffie.getPrivateKey(B, a);

        console.log('Shared secret: ' + s);
    })
    .catch(e => {
        console.log(e);
    });