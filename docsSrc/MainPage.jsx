import {
  memo,
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';

import Button from '../dist/components/Button';
import Title from '../src/components/Title';
import { useStaticCallback } from '../src/useStaticCallback';

import { FrameMessenger } from './FrameMessenger';
import SheetsMenu from './MainSheetsMenu';


const cnPrefix = 'mainPage';

function MainPage(props) {
  const { sheets } = props;
  const [selectedSheet, setSelectedSheet] = useState(() => {
    const name = /page=([^&=]+)/.exec(document.location.search || '')?.[1];
    // const hash = (document.location.hash || '').replace('#', '');
    return name
      ? sheets.find((it) => it.name === name)
      : undefined;
  });

  const url = selectedSheet ? `./${selectedSheet.path}` : undefined;

  useEffect(() => {
    const onMessage = function(type, payload) {
      switch (type) {
        case FrameMessenger.TYPES.FRAME_RESIZE: {
          const { height, url } = payload;
          const fileName = url.split('/').pop();
          const frame = document.querySelector(`iframe[src*="${fileName}"]`);

          if (frame) {
            frame.style['min-height'] = `${height}px`;
          }
          return true;
        }
      }
    };

    return FrameMessenger.listenMessages(onMessage);
  }, []);

  const onClickToTop = useStaticCallback(() => {
    document.body.scrollIntoView({ behavior: 'smooth' });
  });

  const onLoadIframe = useStaticCallback(() => {
    const hash = (document.location.hash || '');
    if (hash) {
      setTimeout(() => FrameMessenger.sendChildMessage(FrameMessenger.TYPES.SCROLL_TO, { selector: hash }), 50);
    }
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
            <iframe name="SheetFrame" title={selectedSheet.name} src={url} onLoad={onLoadIframe} />
          </>
          : <Title is2>{'<- '}Select component in menu</Title>
        }
      </div>

      <Button info light className={`${cnPrefix}__toTop`} onClick={onClickToTop}>
        <span className="icon">&#129145;</span>
      </Button>
    </div>
  );
}

MainPage.propTypes = {
  sheets: PropTypes.array
};

MainPage.defaultProps = {};

export default MainPage
  |> memo;