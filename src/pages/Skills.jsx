import { skillsData } from "../data/skillsData";

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="container">
                <div className="skills-title">Навыки и технологии</div>
                <div className="skills-text"></div>
                <div className="skills-wrapper">
                    {skillsData.map(skill => (
                        <div className="skills-item" key={skill.name}>
                            <div className="skills-item__img">
                                <img src={skill.img} alt="" />
                            </div>
                            <div className="skills-item__title">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
