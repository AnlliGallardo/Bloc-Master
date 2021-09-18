import React, { Component } from "react";
import axios from "axios";
import md5 from "md5";
import uuid from "react-uuid"
import { Link } from "react-router-dom";
import swal from 'sweetalert';


import { Register,H1,Img,H3,Primer,Segundo,Name,Correo,Contra,Botn } from '../styled/RegistroStyled'


axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const baseUrl = "https://herokuapitemp.herokuapp.com/usuario";

export default class Registro extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            
            form: {
                id: '',
                primer_apellido: '',
                segundo_apellido: '',
                nombre: '',
                username: '',
                password: ''
            }
            
        }
    }

    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        this.RegistroUsuario()

      
    }

    componentDidMount() {
        this.peticionGet()
    }

    peticionGet = () => {
        axios.get(baseUrl)
        .then(res => {
            this.setState({data: res.data})
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    RegistroUsuario = async () => {
        let perfilUsuario = await axios.post(baseUrl, {
            id: uuid,
            primer_apellido: this.state.form.primer_apellido,
            segundo_apellido: this.state.form.segundo_apellido,
            nombre: this.state.form.nombre,
            username: this.state.form.username,
            password: md5(this.state.form.password)
        }).then(response => {
            swal({
                title: "!Usuario Registrado!",
                icon: "success",
                button: "Finalizar",
                });
            
            this.props.history.push('/login');
        }).catch(error => {
            console.log(error.message);
        })
    

    }


    render() {
        const {form} = this.state;
        return(
            <Register>
                <div className="Registro-container">

                <div className="Registro py-5 container ">
                    <form className="form-entrar" id="formulario" onSubmit={this.handleSubmit}>
                        <H1 className="h3 mb-3">
                            ¡Registrate con nosotros!
                        </H1>
                    <div className="fadeIn first ">
                        <Img 
                        src="https://res.cloudinary.com/djlvgbuji/image/upload/v1630981474/R_qbqhdu.png" 
                        id="icon" 
                        alt="User Icon" 
                        />
                        <H3>Por Favor Crea una Cuenta</H3>
                    </div>

                        <Primer
                            type="text"
                            placeholder="Primer Apellido"
                            name="primer_apellido"
                            className="Primer"
                            autoComplete="off"
                            onChange={this.handleChange}
                            value={form.primer_apellido}
                            required=""
                            id="primer"
                        />
                        <br />

                        <Segundo
                            type="text"
                            placeholder="Segundo Apellido"
                            name="segundo_apellido"
                            className="Segundo"
                            autoComplete="off"
                            onChange={this.handleChange}
                            required=""
                            value={form.segundo_apellido}
                            id="segundo"
                        />
                        <br />

                        <Name
                            type="text"
                            name="nombre"
                            className="Name"
                            placeholder="Nombre"
                            required=""
                            onChange={this.handleChange}
                            value={form.name}
                            id="nombre"
                        />
                        <br />

                        <Correo
                            type="email"
                            name="email"
                            className="Correo"
                            placeholder="correo@gmail.com"
                            required=""
                            onChange={this.handleChange}
                            value={form.email}
                            id="username"
                        />
                        <br />

                        <Contra
                            type="Password"
                            name="password1"
                            className="Contra"
                            placeholder="Password1"
                            required=""
                            onChange={this.handleChange}
                            value={form.password1}
                            id="password1"
                        />
                        <br />
                        <Contra
                            type="Password"
                            name="password2"
                            className="Contra"
                            placeholder="Password2"
                            required=""
                            onChange={this.handleChange}
                            value={form.password2}
                            id="password2"
                        />
                        <br />
                        {this.state.tipoModal=='insertar'}
                        <Link
                            type="submit"
                            className="btn btn-primary btn-block mb-1"
                            to="/about"
                        >
                            Registrarse
                        </Link>
                        <br /><br />
                        <Link
                            to="/login"
                            className="link"
                        >
                            ¿Ya esta Registrado? 
                        </Link>
        
                    </form>
                </div>
           </div>
        </Register>
        )
    }
}