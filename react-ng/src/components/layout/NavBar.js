import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Avatar,
  Link
} from '@mui/material';
import favicon from './programmer.png';
import {Link as RouterLink} from "react-router-dom";

export default function NavBar(props) {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Avatar
              variant="square"
              src={favicon}
              alt="Логотип сайта"
              sx={{mr: 2}}
            />
            <Link
              component={RouterLink}
              to="/"
            >
              <Typography
                variant="h6"
                sx={{flexGrow: 1, color: '#FFF', textDecoration: 'none'}}
              >
                {props.siteName}
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}