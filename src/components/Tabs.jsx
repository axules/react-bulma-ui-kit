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
    ...restProps
  } = props;

  const sizeClassName = getSizeClassName({ small, medium, large });

  return (
    <HtmlTag {...restProps} className={classNames('tabs', sizeClassName, className)}>
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
};

Tabs.defaultProps = {
};

export default Tabs
  |> memo;