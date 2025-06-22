import { useMemo } from "react";
import Tabs from "../components/Tabs";
import { WorkItem } from "../components/WorkItem";
import { worksData } from "../data/worksData";

const Works = () => {
    let categories = useMemo(() => {
        return worksData.map(item => item.category);
    }, []);

    let tabContent = useMemo(() => {
        return worksData.map(item => item.data);
    }, []);

    return (
        <div className="works" id="works">
            <div className="container">
                <div className="works-info">
                    <div className="works-title">Мои работы</div>
                    <div className="works-text">
                        Здесь представлены мои проекты, выполненные в рамках профессиональной деятельности и учебных
                        задач. Каждый из них демонстрирует навыки работы с современными технологиями и внимательность к
                        деталям.
                    </div>
                </div>
                <Tabs contents={tabContent} tabs={categories}>
                    <WorkItem />
                </Tabs>
            </div>
        </div>
    );
};

export default Works;
