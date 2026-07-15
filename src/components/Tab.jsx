import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function Tab(props) {
  const {
    as: HtmlTag = 'li',
    forwardedRef,
    children,
    className,
    active,
    href,
    onClick,
    onMouseUp,
    onMouseDown,
    ...restProps
  } = props;

  const classNameValue = classNames(className, active && 'is-active');

  return (
    <HtmlTag {...restProps} ref={forwardedRef} className={classNameValue}>
      <a role="tab" href={href} onClick={onClick} onMouseUp={onMouseUp} onMouseDown={onMouseDown}>
        {children}
      </a>
    </HtmlTag>
  );
}

Tab.propTypes = {
  as: PropTypes.any,
  forwardedRef: PropTypes.object,
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
};

export default Tab
  |> memo
  |> withForwardedRef;
