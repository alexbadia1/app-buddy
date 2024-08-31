import React from 'react';

import './index.css';

export interface CardProps {
  header?: any;
  subheader?: any;
  body?: any;
  bodyAction?: any;
}

export function Card({ header, subheader, body, bodyAction }: CardProps) {
  return (
    <div className="my-card">
      {header && <div className="my-card-header">{header}</div>}
      {subheader && <div className="my-card-subheader">{subheader}</div>}
      {body && (
        <div className="my-card-body">
          <div className="my-card-body-action" onClick={bodyAction}>©</div>
          <div className="my-card-body-content">{body}</div>
        </div>
      )}
    </div>
  );
}
