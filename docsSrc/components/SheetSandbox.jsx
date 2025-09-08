import { memo } from 'react';
import PropTypes from 'prop-types';


const cnPrefix = 'sheetSandbox';

function SheetSandbox(props) {
  const { children } = props;

  return (
    <div className={cnPrefix}>
      {children}
    </div>
  );
}

SheetSandbox.propTypes = {
  children: PropTypes.node
};

export default SheetSandbox
  |> memo;