import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Box(props) {
  const {
    as: HtmlTag = 'div',
    className,
    children,
    ...restProps
  } = props;

  return (
    <HtmlTag {...restProps} className={classNames('box', className)}>
      {children}
    </HtmlTag>
  );
}

Box.propTypes = {
  as: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Box
  |> memo;
