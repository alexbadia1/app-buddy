import React from 'react';
import { Project } from '../../data/projects';
import { CopyTextContainer } from '../CopyTextContainer';
import { Card } from '../Card';

export interface ProjectCardProps {
  data: Project;
}

export function ProjectCard({ data }: ProjectCardProps) {
  return (
    <Card
      header={<CopyTextContainer text={data.title} />}
      subheader={<CopyTextContainer text={data.viewProject} />}
      body={data.description.map((d) => (
        <CopyTextContainer text={d} />
      ))}
    />
  );
}
