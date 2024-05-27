import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function CardFooter(props) {
  const { as: HtmlTag = 'div', children, className, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('card-footer', className)}>
      {children}
    </HtmlTag>
  );
}

CardFooter.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

CardFooter.defaultProps = {
};

export default CardFooter
  |> memo;