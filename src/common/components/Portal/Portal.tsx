import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  id: string;
  children: ReactNode;
}

export const Portal = ({ id, children }: Props) => {
  const portalDiv = document.getElementById(id);
  if (!portalDiv) return null;

  return createPortal(children, portalDiv);
};
