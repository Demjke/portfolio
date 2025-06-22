import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { skillsData } from "../data/skillsData";

export const WorkItem = memo(({ info }) => {
    let skills = useMemo(() => {
        return info.technologies && skillsData.filter(item => info.technologies.find(el => el === item.id));
    }, [info]);

    return (
        <div className="works-item" key={info.id}>
            <Link to={info.link} className="works-item__img" target="_blank">
                <img src={info.img} alt={info.img} />
            </Link>
            <Link to={info.link} className="works-item__title" target="_blank">
                {info.title}
            </Link>
            <div className="works-item__desc">{info.description}</div>
            {info.technologies && skills && (
                <div className="works-item__skills">
                    {skills.map(skill => (
                        <div className="works-item__skill" key={skill.id}>
                            <img src={skill.img} alt={skill.img} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});
