import React, { memo, useState } from "react";

const Tabs = memo(({ contents, children, tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs">
            <div className="tabs-btns">
                {tabs.map((tab, i) => (
                    <button
                        className={`tabs-tab ${activeTab === i ? "active" : ""}`}
                        key={tab}
                        onClick={() => setActiveTab(i)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="tabs-content">
                {contents.map((data, i) => (
                    <div className={`tabs-items ${activeTab === i ? "active" : ""}`} key={i}>
                        {data.map((info, index) => React.cloneElement(children, { info, key: index }))}
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Tabs;
