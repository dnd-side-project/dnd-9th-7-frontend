import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  id: string;
  children: ReactNode;
}

export const Portal = ({ id, children }: Props) => {
  const portalDiv = document.getElementById(id);
  if (!portalDiv) {
    const newDiv = document.createElement('div');
    newDiv.id = id;

    const root = document.getElementById('root');
    root?.insertAdjacentElement('afterend', newDiv);

    return createPortal(children, newDiv);
  }

  return createPortal(children, portalDiv);
};
