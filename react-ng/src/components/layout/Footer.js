import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  Fab,
  Zoom
} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowDownwardOutlinedIcon
  from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import {Link as RouterLink} from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <Zoom
        in={true}
      >
        <Fab
          size="small"
          color="primary"
          sx={{position: 'fixed', right: '1rem', bottom: '8rem'}}
          onClick={() => {
            document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
          }}
        >
          <ArrowUpwardOutlinedIcon/>
        </Fab>
      </Zoom>
      <Zoom
        in={true}
      >
        <Fab
          size="small"
          color="primary"
          sx={{position: 'fixed', right: '1rem', bottom: '5rem'}}
          onClick={() => {
            document.body.scrollIntoView({behavior: 'smooth', block: 'end'});
          }}
        >
          <ArrowDownwardOutlinedIcon/>
        </Fab>
      </Zoom>
      <Box sx={{pb: 10}}/>
      <Paper
        sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
        elevation={3}
      >
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction
            label="Главная"
            icon={<HomeOutlinedIcon/>}
            component={RouterLink}
            to="/"
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}