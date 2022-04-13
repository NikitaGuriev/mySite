/**
 * Блок подключения модулей
 */
/**
 * React
 */
import React from 'react';
import {Link as RouterLink} from "react-router-dom";

/**
 * MUI
 */
import {
  createTheme,
  Box,
  ThemeProvider,
  Container,
  Alert,
  AlertTitle,
  Grid,
  Typography,
  Link, Paper
} from "@mui/material";

/**
 * Иконки
 */
import resume from '../img/resume_icon.svg';
import resume_pdf from "../img/pdf.svg";
import calc from '../img/calc_icon.svg';
import go_icon from "../img/angel.svg";
import paw from "../img/paw.svg";
import linked_in from "../img/linkedin.svg";
import sfg_icon from "../img/talk.svg";
import stopwatch from "../img/stopwatch.svg";
import vkurse from "../img/vkurse.svg";
import popcorn from "../img/popcorn.svg";

/**
 * Файлы
 */
import resume_file from "../files/resume.pdf";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#673ab7',
    },
  },
});

export const IndexPage = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <ThemeProvider theme={darkTheme}>
        <Paper>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{py: 2}}
            >
              <Grid item xs={6} sm={4}>
                <Box
                  sx={{textAlign: 'center'}}
                >
                  <Link
                    component={RouterLink}
                    to="/resume"
                    underline="none"
                  >
                    <Box
                      src={resume}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      Резюме (лэндинг)
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    href={resume_file}
                    underline="none"
                  >
                    <Box
                      src={resume_pdf}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      Резюме (PDF)
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    component={RouterLink}
                    to="/calc"
                    underline="none"
                  >
                    <Box
                      src={calc}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      Калькулятор
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    href="https://xn--b1abbgbpxxo3a.xn--p1ai/"
                    underline="none"
                    target="_blank"
                  >
                    <Box
                      src={go_icon}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      ГуриевОлег.рф
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    href="https://khvostiki.ru/"
                    underline="none"
                    target="_blank"
                  >
                    <Box
                      src={paw}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      ГПБЖ &laquo;Хвостики&raquo;
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    href="https://www.linkedin.com/in/nikitaguriev/"
                    underline="none"
                    target="_blank"
                  >
                    <Box
                      src={linked_in}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      LinkedIn
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    component={RouterLink}
                    to="/sfg"
                    underline="none"
                  >
                    <Box
                      src={sfg_icon}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      Звуки из игр
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    component={RouterLink}
                    to="/timer_creator"
                    underline="none"
                  >
                    <Box
                      src={stopwatch}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      Создать счетчик
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    component={RouterLink}
                    to="/vkurse"
                    underline="none"
                  >
                    <Box
                      src={vkurse}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      ВКурсе
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    component={RouterLink}
                    to="/choose_film"
                    underline="none"
                  >
                    <Box
                      src={popcorn}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      Советник фильмов
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{textAlign: 'center'}}>
                  <Link
                    component={RouterLink}
                    to="/timer"
                    underline="none"
                  >
                    <Box
                      src={stopwatch}
                      component="img"
                      sx={{width: '3rem'}}
                      alt
                    />
                    <Typography
                      variant="body2"
                    >
                      Таймер
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{py: 2}}>
              <Grid item xs>
                <Alert severity="warning">
                  <AlertTitle>Внимание!</AlertTitle>
                  <Typography
                    variant="body2"
                  >
                    Идёт процесс переноса сайта на
                    технологии: <em>nginx</em>, <em>Node.js</em>, <em>React</em>, <em>MongoDB</em> и <em>MUI</em>.
                  </Typography>
                  <Typography
                    variant="body2"
                  >
                    Часть функционала временно недоступна...
                  </Typography>
                </Alert>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    </Box>
  )
}