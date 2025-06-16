const { conexao } = require('../conexao.js')

async function deletarEndereco(id) {
    const conn = await conexao()

    return new Promise((resolve, reject) => {
        conn.query('DELETE FROM tbl_endereco WHERE id = ?', [id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = { deletarEndereco }