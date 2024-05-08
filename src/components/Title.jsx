import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Title(props) {
  const {
    as,
    children,
    className,
    forwardedRef,

    is1,
    is2,
    is3,
    is4,
    is5,
    is6,

    subtitle,
    ...restProps
  } = props;

  const HtmlTag = as
    || is1 && 'h1'
    || is2 && 'h2'
    || is3 && 'h3'
    || is4 && 'h4'
    || is5 && 'h5'
    || is6 && 'h6';

  const hClassName = is1 && 'is-1'
    || is2 && 'is-2'
    || is3 && 'is-3'
    || is4 && 'is-4'
    || is5 && 'is-5'
    || is6 && 'is-6';

  return (
    <HtmlTag
      ref={forwardedRef}
      {...restProps}
      className={classNames(subtitle ? 'is-subtitle' : 'is-title', hClassName, className)}
    >
      {children}
    </HtmlTag>
  );
}

Title.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  forwardedRef: PropTypes.any,

  is1: PropTypes.bool,
  is2: PropTypes.bool,
  is3: PropTypes.bool,
  is4: PropTypes.bool,
  is5: PropTypes.bool,
  is6: PropTypes.bool,
  subtitle: PropTypes.bool,
};

export default Title
  |> memo;
