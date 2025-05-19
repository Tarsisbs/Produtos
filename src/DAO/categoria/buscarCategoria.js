const {conexao} = require('../conexao.js')


async function buscarCategoria(){
    const sql = `SELECT * FROM tbl_categoria`
    
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

module.exports = {buscarCategoria}