import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function SubmitForm(props) {
  const { children, disabled, forwardedRef, loading, className, ...restProps } = props;

  return (
    <form {...restProps} className={classNames(className, loading && 'is-loading')} ref={forwardedRef}>
      <button disabled={disabled || loading} type="submit" style={{ display: 'none' }} />
      {children}
    </form>
  );
}

SubmitForm.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  forwardedRef: PropTypes.any,
  className: PropTypes.string,
};

export default SubmitForm
  |> memo
  |> withForwardedRef;
