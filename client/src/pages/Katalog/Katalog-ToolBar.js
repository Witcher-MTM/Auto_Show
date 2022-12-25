import React from 'react';
import '../../css/Home.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
class Katalog_ToolBar extends React.Component{
    ShowSaleDiv(){
        var seller_menu = document.getElementById('seller');
        var poslyg_menu = document.getElementById('poslyg');
        var about_menu = document.getElementById('about');
        about_menu.style.visibility = 'hidden';
        poslyg_menu.style.visibility = 'hidden';
        seller_menu.style.visibility = seller_menu.style.visibility == 'visible'?'hidden' : 'visible';
    }
    ShowPoslygiDiv(){
        var poslyg_menu = document.getElementById('poslyg');
        var seller_menu = document.getElementById('seller');
        var about_menu = document.getElementById('about');
        seller_menu.style.visibility = 'hidden';
        about_menu.style.visibility = 'hidden';
        poslyg_menu.style.visibility = poslyg_menu.style.visibility == 'visible'?'hidden' : 'visible';
    }
    ShowAboutDiv(){
        var poslyg_menu = document.getElementById('poslyg');
        var seller_menu = document.getElementById('seller');
        var about_menu = document.getElementById('about');
        seller_menu.style.visibility = 'hidden';
        poslyg_menu.style.visibility = 'hidden';
        about_menu.style.visibility = about_menu.style.visibility == 'visible'?'hidden' : 'visible';
    }
    render() {
        return (
            <section id='navigation'>
                <div className='container'>
                    <ul>
                        <li id='li-sell' onClick={this.ShowSaleDiv}>
                            <a href='#' className='link' id='link-sell'>продати &nbsp;</a>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </li>
                        <li>
                            <a href='#' className='link' id='link-buy'>купити</a>
                        </li>
                        <li id='li-poslyg' onClick={this.ShowPoslygiDiv}>
                            <a href='#' className='link' id='link-poslyg'>послуги &nbsp;</a>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </li>
                        <li id='li-about' onClick={this.ShowAboutDiv}>
                            <a href='#' className='link' id='link-about'>про компанію &nbsp;</a>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </li>
                        <li>
                            <a href='#' className='link' id='link-contacts'>контакти</a>
                        </li>
                    </ul>
                </div>
                <div id='seller' className='dropdown-menu'>
                    <div className='div-link-prodati' id='div-komm-sell'>
                        <a href='#' className='dropdown-item'>
                            <span className='def'><b>Комісійний продаж</b></span>
                        </a>
                    </div>
                    <div className='div-link-prodati' id='div-car-buyback'>
                        <a href='#' className='dropdown-item'>
                            
                            <span className='def'><b>Викуп автомобіля</b></span>
                        </a>
                    </div>

                    <div className='div-link-prodati' id='div-mark-online'>
                        <a href='#' className='dropdown-item'>
                            
                            <span className='def'><b>Оцінка вартості <span className='color_red'>online</span></b></span>
                        </a>
                    </div>
                    <div className='div-link-prodati' id='div-car-swap'>
                        <a href='#' className='dropdown-item'>
                            
                            <span className='def'><b>Обмін автомобіля</b></span>
                        </a>
                    </div>
                </div>
                <div id='poslyg' className='dropdown-menu'>
                    <div className='div-link-prodati' id='div-komm-sell'>
                        <a href='#' className='dropdown-item'>
                            <span className='def'><b>Кредитування</b></span>
                        </a>
                    </div>

                    <div className='div-link-prodati' id='div-car-buyback'>
                        <a href='#' className='dropdown-item'>
                            <span className='def'><b>Страхування</b></span>
                        </a>
                    </div>

                    <div className='div-link-prodati' id='div-mark-online'>
                        <a href='#' className='dropdown-item'>
                            <span className='def'>Автозапчастини</span>
                        </a>
                    </div>
                </div>
                <div id='about' className='dropdown-menu'>
                    <div className='div-link-prodati' id='div-komm-sell'>
                        <a href='#' className='dropdown-item'>
                            <span className='def'><b>"ВІДІ Автомобілі з пробігом"</b></span>
                        </a>
                    </div>

                    <div className='div-link-prodati' id='div-car-buyback'>
                        <a href='#' className='dropdown-item'>
                            <span className='def'><b>Персонал</b></span>
                        </a>
                    </div>

                    <div className='div-link-prodati' id='div-mark-online'>
                        <a href='#' className='dropdown-item'>
                            <span className='def'>Політика з якості</span>
                        </a>
                    </div>

                    <div className='div-link-prodati' id='div-mark-online'>
                        <a href='#' className='dropdown-item'>
                            <span className='def'>Новини</span>
                        </a>
                    </div>

                    <div className='div-link-prodati' id='div-mark-online'>
                        <a href='#' className='dropdown-item'>
                            <span className='def'>Вакансії</span>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Katalog_ToolBar;
