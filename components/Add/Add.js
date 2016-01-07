import React, {Component} from 'react';
import DataForm from './DataForm';
import './Add.scss';

class Add extends Component {
  state = {
    isDataFormOpen: false,
  }

  toggleDataForm() {
    this.setState({isDataFormOpen: !this.state.isDataFormOpen});
  }
  render() {
    return (
      <div>
        <div onClick={this.toggleDataForm.bind(this)} id="add">+</div>
        {this.state.isDataFormOpen === true ? <DataForm /> : ''}
      </div>
    );
  }
}

export default Add;
