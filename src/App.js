import './App.css';
import {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
// import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
// import Modal from "./components/Modal";
import Modal from 'react-modal';
import Button from "./components/Button/Button";
// import s from './components/Modal/index.module.css'

function App() {
    // const [visible, setVisible] = useState(false)
    const {onToggleButton, tg} = useTelegram();
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        tg.ready();
    }, [])

    // function onCancel () {
    //     setVisible(false)
    // }
    // function onDone () {
    //     alert('TI TUPOY PEDIK!')
    //     setVisible(false)
    // }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const modalContent = (
        <div>
            <h2>Заголовок</h2>
            <p>Text</p>
            <button onClick={closeModal} className={'cancelButton'}>Close</button>
        </div>
    )

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Form />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
            <Button onClick={openModal}>Click</Button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
            {/*<Modal*/}
            {/*    visible={visible}*/}
            {/*    setVisible={setVisible}*/}
            {/*    modalTitle={"PedikZhirniy"}*/}
            {/*    modalContent={"Pedik ti tupoy nafig blin kapec durak tuporiliy"}*/}
            {/*    onCancel={onCancel}*/}
            {/*    onDone={onDone}*/}
            {/*/>*/}
            {/*<button onClick={() => setVisible(true)}>Open modal</button>*/}
            <Footer />
        </div>
    );
}

export default App;
