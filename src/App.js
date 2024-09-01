import './App.css';
import {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {

    const {tg} = useTelegram();

    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        tg.ready();
    }, []);

    useEffect ( () => {
        !modalActive ? document.body.style.overflow = 'hidden':
            document.body.style.overflow = 'visible'
    }, [modalActive] )


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<Form/>}/>
                <Route path={'form'} element={<Form/>}/>
            </Routes>
            <Button onClick={() => setModalActive(true)}>Click</Button>
            <Modal
            active={modalActive}
            setActive={setModalActive}
            >
                <p>z ndjq hjn t,fk csy ,kzljns negjujkjdjq z ndjtq vfvrt ukjnre gththtpfk z ndjq hjn t,fk csy ,kzljns negjujkjdjq z ndjtq vfvrt ukjnre gththtpfk z ndjq hjn t,fk csy ,kzljns negjujkjdjq z ndjtq vfvrt ukjnre gththtpfk z ndjq hjn t,fk csy ,kzljns negjujkjdjq z ndjtq vfvrt ukjnre gththtpfk z ndjq hjn t,fk csy ,kzljns negjujkjdjq z ndjtq vfvrt ukjnre gththtpfk z ndjq hjn t,fk csy ,kzljns negjujkjdjq z ndjtq vfvrt ukjnre gththtpfk </p>
            </Modal>
            <Footer/>
        </div>
    );
}

export default App;
