const connection = require('../config/database')

var dataModels = {
    getBranch: (callback) => {
        if(connection){
            let sql = `select * from branch`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    }
}

module.exports = dataModels