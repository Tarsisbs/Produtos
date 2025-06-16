const { conexao } = require('../conexao.js')

async function atualizarEndereco(id, dados) {
    const conn = await conexao()

    const sql = 'UPDATE tbl_endereco SET logradouro = ?, cep = ?, numero = ?, bairro = ?, cidade = ? WHERE id = ?'
    const valores = [dados.logradouro, dados.cep, dados.numero, dados.bairro, dados.cidade, id]
    await conn.query(sql, valores)
    return { id, dados }
}

module.exports = { atualizarEndereco }