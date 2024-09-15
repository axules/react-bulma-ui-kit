import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  getBrightnessClassName,
  getStyleClassName
} from '../utils';


function TableRow(props) {
  const { children,
    className,
    selected,

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
  } = props;

  const classNameValue = classNames(
    className,
    selected && 'is-selected',
    getStyleClassName({ danger, success, warning, info, link, primary }),
    getBrightnessClassName({ white, light, dark, black }),
  );

  return (
    <tr className={classNameValue}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selected: PropTypes.bool,

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

export default TableRow
  |> memo;