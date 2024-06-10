import Card from '../../src/components/Card';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const defaultProps = {
  children: <Card.Content>I am children content!</Card.Content>,
};

const sourceProps = {
  children: '\r\n  <Card.Content>I am children content!</Card.Content>\r\n',
  titleIcon: '{<>&#x1F608;</>}'
};

const examples = {
  'Only content': [prepareSample(Card, defaultProps, sourceProps)],
  'With title': [prepareSample(Card, { ...defaultProps, title: 'I am title' }, sourceProps)],
  'With centered title': [prepareSample(
    Card,
    { ...defaultProps, title: 'I am title', titleCentered: true },
    sourceProps
  )],
  'With title icon': [prepareSample(
    Card,
    { ...defaultProps, title: 'I am title', titleIcon: <>&#x1F608;</> },
    sourceProps
  )],
  'With footer': [prepareSample(
    Card,
    {
      ...defaultProps,
      title: 'I am title',
      children: <>
        <Card.Content>Hello! I am card CONTENT.</Card.Content>
        <Card.Footer>
          <Card.FooterItem as="button" type="button">
            prev
          </Card.FooterItem>
          <Card.FooterItem as="button" type="button">
            ok
          </Card.FooterItem>
          <Card.FooterItem as="button" type="button">
            next
          </Card.FooterItem>
        </Card.Footer>
      </>
    },
    {
      children: `
  <Card.Content>Hello! I am card CONTENT.</Card.Content>
  <Card.Footer>
    <Card.FooterItem as="button" type="button">
      prev
    </Card.FooterItem>
    <Card.FooterItem as="button" type="button">
      ok
    </Card.FooterItem>
    <Card.FooterItem as="button" type="button">
      next
    </Card.FooterItem>
  </Card.Footer>
`
    }
  )],
};

export default sheetRenderer(Card, examples);
