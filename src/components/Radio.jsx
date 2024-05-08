import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function Radio(props) {
  const {
    className,
    classNameInput,
    children,
    forwardedRef,
    checked,
    disabled,
    ...restProps
  } = props;

  return children
    ? (
      <label className={classNames('radio', className)} disabled={disabled}>
        <input
          {...restProps}
          className={classNameInput}
          type="radio"
          ref={forwardedRef}
          disabled={disabled}
          checked={checked}
        />
        <span> {children}</span>
      </label>
    ) : (
      <input
        {...restProps}
        className={classNames('radio', className, classNameInput)}
        type="radio"
        ref={forwardedRef}
        disabled={disabled}
        checked={checked}
      />
    );
}

Radio.propTypes = {
  className: PropTypes.string,
  classNameInput: PropTypes.string,
  forwardedRef: PropTypes.object,
  children: PropTypes.node,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
};

export default Radio
  |> memo
  |> withForwardedRef;
