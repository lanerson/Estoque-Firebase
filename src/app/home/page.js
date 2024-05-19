'use client'
import { useState } from "react";
import ProductTable from "../../../components/Estoque"
import Modal from "../../../components/ModalCadProd"
export default function home() {
    const [modal, setModal] = useState(false);

    const handleModal = () => setModal(!modal);

    return (
        <div >
            <h1>Estoque de Produtos</h1>
            <button onClick={handleModal}>Cadastrar Produto</button>
            <ProductTable />
            <Modal show={modal}/>
        </div>
    )
}