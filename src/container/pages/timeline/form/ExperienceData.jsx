import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Form, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { fachevronCircleLeft, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ExperienceData extends Component {
    
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
                        <Card.Header className="text-center text-white" style={{ backgroundColor:'#FF0000'}}>Data Pengalaman</Card.Header>
                        <Card.Body>
                            <p style={{ color:'red' }}>{ this.state.message }</p>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formBasicWorkExperience">
                                    <Form.Label>Pengalaman Kerja/Kepanitiana</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="work_experience" placeholder="Pengalaman Kerja/Kepanitiaan" value={this.state.user.email} onChange={this.handleInputChange} required />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicOrganizationalExperience">
                                    <Form.Label>Pengalaman Organisasi</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="organizational_experience" placeholder="Pengalaman Organisasi" value={this.state.user.email} onChange={this.handleInputChange} required />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicInterest">
                                    <Form.Label>Sebutkan Minat Anda!</Form.Label>
                                    <Row>
                                    <Col>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Sosial"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Bisnis"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Filsafat"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Hukum"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Sosial Media"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Kesehatan"
                                        ></Form.Check>
                                    </Col>
                                    <Col>
                                    <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Politik"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Olahraga"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Religi"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Entertainment"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Seni dan Budaya"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="interest"
                                            id="formBasicInterest"
                                            label="Sains dan Teknologi"
                                        ></Form.Check>
                                    </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicSelfDescription">
                                    <Form.Label>Deskripsi Diri Anda, baik yang positif maupun yang negatif!</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="self_description" placeholder="Deskripsi Diri,baik yang positif maupun yang negatif" value={this.state.user.email} onChange={this.handleInputChange} required />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicInfoOprec">
                                    <Form.Label>Darimana Anda Mengetahui Open Recruitment SKM UGM Bulaksumur 2020</Form.Label>
                                    <Form.Check
                                            type="checkbox"
                                            name="info_oprec"
                                            id="formBasicInfoOprec"
                                            label="stand Gelanggang Expo"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="info_oprec"
                                            id="formBasicInfoOprec"
                                            label="Poster"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="info_oprec"
                                            id="formBasicInfoOprec"
                                            label="Sosial Media"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="info_oprec"
                                            id="formBasicInfoOprec"
                                            label="Teman/Kakak Tingkat"
                                        ></Form.Check>
                                        <Form.Check
                                            type="checkbox"
                                            name="info_oprec"
                                            id="formBasicInfoOprec"
                                            label="Lain-lain"
                                        ></Form.Check>
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

export default ExperienceData;

