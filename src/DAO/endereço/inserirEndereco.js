const { conexao } = require('../conexao.js')

async function inserirEndereco(id, dados) {
    const conn = await conexao()

    const sql = 'INSERT INTO tbl_endereco (id, logradouro, cep, numero, bairro, cidade) VALUES (?, ?, ?, ?, ?, ?)'
    const valores = [id, dados.logradouro, dados.cep, dados.numero, dados.bairro, dados.cidade]
    
    await conn.query(sql, valores)
    return { id, dados }
}

module.exports = { inserirEndereco }