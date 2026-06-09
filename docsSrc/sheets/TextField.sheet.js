import TextField from '../../src/components/TextField';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const defaultProps = {
  label: 'I am text field label',
};

const sourceProps = {
};

function prepareOne(props, srcProps) {
  return [prepareSample(TextField, { ...defaultProps, ...props }, { ...sourceProps, ...srcProps })];
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

export default sheetRenderer(TextField, examples, { pt: true });