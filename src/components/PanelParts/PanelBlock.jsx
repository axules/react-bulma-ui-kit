import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function PanelBlock(props) {
  const { as: HtmlTag = 'div', children, className, active, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('panel-block', active && 'is-active', className)}>
      {children}
    </HtmlTag>
  );
}

PanelBlock.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
};

export default PanelBlock
  |> memo;