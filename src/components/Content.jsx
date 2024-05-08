import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Content(props) {
  const { as: HtmlTag = 'div', children, ...restProps } = props;

  return (
    <HtmlTag {...restProps} className={classNames('content', classNames)}>
      {children}
    </HtmlTag>
  );
}

Content.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Content
  |> memo;
