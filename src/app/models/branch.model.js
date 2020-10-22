const connect = require('../database/database')

var dataModels = {
    getBranch: (callback) => {

        if(connect){
            let sql = `select idbranch, name, vendors_idvendor from branch`

            connect.query(sql, (error, rows) => {
               if (error) throw error
                callback(rows)
            })
        }
    }
}


const branchStorage = {
    
}

branchStorage.getbyId = async (id) => {
var sql = `select idbranch, name, vendors_idvendor from branch where idbranch = ?`
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
    branchStorage
} 