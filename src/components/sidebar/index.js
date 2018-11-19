import React from 'react';
import { Image, Divider } from 'semantic-ui-react'
import PersonalDetails from '../../blocks/personal-details';
import Languages from '../languages';
import ProgrammingSkills from '../programming-skills';

const Sidebar = () => (
    <div>
        <Image src='/images/harold.jpg' size='medium' />
        <PersonalDetails></PersonalDetails>
        <Divider></Divider>
        <Languages></Languages>
        <Divider></Divider>
        <ProgrammingSkills></ProgrammingSkills>
    </div>
)

export default Sidebar;