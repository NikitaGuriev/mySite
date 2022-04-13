import React, {useState, useEffect} from 'react';
import {
  createTheme,
  Box,
  ThemeProvider,
  Grid,
  TextField,
  Button,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Alert,
  AlertTitle,
  Paper
} from "@mui/material";
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#673ab7',
    },
  },
});

export const CalcPage = () => {
  /**
   * Блок определения хуков
   */
  const [a, setA] = useState('A');
  const [b, setB] = useState('B');
  const [c, setC] = useState('C');
  const [x, setX] = useState('X');
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  /**
   * Блок пользовательских функций
   */
  const saveHistory = () => {
    setHistory((prevHistory) => {
      return [
        ...prevHistory,
        {
          a, b, c, x, counter
        }
      ]
    });
  }

  const calculateX = () => {
    setX((a * c / b));
  }

  const checkFields = () => {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
      calculateX();
    }
  }

  const clearFields = () => {
    setA('A');
    setB('B');
    setC('C');
    setX('X');
  }

  const clearTable = () => {
    setHistory([]);
  }

  useEffect(() => {
    if (!isNaN(x)) {
      saveHistory();
      setCounter(prevValue => prevValue + 1);
    }
  },[x])

  return (
    <Box sx={{flexGrow: 1, pb: 2}}>
      <ThemeProvider theme={darkTheme}>
        <Paper
          sx={{pb: 2}}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={12} sx={{p: 2}}>
              <Alert severity="info">
                <AlertTitle>Формула</AlertTitle>
                X = A × C ÷ B
              </Alert>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6} md={6} sx={{p: 2}}>
              <TextField
                fullWidth
                label="A"
                variant="filled"
                value={a}
                onChange={(evt) => {
                  setA(evt.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6} md={6} sx={{p: 2}}>
              <TextField
                fullWidth
                label="B"
                variant="filled"
                value={b}
                onChange={(evt) => {
                  setB(evt.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6} md={6} sx={{p: 2}}>
              <TextField
                fullWidth
                label="X"
                variant="filled"
                value={x}
                disabled
              />
            </Grid>
            <Grid item xs={6} md={6} sx={{p: 2}}>
              <TextField
                fullWidth
                label="C"
                variant="filled"
                value={c}
                onChange={(evt) => {
                  setC(evt.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button
                startIcon={<CalculateOutlinedIcon/>}
                onClick={checkFields}
              >
                Рассчитать
              </Button>
            </Grid>
            <Grid item>
              <Button
                startIcon={<ClearAllOutlinedIcon/>}
                color="error"
                aria-label="Очистить поля"
                onClick={clearFields}
              >
                Очистить
              </Button>
            </Grid>
          </Grid>
          <Divider variant="middle" sx={{my: 2}}/>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <TableContainer>
                <Table aria-label="История значений" size="small">
                  <caption>История значений</caption>
                  <TableHead>
                    <TableRow>
                      <TableCell>A</TableCell>
                      <TableCell>B</TableCell>
                      <TableCell>C</TableCell>
                      <TableCell>X</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {history.map((value) => (
                      <TableRow
                        key={value.counter}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                        >
                          {value.a}
                        </TableCell>
                        <TableCell
                          align="right"
                        >
                          {value.b}
                        </TableCell>
                        <TableCell
                          align="right"
                        >
                          {value.c}
                        </TableCell>
                        <TableCell
                          align="right"
                        >
                          {value.x}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Button
                startIcon={<ClearAllOutlinedIcon/>}
                color="error"
                aria-label="Очистить поля"
                onClick={clearTable}
              >
                Очистить
              </Button>
            </Grid>
          </Grid>
          <Divider variant="middle" sx={{my: 2}}/>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button href="https://xn--b1abbgbpxxo3a.xn--p1ai/old_ng/calc/"
                      target="_blank">Версия 2</Button>
            </Grid>
            <Grid item>
              <Button href="https://xn--b1abbgbpxxo3a.xn--p1ai/old_ng/calc/old/"
                      target="_blank">Версия 1</Button>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Box>
  )
}