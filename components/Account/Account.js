import React, {Component} from 'react';
import './Account.scss';

class Account extends Component {
  state = {
    section: 'general',
    settings: {
      defaultTimePeriod: 'week',
      defaultMap: 'all',
      defaultGameSection: 'all',
    },
  };
  // this will be defined by a User Singleton when that is a thing
  static initialStates = {
    settings: {
      defaultTimePeriod: 'week',
      defaultMap: 'all',
      defaultGameSection: 'all',
    },
  }
  static areSettingsChanged(settings) {
    return (function testPropsEqual(keys) {
      const [curKey, ...nextKeys] = keys;
      const status = settings[curKey] === Account.initialStates.settings[curKey];
      if (nextKeys.length === 0 || status === false) {
        return status;
      }
      return status && testPropsEqual(nextKeys);
    })(Object.keys(Account.initialStates.settings));
  }
  static createUserInfo(data) {
    // I know this may not be the best way to do this but the
    // spread operator brought back happy memories of Haskell
    //
    // (be happy I did not implement recursion with a y-combinator)
    return (function createArray(arr, keys) {
      const [curKey, ...restKeys] = keys;
      arr.push({
        title: curKey,
        value: data[curKey],
      });
      if (restKeys.length === 0) {
        return arr;
      }
      return createArray(arr, restKeys);
    })([], Object.keys(data))
    .map((elem) => {
      return (
        <li>
          <div className="title">{elem.title.replace(/([A-Z])/g, ' $1').trim()}</div>
          <div className="value">{elem.value}</div>
        </li>
      );
    });
  }
  handleSectionChange(section) {
    this.setState({section: section});
  }
  handleSettingsChange(setting, event) {
    const state = this.state;
    state.settings[setting] = event.target.value;
    this.setState(state);
  }
  resetSettings() {
    this.setState({settings: JSON.parse(JSON.stringify(Account.initialStates.settings))});
  }
  render() {
    const userData = {
      accountName: 'Hehk',
      phoneNumber: '(513) 555-5555',
      email: 'me@kyleh.io',
      dateJoined: 'Mar 2, 2015',
      membershipStatus: 'Premium',
    };
    return (
      <div id="Account">
        <div className="user-avatar"></div>
        <ul className="sections">
          <li className={this.state.section === 'general' ? 'selected' : ''}
              onClick={this.handleSectionChange.bind(this, 'general')}>General</li>
          <li className={this.state.section === 'settings' ? 'selected' : ''}
              onClick={this.handleSectionChange.bind(this, 'settings')}>Settings</li>
          <li className={this.state.section === 'privacy' ? 'selected' : ''}
              onClick={this.handleSectionChange.bind(this, 'privacy')}>Privacy</li>
        </ul>
        <div className="content">
            {this.state.section === 'general' ? (<ul>{Account.createUserInfo(userData)}</ul>) : '' }
            {this.state.section === 'settings' ?
              <form>
                <ul>
                  <li>
                    <div className="title">Default Time Period</div>
                    <div className="select-elem">
                      <div className="style-chevron"></div>
                      <select value={this.state.settings.defaultTimePeriod}
                              onChange={this.handleSettingsChange.bind(this, 'defaultTimePeriod')}>
                        <option value="week">Last Week</option>
                        <option value="month">Last Month</option>
                        <option value="all">All Time</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="title">Default Map</div>
                    <div className="select-elem">
                      <div className="style-chevron"></div>
                      <select value={this.state.settings.defaultMap}
                              onChange={this.handleSettingsChange.bind(this, 'defaultMap')}>
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
                  </li>
                  <li>
                    <div className="title">Default Game Section</div>
                    <div className="select-elem">
                      <div className="style-chevron"></div>
                      <select value={this.state.settings.defaultGameSection}
                              onChange={this.handleSettingsChange.bind(this, 'defaultGameSection')}>
                        <option value="early">Early</option>
                        <option value="mid">Middle</option>
                        <option value="late">Late</option>
                        <option value="all">All Game</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="empty"></div>
                  </li>
                  {Account.areSettingsChanged(this.state.settings) ? '' :
                    <li>
                      <div onClick={this.resetSettings.bind(this)} className="button left color-1">Reset</div>
                      <div className="button color-4">Apply</div>
                    </li>}
                </ul>
              </form> : '' }
            {this.state.section === 'privacy' ? <div>Dont have any right now.</div> : '' }
        </div>
      </div>
    );
  }
}

export default Account;
