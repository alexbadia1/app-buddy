import React from 'react';
import { ShortAnswer } from '../../data/shortanswers';
import { CopyTextContainer } from '../CopyTextContainer';

export interface ShortAnswerCardProps {
  id: number;
  data: ShortAnswer;
}

export function ShortAnswerCard({ id, data }: ShortAnswerCardProps) {
  /**
  return (
    <Card
      header={data.question}
      body={<CopyTextContainer text={data.answer} />}
    />
  );
  */
  return (
    <div className="collapse collapse-arrow join-item">
      <input type="checkbox" name={`my-accordion-${id}`} />
      <div className="collapse-title">{data.question}</div>
      <div className="collapse-content">
        <CopyTextContainer text={data.answer} />
      </div>
    </div>
  );
}
