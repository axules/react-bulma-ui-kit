import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function HelpText(props) {
  const { children, className, success, danger } = props;

  return (
    <p className={classNames('help helpText', className, success && 'is-success' || danger && 'is-danger')}>
      {children}
    </p>
  );
}

HelpText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool,
};

HelpText.defaultProps = {
};

export default HelpText
  |> memo
  |> withForwardedRef;
