import React from 'react';
class Home extends React.Component{

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div id='main'>

                <div id='header'>
                    <h4 id='title'>Автомтобілі з пробігом </h4>
                    <a id='translate'>RU |</a>
                    <a id='translate'>Увійти</a>
                    <hr></hr>
                </div>

                <div id='footer'></div>

            </div>
        );
    }
}

export default Home;
