import { memo } from 'react';
import PropTypes from 'prop-types';

import Panel, { PanelBlock } from '../../src/components/Panel';


const cnPrefix = 'sheetExamples';

function SheetExamples(props) {
  const { id, children, title, source, samples } = props;

  return (
    <Panel id={id} className={cnPrefix} title={title} light>
      {children && (
        <PanelBlock className={`${cnPrefix}__example`}>
          {children}
        </PanelBlock>
      )}

      {source && (
        <PanelBlock>
          <pre className={`${cnPrefix}__sampleSource`}>
            {source}
          </pre>
        </PanelBlock>
      )}

      {samples?.map(it => (
        <PanelBlock key={it} className={`${cnPrefix}__example`}>

          <div className={`${cnPrefix}__sample`}>{it}</div>

          {it.__source && <pre className={`${cnPrefix}__sampleSource`}>{it.__source}</pre>}
        </PanelBlock>
      ))}
    </Panel>
  );
}

SheetExamples.propTypes = {
  samples: PropTypes.array,
  children: PropTypes.node,
  title: PropTypes.node,
  source: PropTypes.node,
  id: PropTypes.string,
};

export default SheetExamples
  |> memo;