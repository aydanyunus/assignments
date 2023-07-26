import React, { Component } from 'react'
import './App.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isFirstModalOpen: false,
      isSecModalOpen: false
    }
  }
  handleOpenFirstModal = () => {
    this.setState((prevState) => ({ isFirstModalOpen: prevState.isFirstModalOpen = true, isSecModalOpen: prevState.isSecModalOpen = false }));
  }

  handleOpenSecModal = () => {
    this.setState((prevState) => ({ isSecModalOpen: prevState.isSecModalOpen = true, isFirstModalOpen: prevState.isFirstModalOpen = false }));
  }

  handleCloseFirstModal = () => {
    this.setState((prevState) => ({ isFirstModalOpen: prevState.isFirstModalOpen = false}));
  }

  handleCloseSecModal = () => {
    this.setState((prevState) => ({ isSecModalOpen: prevState.isSecModalOpen = false}));
  }


  render() {

    return (

      <div className="App">
        
        <Button
          backgroundColor='#007bff'
          text='Open first modal'
          onClick={this.handleOpenFirstModal}
        />
        <Button
          backgroundColor='#fa6400'
          text='Open second modal'
          onClick={this.handleOpenSecModal}
        />

        {this.state.isFirstModalOpen &&
          <Modal
            header='Do you want to delete this file?'
            closeButton={true}
            text="Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
            actions={
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
            }
            onClose={this.handleCloseFirstModal}
          />
        }

        {this.state.isSecModalOpen &&
          <Modal
            header='What is Lorem Ipsum?'
            closeButton={true}
            text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            actions={
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
            }
            onClose={this.handleCloseSecModal}

          />
        }

      </div>

    );
  }
}




export default App;
