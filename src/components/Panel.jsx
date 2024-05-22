import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PanelBlock from './PanelParts/PanelBlock';
import PanelHead from './PanelParts/PanelHead';
import PanelIcon from './PanelParts/PanelIcon';
import PanelTabs from './PanelParts/PanelTabs';
import Tab from './Tab';


function Panel(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    ...restProps
  } = props;

  return (
    <HtmlTag {...restProps} className={classNames('panel', className)}>
      {children}
    </HtmlTag>
  );
}

Panel.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

const PanelExport = Panel
  |> memo;

PanelExport.Head = PanelHead;
PanelExport.Block = PanelBlock;
PanelExport.BlockIcon = PanelIcon;
PanelExport.Tabs = PanelTabs;
PanelExport.Tab = Tab;

export default PanelExport;
