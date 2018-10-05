import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as SockJs from 'sockjs-client';

const socket = new SockJs('https://mydomain.com/my_prefix');

class App extends React.Component {
  state = {
    value: '',
    current: '',
  };
  componentDidMount() {
    socket.onmessage = e => {
      this.setState({ current: e.data });
    };
  }
  onChange = value => this.setState({ value });
  onClick = () => {
    socket.send(this.state.value);
  };
  render() {
    return (
      <div>
        <p>Input:</p>
        <input value={this.state.value} onChange={this.onChange} />
        <button onClick={this.onClick}>Send</button>
        <p>Current:</p>
        <p>{this.state.current}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
