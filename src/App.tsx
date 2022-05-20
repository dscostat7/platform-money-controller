import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
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
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      <GlobalStyle />
    </>
  );
}

export default App;
