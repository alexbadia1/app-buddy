import React from 'react';
import { Hotlink } from '../../data/hotlinks';
import { Card } from '../Card';
import { CopyTextContainer } from '../CopyTextContainer';

export interface HotLinkCardProps {
  data: Hotlink;
}

export function HotLinkCard({ data }: HotLinkCardProps) {
  return (
    <div className="w-full">
      <Card
      header={<CopyTextContainer text={data.title} />}
      subheader={<CopyTextContainer text={data.url} />}
    />
    </div>
  );
}
