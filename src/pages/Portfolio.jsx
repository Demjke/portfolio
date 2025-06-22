import { memo } from "react";
import About from "./About";
import Contacts from "./Contacts";
import Intro from "./Intro";
import Skills from "./Skills";
import Works from "./Works";

const Portfolio = memo(({ openPopup, closePopup }) => {
    return (
        <div className="portfolio">
            <Intro openPopup={openPopup} closePopup={closePopup} />
            <About openPopup={openPopup} />
            <Skills />
            <Works />
            <Contacts openPopup={openPopup} closePopup={closePopup} />
        </div>
    );
});
export default Portfolio;
