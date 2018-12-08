
var g = 23;
var p = 5;

function getRandomNatural() {
    return Math.floor(Math.random() * Math.floor(1000));
}

function getOpenKey(a) {
    return Math.pow(g, a) % p;
}

function exchange(x, y, z) {
    return Math.pow(x, y) % z;
}

module.exports = {
    g: g,
    p: p,
    getRandomNatural: getRandomNatural,
    getOpenKey: getOpenKey,
    exchange: exchange
};