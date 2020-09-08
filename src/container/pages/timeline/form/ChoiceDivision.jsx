import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Form, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { fachevronCircleLeft, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ChoiceDivision extends Component {
    
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
                        <Card.Header className="text-center text-white" style={{ backgroundColor:'#FF0000'}}>Pilihan Divisi</Card.Header>
                        <Card.Body>
                            <p style={{ color:'red' }}>{ this.state.message }</p>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formBasicChoice1">
                                    <Form.Label>Pilihan 1</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="choice1"
                                        id="formBasicChoice1"
                                        required
                                    >
                                        <option>Pilih...</option>
                                        <option value="Redaksi">Redaksi</option>
                                        <option value="Penelitian dan Pengembangan">Penelitian dan Pengembangan</option>
                                        <option value="Bisnis dan Pemasaran">Bisnis dan Pemasaran</option>
                                        <option value="Produksi (Sub-divisi Fotografer)">Produksi (Sub-divisi Fotografer)</option>
                                        <option value="Produksi (Sub-divisi Layouter)">Produksi (Sub-divisi Layouter)</option>
                                        <option value="Produksi (Sub-divisi Ilustrator)">Produksi (Sub-divisi Ilustrator)</option>
                                        <option value="Produksi (Sub-divisi Web Design)">Produksi (Sub-divisi Web Design)</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicChoice2">
                                    <Form.Label>Pilihan 2</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="choice2"
                                        id="formBasicChoice2"
                                    >
                                        <option>Pilih...</option>
                                        <option value="Redaksi">Redaksi</option>
                                        <option value="Penelitian dan Pengembangan">Penelitian dan Pengembangan</option>
                                        <option value="Bisnis dan Pemasaran">Bisnis dan Pemasaran</option>
                                        <option value="Produksi (Sub-divisi Fotografer)">Produksi (Sub-divisi Fotografer)</option>
                                        <option value="Produksi (Sub-divisi Layouter)">Produksi (Sub-divisi Layouter)</option>
                                        <option value="Produksi (Sub-divisi Ilustrator)">Produksi (Sub-divisi Ilustrator)</option>
                                        <option value="Produksi (Sub-divisi Web Design)">Produksi (Sub-divisi Web Design)</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicReason">
                                    <Form.Label>Jelaskan Alasan Anda Melamar di Divisi/Sub-divisi tersebut!</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="reason" placeholder="Alasan" value={this.state.user.password} onChange={this.handleInputChange} required />
                                </Form.Group>

                                <Form.Group controlId="formBasicSkills">
                                    <Form.Label>Sebutkan Keterampilan Anda yang Menunjang Keberadaan Anda di Divisi/Sub-divisi tersebut!</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="skills" placeholder="Keterampilan" value={this.state.user.password} onChange={this.handleInputChange} required />
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

export default ChoiceDivision;

