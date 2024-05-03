import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../utils/withRef';

import Control from './Control';


const cnPrefix = 'textInput';

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
    medium,
    large,
    offAutocomplete,
    asControl,
    isExpanded,
    ...restProps
  } = props;

  const style = danger && 'is-danger'
    || success && 'is-success'
    || warning && 'is-warning'
    || info && 'is-info'
    || link && 'is-link'
    || primary && 'is-primary'
    || undefined;

  const size = medium && 'is-medium'
    || large && 'is-large'
    || undefined;

  const inputRender = (
    <input
      type="text"
      ref={forwardedRef}
      autoComplete={offAutocomplete ? 'off' : undefined}
      {...restProps}
      className={classNames('input', style, size, cnPrefix, className)}
    />
  );

  return leftIcon || rightIcon || asControl
    ? <Control
      className={classNames(leftIcon && 'has-icons-left', leftIcon && 'has-icons-right')}
      isExpanded={isExpanded}
    >

      {inputRender}

      {leftIcon
        && (
          <span className="icon is-left">
            {leftIcon}
          </span>
        )
      }
      {rightIcon
        && (
          <span className="icon is-right">
            {rightIcon}
          </span>
        )
      }
    </Control>
    : inputRender;
}

TextInput.propTypes = {
  forwardedRef: PropTypes.object,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,

  asControl: PropTypes.bool,
  isExpanded: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  offAutocomplete: PropTypes.bool,
};

TextInput.defaultProps = {
};

export default TextInput
  |> memo
  |> withForwardedRef;
