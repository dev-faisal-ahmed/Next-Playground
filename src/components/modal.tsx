'use client';
import { ModalProps } from '@/utils/types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  title,
  state,
  onCloseModal,
  children,
}: ModalProps) {
  useEffect(() => {
    window.document.body.classList.add('modal-open');
    return window.document.body.classList.remove('modal-open');
  }, [state]);

  return (
    state &&
    createPortal(
      <div
        className='modal absolute left-0 top-0 z-50 flex h-screen w-full items-center justify-center'
        onClick={onCloseModal}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='w-[500px] rounded bg-white p-5 shadow'
        >
          <h1 className='text-lg font-semibold'>{title}</h1>
          <div className='mt-5'>{children}</div>
        </div>
      </div>,
      document.getElementById('modal-root') as HTMLElement,
    )
  );
}
