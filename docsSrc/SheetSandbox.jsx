import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


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