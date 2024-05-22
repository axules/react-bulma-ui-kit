import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  getAlignClassName,
  getSizeClassName
} from './utils';


function Tabs(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,

    small,
    medium,
    large,

    nowrap,

    centered,
    right,

    boxed,
    toggle,
    toggleRounded,

    fullWidth,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'tabs',
    getSizeClassName({ small, medium, large }),
    nowrap && 'is-flex-wrap-nowrap',
    fullWidth && 'is-fullwidth' || getAlignClassName({ right, centered }),
    boxed && 'is-boxed' || toggle && 'is-toggle' || toggleRounded && 'is-toggle is-toggle-rounded',
    className,
  );

  return (
    <HtmlTag {...restProps} className={classNamesValue}>
      <ul role="tablist">
        {children}
      </ul>
    </HtmlTag>
  );
}

Tabs.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,

  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,

  nowrap: PropTypes.bool,

  centered: PropTypes.bool,
  right: PropTypes.bool,
  fullWidth: PropTypes.bool,

  boxed: PropTypes.bool,
  toggle: PropTypes.bool,
  toggleRounded: PropTypes.bool,
};

Tabs.defaultProps = {
};

export default Tabs
  |> memo;