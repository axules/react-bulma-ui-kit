import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import Control from './Control';


function TextInput(props) {
  const {
    forwardedRef,
    className,
    leftIcon,
    rightIcon,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    small,
    medium,
    large,
    offAutocomplete,
    asControl,
    isExpanded,
    ...restProps
  } = props;

  const styleClassName = danger && 'is-danger'
    || success && 'is-success'
    || warning && 'is-warning'
    || info && 'is-info'
    || link && 'is-link'
    || primary && 'is-primary'
    || undefined;

  const sizeClassName = small && 'is-small'
    || medium && 'is-medium'
    || large && 'is-large'
    || undefined;

  const inputRender = (
    <input
      type="text"
      ref={forwardedRef}
      autoComplete={offAutocomplete ? 'off' : undefined}
      {...restProps}
      className={classNames('input', styleClassName, sizeClassName, className)}
    />
  );

  return leftIcon || rightIcon || asControl
    ? (
      <Control
        className={classNames(leftIcon && 'has-icons-left', leftIcon && 'has-icons-right')}
        isExpanded={isExpanded}
      >

        {inputRender}

        {leftIcon && (
          <span className="icon is-left">
            {leftIcon}
          </span>
        )}

        {rightIcon && (
          <span className="icon is-right">
            {rightIcon}
          </span>
        )}
      </Control>
    )
    : inputRender;
}

TextInput.propTypes = {
  forwardedRef: PropTypes.object,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,

  asControl: PropTypes.bool,
  isExpanded: PropTypes.bool,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,

  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,

  offAutocomplete: PropTypes.bool,
};

TextInput.defaultProps = {
};

export default TextInput
  |> memo
  |> withForwardedRef;
