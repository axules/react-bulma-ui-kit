import Button from '../../src/components/Button';
import Tag from '../../src/components/Tag';
import Tags from '../../src/components/Tags';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSource } from '../utils';


const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');
const sizes = '.medium.large'.split('.');

function renderSrc(cases, props) {
  return (
    <pre>
      {cases
        .map(it => prepareSource('Tag', { children: 'click me', ...props, [it]: true }))
        .join('\r\n\r\n')
      }
    </pre>
  );
}

function renderEach(cases, props = {}) {
  return {
    render: <Tags>
      {cases.map((it) => (
        <Tag
          key={it}
          {...(it ? { [it]: true } : {})}
          {...props}
        >
          {props.children ?? (it || 'Default')}
        </Tag>
      ))}
    </Tags>,
    source: renderSrc(cases, props)
  };
}

const examples = {
  styles: renderEach(styles),
  light: renderEach(styles, { light: true }),
  dark: renderEach(styles, { dark: true }),
  isDelete: renderEach(styles, { isDelete: true, hasHover: true, children: '' }),
  rounded: renderEach(styles, { rounded: true }),
  hasHover: renderEach(styles, { hasHover: true }),
  brightness: renderEach(brightness),
  sizes: renderEach(sizes)
};

export default sheetRenderer(Tag, examples, { pt: true });