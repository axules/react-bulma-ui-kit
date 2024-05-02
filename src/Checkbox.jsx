import {
  useEffect,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from './withRef';


function Checkbox(props) {
  const { className, children, forwardedRef, indeterminate, checked, ...restProps } = props;
  const inputRef = useRef(forwardedRef);

  useEffect(() => {
    inputRef.current.indeterminate = checked
      ? undefined
      : indeterminate || undefined;
  }, [indeterminate, checked]);

  return children
    ? (
      <label className={classNames('checkbox', className)}>
        <input type="checkbox" ref={inputRef} checked={checked} {...restProps} />
        <span style="margin-left: 15px;">{children}</span>
      </label>
    )
    : (
      <input
        type="checkbox"
        className={classNames('checkbox', className)}
        ref={inputRef}
        checked={checked}
        {...restProps}
      />
    );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.object,
  children: PropTypes.node,
  indeterminate: PropTypes.bool,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
};

export default Checkbox
  |> withForwardedRef;
