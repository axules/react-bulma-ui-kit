import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardContent from './Card/CardContent';
import CardFooter from './Card/CardFooter';
import CardFooterItem from './Card/CardFooterItem';
import CardHead from './Card/CardHead';
import CardHeadIcon from './Card/CardHeadIcon';
import CardHeadTitle from './Card/CardHeadTitle';
import CardImage from './Card/CardImage';


function Card(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,

    title,
    titleCentered,
    titleIcon,

    ...restProps
  } = props;

  return (
    <HtmlTag {...restProps} className={classNames('card', className)}>
      {title && <CardHead title={title} centered={titleCentered} icon={titleIcon} />}
      {children}
    </HtmlTag>
  );
}

Card.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,

  title: PropTypes.node,
  titleCentered: PropTypes.bool,
  titleIcon: PropTypes.node,
};

export default Card
  |> memo;

export {
  CardHead,
  CardHeadTitle,
  CardHeadIcon,
  CardImage,
  CardContent,
  CardFooter,
  CardFooterItem,
};