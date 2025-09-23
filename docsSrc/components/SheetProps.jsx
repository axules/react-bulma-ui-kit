import { memo } from 'react';
import PropTypes from 'prop-types';

import Panel from '../../src/components/Panel';
import PanelBlock from '../../src/components/PanelBlock';
import Table from '../../src/components/Table';


const cnPrefix = 'sheetProps';

function SheetProps(props) {
  const { propTypesData } = props;

  return (
    <Panel title="Prop types:" className={cnPrefix}>
      <PanelBlock>
        <Table bordered>
          <tbody>
            {Object.entries(propTypesData)
              .map(([k]) => (
                <tr key={k}>
                  <td>{k}</td>
                  <td>???</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </PanelBlock>
    </Panel>
  );
}

SheetProps.propTypes = {
  propTypesData: PropTypes.node
};

export default SheetProps
  |> memo;