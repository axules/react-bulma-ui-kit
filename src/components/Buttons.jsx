import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Buttons(props) {
  const {
    children,
    className,
    hasAddons,
    nowrap,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'buttons',
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

Buttons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  nowrap: PropTypes.bool,
};

export default Buttons
  |> memo;
