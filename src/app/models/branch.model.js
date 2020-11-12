const connect = require('../database/database')
const branchStorage = {}

branchStorage.getBranch = async (idVendor) => {
    
    let sql = `select idbranch, name, vendors_idvendor from branch WHERE vendors_idvendor = ?`
    
    return new Promise((resolve, reject) => {
        connect.query(sql, [idVendor], (err, rows) => {
            if (err) {
                reject(err)
            console.log(rows)
            }
            if (rows) {
                resolve(rows)
            }
        })
    })
}





branchStorage.getbyId = async (id) => {
    var sql = `select idbranch, name, vendors_idvendor from branch where idbranch = ?`
    return new Promise((resolve, reject) => {
        connect.query(sql, [id], (err, rows) => {
            if (err) {
                reject(err)
            }
            if (rows) {
                resolve(rows[0])
            }
        })
    })

}

module.exports = { branchStorage }