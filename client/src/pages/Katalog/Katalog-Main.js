import React from 'react';
import '../../css/Main.css';
import "../../css/Home.css";
import "../../css/Nav.css";
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
import Katalog_Header from './Katalog-Header.js';
import Katalog_ToolBar from './Katalog-ToolBar.js'
var cars = [
    {
        Name:"Subaru Outback",
        Model:"Outback",
        Mark:"Subaru",
        Year:2018,
        Probeg:127,
        Kuzov:"Хетчбек",
        Privod:"Повний",
        Engine:"Газ/Бензин",
        Rasxod:2.5,
        Seats:4,
        KPP:"Автомат",
        img:"/resources/img/Subaru Outback.png",
        priceUA:612000,
        priceENG:15112
    },
    {
        Name:"Ford Kuga",
        Model:"Kuga",
        Mark:"Ford",
        Year:2013,
        Probeg:33,
        Kuzov:"Кросовер",
        Privod:"Передній",
        Engine:"Бензин",
        Rasxod:1.5,
        Seats:4,
        KPP:"Механічна",
        img:"/resources/img/Ford Kuga.png",
        priceUA:680000,
        priceENG:16791
    },
    {
        Name:"Ford Kuga2",
        Model:"Kuga2",
        Mark:"Ford",
        Year:2018,
        Probeg:122,
        Kuzov:"Кросовер",
        Privod:"Передній",
        Engine:"Бензин",
        Rasxod:1.5,
        Seats:4,
        KPP:"Механічна",
        img:"/resources/img/Ford Kuga.png",
        priceUA:680000,
        priceENG:16791
    },
    {
        Name:"Ford Kuga3",
        Model:"Kuga3",
        Mark:"Ford",
        Year:2019,
        Probeg:78,
        Kuzov:"Кросовер",
        Privod:"Передній",
        Engine:"Бензин",
        Rasxod:1.5,
        Seats:2,
        KPP:"Механічна",
        img:"/resources/img/Ford Kuga.png",
        priceUA:680000,
        priceENG:16791
    },
    {
        Name:"Ford Kuga4",
        Model:"Kuga4",
        Mark:"Ford",
        Year:2005,
        Probeg:90,
        Kuzov:"Кросовер",
        Privod:"Передній",
        Engine:"Бензин",
        Rasxod:1.5,
        Seats:4,
        KPP:"Механічна",
        img:"/resources/img/Ford Kuga.png",
        priceUA:680000,
        priceENG:16791
    }   
];
var isMarks = false;
var isKuzovs = false;
var isTypeOfFuel = false;
var isTypeOfPrivod = false;
var isTypeOfKPP = false;
var isCountOfSeats = false;
var isTyrbo = false;
class Katalog_Main extends React.Component{ 
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
                input.className = 'marks';
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
                input.className = 'typeKuzova';
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
                input.className = 'typeFuel';
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
                input.className = 'typePrivod';
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
                input.className = 'typeKpp';
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
                input.className='countSeats';
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
                input.className = 'Tyrbo';
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
    SwapGridMode(){
        document.getElementById('view_list').className = document.getElementById('view_list').className === 'active'?' ':'active';
        document.getElementById('view_card').className = document.getElementById('view_card').className === 'active'?' ':'active';
        console.log("swap");
    }   
    Sort(e){
        e.target.parentElement.style.display = 'none';

        var startPrice = document.getElementById('startPrice');
        var endPrice = document.getElementById('endPrice');

        var startSelect = document.getElementById('startSelect');
        var endSelect = document.getElementById('endSelect');
        var startProbeg = document.getElementById('startProbeg');
        var endProbeg = document.getElementById('endProbeg');
        var marks = document.getElementsByClassName('marks');
        var typesKuzova = document.getElementsByClassName('typeKuzova');
        var typesFuel = document.getElementsByClassName('typeFuel');
        var typesPrivod = document.getElementsByClassName('typePrivod');
        var typesKpp = document.getElementsByClassName('typeKpp');
        var countSeats = document.getElementsByClassName('countSeats');
        var Tyrbo = document.getElementsByClassName('Tyrbo');

        var cars_price_ua = document.getElementsByClassName('ua');
        cars_price_ua.forEach(carPrice => {
                if(parseInt(endPrice.value) !=0 && startPrice.value!="" && endPrice.value!=""){
                    console.log("Price:"+startPrice.value +" " + endPrice.value);
                    if(parseInt(carPrice.innerText) >= parseInt(startPrice.value) && parseInt(carPrice.innerText) <= parseInt(endPrice.value)){
                        carPrice.parentElement.parentElement.style.display = "block";
                    }
                    else{
                        carPrice.parentElement.parentElement.style.display = "none";
                    }
                }
        });
        var car_years = document.getElementsByClassName('car_year');
        car_years.forEach(car_year => {
            if(car_year.parentElement.parentElement.style.display === 'block'){
                if(parseInt(startSelect.value) !=0 && parseInt(endSelect.value) !=0 && startSelect.value!="" && endSelect.value!=""){
                    console.log("Year:"+startSelect.value+' '+endSelect.value);
                    if(parseInt(car_year.innerText) >= parseInt(startSelect.value) && parseInt(car_year.innerText) <= parseInt(endSelect.value)){
                        car_year.parentElement.parentElement.style.display = "block";
                    }
                    else{
                        car_year.parentElement.parentElement.style.display = "none";
                    }
                }
            }
        });
        var car_probegs = document.getElementsByClassName('car_probeg_h5');
        car_probegs.forEach(car_probeg => {
            if(car_probeg.parentElement.parentElement.style.display === 'block'){
                if(parseInt(startProbeg.value) !=0 && parseInt(endProbeg.value) !=0 && startProbeg.value!="" && endProbeg.value!=""){
                    console.log("Probeg:" + startProbeg.value+' '+endProbeg.value);
                    if(parseInt(car_probeg.innerText) >= parseInt(startProbeg.value) && parseInt(car_probeg.innerText) <= parseInt(endProbeg.value)){
                        car_probeg.parentElement.parentElement.style.display = "block";
                    }
                    else{
                        car_probeg.parentElement.parentElement.style.display = "none";
                    }
                }
            }
        });
        var car_marks = document.getElementsByClassName('car_mark');
        car_marks.forEach(car_mark => {
           for(var i=0;i<marks.length;i++){
            if(car_mark.parentElement.parentElement.parentElement.style.display === "block"){
                    console.log("Mark name:" + marks[i].id +"\bMark check:" + marks[i].checked + '\bcar_mark:'+ car_mark.innerText);
                    if(marks[i].checked){
                        if(marks[i].id == car_mark.innerText){
                            car_mark.parentElement.parentElement.parentElement.style.display = "block";
                            break;
                        }
                        else{
                            car_mark.parentElement.parentElement.parentElement.style.display = "none";
                        }
                    }
               }
            }
        });
        var car_kuzovs = document.getElementsByClassName('car_kuzov');
        car_kuzovs.forEach(car_kuzov => {
           for(var i=0;i<typesKuzova.length;i++){
            if(car_kuzov.parentElement.parentElement.style.display === "block"){
                    console.log("typesKuzova name:" + typesKuzova[i].id +"\btypesKuzova:" + typesKuzova[i].checked + '\bcar_kuzov:'+ car_kuzov.innerText);
                    if(typesKuzova[i].checked){
                        if(typesKuzova[i].id == car_kuzov.innerText){
                            car_kuzov.parentElement.parentElement.style.display = "block";
                            break;
                        }
                        else{
                            car_kuzov.parentElement.parentElement.style.display = "none";
                        }
                    }
               }
            }
        });
        var car_engines = document.getElementsByClassName('car_engine');
        car_engines.forEach(car_engine => {
           for(var i=0;i<typesFuel.length;i++){
            if(car_engine.parentElement.parentElement.style.display === "block"){
                    console.log("typesFuel name:" + typesFuel[i].id +"\btypesFuel:" + typesFuel[i].checked + '\bcar_engine:'+ car_engine.innerText);
                    if(typesFuel[i].checked){
                        if(typesFuel[i].id == car_engine.innerText){
                            car_engine.parentElement.parentElement.style.display = "block";
                            break;
                        }
                        else{
                            car_engine.parentElement.parentElement.style.display = "none";
                        }
                    }
               }
            }
        });
        var car_Privods = document.getElementsByClassName('car_Privod');
        car_Privods.forEach(car_Privod => {
           for(var i=0;i<typesPrivod.length;i++){
            if(car_Privod.parentElement.parentElement.style.display === "block"){
                    console.log("typesPrivod name:" + typesPrivod[i].id +"\btypesPrivod:" + typesPrivod[i].checked + '\bcar_Privod:'+ car_Privod.innerText);
                    if(typesPrivod[i].checked){
                        if(typesPrivod[i].id == car_Privod.innerText){
                            car_Privod.parentElement.parentElement.style.display = "block";
                            break;
                        }
                        else{
                            car_Privod.parentElement.parentElement.style.display = "none";
                        }
                    }
               }
            }
        });
        var car_KPPs = document.getElementsByClassName('car_KPP');
        car_KPPs.forEach(car_KPP => {
           for(var i=0;i<typesKpp.length;i++){
            if(car_KPP.parentElement.parentElement.style.display === "block"){
                    console.log("typesKpp name:" + typesKpp[i].id +"\btypesKpp:" + typesKpp[i].checked + '\bcar_KPP:'+ car_KPP.innerText);
                    if(typesKpp[i].checked){
                        if(typesKpp[i].id == car_KPP.innerText){
                            car_KPP.parentElement.parentElement.style.display = "block";
                            break;
                        }
                        else{
                            car_KPP.parentElement.parentElement.style.display = "none";
                        }
                    }
               }
            }
        });
        var car_seats = document.getElementsByClassName('car_seats');
        car_seats.forEach(car_seat => {
           for(var i=0;i<countSeats.length;i++){
            if(car_seat.parentElement.parentElement.style.display === "block"){
                    console.log("countSeats name:" + countSeats[i].id +"\bcountSeats:" + countSeats[i].checked + '\bcar_seat:'+ car_seat.innerText);
                    if(countSeats[i].checked){
                        if(countSeats[i].id == car_seat.innerText){
                            car_seat.parentElement.parentElement.style.display = "block";
                            break;
                        }
                        else{
                            car_seat.parentElement.parentElement.style.display = "none";
                        }
                    }
               }
            }
        });
        var car_seats = document.getElementsByClassName('car_seats');
        car_seats.forEach(car_seat => {
           for(var i=0;i<Tyrbo.length;i++){
            if(car_seat.parentElement.parentElement.style.display === "block"){
                    console.log("Tyrbo name:" + Tyrbo[i].id +"\bTyrbo:" + Tyrbo[i].checked + '\bcar_seat:'+ car_seat.innerText);
                    if(Tyrbo[i].checked){
                        if(Tyrbo[i].id == car_seat.innerText){
                            car_seat.parentElement.parentElement.style.display = "block";
                            break;
                        }
                        else{
                            car_seat.parentElement.parentElement.style.display = "none";
                        }
                    }
               }
            }
        });
    }                                                                                                                                                                                       
    ShowFiltersBtn(){
       var btn = document.getElementById('activateFilters');
       btn.style.display = 'block';
    }
    render(){
        return(
            <>
            <Katalog_Header />
            <Katalog_ToolBar />
                <div onChange={this.ShowFiltersBtn} id='side_bar'>
                <div id='activateFilters'><a onClick={this.Sort} href='#'>активувати фільтри</a></div>
                <h2 className='filter-title'>ПІДБІР АВТОМОБІЛЯ</h2>
                <div id='price'>
                    <h3>ЦІНА, ГРН</h3>
                    <input min={0} id='startPrice' type={"number"} defaultValue='0'></input>
                    <span> - </span>
                    <input min={0} id='endPrice' type={"number"} defaultValue='50000000'></input>
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
                
                        <select id='startSelect'>
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

                        <select id='endSelect'>
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
                <input min={0} id='startProbeg' type="number" placeholder="Пробіг від"></input>
                <input min={0} id='endProbeg' type="number" placeholder="Пробіг до"></input>
                <div id='slider'></div>
                </div>
                <div id='marka'>    
                    <button onClick= {this.InitULMarks}><h3>МАРКА</h3></button>
                    <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                    <div id='slider'></div>
                </div>
                <div onClick={this.ShowFiltersBtn} id='marks_list' style={{display:'block'}}>
                </div>
                <div id='type_korpus'>    
                    <button onClick= {this.InitULTypeKuzova}><h3>ТИП КУЗОВА</h3></button>
                    <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                    <div id='slider'></div>
                </div>
                <div onClick={this.ShowFiltersBtn} id='type_korpus_list' style={{display:'block'}}>
                </div>
                <div id='type_of_fuel'>    
                    <button onClick= {this.InitULTypeOfFuel}><h3>ТИП ПАЛИВА</h3></button>
                    <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                    <div id='slider'></div>
                </div>
                <div onClick={this.ShowFiltersBtn} id='type_of_fuel_list' style={{display:'block'}}>
                </div>
                <div id='type_of_privod'>    
                    <button onClick= {this.InitULTypeOfPrivod}><h3>ТИП ПРИВОДУ</h3></button>
                    <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                    <div id='slider'></div>
                </div>
                <div onClick={this.ShowFiltersBtn} id='type_of_privod_list' style={{display:'block'}}>
                </div>
                <div id='type_of_kpp'>    
                    <button onClick= {this.InitULTypeOfKpp}><h3>ТИП КПП</h3></button>
                    <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                    <div id='slider'></div>
                </div>
                <div onClick={this.ShowFiltersBtn} id='type_of_kpp_list' style={{display:'block'}}>
                </div>
                <div id='count_of_seats'>    
                    <button onClick= {this.InitULCountOfSeats}><h3>КІЛЬКІСТЬ МІСЦЬ, ШТ</h3></button>
                    <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                    <div id='slider'></div>
                </div>
                <div onClick={this.ShowFiltersBtn} id='count_of_seats_list' style={{display:'block'}}>
                </div>
                <div id='tyrbo'>    
                    <button onClick= {this.InitULTyrbo}><h3>ТУРБОНАДДУВ</h3></button>
                    <ion-icon id='sign' name="chevron-down-outline"></ion-icon>
                    <div id='slider'></div>
                </div>
                <div onClick={this.ShowFiltersBtn} id='tyrbo_list' style={{display:'block'}}>
                </div>
                </div>
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
                        <div id='cars'>
                            {cars.map(car=>(
                                <div key={car.Name} className='card' id={car.Name}>
                                    <div className='car_image'>
                                        <img src={car.img}></img>
                                    </div>
                                    <div className='car_info'>
                                        <h3><span className='car_mark'>{car.Mark}</span><span className='car_model'>{car.Model}</span></h3>
                                        <h3 className='car_year'>{car.Year}</h3>
                                    </div>
                                    <div className='car_probeg'>
                                        <h5 className='car_probeg_h5'>{car.Probeg} тис.км</h5>
                                    </div>
                                    <div className='car_prop'>
                                        <span className='car_kuzov'>{car.Kuzov}</span>
                                        <span className='car_rasxod'>{car.Rasxod}</span> <span className='car_engine'>{car.Engine}</span>
                                        <span className='car_Privod'>{car.Privod}</span>
                                        <span className='car_KPP'>{car.KPP}</span>
                                        <span style={{visible:'hidden'}} className='car_seats'>{car.Seats}</span>
                                    </div>
                                    <div className='car_price'>
                                        <span>UA:</span><span className='ua'>{car.priceUA}</span>
                                        <br></br>
                                        <span>$</span><span className='eng'>{car.priceENG}</span>
                                        <button className='details_btn'>ДЕТАЛІ</button>
                                    </div>
                                </div>  
                            ))}
                        </div>

                    </div>
                </div>
           </>
        );
    }
}

export default Katalog_Main;