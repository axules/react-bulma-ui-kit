import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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