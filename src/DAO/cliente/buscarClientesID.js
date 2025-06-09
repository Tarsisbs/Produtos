const {conexao} = require('../conexao.js')


async function buscarClientesID(codigo){
    const sql = (`SELECT * FROM tbl_cliente WHERE codigo = ` + codigo)
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

module.exports = {buscarClientesID}