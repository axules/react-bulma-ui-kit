import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function PanelTab(props) {
  const { as: HtmlTag = 'a', children, className, active, ...restProps } = props;

  return (
    <HtmlTag role="tab" {...restProps} className={classNames(active && 'is-active', className)}>
      {children}
    </HtmlTag>
  );
}

PanelTab.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
};

export default PanelTab
  |> memo;