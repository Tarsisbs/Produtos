const express = require('express')
const { buscarClientes } = require('./src/DAO/cliente/buscarClientes.js')
const { buscarClientesID } = require('./src/DAO/cliente/buscarClientesID.js')
const { atualizarCliente } = require('./src/DAO/cliente/atualizarClientes.js')
const { buscarProdutos } = require('./src/DAO/produtos/buscarProdutos.js')
const { buscarPedidos } = require('./src/DAO/pedidos/buscarPedidos.js')
const { buscarCategoria } = require('./src/DAO/categoria/buscarCategoria.js')
const { buscarEndereco} = require('./src/DAO/endereço/buscarEndereco.js')
const { buscarItemPedido } = require('./src/DAO/itemPedido/buscarItemPedido.js')
const { buscarStatus } = require('./src/DAO/status/buscarStatus.js')
const app = express()

const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')

app.use(express.json())

app.get('/empresa_produtos_limpeza/v1', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funcionando"
    }
    res.json(respInicial)
})

app.get('/empresa_produtos_limpeza/v1/cliente', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.get('/empresa_produtos_limpeza/v1/cliente/:codigo', async (req, res) =>{
    let clientes = await buscarClientesID(req.params.codigo)
    res.json(clientes)
})

app.put('/empresa_produtos_limpeza/v1/cliente/:codigo', async (req, res) =>{
    const codigo = req.params.codigo
    const dadosAtualizados = req.body
    try {
        const clienteAtualizado = await atualizarCliente(codigo, dadosAtualizados)
        res.json({ msg: `Cliente ${codigo} atualizado com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao atualizar cliente` })
    }
})

app.get('/empresa_produtos_limpeza/v1/produtos', async (req, res) =>{
    let produtos = await buscarProdutos()
    res.json(produtos)
})

app.get('/empresa_produtos_limpeza/v1/pedidos', async (req, res) =>{
    let pedidos = await buscarPedidos()
    res.json(pedidos)
})

app.get('/empresa_produtos_limpeza/v1/categoria', async (req, res) =>{
    let categoria = await buscarCategoria()
    res.json(categoria)
})

app.get('/empresa_produtos_limpeza/v1/endereco', async (req, res) =>{
    let endereco = await buscarEndereco()
    res.json(endereco)
})

app.get('/empresa_produtos_limpeza/v1/itempedido', async (req, res) =>{
    let itempedido = await buscarItemPedido()
    res.json(itempedido)
})

app.get('/empresa_produtos_limpeza/v1/status', async (req, res) =>{
    let status = await buscarStatus()
    res.json(status)
})

const porta = 3000

app.listen(porta, () =>{
    console.log("Operando na porta " + porta),
    testarConexao()
})