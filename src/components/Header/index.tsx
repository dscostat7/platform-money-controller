import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {

    const [isNewTransactionModalOpen, setIsNewTransaction] = useState(false);

    function handleOpenTransactionModal() {
        setIsNewTransaction(true);
    }

    function handleCloseTransactionModal() {
        setIsNewTransaction(false);
    }

    return (
        <Container>
            <Content>
                
                <img src={logoImg} alt="money controller" />
                <button type="button" onClick={handleOpenTransactionModal}>
                    New transaction
                </button>

                <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal}>
                    <h2>Cadastrar transação!</h2>
                </Modal>
            </Content>
        </Container>
    )
}