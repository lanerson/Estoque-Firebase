'use client'
import React, { useState } from 'react';
import Styles from "../styles/components/Estoque.module.css"
const ProductTable = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            nome: 'Produto 1',
            categoria: 'Categoria 1',
            precoCusto: 10.00,
            valor: 15.00,
            quantidade: 5,
        },
        {
            id: 2,
            nome: 'Produto 2',
            categoria: 'Categoria 2',
            precoCusto: 20.00,
            valor: 30.00,
            quantidade: 3,
        },
    ]);

    return (
        <table id="estoqueTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço de Custo</th>
                    <th>Preço de Venda</th>
                    <th>Quantidade</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.nome}</td>
                        <td>{product.categoria}</td>
                        <td>{product.precoCusto.toFixed(2)}</td>
                        <td>{product.valor.toFixed(2)}</td>
                        <td>{product.quantidade}</td>
                        <td>{product.quantidade > 0 ? 'Disponível' : 'Indisponível'}</td>
                        <td>
                            {/* Aqui você pode adicionar botões de ações, como editar e excluir */}
                            <div className={Styles.buttons}>
                                <button className={Styles.botao} style={{ backgroundColor: "#4CAF50" }}>Dar Entrada</button>
                                <button className={Styles.botao} style={{ backgroundColor: "#f44336" }}>Dar Saída</button>
                                <button className={Styles.botao} style={{ backgroundColor: "black" }}>Excluir</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
