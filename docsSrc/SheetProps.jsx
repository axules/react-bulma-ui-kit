import { memo } from 'react';
import PropTypes from 'prop-types';


const cnPrefix = 'sheetProps';

function SheetProps(props) {
  const { propTypesData } = props;

  return (
    <div className={cnPrefix}>
      <h3>Prop types:</h3>
      <table className="table is-bordered">
        <tbody>
          {Object.entries(propTypesData)
            .map(([k]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>???</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

SheetProps.propTypes = {
  propTypesData: PropTypes.node
};

export default SheetProps
  |> memo;