const path = require('path');

const resourcePath = 'resource';
const production = 'pro';
const host = 'localhost';
const port = 4000;

const getABSPath = (p) => path.resolve(__dirname, `../${p}`);

const getEntry = (_env) => {
    const entry = {
        dev: {app: ['react-hot-babel/patch', getABSPath('src/index.js')]},
        pro: {app: getABSPath('src/index.js')}
    }
}

module.exports = {
    resourcePath,
    production,
    host,
    port,
    getABSPath,
    getEntry
}