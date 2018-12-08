const express = require("express");
const app = express();
const port = 3000;
const bodyparser = require('body-parser')
const diffie = require('../shared/diffie');

app.use(bodyparser.json());

app.post("/exchange",
    function (req, res) {
        var b = diffie.getRandomNatural();
        var B = diffie.getOpenKey(b);

        console.log('p: ' + diffie.p);
        console.log('g: ' + diffie.g);

        console.log('Private key on server: ' + b);
        console.log('Public key on server: ' + B);

        var A = req.body.A;

        console.log('Public key comes from client: ' + A);

        var s = diffie.getPrivateKey(A, b);

        console.log('Shared secret: ' + s);

        res.send(JSON.stringify(B));
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
