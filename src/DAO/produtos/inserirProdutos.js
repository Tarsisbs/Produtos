const { conexao } = require('../conexao.js')

async function inserirProduto(codigo, dados) {
    const conn = await conexao()

    const sql = 'INSERT INTO tbl_produtos (codigo, nome, id_categoria, preco) VALUES (?, ?, ?, ?)'
    const valores = [codigo, dados.nome, dados.id_categoria, dados.preco]
    
    await conn.query(sql, valores)
    return { codigo, dados }
}

module.exports = { inserirProduto }