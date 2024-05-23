import Button from '../../dist/components/Button';
import Buttons from '../../dist/components/Buttons';
import { sheetEntry } from '../sheetEntry';


const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');
const sizes = 'primary.link.success.warning.danger'.split('.');

function renderEach(cases, props) {
  return (
    <Buttons>
      {cases.map((it) => (
        <Button
          key={it}
          {...(it ? { [it]: true } : {})}
          {...props}
        >
          {it || 'Default'}
        </Button>
      ))}
    </Buttons>
  );
}

export default sheetEntry({
  styles: renderEach(styles),
  stylesLight: renderEach(styles, { light: true }),
  stylesDark: renderEach(styles, { dark: true }),
  stylesOutlined: renderEach(styles, { outlined: true }),
  brightness: renderEach(brightness),
  sizes: renderEach(sizes)
});