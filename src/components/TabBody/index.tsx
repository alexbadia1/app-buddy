import React from 'react';

export interface TabBodyProps {
  children: any;
}

export function TabBody({ children }: TabBodyProps) {
  return <div className="tab-body">{children}</div>;
}
