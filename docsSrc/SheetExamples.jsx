import { memo } from 'react';
import PropTypes from 'prop-types';

import Panel from '../src/components/Panel';


const cnPrefix = 'sheetExamples';

function SheetExamples(props) {
  const { children, title, source } = props;

  return (
    <Panel className={cnPrefix} title={title} light>
      <Panel.Block>
        {children}
      </Panel.Block>

      {source && (
        <Panel.Block>
          {source}
        </Panel.Block>
      )}
    </Panel>
  );
}

SheetExamples.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  source: PropTypes.node,
};

SheetExamples.defaultProps = {};

export default SheetExamples
  |> memo;