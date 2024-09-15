import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableCell from './Table/TableCell';
import TableRow from './Table/TableRow';


function Table(props) {
  const {
    children,
    className,
    bordered,
    striped,
    ...restProps
  } = props;

  const classNameValue = classNames(
    'table',
    bordered && 'is-bordered',
    striped && 'is-bordered',
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
};

export default Table
  |> memo;

export { TableRow, TableCell };
