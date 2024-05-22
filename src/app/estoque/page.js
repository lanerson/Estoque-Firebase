'use client'
import { useEffect, useState } from "react";
import ProductTable from "../../../components/Estoque"
import Modal from "../../../components/ModalCadProd"
import styles from "../../../styles/estoque/page.module.css"

export default function page() {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
        console.log("é pra ir");
    }

    return (
        <div className={styles.container}>
            <Modal show={modal} close={handleModal} />
            <h1>Estoque de Produtos</h1>
            <button className={styles.botao}
                onClick={handleModal}>Cadastrar Produto</button>
            <ProductTable />
        </div>
    )
}