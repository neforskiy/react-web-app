import React, {useState} from 'react';
import './Footer.css'
import Button from "../Button/Button";
const Footer = () => {
    return (
        <div className={'footer'}>
            <Button className={'item'}>Тест навигационная кнопка1</Button>
            <Button className={'item'}>Тест навигационная кнопка2</Button>
            <Button className={'item'}>Тест навигационная кнопка3</Button>
        </div>
    );
};

export default Footer;