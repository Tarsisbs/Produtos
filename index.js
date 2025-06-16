const express = require('express')

// Clientes

const { buscarClientes } = require('./src/DAO/cliente/buscarClientes.js')
const { buscarClientesID } = require('./src/DAO/cliente/buscarClientesID.js')
const { atualizarCliente } = require('./src/DAO/cliente/atualizarClientes.js')
const { atualizarClientesParcial } = require('./src/DAO/cliente/atualizarClientesParcial.js')
const { inserirCliente } = require('./src/DAO/cliente/inserirClientes.js')
const { deletarCliente } = require('./src/DAO/cliente/deletarClientes.js')

// Produtos

const { buscarProdutos } = require('./src/DAO/produtos/buscarProdutos.js')
const { atualizarProduto } = require('./src/DAO/produtos/atualizarProdutos.js')
const { atualizarProdutoParcial } = require('./src/DAO/produtos/atualizarProdutosParcial.js')
const { inserirProduto } = require('./src/DAO/produtos/inserirProdutos.js')
const { deletarProduto } = require('./src/DAO/produtos/deletarProdutos.js')

// Pedidos

const { buscarPedidos } = require('./src/DAO/pedidos/buscarPedidos.js')
const { atualizarPedido } = require('./src/DAO/pedidos/atualizarPedidos.js')
const { atualizarPedidoParcial } = require('./src/DAO/pedidos/atualizarPedidosParcial.js')
const { inserirPedido } = require('./src/DAO/pedidos/inserirPedidos.js')
const { deletarPedido } = require('./src/DAO/pedidos/deletarPedidos.js')

// Categoria

const { buscarCategoria } = require('./src/DAO/categoria/buscarCategoria.js')
const { atualizarCategoria } = require('./src/DAO/categoria/atualizarCategoria.js')
const { atualizarCategoriaParcial } = require('./src/DAO/categoria/atualizarCategoriaParcial.js')
const { inserirCategoria } = require('./src/DAO/categoria/inserirCategoria.js')
const { deletarCategoria } = require('./src/DAO/categoria/deletarCategoria.js')

// Endereço

const { buscarEndereco} = require('./src/DAO/endereço/buscarEndereco.js')
const { atualizarEndereco } = require('./src/DAO/endereço/atualizarEndereco.js')
const { atualizarEnderecoParcial } = require('./src/DAO/endereço/atualizarEnderecoParcial.js')
const { inserirEndereco } = require('./src/DAO/endereço/inserirEndereco.js')
const { deletarEndereco } = require('./src/DAO/endereço/deletarEndereco.js')

// Item pedido

const { buscarItemPedido } = require('./src/DAO/itemPedido/buscarItemPedido.js')

// Status

const { buscarStatus } = require('./src/DAO/status/buscarStatus.js')
const { atualizarStatus } = require('./src/DAO/status/atualizarStatus.js')
const { atualizarStatusParcial } = require('./src/DAO/status/atualizarStatusParcial.js')
const { inserirStatus } = require('./src/DAO/status/inserirStatus.js')
const { deletarStatus } = require('./src/DAO/status/deletarStatus.js')

const app = express()

const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')

app.use(express.json())

app.get('/empresa_produtos_limpeza/v1', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funcionando"
    }
    res.json(respInicial)
})

// Clientes

app.get('/empresa_produtos_limpeza/v1/cliente', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.get('/empresa_produtos_limpeza/v1/cliente/:codigo', async (req, res) =>{
    let clientes = await buscarClientesID(req.params.codigo)
    res.json(clientes)
})

app.patch('/empresa_produtos_limpeza/v1/cliente/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const dadosParciais = req.body;
    try {
        const clienteAtualizado = await atualizarClientesParcial(codigo, dadosParciais);
        res.json({ msg: `Campo do Cliente ${codigo} atualizado com sucesso!` });
    } catch (err) {
        console.error('Erro ao atualizar campo do cliente:', err);
        res.status(500).json({ msg: 'Erro ao atualizar campo do cliente' });
    }
});

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

app.post('/empresa_produtos_limpeza/v1/cliente', async (req, res) =>{
    const {codigo, telefone, nome, limite, id_endereco, id_status} = req.body
    try {
        const clienteinserido = await inserirCliente(codigo, {telefone, nome, limite, id_endereco, id_status})
        res.json({ msg: `Cliente ${codigo} inserido com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao atualizar cliente` })
    }
})

app.delete('/empresa_produtos_limpeza/v1/cliente/:codigo', async (req, res) => {
    const codigo = req.params.codigo
    try {
        await deletarCliente(codigo)
        res.json({ msg: `Cliente ${codigo} deletado com sucesso!` })
    } catch (err) {
        console.error('Erro ao deletar cliente:', err)
        res.status(500).json({ msg: `Erro ao deletar cliente` })
    }
})

// Produtos

app.get('/empresa_produtos_limpeza/v1/produtos', async (req, res) =>{
    let produtos = await buscarProdutos()
    res.json(produtos)
})

app.patch('/empresa_produtos_limpeza/v1/produtos/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const dadosParciais = req.body;
    try {
        const clienteAtualizado = await atualizarProdutoParcial(codigo, dadosParciais);
        res.json({ msg: `Campo do produto ${codigo} atualizado com sucesso!` });
    } catch (err) {
        console.error('Erro ao atualizar campo do produto:', err);
        res.status(500).json({ msg: 'Erro ao atualizar campo do produto' });
    }
})

app.put('/empresa_produtos_limpeza/v1/produtos/:codigo', async (req, res) =>{
    const codigo = req.params.codigo
    const dadosAtualizados = req.body
    try {
        const clienteAtualizado = await atualizarProduto(codigo, dadosAtualizados)
        res.json({ msg: `Produto ${codigo} atualizado com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao atualizar produto` })
    }
})

app.post('/empresa_produtos_limpeza/v1/produtos', async (req, res) =>{
    const {codigo, nome, id_categoria, preco} = req.body
    try {
        const produtoInserido = await inserirProduto(codigo, {nome, id_categoria, preco})
        res.json({ msg: `Produto ${codigo} inserido com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao atualizar produto` })
    }
})

app.delete('/empresa_produtos_limpeza/v1/produtos/:codigo', async (req, res) => {
    const codigo = req.params.codigo
    try {
        await deletarProduto(codigo)
        res.json({ msg: `Produto ${codigo} deletado com sucesso!` })
    } catch (err) {
        res.status(500).json({ msg: `Erro ao deletar Produto` })
    }
})

// Pedidos

app.get('/empresa_produtos_limpeza/v1/pedidos', async (req, res) =>{
    let pedidos = await buscarPedidos()
    res.json(pedidos)
})

app.patch('/empresa_produtos_limpeza/v1/pedidos/:numero', async (req, res) => {
    const numero = req.params.numero;
    const dadosParciais = req.body;
    try {
        const pedidoAtualizado = await atualizarPedidoParcial(numero, dadosParciais);
        res.json({ msg: `Campo do pedido ${numero} atualizado com sucesso!` });
    } catch (err) {
        console.error('Erro ao atualizar campo do pedido:', err);
        res.status(500).json({ msg: 'Erro ao atualizar campo do pedido' });
    }
})

app.put('/empresa_produtos_limpeza/v1/pedidos/:numero', async (req, res) =>{
    const numero = req.params.numero
    const dadosAtualizados = req.body
    try {
        const pedidoAtualizado = await atualizarPedido(numero, dadosAtualizados)
        res.json({ msg: `Pedido ${numero} atualizado com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao atualizar pedido` })
    }
})

app.post('/empresa_produtos_limpeza/v1/pedidos', async (req, res) =>{
    const {numero, data_elaboracao, cliente_id} = req.body
    try {
        const pedidoInserido = await inserirPedido(numero, {data_elaboracao, cliente_id})
        res.json({ msg: `Pedido ${numero} inserido com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao inserir pedido` })
    }
})

app.delete('/empresa_produtos_limpeza/v1/pedido/:numero', async (req, res) => {
    const numero = req.params.codigo
    try {
        await deletarPedido(numero)
        res.json({ msg: `Pedido ${codigo} deletado com sucesso!` })
    } catch (err) {
        res.status(500).json({ msg: `Erro ao deletar pedido` })
    }
})

// Categoria

app.get('/empresa_produtos_limpeza/v1/categoria', async (req, res) =>{
    let categoria = await buscarCategoria()
    res.json(categoria)
})

app.patch('/empresa_produtos_limpeza/v1/categoria/:id', async (req, res) => {
    const id = req.params.id;
    const dadosParciais = req.body;
    try {
        const categoriaAtualizada = await atualizarCategoriaParcial(id, dadosParciais);
        res.json({ msg: `Campo da categoria ${id} atualizado com sucesso!` });
    } catch (err) {
        console.error('Erro ao atualizar campo da categoria:', err);
        res.status(500).json({ msg: 'Erro ao atualizar campo da categoria' });
    }
})

app.put('/empresa_produtos_limpeza/v1/categoria/:id', async (req, res) =>{
    const id = req.params.id
    const dadosAtualizados = req.body
    try {
        const categoriaAtualizado = await atualizarCategoria(id, dadosAtualizados)
        res.json({ msg: `Categoria ${id} atualizada com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao atualizar categoria` })
    }
})

app.post('/empresa_produtos_limpeza/v1/categoria', async (req, res) =>{
    const {id, nome} = req.body
    try {
        const categoriaInserido = await inserirCategoria(id, {id, nome})
        res.json({ msg: `Categoria ${id} inserida com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao inserir categoria` })
    }
})

app.delete('/empresa_produtos_limpeza/v1/categoria/:id', async (req, res) => {
    const id = req.params.id
    try {
        await deletarCategoria(id)
        res.json({ msg: `Categoria ${id} deletada com sucesso!` })
    } catch (err) {
        res.status(500).json({ msg: `Erro ao deletar categoria` })
    }
})

// Endereço

app.get('/empresa_produtos_limpeza/v1/endereco', async (req, res) =>{
    let endereco = await buscarEndereco()
    res.json(endereco)
})

app.patch('/empresa_produtos_limpeza/v1/endereco/:id', async (req, res) => {
    const id = req.params.id;
    const dadosParciais = req.body;
    try {
        const enderecoAtualizado = await atualizarEnderecoParcial(id, dadosParciais);
        res.json({ msg: `Campo do endereço ${id} atualizado com sucesso!` });
    } catch (err) {
        console.error('Erro ao atualizar campo do endereço:', err);
        res.status(500).json({ msg: 'Erro ao atualizar campo do endereço' });
    }
})

app.put('/empresa_produtos_limpeza/v1/endereco/:id', async (req, res) =>{
    const id = req.params.id
    const dadosAtualizados = req.body
    try {
        const enderecoAtualizado = await atualizarEndereco(id, dadosAtualizados)
        res.json({ msg: `Endereço ${id} atualizado com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao atualizar endereço` })
    }
})

app.post('/empresa_produtos_limpeza/v1/endereco', async (req, res) =>{
    const {id, logradouro, cep, numero, bairro, cidade} = req.body
    try {
        const enderecoInserido = await inserirEndereco(id, {logradouro, cep, numero, bairro, cidade})
        res.json({ msg: `Endereço ${id} inserido com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao inserir endereço` })
    }
})

app.delete('/empresa_produtos_limpeza/v1/endereco/:id', async (req, res) => {
    const id = req.params.id
    try {
        await deletarEndereco(id)
        res.json({ msg: `Endereço ${id} deletado com sucesso!` })
    } catch (err) {
        res.status(500).json({ msg: `Erro ao deletar endereço` })
    }
})

// Item pedido

app.get('/empresa_produtos_limpeza/v1/itempedido', async (req, res) =>{
    let itempedido = await buscarItemPedido()
    res.json(itempedido)
})

// Status

app.get('/empresa_produtos_limpeza/v1/status', async (req, res) =>{
    let status = await buscarStatus()
    res.json(status)
})

app.patch('/empresa_produtos_limpeza/v1/status/:id', async (req, res) => {
    const id = req.params.id;
    const dadosParciais = req.body;
    try {
        const statusAtualizado = await atualizarStatusParcial(id, dadosParciais);
        res.json({ msg: `Campo do status ${id} atualizado com sucesso!` });
    } catch (err) {
        console.error('Erro ao atualizar campo do status:', err);
        res.status(500).json({ msg: 'Erro ao atualizar campo do status' });
    }
})

app.put('/empresa_produtos_limpeza/v1/status/:id', async (req, res) =>{
    const id = req.params.id
    const dadosAtualizados = req.body
    try {
        const statusAtualizado = await atualizarStatus(id, dadosAtualizados)
        res.json({ msg: `Status ${id} atualizado com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao atualizar status` })
    }
})

app.post('/empresa_produtos_limpeza/v1/status', async (req, res) =>{
    const {id, nome} = req.body
    try {
        const statusInserido = await inserirStatus(id, {id, nome})
        res.json({ msg: `Status ${id} inserido com sucesso!`})
    } catch (err) {
        res.json({ msg: `Erro ao inserir status` })
    }
})

app.delete('/empresa_produtos_limpeza/v1/status/:id', async (req, res) => {
    const id = req.params.id
    try {
        await deletarStatus(id)
        res.json({ msg: `Status ${id} deletado com sucesso!` })
    } catch (err) {
        res.status(500).json({ msg: `Erro ao deletar status` })
    }
})

const porta = 3000

app.listen(porta, () =>{
    console.log("Operando na porta " + porta),
    testarConexao()
})