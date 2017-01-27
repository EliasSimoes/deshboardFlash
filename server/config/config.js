var path = require("path"),
    rootPath = path.normalize(__dirname + "/.."),
    env = process.env.NODE_ENV || "development";

var config = {
    development: {
        root: rootPath,
        app: {
            name: "desh-dois",
            port: 3000
        },
        mongo: {
            user: "",
            password: "",
            host: "localhost",
            port: 27017,
            db: "mensagem",
            urlConnection: function(user, password, host, port, db) {
                return host + ':' + port + '/' + db;
            }
        }
    },
    production: {
        root: rootPath,
        app: {
            name: "desh-dois",
            port: process.env.PORT
        },
        mongo: {
            user: "adminflash",
            password: "123qweasdzxc",
            host: "ds061246.mlab.com",
            port: 61246,
            db: "flashcourier",
            urlConnection: function(user, password, host, port, db) {
                return user + ':' + password + '@' + host + ':' + port + '/' + db;
            }
        }
    }
}

module.exports = config[env];