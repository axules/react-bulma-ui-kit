import { createRoot } from 'react-dom/client';

import Title from '../src/components/Title';

import SheetExamples from './components/SheetExamples';
import SheetProps from './components/SheetProps';
import { FrameMessenger } from './FrameMessenger';
import {
  extractCore,
  registerResizeMessage,
  resizeMessage
} from './utils';


registerResizeMessage();

function renderSandbox() {

}

export function sheetRenderer(CMP, sheets, options = {}) {
  const CoreComponent = extractCore(CMP);

  const subMenu = [];
  const renderedSheets = Object.entries(sheets)
    .map(([key, value]) => {
      const href = key.replaceAll(/[^a-zA-Z0-9]/gi, '-').toLowerCase();
      subMenu.push({ title: key, href });
      const render = typeof value === 'function' ? value() : value;
      const samples = Array.isArray(render) ? render : undefined;
      const source = Array.isArray(render) ? undefined : render.__source;

      return (
        <SheetExamples
          id={href}
          key={key}
          title={key}
          samples={samples}
          source={source}
        >
          {Array.isArray(render) ? undefined : render}
        </SheetExamples>
      );
    });

  FrameMessenger.listenMessages((type, payload) => {
    if (type === FrameMessenger.TYPES.SCROLL_TO) {
      const { selector } = payload;
      document.querySelector(selector)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  createRoot(document.getElementById('general'))
    .render(
      <>
        <Title is5>
          {CoreComponent === CMP
            ? CoreComponent.displayName || CoreComponent.name
            : `${CoreComponent.displayName || CoreComponent.name} / ${CMP.displayName}`}
        </Title>

        {renderedSheets}

        {options.sandbox && renderSandbox(options)}

        {options.pt && (
          <SheetProps propTypesData={CoreComponent.propTypes} />
        )}
      </>
    );

  FrameMessenger.sendParentMessage(
    FrameMessenger.TYPES.SHEET_SECTIONS,
    { items: subMenu, sheetName: CoreComponent.displayName || CoreComponent.name, pathname: location.pathname }
  );

  setTimeout(() => resizeMessage(), 50);

  if (options.meta) {
    FrameMessenger.sendParentMessage(FrameMessenger.TYPES.SHEET_META, options.meta);
  }

  return sheets;
}