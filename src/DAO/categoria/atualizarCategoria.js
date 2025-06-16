const { conexao } = require('../conexao.js')

async function atualizarCategoria(id, dados) {
    const conn = await conexao()

    const sql = 'UPDATE tbl_categoria SET nome = ?, id = ? WHERE id = ?'
    const valores = [dados.nome, dados.id, id]
    await conn.query(sql, valores)
    return { id, dados }
}

module.exports = { atualizarCategoria }