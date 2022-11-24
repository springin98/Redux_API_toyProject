import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './../styled/Modal_Portal.css';

const ModalPortal = ({ children, closePortal }) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById('root-modal');
      ref.current = dom;
    }
    return () => {
      setMounted(false);
    };
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <div className="modal">
        <div className="modal-background" onClick={closePortal} />
        <div className="modal-content">
          <div className="modal-content__main">{children}</div>
        </div>
      </div>,
      ref.current,
    );
  }
  return null;
};

export default ModalPortal;
