import React from "react";
import { List, Header, Grid } from "semantic-ui-react";
import TimelineItem from "../timeline-item";

const ProfessionalExperience = () => (
  <div>
    <Header>Professional experience</Header>
    <List>
      <TimelineItem
        from="2015"
        to="present"
        description="Senior .NET developer at Future Processing"
      />
      <TimelineItem
        from="2014"
        to="2015"
        description=".NET developer at Future Processing"
      />
      <TimelineItem
        from="2010"
        to="2014"
        description="Junior .NET developer at Future Processing"
      />
    </List>
  </div>
);

export default ProfessionalExperience;
