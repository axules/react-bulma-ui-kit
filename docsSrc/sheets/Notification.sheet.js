import Buttons from '../../src/components/Buttons';
import Notification from '../../src/components/Notification';
import { sheetRenderer } from '../sheetRenderer';


const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');

function renderEach(cases, props) {
  return (
    <Buttons>
      {cases.map((it) => (
        <Notification
          key={it}
          {...(it ? { [it]: true } : {})}
          {...props}
        >
          {it || 'Default'}<br />
          It is example of text which could be in this Notification component
        </Notification>
      ))}
    </Buttons>
  );
}

const examples = {
  styles: renderEach(styles),
  stylesWithClose: renderEach(styles, { onClose: () => console.warn('onClose callback') }),
  stylesLight: renderEach(styles, { light: true }),
  stylesDark: renderEach(styles, { dark: true }),
  brightness: renderEach(brightness),
};

export default sheetRenderer(Notification, examples);