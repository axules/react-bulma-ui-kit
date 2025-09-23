import Panel from '../../src/components/Panel';
import PanelBlock from '../../src/components/PanelBlock';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const styles = '.primary.link.info.success.warning.danger.white.light.dark.black'.split('.');

const defaultProps = {
  title: 'I am panel tile!',
  children: <PanelBlock>Hello I am children!</PanelBlock>
};

const sourceProps = {
  children: '\r\n  <PanelBlock>Hello I am children!</PanelBlock>\r\n'
};

function prepareOne(props, srcProps) {
  return [prepareSample(Panel, { ...defaultProps, ...props }, { ...sourceProps, ...srcProps })];
}

function renderEach(cases, props) {
  return cases.flatMap((it) => prepareOne({
    key: it,
    ...(it ? { [it]: true } : {}),
    ...props
  }));
}

const examples = {
  Simple: prepareOne(),
  Colors: renderEach(styles),
  'Without title': prepareOne({ title: undefined }),
};

const meta = {
  documentation: 'https://bulma.io/documentation/components/panel/',
};

export default sheetRenderer(Panel, examples, { pt: true, meta });