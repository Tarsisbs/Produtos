const { conexao } = require('../conexao.js')

async function inserirStatus(id, dados) {
    const conn = await conexao()

    const sql = 'INSERT INTO tbl_status (nome, id) VALUES (?, ?)'
    const valores = [dados.nome, dados.id, id]
    
    await conn.query(sql, valores)
    return { id, dados }
}

module.exports = { inserirStatus }