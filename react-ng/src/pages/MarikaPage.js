/**
 * Блок подключения модулей/импортов
 */
import React from 'react';
import {
  createTheme,
  Box,
  ThemeProvider,
  Container,
  Grid, Typography, Alert, AlertTitle, Paper
} from "@mui/material";
import MOMENT from 'moment';
import 'moment/locale/ru';

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

/**
 * Блок настройки MOMENT
 */
MOMENT.locale('ru');
const CURRENT_DATE = MOMENT();
const FIRST_MESSAGE_DATE_UNFORMATTED = MOMENT([2021, 5, 26]);
const FIRST_MEET_DATE_UNFORMATTED = MOMENT([2022, 1, 15]);

/**
 * Первое сообщение
 */
const FIRST_MESSAGE_DATE = MOMENT([2021, 5, 26]);
const YEARS_FMSG = CURRENT_DATE.diff(FIRST_MESSAGE_DATE, "years");
FIRST_MESSAGE_DATE.add(YEARS_FMSG, "years");
const MONTHS_FMSG = CURRENT_DATE.diff(FIRST_MESSAGE_DATE, "months");
FIRST_MESSAGE_DATE.add(MONTHS_FMSG, "months");
const DAYS_FMSG = CURRENT_DATE.diff(FIRST_MESSAGE_DATE, "days");
FIRST_MESSAGE_DATE.add(DAYS_FMSG, "days");
const HOURS_FMSG = CURRENT_DATE.diff(FIRST_MESSAGE_DATE, "hours");
FIRST_MESSAGE_DATE.add(HOURS_FMSG, "hours");
const FULL_FORMAT_FMSG = `${YEARS_FMSG}:${MONTHS_FMSG}:${DAYS_FMSG}:${HOURS_FMSG}`;

/**
 * Первая встреча
 */
const FIRST_MEET_DATE = MOMENT([2022, 1, 15]);
const YEARS_FMEET = CURRENT_DATE.diff(FIRST_MEET_DATE, "years");
FIRST_MEET_DATE.add(YEARS_FMEET, "years");
const MONTHS_FMEET = CURRENT_DATE.diff(FIRST_MEET_DATE, "months");
FIRST_MEET_DATE.add(MONTHS_FMEET, "months");
const DAYS_FMEET = CURRENT_DATE.diff(FIRST_MEET_DATE, "days");
FIRST_MEET_DATE.add(DAYS_FMEET, "days");
const HOURS_FMEET = CURRENT_DATE.diff(FIRST_MEET_DATE, "hours");
FIRST_MEET_DATE.add(HOURS_FMEET, "hours");
const FULL_FORMAT_FMEET = `${YEARS_FMEET}:${MONTHS_FMEET}:${DAYS_FMEET}:${HOURS_FMEET}`;

export const MarikaPage = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <ThemeProvider theme={darkTheme}>
        <Paper
          sx={{pb: 2}}
        >
          <Container>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Box>
                  <Alert severity="info">
                    <AlertTitle>Первое сообщение</AlertTitle>
                    <Typography>
                      {FIRST_MESSAGE_DATE_UNFORMATTED.fromNow()}
                    </Typography>
                    <Typography>
                      {FULL_FORMAT_FMSG}
                    </Typography>
                    <Typography
                      variant="body2"
                    >
                      Г:М:Д:Ч
                    </Typography>
                  </Alert>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Alert severity="info">
                    <AlertTitle>Первая встреча</AlertTitle>
                    <Typography>
                      {FIRST_MEET_DATE_UNFORMATTED.fromNow()}
                    </Typography>
                    <Typography>
                      {FULL_FORMAT_FMEET}
                    </Typography>
                    <Typography
                      variant="body2"
                    >
                      Г:М:Д:Ч
                    </Typography>
                  </Alert>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    </Box>
  )
}