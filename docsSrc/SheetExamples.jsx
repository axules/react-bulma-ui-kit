import { memo } from 'react';
import PropTypes from 'prop-types';

import Panel from '../src/components/Panel';


const cnPrefix = 'sheetExamples';

function SheetExamples(props) {
  const { children, title } = props;

  return (
    <Panel className={cnPrefix} title={title} light>
      <Panel.Block>
        {children}
      </Panel.Block>
    </Panel>
  );
}

SheetExamples.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
};

SheetExamples.defaultProps = {};

export default SheetExamples
  |> memo;