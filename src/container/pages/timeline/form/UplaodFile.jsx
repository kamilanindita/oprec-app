import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Form, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { fachevronCircleLeft, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class UploadFile extends Component {
    
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
                        <Card.Header className="text-center text-white" style={{ backgroundColor:'#FF0000'}}>Unggah Berkas</Card.Header>
                        <Card.Body>
                            <p style={{ color:'red' }}>{ this.state.message }</p>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formBasicPhoto">
                                    <Form.Label>Pasfoto</Form.Label>
                                    <Form.File id="formBasicPhoto"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicCV">
                                    <Form.Label>CV</Form.Label>
                                    <Form.File id="formBasicCV"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicIdCard">
                                    <Form.Label>KTM/KTP</Form.Label>
                                    <Form.File id="formBasicIdCard"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicCertificate">
                                    <Form.Label>Sertifikat</Form.Label>
                                    <Form.File id="formBasicCertificate"/>
                                </Form.Group>

                                {/* <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <div className="text-center">
                                <Button variant="primary" type="submit">
                                    Submit 
                                </Button>
                                </div>
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

export default UploadFile;

