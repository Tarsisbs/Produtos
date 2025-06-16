const { conexao } = require('../conexao.js')

async function atualizarPedido(numero, dados) {
    const conn = await conexao()

    const sql = 'UPDATE tbl_pedido SET data_elaboracao = ?, cliente_id = ? WHERE numero = ?'
    const valores = [dados.data_elaboracao, dados.cliente_id, numero]
    await conn.query(sql, valores)
    return { numero, dados }
}

module.exports = { atualizarPedido }