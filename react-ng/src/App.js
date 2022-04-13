import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import {IndexPage} from "./pages/IndexPage";
import {ResumePage} from "./pages/ResumePage";
import {CalcPage} from "./pages/CalcPage";
import {MovePage} from "./pages/MovePage";
import {MarikaPage} from "./pages/MarikaPage";
import {SFGPage} from "./pages/SFGPage";
import {TimerPage} from "./pages/TimerPage";
import {TimerCreator} from "./pages/TimerCreatorPage";
import {VKurse} from "./pages/VKursePage";
import {ChooseFilm} from "./pages/ChooseFilmPage";
import {
  createTheme,
  ThemeProvider,
  Box,
  Container
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#673ab7',
    },
  },
});

function App() {
  return (
    <Router>
      <Fragment>
        <ThemeProvider theme={darkTheme}>
          <Box sx={{
            bgcolor: (theme) => theme.palette.grey[100],
            minHeight: '100vh'
          }}>
            <NavBar siteName="НикитаГуриев.рф"/>
            <Container sx={{mt: 4}}>
              <Routes>
                <Route path="/" element={<IndexPage/>} exact/>
                <Route path="/resume" element={<ResumePage/>} exact/>
                <Route path="/calc" element={<CalcPage/>} exact/>
                <Route path="/move" element={<MovePage/>} exact/>
                <Route path="/marika" element={<MarikaPage/>} exact/>
                <Route path="/sfg" element={<SFGPage/>} exact/>
                <Route path="/timer" element={<TimerPage/>} exact/>
                <Route path="/timer_creator" element={<TimerCreator/>} exact/>
                <Route path="/vkurse" element={<VKurse/>} exact/>
                <Route path="/choose_film" element={<ChooseFilm/>} exact/>
              </Routes>
            </Container>
            <Footer/>
          </Box>
        </ThemeProvider>
      </Fragment>
    </Router>
  );
}

export default App;