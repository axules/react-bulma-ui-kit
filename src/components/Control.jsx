import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function Control(props) {
  const {
    as: HtmlTag = 'div',
    className,
    children,
    isExpanded,
    loading,
    ...restProps
  } = props;

  const classNameValue = classNames(
    'control',
    isExpanded && 'is-expanded',
    loading && 'is-loading',
    className,
  );

  return (
    <HtmlTag {...restProps} className={classNameValue}>
      {children}
    </HtmlTag>
  );
}

Control.propTypes = {
  as: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
  isExpanded: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Control
  |> memo
  |> withForwardedRef;
