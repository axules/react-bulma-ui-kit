import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Buttons(props) {
  const { children, className, hasAddons, ...restProps } = props;

  return (
    <div {...restProps} className={classNames('buttons', hasAddons && 'has-addons', className)}>
      {children}
    </div>
  );
}

Buttons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
};

export default Buttons
  |> memo;
