const { conexao } = require('../conexao.js')

async function atualizarCliente(codigo, dados) {
    const conn = await conexao()

    const sql = 'UPDATE tbl_cliente SET telefone = ?, nome = ?, limite = ?, id_endereco = ?, id_status = ? WHERE codigo = ?'
    const valores = [dados.telefone, dados.nome, dados.limite, dados.id_endereco, dados.id_status, codigo]
    await conn.query(sql, valores)
    return { codigo, dados }
}

module.exports = { atualizarCliente }