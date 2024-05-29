import Button from '../../src/components/Button';
import Buttons from '../../src/components/Buttons';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSource } from '../utils';


const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');
const sizes = '.small.normal.large'.split('.');

function renderSrc(cases, props) {
  return (
    <pre>
      {cases
        .map(it => prepareSource('Button', { children: 'click me', ...props, [it]: true }))
        .join('\r\n\r\n')
      }
    </pre>
  );
}

function renderEach(cases, props) {
  return {
    render: <Buttons>
      {cases.map((it) => (
        <Button
          key={it}
          {...(it ? { [it]: true } : {})}
          {...props}
        >
          {it || 'Default'}
        </Button>
      ))}
    </Buttons>,
    source: renderSrc(cases, props)
  };
}

const examples = {
  styles: renderEach(styles),
  stylesLight: renderEach(styles, { light: true }),
  stylesInverted: renderEach(styles, { inverted: true }),
  stylesDark: renderEach(styles, { dark: true }),
  stylesOutlined: renderEach(styles, { outlined: true }),
  brightness: renderEach(brightness),
  sizes: renderEach(sizes)
};

export default sheetRenderer(Button, examples, { pt: true });