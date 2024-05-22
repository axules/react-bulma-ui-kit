import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Label(props) {
  const { children, className, required, ...restProps } = props;

  return (
    <label {...restProps} className={classNames('label', className)}>
      {children}
      {required && ' *'}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  required: PropTypes.bool,
};

export default Label
  |> memo;
