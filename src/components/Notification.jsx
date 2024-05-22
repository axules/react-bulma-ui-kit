import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DeleteButton from './DeleteButton';
import {
  getBrightnessClassName,
  getStyleClassName
} from './utils';


function Notification(props) {
  const {
    className,
    children,
    onClose,

    danger,
    success,
    warning,
    info,
    link,
    primary,
    light,
    ...restProps
  } = props;

  const styleClassName = getStyleClassName({ danger, success, warning, info, link, primary });
  const brightnessClassName = getBrightnessClassName({ light });

  return (
    <div className={classNames('notification', styleClassName, brightnessClassName, className)} {...restProps}>
      {onClose && <DeleteButton onClick={onClose} />}

      {children}
    </div>
  );
}

Notification.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  light: PropTypes.bool
};

export default Notification
  |> memo;
