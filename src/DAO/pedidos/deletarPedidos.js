const { conexao } = require('../conexao.js')

async function deletarPedido(numero) {
    return new Promise((resolve, reject) => {
        conexao.query('DELETE FROM tbl_pedido WHERE numero = ?', [numero], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = { deletarPedido }