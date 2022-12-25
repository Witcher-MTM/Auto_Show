import React from 'react';
import '../../css/Home.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
class Katalog_Header extends React.Component{

    render() {
        return (
            <header>
                <div className='container'>
                    <div className='header-top '>
                        <div className='col_1 header-top'>
                                <span className="title"><b>Автомобілі з пробігом</b></span>
                        </div>
                        <div className='col_2 header-top'>
                                <a href='#' id='translate'><b>RU</b></a>
                                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                <ion-icon className='login-person-outline' name="person-outline"></ion-icon>
                                <a href='#' id='Login'>&nbsp;<b>Увійти</b></a>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        <div id='div_logo'>
                            <a href='#'><img id='img_logo' src='resources/img/logo.png'></img></a>
                        </div>
                       <div className='contacts'>
                            <div id='phone_number'>
                                <ion-icon id='telephone_icon' name="call-sharp"></ion-icon>
                                <span>+38 (999) 999-99-99</span>
                                <br></br>
                                <a href='tel+38'>Замовити дзвінок</a>
                            </div>
                            <div id='div_social'>
                                <ion-icon id='telegram_icon' name="navigate-circle"></ion-icon>
                                <ion-icon id='facebook_icon' name="logo-facebook"></ion-icon>
                                <ion-icon id='instagram_icon' name="logo-instagram"></ion-icon>
                                <ion-icon id='youtube_icon' name="logo-youtube"></ion-icon>
                                <br></br>
                                <a href='tel+38'>Замовити дзвінок</a>
                            </div>
                            <div id='div_street'>
                                <ion-icon id='pin' name="pin"></ion-icon>
                                <span>Вулиця</span>
                                <br></br>
                                <a href='#'>Карта проїзду</a>

                            </div>
                       </div>
                       <div id='div_info'>
                        <div id='div_info-numbs'>
                            понад
                            <br></br>
                            <span>10 000</span>
                        </div> 
                            <span className='sp_2'>
                                АВТО
                                <br></br>
                                ПРОДАНО
                                </span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Katalog_Header;
