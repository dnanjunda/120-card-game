import React, { Component, useState } from 'react';
import {Modal, ModalTitle, ModalBody, Button} from 'react-bootstrap';
import '../css/JoinDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

export var joinCode;
export var user;
class JoinDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
    this.state = {
      open: false,
      joincode: '',
      username: "abc"
    }
  }

  sendCode=()=>{
    console.log('Join Code:', this.state.joincode);
    this.props.parentCallback(this.state.joincode);
  }

  inputHandler=(e)=>{
    if(e){
        this.setState({
            joincode: e.target.value
        })
    }
  }

  handleFocus() {
    if(this.state.joincode == 'Enter game code') {
      this.state.joincode = '';
    }
  }

  handleJoin() {
    if(this.state.joincode == '') {

    } else {
      console.log('Join Code:', this.state.joincode);
      const data = {code: this.state.joincode};

      fetch("http://localhost:9000/codes/getcode", {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data == "code doesn't exist") {
                    this.state.joincode = '';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            joinCode = this.state.joincode;
            user = this.props.user;

      this.props.history.push(
        {pathname: '/joingame',
        state: {
          codes: this.state.joincode,
          user: this.state.username
        }
      });
    }
  }

render() {
  let closeModal = () => this.setState({ open: false })
  let openModal = () => this.setState({open:true})
    // const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (
        <div>
        <button onClick={openModal} className="Join-Button">
          Join A Game!
        </button>
  
        <Modal
          show={this.state.open}
          onHide={closeModal}
          backdrop="static"
          keyboard={false}
          centered
          id="Join-Modal"
        >
          <Modal.Header id="Join-Header-Modal">
            <Modal.Title id="Join-Title-Modal">Joining A Game</Modal.Title>
          </Modal.Header>
          <Modal.Body id="Join-Body-Modal">
            <form>
              <input id="Input-Box" type="text" placeholder="Enter game code" value={this.state.joincode} name="gamecode" onChange={this.inputHandler} />
            </form>
          </Modal.Body>
          <Modal.Footer id="Join-Footer-Modal">
          <Link>
            <button onClick={this.handleJoin} className="Modal-Join-Button">
              Join
              </button>
            </Link>
            <button onClick={closeModal} className="Modal-Cancel-Button">
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
        <br/>
        <br/>

        </div>
    );
}
}

export default JoinDashboard;