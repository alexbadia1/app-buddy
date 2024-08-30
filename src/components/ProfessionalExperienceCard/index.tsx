import React from 'react';
import { CopyTextContainer } from '../CopyTextContainer';
import { ProfessionalExperience } from '../../data/professional';

import '../../index.css';
import { Card } from '../Card';

export interface ProfessionalExperienceCard {
  data: ProfessionalExperience;
}

export function ProfessionalExperienceCard({
  data,
}: ProfessionalExperienceCard) {
  return (
    <Card
      header={<CopyTextContainer text={data.title} />}
      subheader={[
        <CopyTextContainer text={data.company} />,
        <div className="flex flex-row items-center w-full">
          <CopyTextContainer text={data.city} />
          &#8226;
          <CopyTextContainer text={data.state} />
        </div>,
        <div className="flex flex-row items-center w-full">
          <CopyTextContainer text={data.startDate} />
          &#8208;
          <CopyTextContainer text={data.endDate} />
        </div>,
      ]}
      body={data.description.map((d) => (
        <CopyTextContainer text={d} />
      ))}
    />
  );
}
