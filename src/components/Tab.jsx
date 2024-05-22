import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Tab(props) {
  const { as: HtmlTag = 'div', children, className, active, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames(className, active && 'is-active')}>
      {children}
    </HtmlTag>
  );
}

Tab.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
};

Tab.defaultProps = {
};

export default Tab
  |> memo;