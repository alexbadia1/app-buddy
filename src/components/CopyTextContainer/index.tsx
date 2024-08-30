import React from 'react';
import { toast } from 'react-toastify';

import './index.css';

export const copyToClipboard = (text: string) => {
  try {
    navigator.clipboard.writeText(text);
    toast.dismiss();
    toast('Copied to clipboard!');
  } catch (err) {
    toast('Error');
  }
};

export interface CopyTextContainerProps {
  text: string;
}

export function CopyTextContainer({ text }: CopyTextContainerProps) {
  return (
    <div className="copytextcontainer" onClick={(_) => copyToClipboard(text)}>
      {text}
    </div>
  );
}
