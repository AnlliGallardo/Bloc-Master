import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'md5';
import { Link } from 'react-router-dom';




import {LoginS,Input1,Inpu1,Inpu2,Iniciar,Text,Img,GoogBtn} from '../styled/LoginStyled'


axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const baseUrl = "https://herokuapitemp.herokuapp.com/usuario";


export default class Login extends Component {
 
    constructor() {
        super();
        this.state = {
            form: {
                email: 'username',
                password: 'password',
                error: null,
                sending: false
            }
        }
    }

    // onChangeEmail = email => this.setState({email});

    // onChangePassword = password => this.setState({password});

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }

    iniciarSesion = async () => {
        await axios.get(baseUrl, { params: { username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response => {
            return response.data;
        })
        .then(response => {
            if (response.length > 0) {
                let respuesta = response[0];
                alert(`Bienvenido ${respuesta.username}`);
                
            } else {
                alert('Bienvenido');
                // this.props.history.push('/about');
            }
            // swal({
            //     title: "!Bienvenido a nuestro Bloc Master!",
            //     icon: "success",
            //     button: "Finalizar",
            //     });
            
            // this.props.history.push('/about');
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email , password} = this.state;
        this.setState({ sending: true});
        try {
            // const res = 
            await baseUrl({username: email, password});
        } catch (error){
            this.setState({ error: error.message });
        } finally {
            this.setState({sending: false});
        }
    }

    render() {
        const {form} = this.state;
        return(
            <LoginS>
                <div className="Login-container">
                    <form className="form-entrar">
                    <Input1>
                        Iniciar Sesion
                    </Input1>

                    <Inpu1 
                        type="email"
                        id="inputEmail"
                        className="Cuadro1"
                        placeholder="correo@gmail.com"
                        required=""
                        onChange={this.handleChange}
                        onChangeEmail={this.onChangeEmail}
                    /> 
                    <br />

                    <Inpu2 
                        type="Password"
                        id="inputPasword"
                        className="Cuadro2"
                        placeholder="Contraseña"
                        required=""
                        onChange={this.handleChange}
                        onChangePassword={this.onChangePassword}
                    />
                    <br />
                    <br />

                    <Link
                        type="submit"
                        className="btn btn-primary btn-block" 
                        onClick={() => this.iniciarSesion()}
                        handleSubmit={this.handleSubmit}
                        to="/about"
                        
                    >
                        Entrar
                    
                        
                    </Link>
                    <br />

                    <Iniciar>
                        <p>Iniciar sesión con sus redes sociales</p>

                        <GoogBtn className="google-btn btn-primary">
                                <div className="google-icon-wrapper">
                                    <Img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                    <Text>
                                        <b>Entrar con Google</b>
                                    </Text>
                        </GoogBtn>
                   </Iniciar>
                   <br />
                    <Link
                        to="/registro"
                        className="Link"
                    >
                        Crear Nueva Cuenta
                    </Link>
                    </form>
                </div>
            </LoginS>
        )
    }
}

