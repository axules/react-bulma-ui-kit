import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DeleteButton from './DeleteButton';



function Tag(props) {
  const {
    as: HtmlTag = 'span',
    children,
    className,
    onClose,
    forwardedRef,

    rounded,
    hasHover,
    isDelete,

    danger,
    success,
    warning,
    info,
    link,
    primary,

    medium,
    large,

    white,
    light,
    dark,
    black,

    hasAddons,
    ...restProps
  } = props;

  const brightnessClassName = white && 'is-white'
  || light && 'is-light'
  || dark && 'is-dark'
  || black && 'is-black'
  || undefined;

  const styleClassName = danger && 'is-danger'
    || success && 'is-success'
    || warning && 'is-warning'
    || info && 'is-info'
    || link && 'is-link'
    || primary && 'is-primary'
    || undefined;

  const sizeClassName = medium && 'is-medium'
    || large && 'is-large'
    || undefined;

  return (
    <HtmlTag
      ref={forwardedRef}
      {...restProps}
      className={classNames(
        'tag',
        styleClassName,
        sizeClassName,
        brightnessClassName,
        hasHover && 'is-hoverable',
        rounded && 'is-rounded',
        isDelete && 'is-delete',
        hasAddons && 'has-addons',
        className
      )}
    >
      {children}
      {onClose && <DeleteButton onClick={onClose} />}
    </HtmlTag>
  );
}

Tag.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  forwardedRef: PropTypes.any,

  rounded: PropTypes.bool,
  hasHover: PropTypes.bool,
  isDelete: PropTypes.bool,

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

  medium: PropTypes.bool,
  large: PropTypes.bool,
  hasAddons: PropTypes.bool,
};

export default Tag
  |> memo;
