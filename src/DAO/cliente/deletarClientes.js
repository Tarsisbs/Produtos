const { conexao } = require('../conexao.js')

async function deletarCliente(codigo) {
    const conn = await conexao()

    return new Promise((resolve, reject) => {
        conn.query('DELETE FROM tbl_cliente WHERE codigo = ?', [codigo], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = { deletarCliente }