import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function CardFooterItem(props) {
  const { as: HtmlTag = 'div', children, className, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('card-footer-item', className)}>
      {children}
    </HtmlTag>
  );
}

CardFooterItem.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CardFooterItem
  |> memo;