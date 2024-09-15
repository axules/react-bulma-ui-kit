import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function CardImage(props) {
  const { as: HtmlTag = 'figure', children, className, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('card-image', className)}>
      {children}
    </HtmlTag>
  );
}

CardImage.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CardImage
  |> memo;