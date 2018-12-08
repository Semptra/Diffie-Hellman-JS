var primitiveRoot = require('./number-theory/lib/primitive_root');
var primes = [1299721, 1300073, 1300421, 1300751,
    1299743, 1300097, 1300423, 1300769,
    1299763, 1300111, 1300433, 1300771,
    1299791, 1300127, 1300451, 1300781,
    1299811, 1300129, 1300457, 1300813,
    1299817, 1300133, 1300463, 1300829,
    1299821, 1300139, 1300471, 1300837,
    1299827, 1300141, 1300477, 1300841];

var p = 1300133;
var g = primitiveRoot(p);

function expmod(base, exp, mod) {
    if (exp == 0) return 1;
    if (exp % 2 == 0) {
        return Math.pow(expmod(base, (exp / 2), mod), 2) % mod;
    }
    else {
        return (base * expmod(base, (exp - 1), mod)) % mod;
    }
}

function getRandomNatural() {
    return Math.floor(Math.random() * Math.floor(1000));
}

function getOpenKey(a) {
    return expmod(g, a, p);
}

function getPrivateKey(a, b) {
    return expmod(a, b, p);
}

module.exports = {
    g: g,
    p: p,
    getRandomNatural: getRandomNatural,
    getOpenKey: getOpenKey,
    getPrivateKey: getPrivateKey
};