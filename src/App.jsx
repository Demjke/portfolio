import { useCallback, useRef, useState } from "react";
import "./assets/styles/main.sass";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Scroll from "./components/Scroll";
import { useCustomScrollbar } from "./hooks/useCustomScrollbar";
import Portfolio from "./pages/Portfolio";

const App = () => {
    const appRef = useRef(null);
    const scrollThumb = useCustomScrollbar(appRef);
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = useCallback(content => {
        setPopupContent(content);
    }, []);

    const closePopup = useCallback(() => {
        setPopupContent(null);
    }, []);

    return (
        <div className="app" ref={appRef}>
            <Popup onClose={closePopup} isOpen={!!popupContent}>
                {popupContent}
            </Popup>
            <Scroll scrollThumb={scrollThumb} />
            <Header openPopup={openPopup} closePopup={closePopup} />
            <Portfolio openPopup={openPopup} closePopup={closePopup} />
        </div>
    );
};

export default App;
