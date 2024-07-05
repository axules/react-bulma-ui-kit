class FrameMessengerClass {
  TYPES = {
    FRAME_RESIZE: 'FRAME_RESIZE',
    SHEET_SECTIONS: 'SHEET_SECTIONS',
    SHEET_META: 'SHEET_META',
    SCROLL_TO: 'SCROLL_TO',
  };

  sendParentMessage(type, payload) {
    const event = { type, payload };
    window.top.postMessage(event, '*');
  }

  sendChildMessage(type, payload) {
    const event = { type, payload };
    document.querySelector('iframe')?.contentWindow?.postMessage(event, '*');
  }

  listenMessages(callback) {
    const onMessage = function(event) {
      if (typeof event.data !== 'object') return;
      const { type, payload } = event.data;
      callback(type, payload);
    };

    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('message', onMessage);
    };
  }
}

export const FrameMessenger = new FrameMessengerClass();