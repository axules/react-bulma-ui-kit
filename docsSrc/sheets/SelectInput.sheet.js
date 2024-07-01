import SelectInput from '../../src/components/SelectInput';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const styles = '.primary.link.info.success.warning.danger'.split('.');
const sizes = '.small.normal.large'.split('.');
const icons = [ { icon: <>&#x1F608;</> }];
const multiple = [{ size: 1 }, { size: 3 }, { size: 5 }];

function renderEach(cases, props) {
  return cases.map((it) => (
    prepareSample(
      SelectInput,
      {
        key: it,
        children: <>
          <option>Option Item 1</option>
          <option>Option Item 2</option>
          <option>Option Item 3</option>
          <option>Option Item 4</option>
          <option>Option Item 5</option>
          <option>Option Item 6</option>
          <option>Option Item 7</option>
          <option>Option Item 8</option>
        </>,
        placeholder: 'I am placeholder',
        ...(typeof it === 'string' && it ? { [it]: true } : {}),
        ...(typeof it === 'object' ? it : {}),
        ...props,
      },
      {
        children: `
  <option>Option Item 1</option>
  <option>Option Item 2</option>
  <option>Option Item 3</option>
  <option>Option Item 4</option>
  <option>Option Item 5</option>
  <option>Option Item 6</option>
  <option>Option Item 7</option>
  <option>Option Item 8</option>\r\n`,
        icon: '{<>&#x1F608;</>}',
      }
    )
  ));
}

const examples = {
  Styles: renderEach(styles),
  Size: renderEach(sizes),
  Icons: renderEach(icons),
  Multiple: renderEach(multiple, { multiple: true }),
  FullWidth: renderEach(icons, { fullWidth: true })
};

export default sheetRenderer(SelectInput, examples);
