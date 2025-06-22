import { memo } from "react";

const Scroll = memo(({ scrollThumb }) => {
    return (
        <div className="scroll">
            <div className="thumb" style={{ maxWidth: `${scrollThumb}%` }}></div>
        </div>
    );
});

export default Scroll;
