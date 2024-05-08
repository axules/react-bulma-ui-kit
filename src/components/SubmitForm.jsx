import { memo } from 'react';
import PropTypes from 'prop-types';

import { withForwardedRef } from '../withRef';


function SubmitForm(props) {
  const { children, disabled, forwardedRef, ...restProps } = props;

  return (
    <form {...restProps} ref={forwardedRef}>
      <button disabled={disabled} type="submit" style={{ display: 'none' }} />
      {children}
    </form>
  );
}

SubmitForm.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.node,
  forwardedRef: PropTypes.any,
};

SubmitForm.defaultProps = {
};

export default SubmitForm
  |> memo
  |> withForwardedRef;
