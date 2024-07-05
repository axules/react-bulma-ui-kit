import Box from '../../src/components/Box';
import TextInput from '../../src/components/TextInput';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const defaultProps = {
  children: <TextInput placeholder="Type text" />,
};

const sourceProps = {
  children: '\r\n  <TextInput placeholder="Type text" />\r\n',
};

function prepareOne(props, srcProps) {
  return [prepareSample(Box, { ...defaultProps, ...props }, { ...sourceProps, ...srcProps })];
}

const examples = {
  Default: prepareOne(),
  Content: prepareOne({ children: 'I am any content!' }, { children: undefined }),
  Some: () => {
    const jsx = (
      <div>
        <Box>I am FIRST</Box>
        <Box>I am SECOND</Box>
        <Box>I am THIRD</Box>
      </div>
    );
    jsx.__source = `
<div>
  <Box>I am FIRST</Box>
  <Box>I am SECOND</Box>
  <Box>I am THIRD</Box>
</div>
    `;
    return [jsx];
  }
};

const meta = {
  documentation: 'https://bulma.io/documentation/elements/box/',
};

export default sheetRenderer(Box, examples, { pt: true, meta });