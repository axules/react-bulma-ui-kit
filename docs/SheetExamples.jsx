import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const cnPrefix = 'sheetExamples';

function SheetExamples(props) {
  const { children, title } = props;

  return (
    <div className={cnPrefix}>
      {title && <h3>{title}</h3>}
      <div>
        {children}
      </div>
    </div>
  );
}

SheetExamples.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
};

SheetExamples.defaultProps = {};

export default SheetExamples
  |> memo;