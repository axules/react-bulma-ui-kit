import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  getBrightnessClassName,
  getStyleClassName
} from './utils';


function TableCell(props) {
  const {
    children,
    className,
    header,

    danger,
    success,
    warning,
    info,
    link,
    primary,

    white,
    light,
    dark,
    black,
    ...restProps
  } = props;

  const classNameValue = classNames(
    getStyleClassName({ danger, success, warning, info, link, primary }),
    getBrightnessClassName({ white, light, dark, black }),
    className,
  );

  const HtmlTag = header ? 'th' : 'td';
  return (
    <HtmlTag {...restProps} className={classNameValue}>
      {children}
    </HtmlTag>
  );
}

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.bool,

  white: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  black: PropTypes.bool,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
};

export default TableCell
  |> memo;