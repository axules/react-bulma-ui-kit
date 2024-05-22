import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getSizeClassName } from './utils';


function Tabs(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,

    small,
    medium,
    large,

    nowrap,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'tabs',
    getSizeClassName({ small, medium, large }),
    nowrap && 'is-flex-wrap-nowrap',
    className,
  );

  return (
    <HtmlTag {...restProps} className={classNamesValue}>
      {children}
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
};

Tabs.defaultProps = {
};

export default Tabs
  |> memo;