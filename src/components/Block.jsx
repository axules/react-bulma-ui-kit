import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Block(props) {
  const {
    as: HtmlTag = 'div',
    className,
    children,
    ...restProps
  } = props;

  return (
    <HtmlTag {...restProps} className={classNames('block', className)}>
      {children}
    </HtmlTag>
  );
}

Block.propTypes = {
  as: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Block
  |> memo;
