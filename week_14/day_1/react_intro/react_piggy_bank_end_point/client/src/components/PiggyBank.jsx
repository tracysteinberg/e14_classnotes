import React from 'react';
import PropTypes from 'prop-types';

class PiggyBank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    // this.addToSavings = this.addToSavings.bind(this);
  }

  addToSavings() {
    this.setState((prevState) => {
      return {total: prevState.total + 1};
    });
  }

  render() {
    return (
      <div className="bank-box">
      <h1>{this.props.title}</h1>
      <p>Hello, world! I am a Piggy Bank.</p>
      {/* Either button style will work */}
      <button onClick={ () => { this.addToSavings() } }>Add Funds (ES6)</button>
      <button onClick={ this.addToSavings.bind(this) }>Add Funds (ES5)</button>
      </div>
    );
  }
}

PiggyBank.propTypes = {
  title: PropTypes.string.isRequired
};

export default PiggyBank;