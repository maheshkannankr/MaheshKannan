'use client';

import { createContext, useContext } from 'react';
import { Project } from '@/data/projects';

export type ModalType = 'PROJECT' | null;

export type ModalState =
  | { type: 'PROJECT'; data: Project }
  | { type: null; data: null };

export type PopupModelContextType = {
  openModel: (type: 'PROJECT', data: Project) => void;
  closeModel: () => void;
  modal: ModalState;
};

export const PopupModelContext = createContext<PopupModelContextType | null>(
  null,
);

// ✅ Custom Hook (clean usage)
export const usePopupModel = () => {
  const context = useContext(PopupModelContext);
  if (!context) {
    throw new Error('usePopupModel must be used within PopupModelProvider');
  }
  return context;
};
