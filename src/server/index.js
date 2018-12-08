const express = require("express");
const app = express();
const port = 3000;
const diffie = require('../shared/diffie');

app.post("/firstExchange",
    function (req, res) {
        var b = diffie.getRandomNatural();
        var B = diffie.getOpenKey(b);

        res.send(B);
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
