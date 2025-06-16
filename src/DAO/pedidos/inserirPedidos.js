const { conexao } = require('../conexao.js')

async function inserirPedido(numero, dados) {
    const conn = await conexao()

    const sql = 'INSERT INTO tbl_pedido (numero, data_elaboracao, cliente_id) VALUES (?, ?, ?)'
    const valores = [numero, dados.data_elaboracao, dados.cliente_id]
    
    await conn.query(sql, valores)
    return { numero, dados }
}

module.exports = { inserirPedido }

// Não está funcionando