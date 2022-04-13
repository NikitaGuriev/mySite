/**
 * Блок подключения модулей/импортов
 */
import React from 'react';
import {
  createTheme,
  Box,
  ThemeProvider,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * DotA
 */
import dota_01 from "../files/sfg/dota/001.mp3";
import dota_02 from "../files/sfg/dota/002.mp3";
import dota_03 from "../files/sfg/dota/003.mp3";
import dota_04 from "../files/sfg/dota/004.mp3";
import dota_05 from "../files/sfg/dota/005.mp3";
import dota_06 from "../files/sfg/dota/006.mp3";

/**
 * WoW
 */
import wow_01 from "../files/sfg/wow/001.mp3";
import wow_02 from "../files/sfg/wow/002.mp3";

/**
 * Marvel
 */
import marvel_01 from "../files/sfg/marvel/001.mp3";
import marvel_02 from "../files/sfg/marvel/002.mp3";
import marvel_03 from "../files/sfg/marvel/003.mp3";
import marvel_04 from "../files/sfg/marvel/004.mp3";
import marvel_05 from "../files/sfg/marvel/005.mp3";
import marvel_06 from "../files/sfg/marvel/006.mp3";

/**
 * Блок кастомизации MUI
 */
const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#673ab7',
    },
  },
});

export const SFGPage = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <ThemeProvider theme={darkTheme}>
        <Container sx={{textAlign: 'center'}}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                >
                  <Typography>DotA</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography gutterBottom>
                    Крик Урсы (Overpower)
                  </Typography>
                  <Box
                    component="audio"
                    src={dota_01}
                    controls
                  />
                  <Typography gutterBottom>
                    Крик Урсы (Enrage)
                  </Typography>
                  <Box
                    component="audio"
                    src={dota_02}
                    controls
                  />
                  <Typography gutterBottom>
                    Legion Commander (Press the Attack)
                  </Typography>
                  <Box
                    component="audio"
                    src={dota_03}
                    controls
                  />
                  <Typography gutterBottom>
                    Spirit Breaker (Charge of Darkness)
                  </Typography>
                  <Box
                    component="audio"
                    src={dota_04}
                    controls
                  />
                  <Typography gutterBottom>
                    Spirit Breaker (Greater Bash)
                  </Typography>
                  <Box
                    component="audio"
                    src={dota_05}
                    controls
                  />
                  <Typography gutterBottom>
                    Reincarnation (Aegis of the Immortal)
                  </Typography>
                  <Box
                    component="audio"
                    src={dota_06}
                    controls
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                >
                  <Typography>Warcraft</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography gutterBottom>
                    ...Артас...
                  </Typography>
                  <Box
                    component="audio"
                    src={wow_01}
                    controls
                  />
                  <Typography gutterBottom>
                    Пробуждение Короля-лича
                  </Typography>
                  <Box
                    component="audio"
                    src={wow_02}
                    controls
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                >
                  <Typography>Marvel</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography gutterBottom>
                    Использование камня времени (Доктор Стрэндж)
                  </Typography>
                  <Box
                    component="audio"
                    src={marvel_01}
                    controls
                  />
                  <Typography gutterBottom>
                    Использование камня времени (Танос)
                  </Typography>
                  <Box
                    component="audio"
                    src={marvel_02}
                    controls
                  />
                  <Typography gutterBottom>
                    Кручённый бросок гром-секиры (Тор)
                  </Typography>
                  <Box
                    component="audio"
                    src={marvel_03}
                    controls
                  />
                  <Typography gutterBottom>
                    Использование камня реальности (Танос)
                  </Typography>
                  <Box
                    component="audio"
                    src={marvel_04}
                    controls
                  />
                  <Typography gutterBottom>
                    Использование камня пространства (Танос)
                  </Typography>
                  <Box
                    component="audio"
                    src={marvel_05}
                    controls
                  />
                  <Typography gutterBottom>
                    «Роковая ошибка...» (Танос)
                  </Typography>
                  <Box
                    component="audio"
                    src={marvel_06}
                    controls
                  />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Box>
  )
}