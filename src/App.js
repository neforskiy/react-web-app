import './App.css';
import React /*,  {useEffect} */ from "react";
// import {useTelegram} from "./hooks/useTelegram";
// import Header from "./components/Header/Header";
// import {Route, Routes} from 'react-router-dom'
// import ProductList from "./components/ProductList/ProductList";
// import Form from "./components/Form/Form";
// import ForSoft from "./components/ForSoft/ForSoft";

function App() {
    // const {onToggleButton, tg} = useTelegram();

    // useEffect(() => {
    //     tg.ready();
    // }, [])

    let textToken
    if (navigator.userAgent !== decodeURIComponent(escape(atob(atob(atob('WTBoc01HRkhPWFZNV0Vwc1kxaFdiR016VW5wTWVrbDFUWHBGZFUxQlBUMD0=')))))){
        textToken = 'You dont have permission for see the token';
    }
    else {
        textToken= 'QRST-Q12R-34ST-5UV6|MNOP-M12N-34OP-5QR6|WXYZ-X12Y-34WX-5YZ6|UVWX-U12V-34WX-5YZ6'
    }

    return (
        <text>{textToken}</text>
            )

    // return (
    //     <div className="App">
    //         <Header />
    //         <Routes>
    //             <Route index element={<ProductList />}/>
    //             <Route path={'form'} element={<Form />}/>
    //             <Route path={'test'} element={<ForSoft />}/>
    //         </Routes>
    //     </div>
    // );
}

export default App;
