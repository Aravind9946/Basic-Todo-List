import TextField from "@mui/material/TextField";

export default function TodoForm({handleChange,addList,text}){
    return(
        <form onSubmit={addList}>
        <TextField
          id="outlined-basic"
          label="Add new todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
        />
      </form>
    )
}