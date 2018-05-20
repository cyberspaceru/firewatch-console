import fetch from 'node-fetch';
import connection from './Connection';

const commands = {};
const proxy = {};

commands.getStatus = (callback) => {
    return proxy.get("status", callback);
}

proxy.get = (command, callback) => {
    const controller = new AbortController();
    const signal = controller.signal;
    return fetch("http://" + connection.host + ":" + connection.port + "/" + command, {
        method: 'GET',
        signal: controller.signal
    }).then((r) => {
        if (r.ok) {
            r.text().then(x => callback(x))
        } else {
            callback(undefined);
        }
    }).catch((e) => callback(undefined));
}

export default commands;