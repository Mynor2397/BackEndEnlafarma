const { dataModels, branchStorage }  = require('../models/branch.model')

function getBranch(req, res) {
    dataModels.getBranch((data, error) => {
        res.json(data)
    })

}

async function getBranchid(req, res) {
    console.log("id : ", req.params.id)
    let id = req.params.id
    try{
        let data = await branchStorage.getbyId(id)
        return res.status(200).json({
            ok: true,
            data: data
        })
    }catch(err) {
        console.log(err)
    }
}

module.exports = {
    getBranch,
    getBranchid
}