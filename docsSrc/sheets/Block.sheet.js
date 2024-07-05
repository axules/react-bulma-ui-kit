import Block from '../../src/components/Block';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const defaultProps = {
};

const sourceProps = {
};

function prepareOne(props, srcProps) {
  return [prepareSample(Block, { ...defaultProps, ...props }, { ...sourceProps, ...srcProps })];
}

const examples = {
  One: prepareOne({ children: 'I am single block' }),
  Some: () => {
    const jsx = (
      <div>
        <Block>I am FIRST</Block>
        <Block>I am SECOND</Block>
        <Block>I am THIRD</Block>
      </div>
    );
    jsx.__source = `
<div>
  <Block>I am FIRST</Block>
  <Block>I am SECOND</Block>
  <Block>I am THIRD</Block>
</div>
    `;
    return [jsx];
  },
};

const meta = {
  documentation: 'https://bulma.io/documentation/elements/block/',
};

export default sheetRenderer(Block, examples, { pt: true, meta });