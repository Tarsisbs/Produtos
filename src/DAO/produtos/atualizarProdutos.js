const { conexao } = require('../conexao.js')

async function atualizarProduto(codigo, dados) {
    const conn = await conexao()

    const sql = 'UPDATE tbl_produtos SET nome = ?, id_categoria = ?, preco = ? WHERE codigo = ?'
    const valores = [dados.nome, dados.id_categoria, dados.preco, codigo]
    await conn.query(sql, valores)
    return { codigo, dados }
}

module.exports = { atualizarProduto }