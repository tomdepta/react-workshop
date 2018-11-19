import React from 'react';
import SkillRating from '../../blocks/skill-rating';
import { Header } from 'semantic-ui-react';

const ProgrammingSkills = () => (
    <div>
        <Header>Programming Skills</Header>
        <SkillRating name='C#' rating={4}></SkillRating>
        <SkillRating name='JavaScript' rating={3}></SkillRating>
        <SkillRating name='OOP' rating={3}></SkillRating>
    </div>
)

export default ProgrammingSkills;