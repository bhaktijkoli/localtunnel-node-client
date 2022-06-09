require('dotenv').config()
const localtunnel = require('localtunnel');

(async () => {
    const ports = String(process.env.PORTS).split(',')
    for (const port of ports) {
        const tunnel = await localtunnel({ port });

        console.log("Started", tunnel.url);

        tunnel.on('close', () => {
            console.log("Closed", url);
        });
    }
})();