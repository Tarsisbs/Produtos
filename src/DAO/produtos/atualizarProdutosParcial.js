const { conexao } = require('../conexao.js');

async function atualizarProdutoParcial(codigo, dados) {
    const conn = await conexao();

    // Monta dinamicamente os campos e valores
    const campos = [];
    const valores = [];
    for (const campo in dados) {
        campos.push(`${campo} = ?`);
        valores.push(dados[campo]);
    }
    valores.push(codigo);

    const sql = `UPDATE tbl_produtos SET ${campos.join(', ')} WHERE codigo = ?`;
    await conn.query(sql, valores);
    return { codigo, dados };
}

module.exports = { atualizarProdutoParcial };