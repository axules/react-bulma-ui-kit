import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Label(props) {
  const { children, className, ...restProps } = props;

  return (
    <label {...restProps} className={classNames('label', className)}>
      {children}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Label
  |> memo;
