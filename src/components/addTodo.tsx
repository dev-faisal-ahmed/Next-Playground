'use client';

import { useState } from 'react';
import Modal from './modal';

export function AddTodo() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>add todo</button>
      <Modal title='Add Todo' onCloseModal={onCloseModal} state={openModal}>
        <form>
          <div className='flex flex-col-reverse gap-1'>
            <input
              className='peer rounded border-b-4 border-transparent bg-gray-200 px-3 pb-1 pt-2 outline-none focus:border-blue-500'
              type='text'
              id='title'
              name='title'
              placeholder='Add Title'
            />
            <label
              className='font-semibold peer-focus:text-blue-500'
              htmlFor='title'
            >
              Title
            </label>
          </div>

          <div className='mt-5 flex flex-col-reverse gap-1'>
            <textarea
              className='peer rounded border-b-4 border-transparent bg-gray-200 px-3 pb-1 pt-2 outline-none focus:border-blue-500'
              id='description'
              name='description'
              placeholder='Add Title'
            />
            <label
              className='font-semibold peer-focus:text-blue-500'
              htmlFor='description'
            >
              Description
            </label>
          </div>
          <div className='ml-auto mt-5 grid w-fit grid-cols-2 gap-5'>
            <p className='button cursor-pointer bg-gray-500'>Cancel</p>
            <button className='button bg-blue-600'>Add</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
