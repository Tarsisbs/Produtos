const { conexao } = require('../conexao.js')

async function inserirCliente(codigo, dados) {
    const conn = await conexao()

    const sql = 'INSERT INTO tbl_cliente (codigo, telefone, nome, limite, id_endereco, id_status) VALUES (?, ?, ?, ?, ?, ?)'
    const valores = [codigo, dados.telefone, dados.nome, dados.limite, dados.id_endereco, dados.id_status]
    
    await conn.query(sql, valores)
    return { codigo, dados }
}

module.exports = { inserirCliente }