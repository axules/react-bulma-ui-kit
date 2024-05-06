import { PureComponent } from 'react';


class NumberInput extends PureComponent {
  render() {
    return (
      <input
        {...this.props}
        type="number"
        data-type="number"
      />
    );
  }
}

NumberInput.propTypes = {
};

NumberInput.defaultProps = {
};

export default NumberInput;
