import {
  memo,
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useStaticCallback } from '../src/useStaticCallback';

import { FrameMessenger } from './FrameMessenger';


const cnPrefix = 'mainSheetsMenu';

function MainSheetsMenu(props) {
  const { sheets, onSelect, selected } = props;
  const [currentExamples, setCurrentExamples] = useState([]);

  useEffect(() => {
    setCurrentExamples([]);
  }, [selected]);

  useEffect(() => {
    const onMessage = function(type, payload) {
      switch (type) {
        case FrameMessenger.TYPES.SHEET_SECTIONS: {
          setCurrentExamples(payload.items);
          return true;
        }
      }
    };

    return FrameMessenger.listenMessages(onMessage);
  }, []);

  const onClickSheet = useStaticCallback((event) => {
    const sheetName = event.target.getAttribute('href').slice(1);
    onSelect(sheets.find(it => it.name === sheetName));
  });

  const onClickSubmenu = useStaticCallback((event) => {
    const selector = event.target.getAttribute('href');
    if (selector) {
      FrameMessenger.sendChildMessage(FrameMessenger.TYPES.SCROLL_TO, { selector });
    }
  });

  return (
    <aside className="menu">
      <div className="menu-label">Components</div>
      <ul className={classNames(cnPrefix, 'menu-list')}>
        {sheets.map(it => (
          <li key={it.name}>
            <a
              href={`?page=${it.name}`}
              // onClick={onClickSheet}
              className={classNames(selected === it && 'is-active')}
            >
              {it.title || it.name}
            </a>

            {selected === it && currentExamples.length > 0 && (
              <ul>
                {currentExamples.map((it) => (
                  <li key={it.href}>
                    <a href={`#${it.href}`} onClick={onClickSubmenu}>
                      {it.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

MainSheetsMenu.propTypes = {
  sheets: PropTypes.array,
  onSelect: PropTypes.func,
  selected: PropTypes.object,
};

export default MainSheetsMenu
  |> memo;