import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import { getAlignClassName } from './_utils';


function Tags(props) {
  const {
    as: HtmlTag = 'div',
    forwardedRef,
    children,
    className,
    hasAddons,
    nowrap,
    right,
    centered,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'tags',
    hasAddons && 'has-addons',
    nowrap && 'is-flex-wrap-nowrap',
    getAlignClassName({ right, centered }),
    className,
  );

  return (
    <HtmlTag {...restProps} ref={forwardedRef} className={classNamesValue}>
      {children}
    </HtmlTag>
  );
}

Tags.propTypes = {
  as: PropTypes.string,
  forwardedRef: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  centered: PropTypes.bool,
  right: PropTypes.bool,
  nowrap: PropTypes.bool,
};

export default Tags
  |> memo
  |> withForwardedRef;
