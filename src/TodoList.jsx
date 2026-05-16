import List from "@mui/material/List";
import { use, useEffect, useState } from "react";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";

const InitialLists = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

export default function TodoList() {
  const [lists, setList] = useState(InitialLists);
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(lists));
  }, [lists]);

  const removeList = (id) => {
    const newList = lists.filter((ls) => ls.id !== id);
    return setList(newList);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const addList = (e) => {
    e.preventDefault();
    if (text.length == 0) {
      alert("Please enter some text");
      return;
    }
    setList([
      ...lists,
      { id: crypto.randomUUID(), name: text, checked: false },
    ]);
    setText("");
  };

  const searchTodo = (text) => {
    return lists.map((ls) => {
      if (ls.name.toLowerCase().includes(text.toLowerCase())) return lists;
      return [];
    });
  };

  const toggleList = (id) => {
    setList(
      lists.map((ls) => (ls.id == id ? { ...ls, checked: !ls.checked } : ls)),
    );
  };
  return (
    <>
      <Box component="section" sx={{ p: 3,width:700,justifyContent:"center",display:"flex",flexDirection:"column" }}>
        <Navbar searchTodo={searchTodo} />
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          {lists.map((ls) => (
            <TodoItems
              ls={ls}
              key={ls.id}
              removeList={() => removeList(ls.id)}
              toggleList={() => toggleList(ls.id)}
            />
          ))}
        </List>
        <TodoForm handleChange={handleChange} addList={addList} text={text} />
      </Box>
    </>
  );
}
