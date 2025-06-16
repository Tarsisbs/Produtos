const { conexao } = require('../conexao.js')

async function deletarPedido(numero) {
    const conn = await conexao()

    return new Promise((resolve, reject) => {
        conn.query('DELETE FROM tbl_pedido WHERE numero = ?', [numero], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = { deletarPedido }