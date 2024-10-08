import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Tab(props) {
  const {
    as: HtmlTag = 'li',
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
    <HtmlTag {...restProps} className={classNameValue}>
      <a role="tab" href={href} onClick={onClick} onMouseUp={onMouseUp} onMouseDown={onMouseDown}>
        {children}
      </a>
    </HtmlTag>
  );
}

Tab.propTypes = {
  as: PropTypes.any,
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
};

export default Tab
  |> memo;