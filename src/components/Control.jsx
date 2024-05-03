import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function Control(props) {
  const { className, children, isExpanded } = props;
  const classes = [
    isExpanded && 'is-expanded',
  ];

  return (
    <div className={classNames('control', className, ...classes)}>
      {children}
    </div>
  );
}

Control.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isExpanded: PropTypes.bool,
};

Control.defaultProps = {
};

export default Control
  |> memo
  |> withForwardedRef;
