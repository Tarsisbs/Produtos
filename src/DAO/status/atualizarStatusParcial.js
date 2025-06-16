const { conexao } = require('../conexao.js');

async function atualizarStatusParcial(id, dados) {
    const conn = await conexao();

    const campos = [];
    const valores = [];
    for (const campo in dados) {
        campos.push(`${campo} = ?`);
        valores.push(dados[campo]);
    }
    valores.push(id);

    const sql = `UPDATE tbl_status SET ${campos.join(', ')} WHERE id = ?`;
    await conn.query(sql, valores);
    return { id, dados };
}

module.exports = { atualizarStatusParcial };