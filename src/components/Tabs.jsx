import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Tabs(props) {
  const { as: HtmlTag = 'div', children, className, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('tabs', className)}>
      {children}
    </HtmlTag>
  );
}

Tabs.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

Tabs.defaultProps = {
};

export default Tabs
  |> memo;