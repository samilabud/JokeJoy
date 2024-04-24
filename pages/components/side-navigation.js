import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import Link from "next/link";

const SideNavigation = () => (
  <nav id="left-navigation">
    <div>
      <h3 className="text-2xl font-bold text-amber-600">Jokes Menu</h3>
    </div>
    <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <RoofingOutlinedIcon sx={{ color: "#B8A5DF" }} />
          </ListItemIcon>
          <Link href="/">
            <ListItemText primary="All Jokes" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <RocketLaunchOutlinedIcon sx={{ color: "#B8A5DF" }} />
          </ListItemIcon>
          <Link href="/latest">
            <ListItemText primary="Latest Jokes" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <SentimentVerySatisfiedOutlinedIcon sx={{ color: "#B8A5DF" }} />
          </ListItemIcon>
          <ListItemText primary="General Jokes" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <MouseOutlinedIcon sx={{ color: "#B8A5DF" }} />
          </ListItemIcon>
          <ListItemText primary="Programming Jokes" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <DoorFrontOutlinedIcon sx={{ color: "#B8A5DF" }} />
          </ListItemIcon>
          <ListItemText primary="Knock-Knock Jokes" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <ShuffleOutlinedIcon sx={{ color: "#B8A5DF" }} />
          </ListItemIcon>
          <ListItemText primary="Random Jokes" />
        </ListItemButton>
      </ListItem>
    </List>
  </nav>
);

export default SideNavigation;
