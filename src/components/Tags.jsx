import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Tags(props) {
  const { children, className, hasAddons, nowrap, ...restProps } = props;

  const classNamesValue = classNames(
    'tags',
    hasAddons && 'has-addons',
    nowrap && 'is-flex-wrap-nowrap',
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
  nowrap: PropTypes.bool,
};

export default Tags
  |> memo;
