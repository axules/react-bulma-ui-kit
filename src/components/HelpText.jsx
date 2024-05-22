import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import { getStyleClassName } from './utils';


function HelpText(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,

    danger,
    success,
    warning,
    info,
    link,
    primary,

    ...restProps
  } = props;

  const styleClassName = getStyleClassName({ danger, success, warning, info, link, primary });

  return (
    <HtmlTag {...restProps} className={classNames('help', styleClassName, className)}>
      {children}
    </HtmlTag>
  );
}

HelpText.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
};

export default HelpText
  |> memo
  |> withForwardedRef;
