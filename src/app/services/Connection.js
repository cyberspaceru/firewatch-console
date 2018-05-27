import request from 'request';
import cron from 'node-cron';

const connection = {
    host: "127.0.0.1",
    port: "64963",
    onConnectedEvent: [],
    onSyncEvent: [],
    isConnected: false,
    request: null,

    propogateConnection: () => {
        connection.onConnectedEvent.forEach(x => x());
    },

    propogateSynchronization: () => {
        if (connection.isConnected) {
            connection.onSyncEvent.forEach(x => x());
        }
    }
}
cron.schedule("*/1 * * * * *", function () {
    connection.propogateSynchronization();
}).start()

export default connection;