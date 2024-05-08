import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DeleteButton from './DeleteButton';


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

  const styleClassName = danger && 'is-danger'
    || success && 'is-success'
    || warning && 'is-warning'
    || info && 'is-info'
    || link && 'is-link'
    || primary && 'is-primary'
    || undefined;

  return (
    <div className={classNames('notification', styleClassName, light && 'is-light', className)} {...restProps}>
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

Notification.defaultProps = {
};

export default Notification
  |> memo;
