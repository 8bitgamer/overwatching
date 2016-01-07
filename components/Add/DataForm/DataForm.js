import React, {Component} from 'react';
import './DataForm.scss';

class DataForm extends Component {
  state = {
    win: true,
  };
  setWin(status) {
    this.setState({win: status});
  }
  render() {
    return (
      <div id="Data-Input-Form" className="tile">
        <div className="winLoss">
          <div className={'win button ' + (this.state.win === true ? 'select' : '')}
               onClick={this.setWin.bind(this, true)}>Win</div>
          <div className={'loss button ' + (this.state.win === false ? 'select' : '')}
               onClick={this.setWin.bind(this, false)}>Loss</div>
        </div>

        <div>
          <div className="endButtons">
            <div className="button close">Close</div>
            <div className="button save">Save</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataForm;
