import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import {getBrightnessClassName, getStyleClassName} from './utils';


function HelpText(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,

    danger,
    success,
    warning,
    info,
    link,
    primary,

    light,

    ...restProps
  } = props;

  const classNamesValue = classNames(
    'help',
    getStyleClassName({ danger, success, warning, info, link, primary }),
    getBrightnessClassName({ light }),
    className
  );

  return (
    <HtmlTag {...restProps} className={classNamesValue}>
      {children}
    </HtmlTag>
  );
}

HelpText.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,

  light: PropTypes.bool,
};

export default HelpText
  |> memo
  |> withForwardedRef;
