import {
  memo,
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Title from '../src/components/Title';

import SheetsMenu from './MainSheetsMenu';
import SheetProps from './SheetProps';


const cnPrefix = 'mainPage';

function MainPage(props) {
  const { sheets } = props;
  const [selectedSheet, setSelectedSheet] = useState(() => {
    const hash = (document.location.hash || '').replace('#', '');
    return hash
      ? sheets.find((it) => it.name === hash)
      : undefined;
  });
  const url = selectedSheet ? `./${selectedSheet.path}` : undefined;

  useEffect(() => {
    const onMessage = function(event) {
      if (typeof event.data !== 'object') return;
      const { type, payload } = event.data;

      switch (type) {
        case 'FRAME_RESIZE': {
          const { height, url } = payload;
          const fileName = url.split('/').pop();
          const frame = document.querySelector(`iframe[src*="${fileName}"]`);

          if (frame) {
            frame.style['min-height'] = `${height}px`;
          }
          break;
        }
        default:
          console.warn('Undefined command [%s]', event.data);
      }
    };

    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
    };
  });

  return (
    <div className={cnPrefix}>
      <div className={`${cnPrefix}__menu`}>
        <SheetsMenu sheets={sheets} selected={selectedSheet} onSelect={setSelectedSheet} />
      </div>
      <div className={`${cnPrefix}__view`}>
        {selectedSheet
          ? <>
            <Title is4>{selectedSheet.name}</Title>
            <iframe title={selectedSheet.name} src={url} />
          </>
          : <h1>Select component</h1>
        }
      </div>
    </div>
  );
}

MainPage.propTypes = {
  sheets: PropTypes.array
};

MainPage.defaultProps = {};

export default MainPage
  |> memo;