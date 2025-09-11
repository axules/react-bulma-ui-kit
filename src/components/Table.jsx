import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableCell from './TableCell';
import TableRow from './TableRow';


function Table(props) {
  const {
    children,
    className,
    bordered,
    striped,
    fullWidth,
    ...restProps
  } = props;

  const classNameValue = classNames(
    'table',
    bordered && 'is-bordered',
    striped && 'is-bordered',
    fullWidth && 'is-fullwidth',
    className,
  );

  return (
    <table {...restProps} className={classNameValue} >
      {children}
    </table>
  );
}

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Table
  |> memo;

export { TableRow, TableCell };
