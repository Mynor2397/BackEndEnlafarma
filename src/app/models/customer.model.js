const connect = require('../database/database')
const Customer = require('./customer')
const customStorage = {}

customStorage.getCustom = async (idvendor) => {

    let sql = `
    select ve.idvendor, ve.name AS name_vendor, cu.idcustomer, cu.name, cu.address, cu.nit, cu.contact, cu.phone from customers cu
    INNER JOIN vendors ve ON cu.vendors_idvendor = ve.idvendor
    WHERE ve.idvendor = ?`

    return new Promise((resolve, reject) => {
        connect.query(sql, [idvendor], (err, rows) => {
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


customStorage.getbyId = async (idvendor, idcustomer) => {
    let sql = `
    select ve.idvendor, ve.name AS name_vendor, cu.idcustomer, cu.name, cu.address, cu.nit, cu.contact, cu.phone from customers cu
    INNER JOIN vendors ve ON cu.vendors_idvendor = ve.idvendor
    WHERE ve.idvendor = ? AND cu.idcustomer = ? `

    return new Promise((resolve, reject) => {
        connect.query(sql, [idvendor, idcustomer], (err, rows) => {
            if (err) {
                reject(err)
            }
            if (rows) {
                resolve(rows[0])
            }
        })
    })

}

customStorage.getbybranch = async (br) => {
    var sql = `
    SELECT ven.name as name_vendor, br.name as name_branch, br.idbranch, cu.idcustomer, cu.name as name_customer 
    FROM customers cu
    INNER JOIN branch br ON cu.branch_idbranch = br.idbranch
    INNER JOIN vendors ven ON br.vendors_idvendor = ven.idvendor
    WHERE br.idbranch = ?;`
    return new Promise((resolve, reject) => {
        connect.query(sql, [br], (err, rows) => {
            if (err) {
                reject(err)
            }
            if (rows) {
                resolve(rows)
            }
        })
    })
}

customStorage.getproductbycustomer = async (pr) => {
    var sql = `select sa.idsales as factura, sa.date, pr.name,de.price, de.quantity, de.total
                from sales sa
                inner join datails de on de.iddatails = sa.idsales
                inner join product pr on pr.idproduct = de.product_idproduct
                inner join customers cu on cu.idcustomer = sa.customer_idcustomer
                where cu.idcustomer = ?;`
    return new Promise((resolve, reject) => {
        connect.query(sql, [pr], (err, rows) => {
            if (err) {
                reject(err)
            }
            if (rows) {
                resolve(rows)
            }
        })
    })
}

customStorage.createCustomer = async (customer) => {
    let custo = new Customer()
    custo = customer;
    let sql = `insert into customers (name, address, nit, contact, phone, vendors_idvendor, branch_idbranch) values (?,?,?,?,?,?,?)`

    return new Promise((resolve, reject) => {
        connect.query(sql, [
            custo.name, custo.address, custo.nit, custo.contact, custo.phone, custo.vendors_idvendor, custo.branch_idbranch
        ], (err, rows) => {
            if (err) {
               if(err.errno){
                reject({
                    code: err.errno,
                    error: err
                })
                console.log(rows)   
               }
            }
            resolve(custo)
        })
    })
}


module.exports = { customStorage } 