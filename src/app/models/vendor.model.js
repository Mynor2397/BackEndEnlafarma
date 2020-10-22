const connect = require('../database/database')

var dataModels = {
    getVendor: (callback) => {

        if(connect){
            let sql = `select idvendor, name from vendors`

            connect.query(sql, (error, rows) => {
               if (error) throw error
                callback(rows)
            })
        }
    }
}


const vendorStorage = {}

vendorStorage.getbyId = async (id) => {
var sql = `select idvendor, name from vendors where idvendor = ?`
    return new Promise((resolve, reject) => {
        connect.query(sql, [id], (err, rows) => {
            if(err) {
                reject(err)
            }
            if(rows){
                resolve(rows[0])
            }
        }) 
    }) 

}

module.exports = {
    dataModels,
    vendorStorage
} 