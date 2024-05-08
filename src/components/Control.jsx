import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function Control(props) {
  const {
    as: HtmlTag,
    className,
    children,
    isExpanded,
    ...restProps
  } = props;
  const classes = [
    isExpanded && 'is-expanded',
  ];

  return (
    <HtmlTag {...restProps} className={classNames('control', className, ...classes)}>
      {children}
    </HtmlTag>
  );
}

Control.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isExpanded: PropTypes.bool,
};

Control.defaultProps = {
  as: 'div'
};

export default Control
  |> memo
  |> withForwardedRef;
