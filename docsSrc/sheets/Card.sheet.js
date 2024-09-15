import Card, {
  CardContent,
  CardFooter,
  CardFooterItem
} from '../../src/components/Card';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const defaultProps = {
  children: <CardContent>I am children content!</CardContent>,
};

const sourceProps = {
  children: '\r\n  <CardContent>I am children content!</CardContent>\r\n',
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
        <CardContent>Hello! I am card CONTENT.</CardContent>
        <CardFooter>
          <CardFooterItem as="button" type="button">
            prev
          </CardFooterItem>
          <CardFooterItem as="button" type="button">
            ok
          </CardFooterItem>
          <CardFooterItem as="button" type="button">
            next
          </CardFooterItem>
        </CardFooter>
      </>
    },
    {
      children: `
  <CardContent>Hello! I am card CONTENT.</CardContent>
  <CardFooter>
    <CardFooterItem as="button" type="button">
      prev
    </CardFooterItem>
    <CardFooterItem as="button" type="button">
      ok
    </CardFooterItem>
    <CardFooterItem as="button" type="button">
      next
    </CardFooterItem>
  </CardFooter>
`
    }
  )],
};

export default sheetRenderer(Card, examples);
