const { conexao } = require('../conexao.js');

async function atualizarPedidoParcial(numero, dados) {
    const conn = await conexao();

    // Monta dinamicamente os campos e valores
    const campos = [];
    const valores = [];
    for (const campo in dados) {
        campos.push(`${campo} = ?`);
        valores.push(dados[campo]);
    }
    valores.push(numero);

    const sql = `UPDATE tbl_pedido SET ${campos.join(', ')} WHERE numero = ?`;
    await conn.query(sql, valores);
    return { numero, dados };
}

module.exports = { atualizarPedidoParcial };