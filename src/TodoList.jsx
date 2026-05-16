import List from '@mui/material/List';

import { useState } from "react";
import TodoItems from "./TodoItems";

const InitialLists = [
  { id: 1, name: "todo1", checked: false },
  { id: 2, name: "todo2", checked: false },
  { id: 3, name: "todo3", checked: true },
];

 export default function TodoList() {
  const [lists, setList] = useState(InitialLists);
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {lists.map((ls) => (
           <TodoItems ls={ls} key={ls.id} />
        ))}
      </List>
    </>
  );
}


