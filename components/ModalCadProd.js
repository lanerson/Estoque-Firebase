import styles from "../styles/components/ModalCadProd.module.css"

export default function Modal({ show, close }) {
    const handleForm = async (event) => {
        event.preventDefault()
        
        // const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/admin")
    }

    if (!show) {
        return null;
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button onClick={close} className={styles.close}>&times;</button>
                <h2>Cadastro de estoque</h2>
                <form id="produtoForm" onSubmit={handleForm}>
                    <input className={styles.inputs} type="text" id="id" placeholder="ID do Produto" required />
                    <input className={styles.inputs} type="text" id="nome" placeholder="Nome do Produto" required />
                    <input className={styles.inputs} type="text" id="categoria" placeholder="Categoria" required />
                    <input className={styles.inputs} type="number" id="precoCusto" placeholder="Preço de Custo" step="0.01" required />
                    <input className={styles.inputs} type="number" id="valor" placeholder="Preço de Venda" step="0.01" required />
                    <input className={styles.inputs} type="number" id="quantidade" placeholder="Quantidade do Produto" required />
                    <button className={styles.botao} type="submit">Adicionar Produto</button>
                </form>
            </div>
        </div>
    );
}