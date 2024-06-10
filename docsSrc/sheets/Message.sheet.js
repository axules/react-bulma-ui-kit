import Message from '../../src/components/Message';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const styles = '.light.dark.primary.link.info.success.warning.danger'.split('.');
const sizes = '.small.large'.split('.');

function renderEach(cases, props) {
  return cases.map((it) => (
    prepareSample(
      Message,
      {
        key: it,
        children: 'I am message children!',
        title: 'I am title',
        ...(it ? { [it]: true } : {}),
        ...props
      }
    )
  ));
}

const examples = {
  Colors: renderEach(styles),
  'With close button': renderEach(styles, { onClose: () => null }),
  'Without title': renderEach(styles, { title: undefined }),
  Sizes: renderEach(sizes, { onClose: () => null }),
};

export default sheetRenderer(Message, examples, { pt: true });