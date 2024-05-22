import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import Control from './Control';
import {
  getSizeClassName,
  getStyleClassName
} from './utils';


function TextInput(props) {
  const {
    as: HtmlTag = 'input',
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
    autoCompleteOff,
    autoComplete,
    asControl,
    isExpanded,
    ...restProps
  } = props;

  const styleClassName = getStyleClassName({ danger, success, warning, info, link, primary });
  const sizeClassName = getSizeClassName({ small, medium, large });

  const inputRender = (
    <HtmlTag
      type={HtmlTag === 'input' ? 'text' : undefined}
      ref={forwardedRef}
      autoComplete={autoComplete === false || autoCompleteOff ? 'off' : autoComplete}
      {...restProps}
      className={classNames('input', styleClassName, sizeClassName, className)}
    />
  );

  return leftIcon || rightIcon || asControl
    ? (
      <Control
        className={classNames(leftIcon && 'has-icons-left', rightIcon && 'has-icons-right')}
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
  as: PropTypes.any,
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

  autoComplete: PropTypes.any,
  autoCompleteOff: PropTypes.bool,
};

export default TextInput
  |> memo
  |> withForwardedRef;
