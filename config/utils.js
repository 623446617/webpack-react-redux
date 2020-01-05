const path = require('path');

// 打包的静态资源路径名称
const resourcePath = 'resource';

// 是否时发布生产
const production = 'pro';

// ip与端口
const host = 'localhost';
const port = 4000;

// 获取指定路径的绝对路径
const getABSPath = (p) => path.resolve(__dirname, `../${p}`);

// 获取入口文件
const getEntry = (_env) => {
    const entry = {
        dev: {app: ['react-hot-loader/patch', getABSPath('src/index.js')]},
        pro: {app: getABSPath('src/index.js')}
    }
    return entry[_env];
}

module.exports = {
    resourcePath,
    production,
    host,
    port,
    getABSPath,
    getEntry
}
