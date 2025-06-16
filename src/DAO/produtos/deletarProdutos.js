const { conexao } = require('../conexao.js')

async function deletarProduto(codigo) {
    return new Promise((resolve, reject) => {
        conexao.query('DELETE FROM tbl_produtos WHERE codigo = ?', [codigo], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = { deletarProduto }