import fetch from 'node-fetch';
import connection from './Connection';

const commands = {};
const proxy = {};

commands.getStatus = (callback) => {
    return proxy.get("status", callback);
}

/**
 * preview.offset: number
 * preview.items: []
 */
commands.getPreview = (callback) => {
    return proxy.get("preview", x => callback(JSON.parse(x)));
}

proxy.get = (command, callback) => {
    return fetch("http://" + connection.host + ":" + connection.port + "/" + command, {
        method: 'GET'
    }).then((r) => {
        if (r.ok) {
            r.text().then(x => callback(x))
        } else {
            callback(undefined);
        }
    }).catch((e) => callback(undefined));
}

export default commands;