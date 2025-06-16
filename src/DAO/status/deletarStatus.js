const { conexao } = require('../conexao.js')

async function deletarStatus(id) {
    return new Promise((resolve, reject) => {
        conexao.query('DELETE FROM tbl_status WHERE id = ?', [id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = { deletarStatus }