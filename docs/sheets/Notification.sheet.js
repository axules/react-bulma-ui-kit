import Buttons from '../../dist/components/Buttons';
import Notification from '../../dist/components/Notification';
import { sheetEntry } from '../sheetEntry';


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

export default sheetEntry({
  styles: renderEach(styles),
  stylesWithClose: renderEach(styles, { onClose: () => console.warn('onClose callback') }),
  stylesLight: renderEach(styles, { light: true }),
  stylesDark: renderEach(styles, { dark: true }),
  brightness: renderEach(brightness),
});