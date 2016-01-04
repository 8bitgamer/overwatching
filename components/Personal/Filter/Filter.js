import React, {Component, PropTypes} from 'react';
import './Filter.scss';

class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onReset: PropTypes.func,
    filterStatus: PropTypes.object,
  };
  state = {
    timePeriod: 'week',
    map: 'all',
    hero: '',
  };
  static defaultFilterStatus = {
    timePeriod: 'week',
    map: 'all',
    hero: '',
  };

  handleChange(type, event) {
    const state = this.state;
    state[type] = event.target.value;
    this.setState(state);
    this.props.onChange(state);
  }
  handleReset() {
    const newFilterState = JSON.parse(JSON.stringify(Filter.defaultFilterStatus));
    this.setState(newFilterState);
    this.props.onReset(newFilterState);
  }
  static filterEqualsDefault(filter1) {
    return (function loopThroughObj(objKeys, status) {
      const [key, ...keys] = objKeys;
      const newStatus = status && (filter1[key] === Filter.defaultFilterStatus[key]);
      if (keys.length === 0 || newStatus === false ) {
        return newStatus;
      }
      return loopThroughObj(keys, newStatus);
    })(Object.keys(filter1), true);
  }
  render() {
    return (
      <div id="content-filter">
        <form>
          <div className="form-section">
            <div className="input-label">Time Period</div>
            <div className="select-elem">
              <div className="style-chevron"></div>
              <select value={this.state.timePeriod} onChange={this.handleChange.bind(this, 'timePeriod')}>
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="all">All Time</option>
              </select>
            </div>
          </div>
          <div className="form-section">
            <div className="input-label">Map</div>
            <div className="select-elem">
              <div className="style-chevron"></div>
              <select value={this.state.map} onChange={this.handleChange.bind(this, 'map')}>
                <option value="Dorado">Dorado</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Hanamura">Hanamura</option>
                <option value="Temple of Anubis">Temple of Anubis</option>
                <option value="Volskaya Industries">Volskaya Industries</option>
                <option value="Numbani">Numbani</option>
                <option value="Hollywood">Hollywood</option>
                <option value="King's Row">King's Row</option>
                <option value="all">All Maps</option>
              </select>
            </div>
          </div>
          <div className="form-section">
            <div className="input-label">Hero Filter</div>
            <input value={this.state.hero} onChange={this.handleChange.bind(this, 'hero')} type="text" placeholder="Hero"/>
          </div>
        </form>
        {Filter.filterEqualsDefault(this.props.filterStatus) === false ? (
          <div className="btn reset" onClick={this.handleReset.bind(this)}>Reset</div>
        ) : ''}
      </div>
    );
  }
}

export default Filter;
