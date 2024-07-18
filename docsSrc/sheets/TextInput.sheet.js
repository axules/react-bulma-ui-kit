import Field from '../../src/components/Field';
import TextInput from '../../src/components/TextInput';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const styles = '.primary.link.info.success.warning.danger'.split('.');
const sizes = '.small.normal.large'.split('.');
const icons = [
  { leftIcon: <>&#x1F608;</> },
  { rightIcon: <>&#x1F608;</> },
  { leftIcon: <>&#x1F608;</>, rightIcon: <>&#x1F608;</> }
];

function renderEach(cases, props) {
  return cases.map((it) => (
    prepareSample(
      TextInput,
      {
        key: it,
        placeholder: 'I am placeholder',
        ...(typeof it === 'string' && it ? { [it]: true } : {}),
        ...(typeof it === 'object' ? it : {}),
        ...props,
      },
    )
  ));
}

const examples = {
  Styles: renderEach(styles),
  Size: renderEach(sizes),
  Icons: renderEach(icons),
  Skeleton: renderEach(styles, { skeleton: true }),
  'With label': () => {
    const render = <Field label="Text input label"><TextInput placeholder="Type text ..." /></Field>;
    render.__source = `
<Field label="Text input label">
  <TextInput placeholder="Type text ..." />
</Field>`;
    return [render];
  },
  Loading: prepareSample(TextInput, { placeholder: '', asControl: true, loading: true }),
};

export default sheetRenderer(TextInput, examples);
