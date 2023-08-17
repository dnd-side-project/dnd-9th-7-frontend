import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

export const Portal = ({ children }: Props) => {
  const portalDiv = document.getElementById('overlay');
  if (!portalDiv) return null;

  return createPortal(children, portalDiv);
};
