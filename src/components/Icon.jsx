import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  getSizeClassName,
  getTextColorClassName
} from './_utils';



function Icon(props) {
  const {
    as: HtmlTag = 'span',
    children,
    className,
    danger, success, warning, info, link, primary,
    small, medium, large,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'icon',
    getTextColorClassName({ danger, success, warning, info, link, primary }),
    getSizeClassName({ small, medium, large }),
    className
  );

  return (
    <HtmlTag {...restProps} className={classNamesValue}>
      {children}
    </HtmlTag>
  );
}

Icon.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,

  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
};

export default Icon
  |> memo;