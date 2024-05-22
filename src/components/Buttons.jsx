import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getAlignClassName } from './utils';


function Buttons(props) {
  const {
    children,
    className,
    hasAddons,
    nowrap,

    left,
    centered,
    right,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'buttons',
    hasAddons && 'has-addons',
    nowrap && 'is-flex-wrap-nowrap',
    getAlignClassName({ left, centered, right }),
    className
  );

  return (
    <div {...restProps} className={classNamesValue}>
      {children}
    </div>
  );
}

Buttons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  nowrap: PropTypes.bool,

  left: PropTypes.bool,
  centered: PropTypes.bool,
  right: PropTypes.bool,
};

export default Buttons
  |> memo;
