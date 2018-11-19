import React from 'react';
import SkillRating from '../../blocks/skill-rating';
import { Header } from 'semantic-ui-react';

const Languages = () => (
    <div>
        <Header>Languages</Header>
        <SkillRating name='English' rating={4}></SkillRating>
        <SkillRating name='German' rating={3}></SkillRating>
    </div>
)

export default Languages;