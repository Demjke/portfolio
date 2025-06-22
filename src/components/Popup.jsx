import { memo } from "react";
import { IoClose } from "react-icons/io5";
const Popup = memo(({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popup" onClick={onClose}>
            <div className="popup-close" onClick={onClose}>
                <IoClose className="icon" />
            </div>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
});

export default Popup;
