import React from 'react';

import './index.css';

export interface CardProps {
  header?: any;
  subheader?: any;
  body?: any;
}

export function Card({ header, subheader, body }: CardProps) {
  return (
    <div className="my-card">
      {header && <div className="my-card-header">{header}</div>}
      {subheader && <div className="my-card-subheader">{subheader}</div>}
      {body && <div className="my-card-body">{body}</div>}
    </div>
  );
}
