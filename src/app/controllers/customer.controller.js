const { dataModels, customStorage }  = require('../models/customer.model')

function getCustom(req, res) {
    dataModels.getCustom((data, error) => {
        res.json(data)
    })

}

async function getCustomid(req, res) {
    console.log("id : ", req.params.id)
    let id = req.params.id
    try{
        let data = await customStorage.getbyId(id)
        return res.status(200).json({
            ok: true,
            data: data
        })
    }catch(err) {
        console.log(err)
    }
}

async function getCustombr(req, res) {
    console.log("branch : ", req.params.id)
    let br = req.params.id
    try{
        let data = await customStorage.getbybranch(br)
        return res.status(200).json({
            ok: true,
            data: data
        })
    }catch(err) {
        console.log(err)
    }
}

module.exports = {
    getCustom,
    getCustomid,
    getCustombr
}