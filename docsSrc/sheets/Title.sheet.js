import Notification from '../../src/components/Notification';
import Title from '../../src/components/Title';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const sizes = '.is1.is2.is3.is4.is5.is6'.split('.');

function renderEach(cases, props) {
  return cases.map((it) => (
    prepareSample(
      Title,
      {
        key: it,
        children: 'I am title text',
        ...(it ? { [it]: true } : {}),
        ...props,
      },
    )
  ));
}

const examples = {
  Title: renderEach(sizes),
  Subtitle: renderEach(sizes, { subtitle: true, children: 'I am subtitle text' }),
};

export default sheetRenderer(Notification, examples);