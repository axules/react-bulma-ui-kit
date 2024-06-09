import Button from '../../src/components/Button';
import Buttons from '../../src/components/Buttons';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const styles = '.primary.link.info.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');
const sizes = '.small.normal.large'.split('.');

function renderEach(cases, props) {
  return cases.map((it) => (
    prepareSample(
      Button,
      { key: it, children: 'click me', ...(it ? { [it]: true } : {}), ...props }
    )
  ));
}

const examples = {
  Colors: renderEach(styles),
  'Light colors': renderEach(styles, { light: true }),
  'Inverted colors': renderEach(styles, { inverted: true }),
  'Dark colors': renderEach(styles, { dark: true }),
  Outlined: renderEach(styles, { outlined: true }),
  Brightness: renderEach(brightness),
  Sizes: renderEach(sizes),
  Buttons: (() => {
    const R = <Buttons><Button primary>Save</Button><Button light>Cancel</Button></Buttons>;
    R.__source = `
<Buttons>
  <Button primary>Save</Button>
  <Button light>Cancel</Button>
</Buttons>
    `.trim();
    return [R];
  })(),
};

export default sheetRenderer(Button, examples, { pt: true });