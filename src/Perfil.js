import React, { Component } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const baseUrl = "https://herokuapitemp.herokuapp.com/usuario/";



export default class Perfil extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            data: [],
            modalInsertar: false,
            modalEliminar: false,
            form: {
                id: '',
                primer_apellido: '',
                segundo_apellido: '',
                nombre: '',
                username: '',
                password: ''
            },
            tipoModal: ''
        }
    }

    componentDidMount(){
        this.peticionGet();
    }

    modalInsertar = () => {
        this.setState({modalInsertar: !this.state.modalInsertar})
    }

    modalEliminar = () => {
        this.setState({modalEliminar: !this.state.modalEliminar})
    }


    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    SeleccionarUsuario = (usuario) => {

         this.setState({
             tipoModal: 'actualizar',
             form: {
                id: usuario.id,
                primer_apellido: usuario.primer_apellido,
                segundo_apellido: usuario.segundo_apellido,
                nombre: usuario.nombre,
                username: usuario.username,
                password: usuario.password
            
             }
         })
         console.log(usuario)
    }

    peticionGet=()=>{
        axios.get(baseUrl)
        .then(response => {
            this.setState({data: response.data})
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    peticionesPost = async () => {
        
        await axios.post(baseUrl,this.state.form)
        .then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
             console.log(error.message);
        })
    }
   
    peticionPut = async () => {
        await axios.put(baseUrl+this.state.form.id,this.state.form)
        .then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionDelete = async () => {
        await axios.delete(baseUrl+this.state.form.id)
        .then(response => {
            this.modalEliminar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    

    render() {
        const {form} = this.state;
        return (
            <div className="container">
                <br />
                <button className="btn btn-dark"
                onClick={() => {this.setState({form: null, tipoModal: 'insertar'});this.modalInsertar()}}
                >Crear Nuevo Usuario</button>
                <br /> <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Primer Apellido</th>
                            <th>Segundo Apellido</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Password</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(usu => {
                                return(
                                    <tr key={usu.id}>
                                        <td>{usu.id}</td>
                                        <td>{usu.primer_apellido}</td>
                                        <td>{usu.segundo_apellido}</td>
                                        <td>{usu.nombre}</td>
                                        <td>{usu.username}</td>
                                        <td>{usu.password}</td>
                                        
                                        
                                        <button className="btn btn-primary"
                                         onClick={() => {this.SeleccionarUsuario(usu); this.modalInsertar()}}></button>
                         
                                         <button className="btn btn-danger"
                                         onClick={() => {this.SeleccionarUsuario(usu); this.setState({modalEliminar: true})}}></button>
                                    </tr>
                                )
                            })
                        }
                      
                    </tbody>
                </table>

                <Modal isOpen={this.state.modalInsertar}>
                    
                    <ModalHeader style={{display: 'block'}}>
                    
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">id</label>
                            <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id:''}/>
                            <br/>
                            <label htmlFor="primer_apellido">Primer Apellido</label>
                            <input className="form-control" type="text" name="primer_apellido" id="primer_apellido" onChange={this.handleChange} value={form?form.primer_apellido:''}/>
                            <br/>
                            <label htmlFor="segundo_apellido">Segundo Apellido</label>
                            <input className="form-control" type="text" name="segundo_apellido" id="segundo_apellido" onChange={this.handleChange} value={form?form.segundo_apellido:''}/>
                            <br/>
                            <label htmlFor="nombre">Nombre</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre:''}/>
                            <br/>
                            <label htmlFor="username">Email</label>
                            <input className="form-control" type="text" name="username" id="username" onChange={this.handleChange} value={form?form.username:''}/>
                            <br/>
                            <label htmlFor="password">Password</label>
                            <input className="form-control" type="text" name="password" id="password" readOnly onChange={this.handleChange} md5={form?form.password:''}/>
                            <br/>
                            
                            <br/>
                            


                        </div>
{/* 
                        <Link
                        type="submit"
                        className="btn btn-primary btn-block" 
                        onClick={() => this.PerfilUsuario()}
                        
                        to="/perfil"
                        
                        >
                        Entrar
                    
                        
                        </Link> */}

                    </ModalBody>
                    <ModalFooter>
                       {this.state.tipoModal==='insertar'}
                        <button className="btn btn-success"
                        onClick={() => this.peticionesPost()}>
                            Insertar
                        </button>
                        <button className="btn btn-primary"
                        onClick={() => this.peticionPut()}>
                            Actualizar
                        </button>
                        <button className="btn btn-danger"
                         onClick={() => this.modalInsertar()}
                           >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        ¿Está seguro de eliminar el Registro? {form && form.nombre}
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger"
                       onClick={() => this.peticionDelete()}>Sí</button>
                        <button className="btn btn-secundary"
                       onClick={() => this.setState({modalEliminar:false})}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}