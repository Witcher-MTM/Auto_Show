import React from 'react';
import './Home.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
class Home_ToolBar extends React.Component{

    render() {
        return (
            <section id='navigation'>
                <div className='container'>
                    <ul>
                        <li>
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
                <div id='div-link-prodati'>

                </div>
            </section>
        );
    }
}

export default Home_ToolBar;
