const connect = require('../database/database')

var dataModels = {
    getUser: (callback) => {

        if(connect){
            let sql = `select  email, password from login`

            connect.query(sql, (error, rows) => {
               if (error) throw error
                callback(rows)
            })
        }
    }
}

module.exports = dataModels