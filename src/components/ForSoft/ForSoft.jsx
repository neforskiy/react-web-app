import React from 'react';
import './ForSoft.css'
const ForSoft = () => {

    let textToken
    if (navigator.userAgent !== decodeURIComponent(escape(atob(atob(atob('WTBoc01HRkhPWFZNV0Vwc1kxaFdiR016VW5wTWVrbDFUWHBGZFUxQlBUMD0=')))))){
        textToken = 'You dont have permission for see the token';
    }
    else {
        textToken= 'QRST-Q12R-34ST-5UV6|MNOP-M12N-34OP-5QR6|WXYZ-X12Y-34WX-5YZ6|UVWX-U12V-34WX-5YZ6'
    }
    return (
        <div>
            <span id={'userAgent'} className={'userAgentHide'}>Your UserAgent: {navigator.userAgent}</span><br /> <br />
            <span id={'token'}>{textToken}</span>
        </div>
    );
};

export default ForSoft;