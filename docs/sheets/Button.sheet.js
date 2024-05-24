import Button from '../../src/components/Button';
import Buttons from '../../src/components/Buttons';
import { sheetRenderer } from '../sheetRenderer';


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

const examples = {
  styles: renderEach(styles),
  stylesLight: renderEach(styles, { light: true }),
  stylesDark: renderEach(styles, { dark: true }),
  stylesOutlined: renderEach(styles, { outlined: true }),
  brightness: renderEach(brightness),
  sizes: renderEach(sizes)
};

export default sheetRenderer(Button, examples, { pt: true });