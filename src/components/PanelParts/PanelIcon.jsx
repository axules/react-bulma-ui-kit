import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function PanelIcon(props) {
  const { as: HtmlTag = 'div', children, className, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('panel-icon', className)}>
      {children}
    </HtmlTag>
  );
}

PanelIcon.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PanelIcon
  |> memo;