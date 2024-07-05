import { memo } from 'react';
import PropTypes from 'prop-types';

import Panel from '../../src/components/Panel';


const cnPrefix = 'sheetExamples';

function SheetExamples(props) {
  const { id, children, title, source, samples } = props;

  return (
    <Panel id={id} className={cnPrefix} title={title} light>
      {children && (
        <Panel.Block className={`${cnPrefix}__example`}>
          {children}
        </Panel.Block>
      )}

      {source && (
        <Panel.Block>
          <pre className={`${cnPrefix}__sampleSource`}>
            {source}
          </pre>
        </Panel.Block>
      )}

      {samples?.map(it => (
        <Panel.Block key={it} className={`${cnPrefix}__example`}>

          <div className={`${cnPrefix}__sample`}>{it}</div>

          {it.__source && <pre className={`${cnPrefix}__sampleSource`}>{it.__source}</pre>}
        </Panel.Block>
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