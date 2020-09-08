import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Form, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { fachevronCircleLeft, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class PersonalData extends Component {
    
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
        this.props.history.goBack()
      }
   
    render(){
        return(
        <Fragment>
            <Container style={{ marginTop:'75px' }}>
            <ButtonGroup>
                <Button onClick={this.handleBack} style={{ color:'#fff' }} variant="warning"><FontAwesomeIcon icon={ faChevronCircleLeft } /></Button>
                <Button style={{ color:'#fff' }} variant="warning" disabled>Back to Timeline</Button>
            </ButtonGroup>
            <br></br>
            <br></br>
                <Row>
                    {/* ukuran col sm={4} md={4} lg={4} */}
                    <Col style={{ margin:'auto' }}>
                        <Card>
                        <Card.Header className="text-center text-white" style={{ backgroundColor:'#FF0000'}}>Data Pribadi</Card.Header>
                        <Card.Body>
                            <p style={{ color:'red' }}>{ this.state.message }</p>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formBasicFullName">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control type="text" name="full_name" placeholder="Nama Lengkap" value={this.state.user.email} onChange={this.handleInputChange} required />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicNickname">
                                    <Form.Label>Nama Panggilan/ID Line</Form.Label>
                                    <Form.Control type="text" name="nickname_idLine" placeholder="Nama Panggilan/Id Line" value={this.state.user.email} onChange={this.handleInputChange} required />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicPlaceBirth">
                                    <Form.Label>Tempat Lahir</Form.Label>
                                    <Form.Control type="text" name="place_of_birth" placeholder="Tempat Lahir" value={this.state.user.email} onChange={this.handleInputChange} required />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicDateBirth">
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control type="date" name="date_of_birth" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicGender">
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <Form.Check
                                        type="radio"
                                        label="Laki-laki"
                                        name="gender"
                                        id="formBasicGender"
                                        required
                                        />
                                    <Form.Check
                                        type="radio"
                                        label="Perempuan"
                                        name="gender"
                                        id="formBasicGender"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicReligion">
                                    <Form.Label>Agama</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="religion"
                                        id="formBasicReligion"
                                        required
                                    >
                                        <option>Pilih...</option>
                                        <option value="Budha">Budha</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Katolik">Katolik</option>
                                        <option value="Khonghucu">Khonghucu</option>
                                        <option value="Kristen">Kristen</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicBloodType">
                                    <Form.Label>Golongan Darah</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="blood_type"
                                        id="formBasicBloodType"
                                        required
                                    >
                                        <option>Pilih...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="AB">AB</option>
                                        <option value="O">O</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicFacultyMajorGeneration">
                                    <Form.Label>Fakultas/Jurusan/angkatan</Form.Label>
                                    <Form.Control type="text" name="faculty_majors_generation" placeholder="Fakultas/Jurusan/Angkatan" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicAddressOrigin">
                                    <Form.Label>Alamat Asli</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="address_of_origin" placeholder="Alamat Asli" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicAddressInJogja">
                                    <Form.Label>Alamat di Jogja</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="address_in_jogja" placeholder="Alamat di Jogja" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicCitizenship">
                                    <Form.Label>Kewarganegaran</Form.Label>
                                    <Form.Control type="text" name="citizenship" placeholder="Kewarganegaraan" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicPhone">
                                    <Form.Label>No Telepon</Form.Label>
                                    <Form.Control type="text" name="phone" placeholder="+62xxx..." required />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Email" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicHobby">
                                    <Form.Label>Hobi</Form.Label>
                                    <Form.Control type="text" name="hobby" placeholder="Hobi" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicFutureGoal">
                                    <Form.Label>Cita-cita</Form.Label>
                                    <Form.Control type="text" name="future_goals" placeholder="Cita cita" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicPersonalWebsite">
                                    <Form.Label>Website Pribadi</Form.Label>
                                    <Form.Control type="text" name="personal_website" placeholder="Website Pribadi" required />
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

export default PersonalData;

