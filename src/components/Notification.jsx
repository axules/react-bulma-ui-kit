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
    light,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'notification',
    getStyleClassName({ danger, success, warning, info, link, primary }),
    getBrightnessClassName({ light }),
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
  light: PropTypes.bool
};

export default Notification
  |> memo;
