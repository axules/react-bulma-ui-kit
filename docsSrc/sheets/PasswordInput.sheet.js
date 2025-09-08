import PasswordInput from '../../src/components/PasswordInput';
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
      PasswordInput,
      {
        key: it,
        placeholder: 'I am placeholder',
        revealPassword: true,
        revealPasswordIcon: <>&#x1F608;</>,
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
  // Icons: renderEach(icons),
  Skeleton: renderEach(styles, { skeleton: true }),
  Loading: prepareSample(PasswordInput, { placeholder: '', asControl: true, loading: true }),
};

export default sheetRenderer(PasswordInput, examples);
