import Table from '../../src/components/Table';
import TableCell from '../../src/components/Table/TableCell';
import TableRow from '../../src/components/Table/TableRow';
import { sheetRenderer } from '../sheetRenderer';
import { prepareSample } from '../utils';


const styles = '.light.dark.primary.link.info.success.warning.danger'.split('.');
const sizes = '.small.large'.split('.');

function renderEach(cases, props) {
  return cases.map((it) => (
    prepareSample(
      Table,
      {
        key: it,
        children: 'I am message children!',
        title: 'I am title',
        ...(it ? { [it]: true } : {}),
        ...props
      }
    )
  ));
}

const examples = {
  General: () => {
    const jsx = (
      <Table bordered fullWidth>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <TableCell header light>Column 3</TableCell>
            <th>Column 4</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Body 1 : Row 1 - Column 1</td>
            <TableCell info>Body 1 : Row 1 - Column 2</TableCell>
            <td>Body 1 : Row 1 - Column 3</td>
            <td>Body 1 : Row 1 - Column 4</td>
          </tr>
          <tr>
            <TableCell primary>Body 1 : Row 2 - Column 1</TableCell>
            <td>Body 1 : Row 2 - Column 2</td>
            <td>Body 1 : Row 2 - Column 3</td>
            <TableCell light>Body 1 : Row 2 - Column 4</TableCell>
          </tr>
          <tr>
            <td>Body 1 : Row 3 - Column 1</td>
            <td>Body 1 : Row 3 - Column 2</td>
            <TableCell dark>Body 1 : Row 3 - Column 3</TableCell>
            <td>Body 1 : Row 3 - Column 4</td>
          </tr>
          <tr>
            <td>Body 1 : Row 4 - Column 1</td>
            <td>Body 1 : Row 4 - Column 2</td>
            <td>Body 1 : Row 4 - Column 3</td>
            <td>Body 1 : Row 4 - Column 4</td>
          </tr>
        </tbody>

        <tbody>
          <TableRow selected>
            <td>Body 2 : Row 1 - Column 1</td>
            <TableCell light warning>Body 2 : Row 1 - Column 2</TableCell>
            <td>Body 2 : Row 1 - Column 3</td>
            <td>Body 2 : Row 1 - Column 4</td>
          </TableRow>
          <tr>
            <td>Body 2 : Row 2 - Column 1</td>
            <td>Body 2 : Row 2 - Column 2</td>
            <td>Body 2 : Row 2 - Column 3</td>
            <td>Body 2 : Row 2 - Column 4</td>
          </tr>
        </tbody>
      </Table>
    );

    jsx.__source = `
<Table bordered fullWidth>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <TableCell header light>Column 3</TableCell>
      <th>Column 4</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Body 1 : Row 1 - Column 1</td>
      <TableCell info>Body 1 : Row 1 - Column 2</TableCell>
      <td>Body 1 : Row 1 - Column 3</td>
      <td>Body 1 : Row 1 - Column 4</td>
    </tr>
    <tr>
      <TableCell primary>Body 1 : Row 2 - Column 1</TableCell>
      <td>Body 1 : Row 2 - Column 2</td>
      <td>Body 1 : Row 2 - Column 3</td>
      <TableCell light>Body 1 : Row 2 - Column 4</TableCell>
    </tr>
    <tr>
      <td>Body 1 : Row 3 - Column 1</td>
      <td>Body 1 : Row 3 - Column 2</td>
      <TableCell dark>Body 1 : Row 3 - Column 3</TableCell>
      <td>Body 1 : Row 3 - Column 4</td>
    </tr>
    <tr>
      <td>Body 1 : Row 4 - Column 1</td>
      <td>Body 1 : Row 4 - Column 2</td>
      <td>Body 1 : Row 4 - Column 3</td>
      <td>Body 1 : Row 4 - Column 4</td>
    </tr>
  </tbody>

  <tbody>
    <TableRow selected>
      <td>Body 2 : Row 1 - Column 1</td>
      <TableCell light warning>Body 2 : Row 1 - Column 2</TableCell>
      <td>Body 2 : Row 1 - Column 3</td>
      <td>Body 2 : Row 1 - Column 4</td>
    </TableRow>
    <tr>
      <td>Body 2 : Row 2 - Column 1</td>
      <td>Body 2 : Row 2 - Column 2</td>
      <td>Body 2 : Row 2 - Column 3</td>
      <td>Body 2 : Row 2 - Column 4</td>
    </tr>
  </tbody>
</Table>
    `;
    return jsx;
  }
};

export default sheetRenderer(Table, examples, { pt: true });