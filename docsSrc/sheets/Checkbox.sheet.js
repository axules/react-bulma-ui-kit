import Checkbox from '../../src/components/Checkbox';
import Field from '../../src/components/Field';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const examples = {
  'Only checkbox': [prepareSample(Checkbox, { value: 'yes', name: 'select' })],
  'With label': [prepareSample(Checkbox, { children: 'Checkbox label', value: 'yes', name: 'select2' })],
  Group: () => {
    const render = (
      <Field label="Choose any">
        <Checkbox name="v1" value="red">Red</Checkbox>
        <Checkbox name="v2" value="blue">Blue</Checkbox>
        <Checkbox name="v3" value="green">Green</Checkbox>
      </Field>
    );
    render.__source = `
<Field label="Choose any">
  <Checkbox name="v1" value="red">Red</Checkbox>
  <Checkbox name="v2" value="blue">Blue</Checkbox>
  <Checkbox name="v3" value="green">Green</Checkbox>
</Field>
    `;
    return [render];
  },
};

export default sheetRenderer(Checkbox, examples, { pt: true });
