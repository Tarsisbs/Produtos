const { conexao } = require('../conexao.js')

async function deletarProduto(codigo) {
    const conn = await conexao()

    return new Promise((resolve, reject) => {
        conn.query('DELETE FROM tbl_produtos WHERE codigo = ?', [codigo], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = { deletarProduto }