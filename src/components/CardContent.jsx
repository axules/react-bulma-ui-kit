import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function CardContent(props) {
  const { as: HtmlTag = 'div', children, className, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('card-content', className)}>
      {children}
    </HtmlTag>
  );
}

CardContent.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CardContent
  |> memo;