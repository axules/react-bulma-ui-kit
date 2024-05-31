import Notification from '../../src/components/Notification';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');

function renderEach(cases, props) {
  return cases.map((it) => (
    prepareSample(
      Notification,
      {
        key: it,
        children: <>{it || 'Default'}<br /> It is example of text which could be in this Notification component</>,
        ...(it ? { [it]: true } : {}),
        ...props
      },
      { children: 'I am notification children', onClose: () => {} }
    )
  ));
}

const examples = {
  Colors: renderEach(styles),
  Centered: renderEach(styles, { centered: true }),
  'Has close': renderEach(styles, { onClose: () => console.warn('onClose callback') }),
  'Light colors': renderEach(styles, { light: true }),
  'Dark colors': renderEach(styles, { dark: true }),
  Brightness: renderEach(brightness),
};

export default sheetRenderer(Notification, examples);