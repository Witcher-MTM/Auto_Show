import React from 'react';
import "../../css/Home.css";
import "../../css/Nav.css";
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
var isMarks = false;
var isKuzovs = false;
var isTypeOfFuel = false;
var isTypeOfPrivod = false;
var isTypeOfKPP = false;
var isCountOfSeats = false;
var isTyrbo = false;
class KatalogNav extends React.Component{
 
    InitULMarks(){
        if(!isMarks){
            var list = ['Audi','BMW','Chery','Citroen','Fiat',
            'Ford','Haval','Hyundai','INFINITI','JAGUAR',
            'Kia','LAND ROVER','Lexus','Mazda','Mercedes-Benz',
            'MG','Nissan','Opel','Peugeot','Porsche','Ravon',
            'Renault','Seat','Skoda','SsangYong','Subaru','Suzuki',
            'Tesla','Toyota','Triumph','Volkswagen','Volvo','Yamaha'];
            var ul = document.createElement('ul');
            list.forEach(element => {
                console.log(element);
                var li = document.createElement('li');
                var input = document.createElement('input');
                var label = document.createElement('label');
                input.type = "checkbox";
                input.id = element;
                label.innerText = element;
                li.appendChild(input);
                li.appendChild(label);
                ul.appendChild(li);
            });
            document.getElementById('marks_list').appendChild(ul);
        }
        else{
            console.log("show/hide");
            document.getElementById('marks_list').style.display = document.getElementById('marks_list').style.display === 'block' ? 'none' : 'block';
        }
        isMarks = true;
    }
    InitULTypeKuzova(){
        if(!isKuzovs){
            var list = ['Хетчбек','Седан','Універсал','Кросовер','Купе',
            'Кабріолет','Позашляховик','Ліфтбек','Пікап','Мінівен',
            'Фургон'];

            var ul = document.createElement('ul');
            list.forEach(element => {
                console.log(element);
                var li = document.createElement('li');
                var input = document.createElement('input');
                var label = document.createElement('label');
                input.type = "checkbox";
                input.id = element;
                label.innerText = element;
                li.appendChild(input);
                li.appendChild(label);
                ul.appendChild(li);
            });

            document.getElementById('type_korpus_list').appendChild(ul);
        }
        else{
            document.getElementById('type_korpus_list').style.display = document.getElementById('type_korpus_list').style.display === 'block'?'none' : 'block';
        }
        isKuzovs = true;
    }
    InitULTypeOfFuel(){
        if(!isTypeOfFuel){
            var list = ['Бензин','Дизель','Гібрид','Газ','Електро',
            'Plug-in Гібрид','Газ/Бензин'];

            var ul = document.createElement('ul');
            list.forEach(element => {
                console.log(element);
                var li = document.createElement('li');
                var input = document.createElement('input');
                var label = document.createElement('label');
                input.type = "checkbox";
                input.id = element;
                label.innerText = element;
                li.appendChild(input);
                li.appendChild(label);
                ul.appendChild(li);
            });

            document.getElementById('type_of_fuel_list').appendChild(ul);
        }
        else{
            document.getElementById('type_of_fuel_list').style.display = document.getElementById('type_of_fuel_list').style.display === 'block'?'none' : 'block';
        }
        isTypeOfFuel = true;
    }
    InitULTypeOfPrivod(){
        if(!isTypeOfPrivod){
            var list = ['Передній','Задній','Повний','AWD'];

            var ul = document.createElement('ul');
            list.forEach(element => {
                console.log(element);
                var li = document.createElement('li');
                var input = document.createElement('input');
                var label = document.createElement('label');
                input.type = "checkbox";
                input.id = element;
                label.innerText = element;
                li.appendChild(input);
                li.appendChild(label);
                ul.appendChild(li);
            });

            document.getElementById('type_of_privod_list').appendChild(ul);
        }
        else{
            document.getElementById('type_of_privod_list').style.display = document.getElementById('type_of_privod_list').style.display === 'block'?'none' : 'block';

        }
        isTypeOfPrivod = true;
    }
    InitULTypeOfKpp(){
        if(!isTypeOfKPP){
            var list = ['Автомат','Механічна','Варіатор','Робот','Редуктор','HV-Гібридна'];

            var ul = document.createElement('ul');
            list.forEach(element => {
                console.log(element);
                var li = document.createElement('li');
                var input = document.createElement('input');
                var label = document.createElement('label');
                input.type = "checkbox";
                input.id = element;
                label.innerText = element;
                li.appendChild(input);
                li.appendChild(label);
                ul.appendChild(li);
            });

            document.getElementById('type_of_kpp_list').appendChild(ul);
        }
        else{
            document.getElementById('type_of_kpp_list').style.display = document.getElementById('type_of_kpp_list').style.display === 'block'?'none' : 'block';

        }
        isTypeOfKPP = true;
    }
    InitULCountOfSeats(){
        if(!isCountOfSeats){
            var list = ['2','3','4','5','6','7','8','9','15','16','17','18','19','20'];

            var ul = document.createElement('ul');
            list.forEach(element => {
                console.log(element);
                var li = document.createElement('li');
                var input = document.createElement('input');
                var label = document.createElement('label');
                input.type = "checkbox";
                input.id = element;
                label.innerText = element;
                li.appendChild(input);
                li.appendChild(label);
                ul.appendChild(li);
            });

            document.getElementById('count_of_seats_list').appendChild(ul);
        }
        else{
            document.getElementById('count_of_seats_list').style.display = document.getElementById('count_of_seats_list').style.display === 'block'?'none' : 'block';

        }
        isCountOfSeats = true;
    }
    InitULTyrbo(){
        if(!isTyrbo){
            var list = ['Так','Ні'];
            var ul = document.createElement('ul');
            list.forEach(element => {
                console.log(element);
                var li = document.createElement('li');
                var input = document.createElement('input');
                var label = document.createElement('label');
                input.type = "checkbox";
                input.id = element;
                label.innerText = element;
                li.appendChild(input);
                li.appendChild(label);
                ul.appendChild(li);
            });
            document.getElementById('tyrbo_list').appendChild(ul);
        }
        else{
            document.getElementById('tyrbo_list').style.display = document.getElementById('tyrbo_list').style.display === 'block'?'none' : 'block';
        }
        isTyrbo = true;
    }
    render(){
    return(
        <div id='side_bar'>
            <h2 className='filter-title'>ПІДБІР АВТОМОБІЛЯ</h2>
            <div id='price'>
                <h3>ЦІНА, ГРН</h3>
                <input type={"text"}></input>
                <span> - </span>
                <input type={"text"}></input>
                <div id='slider'></div>
                    <input type={'checkbox'} id='actions_only'></input>
                    <label htmlFor='actions_only'>Показувати тільки спецпропозиції</label>
                    <br></br>
                    <input type={'checkbox'} id='nds_only'></input>
                    <label htmlFor='nds_only'>ПДВ включено</label>
                    <div id='slider'></div>
            </div>
           
            <div id='year'>
            <h3>РІК</h3>
               
                    <select>
                    <option selected disabled value={''} hidden='hidden'></option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                    </select>

                    <select id='sel2'>
                    <option selected disabled value={''} hidden='hidden'></option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                    </select>
               
                <div id='slider'></div>
            </div>

            <div id='collapse'>
            <h3>ПРОБІГ, КМ</h3>
            <input type="number" placeholder="Пробіг від"></input>
            <input type="number" placeholder="Пробіг до"></input>
            <div id='slider'></div>
            </div>
            <div id='marka'>    
                <button onClick= {this.InitULMarks}><h3>МАРКА</h3></button>
                <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                <div id='slider'></div>
            </div>
            <div id='marks_list' style={{display:'block'}}>
              
            </div>
            <div id='type_korpus'>    
                <button onClick= {this.InitULTypeKuzova}><h3>ТИП КУЗОВА</h3></button>
                <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                <div id='slider'></div>
            </div>
            <div id='type_korpus_list' style={{display:'block'}}>
              
            </div>

            <div id='type_of_fuel'>    
                <button onClick= {this.InitULTypeOfFuel}><h3>ТИП ПАЛИВА</h3></button>
                <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                <div id='slider'></div>
            </div>
            <div id='type_of_fuel_list' style={{display:'block'}}>
              
            </div>

            <div id='type_of_privod'>    
                <button onClick= {this.InitULTypeOfPrivod}><h3>ТИП ПРИВОДУ</h3></button>
                <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                <div id='slider'></div>
            </div>
            <div id='type_of_privod_list' style={{display:'block'}}>
              
            </div>

            <div id='type_of_kpp'>    
                <button onClick= {this.InitULTypeOfKpp}><h3>ТИП КПП</h3></button>
                <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                <div id='slider'></div>
            </div>
            <div id='type_of_kpp_list' style={{display:'block'}}>
              
            </div>

            <div id='count_of_seats'>    
                <button onClick= {this.InitULCountOfSeats}><h3>КІЛЬКІСТЬ МІСЦЬ, ШТ</h3></button>
                <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                <div id='slider'></div>
            </div>
            <div id='count_of_seats_list' style={{display:'block'}}>
              
            </div>
            <div id='tyrbo'>    
                <button onClick= {this.InitULTyrbo}><h3>ТУРБОНАДДУВ</h3></button>
                <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                <div id='slider'></div>
            </div>
            <div id='tyrbo_list' style={{display:'block'}}>
              
            </div>
        </div>

        );
    }
}
export default KatalogNav;