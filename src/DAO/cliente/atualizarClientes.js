const { conexao } = require('../conexao.js')

async function atualizarCliente(codigo, dados) {
    const conn = await conexao()

    const sql = 'UPDATE tbl_cliente SET nome = ?, telefone = ? WHERE codigo = ?'
    const valores = [dados.nome, dados.telefone, codigo]
    await conn.query(sql, valores)
    return { codigo, dados }
}

module.exports = { atualizarCliente }