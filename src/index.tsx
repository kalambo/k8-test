import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as SockJs from 'sockjs-client';

const socket = new SockJs('http://35.205.244.201:9999');

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
  onChange = e => this.setState({ value: e.target.value });
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
