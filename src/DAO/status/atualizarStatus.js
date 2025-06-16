const { conexao } = require('../conexao.js')

async function atualizarStatus(id, dados) {
    const conn = await conexao()

    const sql = 'UPDATE tbl_status SET nome = ?, id = ? WHERE id = ?'
    const valores = [dados.nome, dados.id, id]
    await conn.query(sql, valores)
    return { id, dados }
}

module.exports = { atualizarStatus }