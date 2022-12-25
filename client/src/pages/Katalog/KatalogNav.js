import React from 'react';
import "../../css/Home.css";
import "../../css/Nav.css";
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
class KatalogNav extends React.Component{
 
 
 
 
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
                <p className='check'>
                    <input type={'checkbox'} id='actions_only'></input>
                    <label for='actions_only'>Показувати тільки спецпропозиції</label>
                    <br></br>
                    <input type={'checkbox'} id='nds_only'></input>
                    <label for='nds_only'>ПДВ включено</label>
                    <div id='slider'></div>
                </p>
            </div>
           
            <div id='year'>
            <h3>РІК</h3>
                <p> 
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
                </p>
                <div id='slider'></div>
            </div>

            <div id='collapse'>
            <h3>ПРОБІГ, КМ</h3>
            <input type="number" placeholder="Пробіг від"></input>
            <input type="number" placeholder="Пробіг до"></input>
            <div id='slider'></div>
            </div>
            <div id='marka'>
                <h3>МАРКА</h3>
            </div>
        </div>

        );
    }
}
export default KatalogNav;