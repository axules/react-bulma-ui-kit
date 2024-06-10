import DeleteButton from '../../src/components/DeleteButton';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const sizes = '.small.normal.large'.split('.');

function renderEach(cases, props) {
  return cases.map((it) => (
    prepareSample(
      DeleteButton,
      {
        key: it,
        ...(typeof it === 'string' && it ? { [it]: true } : {}),
        ...props,
      },
    )
  ));
}

const examples = {
  Size: renderEach(sizes),
};

export default sheetRenderer(DeleteButton, examples);
