import React, { Component } from 'react'
import './App.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      data: {}
    }
  }

  modalData = [
    {
      id: 'modal1',
      header: 'Do you want to delete this file?',
      closeButton: true,
      text: "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?",
      actions: (
        <>
          <Button
            backgroundColor='#b3382c'
            text='Ok'
          />
          <Button
            backgroundColor='#b3382c'
            text='Cancel'
          />
        </>
      )
    },
    {
      id: 'modal2',
      header: 'What is Lorem Ipsum?',
      closeButton: true,
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      actions: (
        <>
          <Button
            backgroundColor='#b3382c'
            text='Submit'
          />
          <Button
            backgroundColor='#b3382c'
            text='Close'
          />
        </>
      )
    }
  ]

  handleOpenModal = (modalId) => {
    const currentModal = this.modalData.find((modal) => modal.id === modalId);
    if (currentModal) {
      this.setState({ isOpen: true, data: currentModal });
    }

  }

  handleCloseModal = () => {
    this.setState({ isOpen: false, data: {} })
  }


  render() {

    return (

      <div className="App">

        <Button
          backgroundColor='#007bff'
          text='Open first modal'
          dataModal='modal1'
          onClick={(e) => this.handleOpenModal(e.target.dataset.modal)}
        />
        <Button
          backgroundColor='#fa6400'
          text='Open second modal'
          dataModal='modal2'
          onClick={(e) => this.handleOpenModal(e.target.dataset.modal)}
        />

        {this.state.isOpen &&
          <Modal
            data={this.state.data}
            onClose={this.handleCloseModal}
          />
        }

      </div>

    );
  }
}


export default App;