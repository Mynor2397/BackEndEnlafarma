const connect = require('../database/database')

var dataModels = {
    getCustom: (callback) => {

        if(connect){
            let sql = `select idcustomer, name, address, nit, contact, phone from customers`

            connect.query(sql, (error, rows) => {
               if (error) throw error
                callback(rows)
            })
        }
    }
}


const customStorage = {}

customStorage.getbyId = async (id) => {
var sql = `select idcustomer, name, address, nit, contact, phone from customers where idcustomer = ?`
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

customStorage.getbybranch = async (br) => {
    var sql = `select ve.name as name_vendor, br.name as name_branch, cu.idcustomer, cu.name as name_customer
                from vendors ve
                inner join branch br on br.idbranch = ve.idvendor
                inner join customers cu on cu.branch_idbranch = br.idbranch
                where br.idbranch = ?`
        return new Promise((resolve, reject) => {
            connect.query(sql, [br], (err, rows) => {
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
    customStorage
} 