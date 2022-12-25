import React from 'react';
import '../../css/Main.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';

class Katalog_Main extends React.Component{ 
    SwapGridMode(){
        document.getElementById('view_list').className = document.getElementById('view_list').className === 'active'?' ':'active';
        document.getElementById('view_card').className = document.getElementById('view_card').className === 'active'?' ':'active';
        console.log("swap");
    }   
    render(){
        return(
           <div id='main_content'>
            <div id='content_settings'>
                <div id='content_sort'>
                    <span>Сортування:</span>
                    <select>
                        <option value="priority-desc">За популярністю</option>
                        <option value="date-desc">За датою додавання</option>
                        <option value="price-asc">Спочатку дешевші</option>
                        <option value="price-desc">Спочатку дорожчі</option>
                        <option value="year-desc">Рік випуску, за зростанням</option>
                        <option value="year-asc">Рік випуску, за зменьшенням</option>
                        <option value="mileage-asc">Пробіг, за зростанням</option>
                        <option value="mileage-desc">Пробіг, по спаданню</option>
                    </select>
                    <span class="carret-catalog-icon"></span>
                    <a onClick={this.SwapGridMode} href='#' id='view_list' className=' '></a>
                    <a onClick={this.SwapGridMode} href='#' id='view_card' className='active'></a>
                </div>
                
                   

            </div>
           </div>
        );
    }
}

export default Katalog_Main;