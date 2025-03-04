interface ITodoList {
  id : number,
  label : string
}

export default function TodoList({todos}: { todos: ITodoList[] }) {
  const items = todos;
  items.push({id: 1, label: 'test'});
  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.label}</li>)}
    </ul>
  );
}
