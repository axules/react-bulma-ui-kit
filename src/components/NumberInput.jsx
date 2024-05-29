import { memo } from 'react';


function NumberInput(props) {
  return (
    <input
      {...props}
      type="number"
      data-type="number"
    />
  );
}

NumberInput.propTypes = {
};

export default NumberInput
  |> memo;
