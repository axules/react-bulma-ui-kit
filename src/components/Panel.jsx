import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PanelBlock from './PanelParts/PanelBlock';
import PanelHead from './PanelParts/PanelHead';
import PanelIcon from './PanelParts/PanelIcon';
import PanelTabs from './PanelParts/PanelTabs';
import Tab from './Tab';
import {
  getBrightnessClassName,
  getStyleClassName
} from './utils';


function Panel(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,

    white,
    light,
    dark,
    black,

    danger,
    success,
    warning,
    info,
    link,
    primary,
    ...restProps
  } = props;

  const styleClassName = getStyleClassName({ danger, success, warning, info, link, primary });
  const brightnessClassName = getBrightnessClassName({ white, light, dark, black });

  return (
    <HtmlTag {...restProps} className={classNames('panel', styleClassName, brightnessClassName, className)}>
      {children}
    </HtmlTag>
  );
}

Panel.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,

  white: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  black: PropTypes.bool,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
};

const PanelExport = Panel
  |> memo;

PanelExport.Head = PanelHead;
PanelExport.Block = PanelBlock;
PanelExport.BlockIcon = PanelIcon;
PanelExport.Tabs = PanelTabs;
PanelExport.Tab = Tab;

export default PanelExport;
