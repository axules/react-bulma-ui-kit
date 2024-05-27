import Notification from '../../src/components/Notification';
import Title from '../../src/components/Title';
import { sheetRenderer } from '../sheetRenderer';


const sizes = '.is1.is2.is3.is4.is5.is6'.split('.');

function renderEach(cases, props) {
  return (
    <div>
      {cases.map((it) => (
        <Title
          key={it}
          {...(it ? { [it]: true } : {})}
          {...props}
        >
          {it || 'Default'}<br />
          It is example of text which could be in this Notification component
        </Title>
      ))}
    </div>
  );
}

const examples = {
  sizes: renderEach(sizes),
  sizesSubtitle: renderEach(sizes, { subtitle: true }),
};

export default sheetRenderer(Notification, examples);