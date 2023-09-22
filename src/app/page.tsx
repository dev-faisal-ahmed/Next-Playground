import { AddTodo } from '@/components/addTodo';
import { data } from 'autoprefixer';
import pocketBase from 'pocketbase';

const getStats = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8090/api/collections/todos');
    const data = await response.json();
    return data;
  } catch {
    return {};
  }
};

export default async function HomePage() {
  const stats = await getStats();
  return (
    <>
      {JSON.stringify(stats)}
      <AddTodo />
    </>
  );
}
