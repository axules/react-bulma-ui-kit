import Field from '../../src/components/Field';
import Radio from '../../src/components/Radio';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const examples = {
  'Only radio': [prepareSample(Radio, { value: 'yes', name: 'select' })],
  'With label': [prepareSample(Radio, { children: 'Radio label', value: 'yes', name: 'select2' })],
  Group: () => {
    const render = (
      <Field label="Choose one">
        <Radio name="gr1" classNameInput="classNameInput">Yes</Radio>
        <Radio name="gr1">No</Radio>
      </Field>
    );
    render.__source = `
<Field label="Choose one">
  <Radio name="gr1" classNameInput="classNameInput">Yes</Radio>
  <Radio name="gr1">No</Radio>
</Field>
    `;
    return [render];
  },
};

export default sheetRenderer(Radio, examples, { pt: true });
