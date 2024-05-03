import { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { withForwardedRef } from '../utils/withRef';



const cnPrefix = 'submitForm';

function SubmitForm(props) {
  const { className, children, disabled, forwardedRef, ...restProps } = props;
  return (
    <form className={cn(cnPrefix, className)} ref={forwardedRef} {...restProps}>
      <button disabled={disabled} type="submit" style={{ display: 'none' }} />
      {children}
    </form>
  );
}

SubmitForm.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.node,
  forwardedRef: PropTypes.shape(),
};

SubmitForm.defaultProps = {
  className: undefined,
  children: undefined,
  disabled: undefined,
  forwardedRef: undefined,
};

export default SubmitForm
  |> memo
  |> withForwardedRef;
