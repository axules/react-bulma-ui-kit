import debounce from 'lodash.debounce';
import { createRoot } from 'react-dom/client';

import SheetExamples from './SheetExamples';
import SheetProps from './SheetProps';
import { extractCore } from './utils';


function resizeMessage() {
  const html = document.querySelector('html');
  html.style.height = '0';

  const event = { type: 'FRAME_RESIZE', payload: { height: html.scrollHeight, url: window.location.href } };
  window.top.postMessage(event, '*');
}

const onWindowResize = debounce(resizeMessage, 250);

window.addEventListener('resize', onWindowResize);

function renderSandbox() {

}

export function sheetRenderer(CMP, sheets, options = {}) {
  const CoreComponent = extractCore(CMP);

  const renderedSheets = Object.entries(sheets)
    .map(([key, value]) => <SheetExamples key={key} title={key}>{value}</SheetExamples>);

  createRoot(document.getElementById('general'))
    .render(
      <>
        <h1>{CoreComponent === CMP
          ? CMP.displayName || CoreComponent.name
          : `${CoreComponent.displayName || CoreComponent.name} / ${CMP.displayName}`}</h1>

        {renderedSheets}

        {options.sandbox && renderSandbox(options)}

        {options.pt && (
          <SheetProps propTypesData={CoreComponent.propTypes} />
        )}
      </>
    );

  resizeMessage();
  return sheets;
}