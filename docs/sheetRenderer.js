import { createRoot } from 'react-dom/client';

import SheetProps from './SheetProps';
import { extractCore } from './utils';


function renderSheet(title, children) {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <div>
        {children}
      </div>
      <hr />
    </div>
  );
}

function renderSandbox() {

}

export function sheetRenderer(CMP, sheets, options = {}) {
  const CoreComponent = extractCore(CMP);
  console.log(CMP, CoreComponent);

  const renderedSheets = Object.entries(sheets)
    .map(([key, value]) => renderSheet(key, value));

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
  return sheets;
}