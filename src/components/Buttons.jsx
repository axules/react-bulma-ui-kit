import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import { getAlignClassName } from './_utils';


function Buttons(props) {
  const {
    as: HtmlTag = 'div',
    forwardedRef,
    children,
    className,
    hasAddons,
    nowrap,

    left,
    centered,
    right,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'buttons',
    hasAddons && 'has-addons',
    nowrap && 'is-flex-wrap-nowrap',
    getAlignClassName({ left, centered, right }),
    className,
  );

  return (
    <HtmlTag {...restProps} ref={forwardedRef} className={classNamesValue}>
      {children}
    </HtmlTag>
  );
}

Buttons.propTypes = {
  as: PropTypes.any,
  forwardedRef: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  nowrap: PropTypes.bool,

  left: PropTypes.bool,
  centered: PropTypes.bool,
  right: PropTypes.bool,
};

export default Buttons
  |> memo
  |> withForwardedRef;
