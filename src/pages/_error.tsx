import React from 'react';
import { Jumbotron } from 'react-bootstrap';

interface Props {}
interface State {
  cnt: number;
}

export default class ErrorPage extends React.Component<Props, State> {
  state: State = { cnt: 404 };

  onClick = () => {
    this.setState({ cnt: this.state.cnt + 1 });
  };

  render() {
    return (
      <Jumbotron style={{ textAlign: 'center' }}>
        <h1 onClick={this.onClick} style={{ userSelect: 'none', cursor: 'pointer' }}>
          {this.state.cnt}
        </h1>
        <p>Страница не найдена</p>
      </Jumbotron>
    );
  }
}
