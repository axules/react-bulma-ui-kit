import {
  memo,
  useEffect
} from 'react';
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
    closeDelay,

    danger,
    success,
    warning,
    info,
    link,
    primary,
    white, light, dark, black,
    centered,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'notification',
    getStyleClassName({ danger, success, warning, info, link, primary }),
    getBrightnessClassName({ white, light, dark, black }),
    centered && 'has-text-centered',
    className
  );

  useEffect(() => {
    if (closeDelay) {
      if (!onClose) {
        console.error('onClose handler is required once closeDelay is defined');
        return;
      }
      const timer = setTimeout(() => onClose(), closeDelay);
      return () => clearTimeout(timer);
    }
  }, [closeDelay, onClose]);

  return (
    <div className={classNamesValue} {...restProps}>
      {onClose && <DeleteButton onClick={onClose} />}

      {children}
    </div>
  );
}

Notification.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  closeDelay: PropTypes.number,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,

  white: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  black: PropTypes.bool,

  centered: PropTypes.bool,
};

export default Notification
  |> memo;
