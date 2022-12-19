import React from 'react';
import './Home.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
class Home_ToolBar extends React.Component{

    Show(){
        var link_prodati = document.getElementById('link-prodati');
        link_prodati.style.visibility = link_prodati.style.visibility == 'hidden'?'visible' : 'hidden';
    }
    render() {
        return (
            <section id='navigation'>
                <div className='container'>
                    <ul>
                        <li onClick={this.Show}>
                            <a href='#' className='link' id='link-sell'>продати &nbsp;</a>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </li>
                        <li>
                            <a href='#' className='link' id='link-buy'>купити</a>
                        </li>
                        <li>
                            <a href='#' className='link' id='link-poslyg'>послуги &nbsp;</a>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </li>
                        <li>
                            <a href='#' className='link' id='link-about'>про компанію &nbsp;</a>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </li>
                        <li>
                            <a href='#' className='link' id='link-contacts'>контакти</a>
                        </li>
                    </ul>
                </div>
                <div id='link-prodati'>

                    <div className='div-link-prodati' id='div-komm-sell'>
                    <ion-icon name="people-outline"></ion-icon>
                    <span><b>Комісійний продаж</b></span>
                    </div>

                    <div className='div-link-prodati' id='div-car-buyback'>
                    <ion-icon name="wallet-outline"></ion-icon>
                    <span><b>Викуп автомобіля</b></span>
                    </div>

                    <div className='div-link-prodati' id='div-mark-online'>
                    <ion-icon name="people-outline"></ion-icon>
                    <span><b>Оцінка вартості <spec>online</spec></b></span>
                    </div>

                    <div className='div-link-prodati' id='div-car-swap'>
                    <ion-icon name="people-outline"></ion-icon>
                    <span><b>Обмін автомобіля</b></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home_ToolBar;
