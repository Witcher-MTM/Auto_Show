import React from 'react';
import '../../css/Main.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
var cars = [
    {
        Name:"Subaru Outback",
        Year:2018,
        Probeg:127,
        Kuzov:"Кросовер",
        Privod:"Повний",
        Engine:"Газ/Бензин",
        Rasxod:2.5,
        KPP:"Автомат",
        img:"/resources/img/Subaru Outback.png",
        priceUA:612000,
        priceENG:15112
    }
];
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
                {cars.map(car=>(
                    <div key={car.Name} className='card' id={car.Name}>
                        <div className='car_image'>
                            <img src={car.img}></img>
                        </div>
                        <div className='car_info'>
                            <h3 className='car_name'>{car.Name}</h3>
                            <h3 className='car_year'>{car.Year}</h3>
                        </div>
                        <div className='car_probeg'>
                            <h5>{car.Probeg} тис.км</h5>
                        </div>
                        <div className='car_prop'>
                            <h4>{car.Kuzov}</h4>
                            <h4>{car.Rasxod} {car.Engine}</h4>
                            <h4>{car.Privod}</h4>
                            <h4>{car.KPP}</h4>
                        </div>
                        <div className='car_price'>
                            <h4>UA:{car.priceUA}</h4>
                            <h4>ENG:{car.priceENG}</h4>
                        </div>
                    </div>  
                ))}
                   

            </div>
           </div>
        );
    }
}

export default Katalog_Main;