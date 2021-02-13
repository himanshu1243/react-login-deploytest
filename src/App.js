

import { Component } from 'react';

import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import Loader from './components/Loader/Loader';

class App extends Component {
  render(){
  
  return(
    <BrowserRouter>
    <div>
      <Container>
      <Row>
      <Loader/>
      </Row>
      </Container>
  </div>
  </BrowserRouter>
  )
  };
}

export default App;
