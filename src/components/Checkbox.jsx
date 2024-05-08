import {
  memo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useReusableRef } from '../useReusableRef';
import { withForwardedRef } from '../withRef';


function Checkbox(props) {
  const {
    className,
    classNameInput,
    children,
    forwardedRef,
    indeterminate,
    checked,
    disabled,
    ...restProps
  } = props;

  const inputRef = useReusableRef(forwardedRef);

  useEffect(
    () => {
      inputRef.current.indeterminate = checked
        ? undefined
        : indeterminate || undefined;
    },
    [indeterminate, checked, inputRef]
  );

  return children
    ? (
      <label className={classNames('checkbox', className)} disabled={disabled}>
        <input
          style={{ marginRight: '8px' }}
          {...restProps}
          className={classNameInput}
          type="checkbox"
          ref={inputRef}
          disabled={disabled}
          checked={checked}
        />
        {children}
      </label>
    ) : (
      <input
        {...restProps}
        className={classNames('checkbox', className, classNameInput)}
        type="checkbox"
        ref={inputRef}
        disabled={disabled}
        checked={checked}
      />
    );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  classNameInput: PropTypes.string,
  forwardedRef: PropTypes.object,
  children: PropTypes.node,
  indeterminate: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
};

export default Checkbox
  |> memo
  |> withForwardedRef;
