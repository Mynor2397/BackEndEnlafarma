const connect = require('../database/database')
const uuid = require('uuid')
const { query } = require('express')
const saleStorage = {}

saleStorage.createSale = async (ventas) => {
    return new Promise((resolve, reject) => {
        connect.beginTransaction(err => {
            if (err) { reject(err);; }
            ventas.forEach(sales => {
                let idSale = uuid.v4()
                let date = new Date()
                console.log(sales.customer_idcustomer, sales.sales_idsales)
                //Insert a tabla Sales
                connect.query('INSERT INTO sales (idsales, date, customer_idcustomer) VALUES (?,?,?)', [idSale, date, sales.customer_idcustomer], (error, results, fields) => {
                    if (error) {
                        return connect.rollback(() => {
                            reject(error);
                        });
                    }
                });
                ///Insert a tabla datails
                connect.query('INSERT INTO datails (price, quantity, total, sales_idsales, product_idproduct) values (?,?,?,?,?);', [sales.price, sales.quantity, sales.total, idSale, sales.product_idproduct], (error, results, fields) => {
                    if (error) {
                        return connect.rollback(() => {
                            reject(error);
                        });
                    }

                });

            });

            //Hacer el commit de la consulta
            connect.commit(err => {
                if (err) {
                    return connect.rollback(() => {
                        reject(err);
                    });
                }
                resolve(ventas)
            })
        })
    })
}


saleStorage.getHistory = (idcustomer) => {
    let query = `
    SELECT cus.idcustomer, sal.date as fecha, det.iddatails as factura, det.quantity, det.price, det.total FROM datails det
    INNER JOIN sales sal ON det.sales_idsales = sal.idsales
    INNER JOIN customers cus ON sal.customer_idcustomer = cus.idcustomer
    WHERE cus.idcustomer = ?`

    return new Promise((resolve, reject) => {
        connect.query(query, [idcustomer], (err, rows) => {
            if (err){
                reject(err)
            }

            resolve(rows)
        })
    })

}


module.exports = saleStorage