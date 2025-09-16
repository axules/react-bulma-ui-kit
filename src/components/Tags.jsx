import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getAlignClassName } from './utils';


function Tags(props) {
  const { children,
    className,
    hasAddons,
    nowrap,
    right,
    centered,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'tags',
    hasAddons && 'has-addons',
    nowrap && 'is-flex-wrap-nowrap',
    getAlignClassName({ right, centered }),
    className
  );

  return (
    <div {...restProps} className={classNamesValue}>
      {children}
    </div>
  );
}

Tags.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  centered: PropTypes.bool,
  right: PropTypes.bool,
  nowrap: PropTypes.bool,
};

export default Tags
  |> memo;
