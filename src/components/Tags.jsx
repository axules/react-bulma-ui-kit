import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Tags(props) {
  const { children, className, hasAddons, ...restProps } = props;

  return (
    <div {...restProps} className={classNames('tags', hasAddons && 'has-addons', className)}>
      {children}
    </div>
  );
}

Tags.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
};

export default Tags
  |> memo;
