import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function PanelHead(props) {
  const { as: HtmlTag = 'div', children, className, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('panel-heading', className)}>
      {children}
    </HtmlTag>
  );
}

PanelHead.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

PanelHead.defaultProps = {
};

export default PanelHead
  |> memo;