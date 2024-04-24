import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";

const SideNavigation = () => (
  <nav id="left-navigation">
    <div>
      <h3 className="text-2xl font-bold">Jokes Menu</h3>
    </div>
    <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <RocketLaunchOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Latest Jokes" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <SentimentVerySatisfiedOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="General Jokes" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <MouseOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Programming Jokes" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <ShuffleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Random Jokes" />
        </ListItemButton>
      </ListItem>
    </List>
  </nav>
);

export default SideNavigation;