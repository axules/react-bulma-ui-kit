import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function CardHeadIcon(props) {
  const { as: HtmlTag = 'div', children, className, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('card-header-icon', className)}>
      {children}
    </HtmlTag>
  );
}

CardHeadIcon.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

CardHeadIcon.defaultProps = {
};

export default CardHeadIcon
  |> memo;