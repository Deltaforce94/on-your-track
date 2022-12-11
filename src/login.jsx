import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            user: "",
            password: "",
            email: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const user = target.user;
        const email = target.email;
        const password = target.password;

        this.setState({
            [user]: value,
            [email]: value,
            [password]: value
        });
    }

    ChangeLogin = () => {
    
        if(this.state.login){
            document.getElementById("login").style.display = "none";
            document.getElementById("register").style.display = "block";
            this.state.login = false;
        }
        else if(!this.state.login){
            document.getElementById("login").style.display = "block";
            document.getElementById("register").style.display = "none";  
            this.state.login = true;
        }
    }


    //This function is for the login and register, it will print the username in the console
    Submit = () => {
        if(this.state.login){
            console.log(this.state.user);
        }
        else if(!this.state.login){
            console.log(this.state.user);
        }
    }

    render() {
        return (
        <div className="login-page">
        <div className="form">
        <form id="register" className="register-form">
            <p>Nombre de usuario</p>
            <input
                className="input"
                name="user" 
                required 
                type="text" 
                placeholder="usuario" 
                onChange={this.handleInputChange}
            />
            <p>Contraseña</p>
            <input 
                className="input"
                name="password"
                required 
                type="password" 
                placeholder="contraseña" 
                onChange={this.handleInputChange}
            />
            <p>Correo</p>
            <input 
                className="input"
                name="email" 
                required 
                type="email" 
                placeholder="ejemplo@email.com" 
                onChange={this.handleInputChange}
            />
            <button onClick={this.Submit}>Crear cuenta</button>
            <p className="message">¿Ya tienes cuenta? <a onClick={this.ChangeLogin} href="#">Registrate</a></p>
        </form>
        <form id="login" className="login-form">
            <p>Nombre de usuario</p>
            <input 
                className="input"
                name="user" 
                required 
                type="text" 
                placeholder="usuario" 
                onChange={this.handleInputChange}
            />
            <p>Contraseña</p>
            <input 
                className="input"
                name="password"
                required 
                type="password" 
                placeholder="contraseña" 
                onChange={this.handleInputChange}
            />
            <button onClick={this.Submit}>login</button>
            <p className="message">¿No estas registrado? <a onClick={this.ChangeLogin} href="#">Crear una cuenta</a></p>
        </form>
        </div>
        </div>
    )};
};

export default Login;