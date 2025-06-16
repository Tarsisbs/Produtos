const { conexao } = require('../conexao.js')

async function deletarEndereco(id) {
    return new Promise((resolve, reject) => {
        conexao.query('DELETE FROM tbl_endereco WHERE id = ?', [id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = { deletarEndereco }