import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Form, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { fachevronCircleLeft, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Announcement extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            message:'',
            user:{
              username : '',
              password: ''
            }
        };
      }
      handleInputChange = (event) => {
        let dataUser = {...this.state.user};
        dataUser[event.target.name]=event.target.value
        this.setState({
          user: dataUser
        });
      }
      
      onSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://127.0.0.1:9000/user/api/authenticate`,this.state.user)
        .then(result => {
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('_id', result.data.user._id);
                this.props.history.push('/user/dashboard');
        })
        .catch(err =>{
            this.setState({
              ...this.state,
              message: 'Terjadi kesalahan username atau password.'
            })
            //console.log(err)
        })
  
      }
  
      componentDidMount() {
        localStorage.clear();
      }
  
      handleBack = () => {
        this.props.history.goBack();
      }

    render(){
        return(
        <Fragment>
            <Container style={{ marginTop:'75px' }}>
            <ButtonGroup>
                <Button onClick={this.handleBack}  style={{ color:'#fff' }} variant="warning"><FontAwesomeIcon icon={ faChevronCircleLeft } /></Button>
                <Button style={{ color:'#fff' }} variant="warning" disabled>Back to Timeline</Button>
            </ButtonGroup>
            <br></br>
            <br></br>
                <Row>
                    {/* ukuran col sm={4} md={4} lg={4} */}
                    <Col style={{ margin:'auto' }}>
                        <Card>
                        <Card.Header className="text-center text-white" style={{ backgroundColor:'#FF0000'}}>Pengumuman</Card.Header>
                        <Card.Body>
                            <p style={{ color:'red' }}>{ this.state.message }</p>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formBasicFullName">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control disabled type="text" name="full_name" value="Nama Lengkap"  />
                                </Form.Group>

                                <Form.Group controlId="formBasicStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control disabled type="text" name="status" value="Diterima" />
                                </Form.Group>

                                <Form.Group controlId="formBasicDivision">
                                    <Form.Label>Divisi</Form.Label>
                                    <Form.Control disabled type="text" name="division"  value="Nama Divisi/Subdiv" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                        </Card>
                        <br></br><br></br><br></br>
                    </Col>
                </Row>
            </Container>
        </Fragment>)
    }

}

export default Announcement;

