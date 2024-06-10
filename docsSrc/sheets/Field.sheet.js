import Field from '../../src/components/Field';
import TextInput from '../../src/components/TextInput';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const defaultProps = {
  label: 'I am label',
  children: <TextInput placeholder="Type text" />,
};

const sourceProps = {
  children: '\r\n  <TextInput placeholder="Type text" />\r\n',
};

function prepareOne(props, srcProps) {
  return [prepareSample(Field, { ...defaultProps, ...props }, { ...sourceProps, ...srcProps })];
}

const examples = {
  Default: prepareOne({ label: undefined }),
  'With label': prepareOne(),
  'With help': prepareOne({ helpText: 'Help helpText' }),
  'With error': prepareOne({ errorText: 'I am errorText' }),
  'With help + error': prepareOne({ helpText: 'Help text', errorText: 'I am errorText' }),
  Horizontal: prepareOne({ isHorizontal: true }),
  Required: prepareOne({ required: true }),
};

export default sheetRenderer(Field, examples, { pt: true });