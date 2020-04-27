import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({
  children,
  className,

  isOpened,
  onClose,
  removeFromDOM,

  ...props
}) => {
  const overlayRoot = React.useMemo(() => window && window.document.body, []);

  const [isExistInDOM, setExistInDOM] = React.useState(isOpened);

  React.useEffect(() => {
    if (removeFromDOM) {
      const timeOut = isExistInDOM ? 500 : 0;
      setTimeout(() => setExistInDOM(isOpened), timeOut);
    }
  }, [isOpened, isExistInDOM]);

  return (
    overlayRoot &&
    ReactDOM.createPortal(
      <div
        className={`ms-modal ms-modal--${
          isOpened ? 'opened' : 'closed'
        } ms-modal__overlay`}
        {...props}
      >
        {isExistInDOM && (
          <div
            className={`ms-modal__dialog ms-modal--theme-minimal ${
              className || ''
            }`}
          >
            {onClose && (
              <button
                className="ms-modal__close"
                type="button"
                onClick={onClose}
              >
                &times;
              </button>
            )}
            {children}
          </div>
        )}
      </div>,
      overlayRoot
    )
  );
};

Modal.defaultProps = {
  className: '',
  removeFromDOM: true,
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  removeFromDOM: PropTypes.bool,
};

export default Modal;
