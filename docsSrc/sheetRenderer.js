import { createRoot } from 'react-dom/client';

import Title from '../src/components/Title';

import { FrameMessenger } from './FrameMessenger';
import SheetExamples from './SheetExamples';
import SheetProps from './SheetProps';
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
      return (
        <SheetExamples
          id={href}
          key={key}
          title={key}
          samples={Array.isArray(value) ? value : undefined}
          source={Array.isArray(value) ? undefined : value.__source}
        >
          {Array.isArray(value) ? undefined : value}
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

  resizeMessage();
  return sheets;
}