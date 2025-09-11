import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardHeadIcon from './CardHeadIcon';
import CardHeadTitle from './CardHeadTitle';


function PanelHead(props) {
  const { as: HtmlTag = 'header', children, className, title, centered, icon, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('card-header', className)}>
      {title && <CardHeadTitle centered={centered}>{title}</CardHeadTitle>}
      {icon && <CardHeadIcon>{icon}</CardHeadIcon>}
      {children}
    </HtmlTag>
  );
}

PanelHead.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  title: PropTypes.node,
  centered: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default PanelHead
  |> memo;