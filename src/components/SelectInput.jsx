import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import Control from './Control';
import {
  getSizeClassName,
  getStyleClassName
} from './utils';


function SelectInput(props) {
  const {
    as: HtmlTag = 'div',
    forwardedRef,
    className,
    icon,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    small,
    medium,
    large,
    asControl,
    isExpanded,
    loading,
    multiple,
    fullWidth,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'select',
    getStyleClassName({ danger, success, warning, info, link, primary }),
    getSizeClassName({ small, medium, large }),
    loading && 'is-loading',
    multiple && 'is-multiple',
    fullWidth && 'is-fullwidth',
    className,
  );

  const selectRender = (
    <HtmlTag className={classNamesValue}>
      <select
        ref={forwardedRef}
        multiple={multiple}
        {...restProps}
      />
    </HtmlTag>
  );

  return icon || asControl
    ? (
      <Control
        className={classNames(icon && 'has-icons-left')}
        isExpanded={isExpanded}
      >
        {selectRender}

        {icon && (
          <span className="icon is-left">
            {icon}
          </span>
        )}
      </Control>
    )
    : selectRender;
}

SelectInput.propTypes = {
  as: PropTypes.any,
  forwardedRef: PropTypes.object,
  className: PropTypes.string,
  icon: PropTypes.node,

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

  loading: PropTypes.bool,
  multiple: PropTypes.bool,

  fullWidth: PropTypes.bool,
};

export default SelectInput
  |> memo
  |> withForwardedRef;
