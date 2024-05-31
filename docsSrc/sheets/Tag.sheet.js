import Tag from '../../src/components/Tag';
import Tags from '../../src/components/Tags';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');
const sizes = '.medium.large'.split('.');


function renderEach(cases, props = {}) {
  return cases.map((it) => (
    prepareSample(
      Tag,
      {
        key: it,
        children: it || 'Default',
        ...(it ? { [it]: true } : {}),
        ...props,
      },
    )
  ));
}

const examples = {
  Colors: renderEach(styles),
  'Light colors': renderEach(styles, { light: true }),
  'Dark colors': renderEach(styles, { dark: true }),
  isDelete: renderEach(styles, { isDelete: true, hasHover: true, children: '' }),
  Rounded: renderEach(styles, { rounded: true }),
  hasHover: renderEach(styles, { hasHover: true }),
  Brightness: renderEach(brightness),
  Sizes: renderEach(sizes),
  Tags: (() => {
    const R1 = <Tags><Tag primary>today</Tag><Tag warning>tomorrow</Tag></Tags>;
    R1.__source = '<Tags><Tag primary>today</Tag><Tag warning>tomorrow</Tag></Tags>';

    const R2 = <Tags hasAddons><Tag primary>today</Tag><Tag warning>tomorrow</Tag></Tags>;
    R2.__source = '<Tags hasAddons><Tag primary>today</Tag><Tag warning>tomorrow</Tag></Tags>';
    return [R1, R2];
  })(),
};

export default sheetRenderer(Tag, examples, { pt: true });