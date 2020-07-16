 import React, { Component, useState } from 'react';
import {Modal, ModalTitle, ModalBody, Button} from 'react-bootstrap';
import '../css/JoinDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class JoinDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }
  state = {
    open: false,
    joincode: ''
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
      this.props.history.push({pathname: '/joingame',
        state: {
          joinedcode: this.state.joincode
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
          <Modal.Header>
            <Modal.Title id="Title-Modal">Joining A Game</Modal.Title>
          </Modal.Header>
          <Modal.Body id="Body-Modal">
            <form>
              <input id="Input-Box" type="text" placeholder="Enter game code" value={this.state.joincode} name="gamecode" onChange={this.inputHandler} />
            </form>
          </Modal.Body>
          <Modal.Footer id="Footer-Modal">
          <Link to="/joingame">
            <button onClick={this.handleJoin} id="Join-Button">
              Join
              </button>
            </Link>
            <button onClick={closeModal} id="Cancel-Button">
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

// var Modal = require('react-bootstrap-modal')
 
// class JoinDashboard extends React.Component {
//   state = {
//     open: false
//   }
//   render(){
//     let closeModal = () => this.setState({ open: false })
 
    // let saveAndClose = () => {
    //   api.saveData()
    //     .then(() => this.setState({ open: false }))
    // }
 
//     return (
//       <div>
//         <button type='button' onClick={() => this.setState({ open: true }) }>Launch modal</button>
 
//         <Modal
//           show={this.state.open}
//           onHide={closeModal}
//           aria-labelledby="ModalHeader"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>Some Content here</p>
//           </Modal.Body>
//           <Modal.Footer>
//             // If you don't have anything fancy to do you can use
//             // the convenient `Dismiss` component, it will
//             // trigger `onHide` when clicked
//             <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
 
//             // Or you can create your own dismiss buttons
//             {/* <button className='btn btn-primary' onClick={saveAndClose}>
//               Save
//             </button> */}
//           </Modal.Footer>
//         </Modal>
//       </div>
//     )
//   }
// }

// export default JoinDashboard;