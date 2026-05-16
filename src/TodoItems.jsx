import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function TodoItems({ls}){
     const labelId = `checkbox-list-label-${ls.id}`;
   return(
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={ls.checked}
                  tabIndex={-1}
                  disableRipple
                  slotProps={{ input: { "aria-labelledby": labelId } }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={ls.name} />
            </ListItemButton>
          </ListItem>
          )
}