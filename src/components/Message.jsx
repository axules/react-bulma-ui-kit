import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  getBrightnessClassName,
  getSizeClassName,
  getStyleClassName
} from './_utils';
import DeleteButton from './DeleteButton';


function Message(props) {
  const {
    as: HtmlTag = 'div',
    className,
    title,
    children,
    onClose,

    danger,
    success,
    warning,
    info,
    link,
    primary,

    small,
    medium,
    large,

    light,
    dark,

    ...restProps
  } = props;

  const hasHeader = title || onClose;

  const classNamesValue = classNames(
    'message',
    !hasHeader && 'message-body',
    getStyleClassName({ danger, success, warning, info, link, primary }),
    getSizeClassName({ small, medium, large }),
    getBrightnessClassName({ light, dark }),
    className
  );

  return (
    <HtmlTag {...restProps} className={classNamesValue}>
      {hasHeader && (
        <div className="message-header">
          {title}
          {onClose && <DeleteButton />}
        </div>
      )}
      {hasHeader
        ? <div className="message-body">
          {children}
        </div>
        : children}
    </HtmlTag>
  );
}

Message.propTypes = {
  as: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.node,
  children: PropTypes.node,
  onClose: PropTypes.func,

  light: PropTypes.bool,
  dark: PropTypes.bool,

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

export default Message
  |> memo;
