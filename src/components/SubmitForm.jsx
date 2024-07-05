import {
  memo,
  useCallback
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function SubmitForm(props) {
  const { children, disabled, forwardedRef, loading, className, onSubmit, ...restProps } = props;

  const onFormSubmit = useCallback((event) => {
    event.preventDefault();
    onSubmit(event);
  }, [onSubmit]);

  const classNameValue = classNames(
    className,
    loading && 'is-loading'
  );

  return (
    <form {...restProps} onSubmit={onFormSubmit} className={classNameValue} ref={forwardedRef}>
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
  onSubmit: PropTypes.func,
};

export default SubmitForm
  |> memo
  |> withForwardedRef;
