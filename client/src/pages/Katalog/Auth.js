import React from 'react';
var data;
class Login extends React.Component {

    
    async Register(){
        
        var login = document.getElementById("reglogin");
        var pass = document.getElementById("regpass");

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username:login.value,
                password:pass.value,
                })
        };
        await fetch('/auth/registration', requestOptions)
            .then(response => response.json())
            .then(res=>data=res)
            console.log(data);
    }
    async Login(){
        var login = document.getElementById("loglogin");
        var pass = document.getElementById("logpass");

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username:login.value,
                password:pass.value,
                })
        };
        await fetch('/auth/login', requestOptions)
            .then(response => response.json())
            .then(res=>data=res)
            console.log(data);
    }
    async GetUsers(){
        await fetch('/auth/Users')
            .then(response => response.json())
            .then(res=>data=res)
            console.log(data);
    }
    render() {
        return (
            <div id='Form'>
                <div id='LogForm'>
                    <input type='text' id='loglogin' placeholder='Login'></input>
                </div>
                <div id='RegPassForm'>
                    <input type='password' id='logpass' placeholder='Password'></input>
                </div>
                <button onClick={this.Login} type='submit'>Submit</button>
                <div id='RegForm'>
                    <input type='text' id='reglogin' placeholder='Login'></input>
                </div>
                <div id='RegPassForm'>
                    <input type='password' id='regpass' placeholder='Password'></input>
                </div>
                <button onClick={this.Register} type='submit'>Submit</button>
                
                <button onClick={this.GetUsers} type='submit'>Get Users</button>
                
            </div>
            
        );
    }
}

export default Login;