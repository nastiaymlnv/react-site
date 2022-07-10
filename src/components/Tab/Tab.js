import React, {useState} from "react";
import withLoader from "../../hocs/withLoader";

import "./Tab.css";

const Tab = ({tabs}) => {
    const [index, setIndex] = useState(0);

    return <div className="tab-window">
        <div className="tab-titles">
            {
                tabs.map(({id, title}, i) => {
                    const className = i === index ? "tab-name tab-name_active" : 'tab-name';
                    const tabHeaderClick = () => {setIndex(i)};

                    return <div className={className} key={id} onClick={tabHeaderClick}>
                        {title}
                    </div>
                })
            }
        </div>
        <div className="tab-pages">
            <div className="tab-content">
                {tabs[index].text}
            </div>
        </div>
    </div>
}

export default withLoader(Tab);