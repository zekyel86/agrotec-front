import React from 'react';
import {
 Button,
 Form,
 FormGroup,
 Label,
 Input,
 Container,
 Row,
 Col,
} from 'reactstrap';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const CrearProveedor = () => {

  //notificaciones
  const notify = () => toast.success('Proveedor Creado correctamente!', {
    duration: 4000,
    position: 'center',

    // Styling
    style: {
    fontSize: '20px',
    backgroundColor: '#cafde6'
    },

    // Custom Icon
    icon: '👏'});
    
  const notifyError = () => toast.error('Error al Crear Proveedor :(' , {
    duration: 4000,
    position: 'center',

    // Styling
    style: {
    fontSize: '20px',
    color: 'white',
    backgroundColor: 'red'
    }
  });


 const [form, handleChange, , handleReset] = useForm({
  nombre: '',
  direccion: '',
  localidad: '',
  contacto: '',
  cuit: '',
 });

 const { nombre, direccion, localidad, contacto, cuit } = form;

 //se envian los datos
 const handleSubmit = async (e) => {
  e.preventDefault();

 const proveedor = { nombre, direccion, localidad, contacto, cuit };

 const res = await axios.post('http://localhost:3001/api/proveedores', 
 proveedor, {
   headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`,
   },
  })
  .then((result) => {
    notify();
    handleReset();
  }, (error) => {
    notifyError();
  });
 };

 return (
  <Container fluid='fluid'>
   <Row>
    <Col
     md={{
      offset: 2,
      size: 8,
     }}
     sm='12'
    >
     <Form className='create-form form-control-md' action=''>
      <h1 className='text-center'>
       <span className='font-weight-bold text-center'>Crear Proveedor</span>
      </h1>
      <hr />
      <FormGroup>
       <Label>Nombre</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='nombre'
        value={nombre}
       />
      </FormGroup>
      <FormGroup>
       <Label>Dirección</Label>
       <Input
        type='textarea'
        onChange={handleChange}
        name='direccion'
        value={direccion}
       />
      </FormGroup>
      <FormGroup>
       <Label>Localidad</Label>
       <Input
        type='textarea'
        onChange={handleChange}
        name='localidad'
        value={localidad}
       />
      </FormGroup>
      <FormGroup>
       <Label>Contacto</Label>
       <Input
        type='text'
        onChange={handleChange}
        name='contacto'
        value={contacto}
       />
      </FormGroup>
      <FormGroup>
       <Label>CUIT</Label>
       <Input type='text' onChange={handleChange} name='cuit' value={cuit} />
      </FormGroup>
      <div className='d-grid gap-2 col-3 mx-auto pt-2'>
       <Button
        className='btn btn-block'
        type='submit'
        onClick={handleSubmit}
        color='primary'
       >
        Guardar
       </Button>
       <Button className='btn btn-block' onClick={handleReset} color='primary'>
        Reset
       </Button>
       <Toaster />
      </div>
     </Form>
    </Col>
   </Row>
  </Container>
 );
};

export default CrearProveedor;
