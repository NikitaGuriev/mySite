import React from 'react';
import {
  createTheme,
  Box,
  ThemeProvider,
  Container,
  Grid,
  Checkbox, FormControlLabel, FormGroup, Paper
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#673ab7',
    },
  },
});

export const MovePage = () => {
  const CHECKED = [
    {
      name: 'Квест «Проклятие Сары»',
      link: 'https://instagram.com/questforyou_krd',
      visited: true,

    },
    {
      name:
        'Кофейня «Melissa Sweets Shop»',
      link:
        'https://www.instagram.com/melissasweetsshop/',
      visited: true,
    },
    {
      name:
        'Горячий ключ',
      link:
        false,
      visited: true,
    },
    {
      name:
        'Джубга',
      link:
        false,
      visited: true,
    },
    {
      name:
        'Ресторан «Барин»',
      link:
        'https://www.instagram.com/barinrest/',
      visited: true,
    },
    {
      name:
        'Lounge Bar VR Atmosfera',
      link:
        'https://vk.com/atmosferavr',
      visited: true,
    },
    {
      name:
        'Ресторан «Разговоры»',
      link:
        'https://www.instagram.com/razgovory_krr/',
      visited: true,
    },
    {
      name:
        'Озеро Старобжегокай',
      link:
        'https://yandex.ru/maps/-/CCUeZIGyLD',
      visited: true,
    },
    {
      name:
        'Антикафе «Песочница»',
      link:
        'https://vk.com/anticafesandbox',
      visited: true,
    },
    {
      name: 'Пикник в парке Галицкого',
      link:
        false,
      visited: false
    },
    {
      name:
        'Квизы',
      link:
        false,
      visited: false
    },
    {
      name:
        'Вейкбординг',
      link:
        false,
      visited: false
    },
    {
      name:
        'Сапбординг',
      link:
        false,
      visited: false
    },
    {
      name:
        'Ресторан «Море Моё»',
      link:
        'https://www.instagram.com/moremoe_rest/',
      visited: false
    },
    {
      name:
        'Аквапарк «Золотая бухта» (Геленджик)',
      link:
        'http://buhtagold.com/',
      visited: false
    },
    {
      name:
        'Аквапарк «Ниагара»',
      link:
        'https://niagarapark.ru/',
      visited: false
    },
    {
      name:
        'Шашлыки на затоне',
      link:
        false,
      visited: false
    },
    {
      name:
        'Планченские скалы',
      link:
        'https://kukarta.ru/plancheskie-skalyi/',
      visited: false
    },
    {
      name:
        'Орлинная полка (Мезмай)',
      link:
        'https://kukarta.ru/orlinaya-polka/',
      visited: false
    },
    {
      name:
        'Новороссийск',
      link:
        false,
      visited: false
    },
    {
      name:
        'Крым',
      link:
        false,
      visited: false
    },
    {
      name:
        'Ресторан «Платформа»',
      link:
        'https://www.instagram.com/platforma.rest/',
      visited: false
    },
  ];

  return (
    <Box sx={{flexGrow: 1}}>
      <ThemeProvider theme={darkTheme}>
        <Paper
          sx={{pb: 2}}
        >
          <Container>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Box>
                  <FormGroup>
                    {CHECKED.map((el, one) =>
                      (
                        <FormControlLabel
                          control={<Checkbox
                            checked={el.visited}
                          />}
                          label={el.name}
                          key={`el_${one}`}
                        />
                      )
                    )}
                  </FormGroup>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    </Box>
  )
}