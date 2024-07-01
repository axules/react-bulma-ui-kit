import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function CardHeadTitle(props) {
  const { as: HtmlTag = 'div', children, className, centered, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('card-header-title', centered && 'is-centered', className)}>
      {children}
    </HtmlTag>
  );
}

CardHeadTitle.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  centered: PropTypes.bool,
};

export default CardHeadTitle
  |> memo;