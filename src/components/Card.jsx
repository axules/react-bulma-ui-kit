import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardFooterItem from './CardFooterItem';
import CardHead from './CardHead';
import CardHeadIcon from './CardHeadIcon';
import CardHeadTitle from './CardHeadTitle';
import CardImage from './CardImage';


function Card(props) {
  const {
    as: HtmlTag = 'div',
    forwardedRef,
    children,
    className,

    title,
    titleCentered,
    titleIcon,

    ...restProps
  } = props;

  return (
    <HtmlTag {...restProps} ref={forwardedRef} className={classNames('card', className)}>
      {title && <CardHead title={title} centered={titleCentered} icon={titleIcon} />}
      {children}
    </HtmlTag>
  );
}

Card.propTypes = {
  as: PropTypes.any,
  forwardedRef: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,

  title: PropTypes.node,
  titleCentered: PropTypes.bool,
  titleIcon: PropTypes.node,
};

export default Card
  |> memo
  |> withForwardedRef;

export {
  CardHead,
  CardHeadTitle,
  CardHeadIcon,
  CardImage,
  CardContent,
  CardFooter,
  CardFooterItem,
};
