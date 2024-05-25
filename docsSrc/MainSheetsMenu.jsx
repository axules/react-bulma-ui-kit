import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useStaticCallback } from '../src/useStaticCallback';


const cnPrefix = 'mainSheetsMenu';

function MainSheetsMenu(props) {
  const { sheets, onSelect, selected } = props;

  const onClickSheet = useStaticCallback((event) => {
    const sheetName = event.target.getAttribute('href').slice(1);
    onSelect(sheets.find(it => it.name === sheetName));
  });

  return (
    <ul className={cnPrefix}>
      {sheets.map(it => (
        <li key={it.name}>
          <a
            href={`#${it.name}`}
            onClick={onClickSheet}
            className={classNames(selected === it && 'm-selected')}
          >
            {it.title || it.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

MainSheetsMenu.propTypes = {
  sheets: PropTypes.array,
  onSelect: PropTypes.func,
  selected: PropTypes.object,
};

MainSheetsMenu.defaultProps = {
};

export default MainSheetsMenu
  |> memo;