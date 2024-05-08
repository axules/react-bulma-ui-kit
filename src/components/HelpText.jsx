import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function HelpText(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    success,
    danger,
    ...restProps
  } = props;

  const styleClassName = success && 'is-success'
  || danger && 'is-danger';

  return (
    <HtmlTag {...restProps} className={classNames('help', styleClassName, className)}>
      {children}
    </HtmlTag>
  );
}

HelpText.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool,
};

export default HelpText
  |> memo
  |> withForwardedRef;
