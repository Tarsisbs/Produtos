const { conexao } = require('../conexao.js')

async function deletarCategoria(id) {
    const conn = await conexao()

    return new Promise((resolve, reject) => {
        conn.query('DELETE FROM tbl_categoria WHERE id = ?', [id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = { deletarCategoria }