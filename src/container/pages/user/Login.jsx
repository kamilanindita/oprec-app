import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Login extends Component {
    
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


    render(){
        return(
        <Fragment>
            <Container style={{ marginTop:'75px' }}>
                <Row>
                    <Col sm={4} md={4} lg={4} style={{ margin:'auto' }}>
                        <Card>
                        <Card.Header className="text-center text-white" style={{ backgroundColor:'#FF0000'}}>Login</Card.Header>
                        <Card.Body>
                            <p style={{ color:'red' }}>{ this.state.message }</p>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" placeholder="Username/No Pendaftaran" value={this.state.user.email} onChange={this.handleInputChange} required />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" value={this.state.user.password} onChange={this.handleInputChange} required />
                                </Form.Group>
                                {/* <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <div className="text-center">
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                                </div>
                            </Form>
                        </Card.Body>
                        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>)
    }

}

export default Login;

