const { dataModels, vendorStorage }  = require('../models/vendor.model')

function getVendor(req, res) {
    dataModels.getVendor((data, error) => {
        res.json(data)
    })

}

async function getVendorid(req, res) {
    console.log("id : ", req.params.id)
    let id = req.params.id
    try{
        let data = await vendorStorage.getbyId(id)
        return res.status(200).json({
            ok: true,
            data: data
        })
    }catch(err) {
        console.log(err)
    }
}

module.exports = {
    getVendor,
    getVendorid
}