import { createRoot } from 'react-dom/client';


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

export function sheetEntry(sheets, options = {}) {
  const entries = Object.entries(sheets);
  const rendered = entries
    .map(([key, value]) => renderSheet(key, value));

  createRoot(document.getElementById('general'))
    .render(
      <>
        {rendered}
        {options.sandbox && renderSandbox(options)}
      </>
    );
  return sheets;
}