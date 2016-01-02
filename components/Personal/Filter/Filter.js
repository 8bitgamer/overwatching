import React, {Component, PropTypes} from 'react';
import './Filter.scss';

class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  static handleChange(type, event) {
    this.props.onChange(type, event.target.value);
  }
  render() {
    return (
      <div id="content-filter">
        <form>
          <div className="form-section">
            <div className="input-label">Time Period</div>
            <div className="select-elem">
              <div className="style-chevron"></div>
              <select onChange={Filter.handleChange.bind(this, 'timePeriod')}>
                <option selected="selected" value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="all">All Time</option>
              </select>
            </div>
          </div>
          <div className="form-section">
            <div className="input-label">Map</div>
            <div className="select-elem">
              <div className="style-chevron"></div>
              <select onChange={Filter.handleChange.bind(this, 'map')}>
                <option value="Dorado">Dorado</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Hanamura">Hanamura</option>
                <option value="Temple of Anubis">Temple of Anubis</option>
                <option value="Volskaya Industries">Volskaya Industries</option>
                <option value="Numbani">Numbani</option>
                <option value="Hollywood">Hollywood</option>
                <option value="King's Row">King's Row</option>
                <option selected="selected" value="all">All Maps</option>
              </select>
            </div>
          </div>
          <div className="form-section">
            <div className="input-label">Hero Filter</div>
            <input onChange={Filter.handleChange.bind(this, 'hero')} type="text" placeholder="Hero"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
