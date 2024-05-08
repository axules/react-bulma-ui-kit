import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Buttons(props) {
  const { children, className, ...restProps } = props;

  return (
    <div {...restProps} className={classNames('buttons', className)}>
      {children}
    </div>
  );
}

Buttons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Buttons
  |> memo;
