import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function PanelTabs(props) {
  const { as: HtmlTag = 'div', children, className, ...restProps } = props;

  return (
    <HtmlTag role="tablist" {...restProps} className={classNames('panel-tabs', className)}>
      {children}
    </HtmlTag>
  );
}

PanelTabs.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

PanelTabs.defaultProps = {
};

export default PanelTabs
  |> memo;