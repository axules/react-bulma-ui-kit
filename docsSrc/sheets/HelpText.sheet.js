import HelpText from '../../src/components/HelpText';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const styles = '.light.primary.link.info.success.warning.danger'.split('.');

function renderEach(cases, props) {
  return cases.map((it) => (
    prepareSample(
      HelpText,
      { key: it, children: 'I am help children text', ...(it ? { [it]: true } : {}), ...props }
    )
  ));
}

const examples = {
  Colors: renderEach(styles),
};

export default sheetRenderer(HelpText, examples, { pt: true });