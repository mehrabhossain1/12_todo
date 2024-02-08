import { clearTodos } from '@/redux/features/todoSlice';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { useAppDispatch } from '@/redux/hooks';
import { Button } from '../ui/button';
import { useGetTodosQuery } from '@/redux/api/api';

const TodoContainer = () => {
  // const [todos, setTodos] = useState({ data: [] });
  const dispatch = useAppDispatch();

  //* From Local state
  // const { todos } = useAppSelector((state) => state.todos);

  // * From server state
  const { data: todos, isLoading } = useGetTodosQuery(undefined);

  console.log(todos);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <Button variant={'destructive'} onClick={() => dispatch(clearTodos())}>
          Clear all
        </Button>
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
