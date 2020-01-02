const config = require('./config');

module.exports = (_env) => {
    let env = _env || 'dev';

    let keys = Object.keys(config);

    if (keys.includes(env)) {
        console.log(`当前环境：${env},正在启动...`);
    } else {
        env = 'dev';
        console.log(`暂无 ${env} 环境,启动默认dev环境。`);
    }

    return config[env](env);
}