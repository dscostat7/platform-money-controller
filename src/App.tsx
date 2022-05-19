import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransaction] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransaction(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransaction(false);
  }
  return (
    <>
      <Header onOpenNewTranslationModal={handleOpenTransactionModal}/>
      <Dashboard />
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal}>
        <h2>Cadastrar transação!</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
