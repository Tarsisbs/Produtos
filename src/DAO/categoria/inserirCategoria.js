const { conexao } = require('../conexao.js')

async function inserirCategoria(id, dados) {
    const conn = await conexao()

    const sql = 'INSERT INTO tbl_categoria (nome, id) VALUES (?, ?)'
    const valores = [dados.nome, dados.id, id]
    
    await conn.query(sql, valores)
    return { id, dados }
}

module.exports = { inserirCategoria }