import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardContent from './CardParts/CardContent';
import CardFooter from './CardParts/CardFooter';
import CardFooterItem from './CardParts/CardFooterItem';
import CardHead from './CardParts/CardHead';
import CardHeadIcon from './CardParts/CardHeadIcon';
import CardHeadTitle from './CardParts/CardHeadTitle';
import CardImage from './CardParts/CardImage';


function Card(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,

    title,

    ...restProps
  } = props;

  return (
    <HtmlTag {...restProps} className={classNames('card', className)}>
      {title && <CardHead title={title} />}
      {children}
    </HtmlTag>
  );
}

Card.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,

  title: PropTypes.node,
};

const CardExport = Card
  |> memo;

CardExport.Head = CardHead;
CardExport.HeadTitle = CardHeadTitle;
CardExport.HeadIcon = CardHeadIcon;

CardExport.Image = CardImage;
CardExport.Content = CardContent;

CardExport.Footer = CardFooter;
CardExport.FooterItem = CardFooterItem;

export default CardExport;
