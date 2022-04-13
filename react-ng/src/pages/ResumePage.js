/**
 * Блок подключения модулей
 */
import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  Alert,
  Button,
  Grid,
  Divider,
  Link,
  LinearProgress,
  Chip,
  Paper
} from "@mui/material";
import MOMENT from 'moment';

/**
 * Изображения
 */
import MyAvatar from './me_new.jpg';
import MyCertificate from './cert.jpg';

/**
 * Иконки
 */
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ForwardToInboxOutlinedIcon
  from '@mui/icons-material/ForwardToInboxOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import AlternateEmailOutlinedIcon
  from '@mui/icons-material/AlternateEmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

/**
 * Файлы
 */
import resume_file from "../files/resume.pdf";

/**
 * Блок определения констант
 */
const AVATAR_SIZES = 192;
const MINIMUM_SALARY = 40000;
const NAME = 'Никита';
const SURNAME = 'Гуриев';
const ADDRESS_FL = `Героев-разведчиков улица, Дом 17`;
const ADDRESS_SL = `350028 Краснодар`;
const PHONE_NUMBER = '+79883857654';
const EMAIL = 'stig.guriev@gmail.com';
const DESCRIPTION = `Ответственный, трудолюбивый, дружелюбный. Стремлюсь писать максимально грамотный код, использовать современные инструменты и технологии, делать качественный продукт.`;
const IS_SEARCH_FOR_JOB = true;
const MY_AGE = MOMENT().diff('1993-03-17', 'years');
const MARITAL_STATUS = 'Холост, детей нет';

export const ResumePage = () => {
  return (
    <div>
      <Box sx={{flexGrow: 1}}>
        <Paper
          sx={{p: 2}}
        >
          <Grid container spacing={4}>
            {/* Левая колонка */}
            <Grid item xs={12} md={4}>
              <Box>
                <Avatar
                  alt="Фотография"
                  src={MyAvatar}
                  sx={{
                    height: AVATAR_SIZES,
                    width: AVATAR_SIZES,
                    mx: 'auto',
                    my: 2
                  }}
                />
                <Box sx={{my: 2}}>
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Button
                        startIcon={<TelegramIcon/>}
                        color="info"
                        href="tg://resolve?domain=NikitaGuriev"
                      >
                        Telegram
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        startIcon={<WhatsappOutlinedIcon/>}
                        color="success"
                        href="https://wa.me/79883857654"
                      >
                        WhatsApp
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        startIcon={<AlternateEmailOutlinedIcon/>}
                        color="warning"
                        href="mailto:stig.guriev@gmail.com"
                      >
                        E-Mail
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        startIcon={<CallOutlinedIcon/>}
                        color="error"
                        href="tel:79883857654"
                      >
                        Звонок
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Grid
                  container
                  spacing={1}
                  sx={{pb: 2}}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Button
                      href={resume_file}
                    >
                      Скачать резюме
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={1}
                  sx={{pb: 2}}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Chip
                      label="Fullstack разработчик"
                      color="primary"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Chip label="MongoDB" size="small"/>
                  </Grid>
                  <Grid item>
                    <Chip label="ExpressJS" size="small"/>
                  </Grid>
                  <Grid item>
                    <Chip label="React" size="small"/>
                  </Grid>
                  <Grid item>
                    <Chip label="MUI 5" size="small"/>
                  </Grid>
                  <Grid item>
                    <Chip label="Bootstrap 5" size="small"/>
                  </Grid>
                  <Grid item>
                    <Chip label="NodeJS" size="small"/>
                  </Grid>
                  <Grid item>
                    <Chip label="GraphQL" size="small"/>
                  </Grid>
                </Grid>
                {
                  IS_SEARCH_FOR_JOB
                    ?
                    <>

                      <Alert
                        severity="success"
                        sx={{my: 2}}
                      >
                        13.03.2022 <strong>победил</strong> в <Button
                        href="https://iqarium.ru/hakatontime" target="_blank"
                        size="small">IT-Хакатоне</Button>,
                        заняв <strong>третье</strong> место,
                        среди <strong>16</strong> команд. В команде исполнял
                        роль <strong>Backend разработчика</strong>. Использовал
                        стек: <em>nginx, Node.js, ExpressJS, MongoDB</em>.
                        Кейс: <strong>Сервис для помощи в сортировке бытовых
                        отходов</strong>
                      </Alert>
                      <Alert
                        severity="success"
                        sx={{mx: 'auto', my: 2}}>
                        В поиске работы
                      </Alert>
                      <Alert
                        severity="info"
                        sx={{mx: 'auto', my: 2}}>
                        Зарплата
                        от {MINIMUM_SALARY.toLocaleString('ru-RU')} &#8381;
                      </Alert>
                    </>
                    :
                    <Alert
                      severity="error"
                      sx={{width: 1 / 4, mx: 'auto', my: 2}}>
                      Не ищу работу
                    </Alert>
                }
                <Typography variant="h6" gutterBottom>
                  Личные данные
                </Typography>
                <Divider sx={{mb: 2}}/>
                <Box sx={{my: 2}}>
                  <Typography sx={{fontWeight: 'bold'}}>
                    Имя
                  </Typography>
                  <Typography>
                    {NAME} {SURNAME}
                  </Typography>
                </Box>
                <Box sx={{my: 2}}>
                  <Typography sx={{fontWeight: 'bold'}}>
                    Возраст
                  </Typography>
                  <Typography>
                    {MY_AGE}
                  </Typography>
                </Box>
                <Box sx={{my: 2}}>
                  <Typography sx={{fontWeight: 'bold'}}>
                    Семейное положение
                  </Typography>
                  <Typography>
                    {MARITAL_STATUS}
                  </Typography>
                </Box>
                <Box sx={{my: 2}}>
                  <Typography sx={{fontWeight: 'bold'}}>
                    Адрес
                  </Typography>
                  <Typography>
                    {ADDRESS_FL}
                  </Typography>
                  <Typography>
                    {ADDRESS_SL}
                  </Typography>
                </Box>
                <Box sx={{my: 2}}>
                  <Typography sx={{fontWeight: 'bold'}}>
                    Номер телефона
                  </Typography>
                  <Button
                    startIcon={<PhoneInTalkOutlinedIcon/>}
                    href={'tel:' + PHONE_NUMBER}
                  >
                    {PHONE_NUMBER}
                  </Button>
                </Box>
                <Box sx={{my: 2}}>
                  <Typography sx={{fontWeight: 'bold'}}>
                    E-Mail
                  </Typography>
                  <Button startIcon={<ForwardToInboxOutlinedIcon/>}>
                    <Link
                      underline="none"
                      href={'mailto:' + EMAIL}
                    >
                      {EMAIL}
                    </Link>
                  </Button>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Интересы
                </Typography>
                <Divider sx={{mb: 2}}/>
                <Box sx={{my: 2}}>
                  <Typography
                    sx={{fontWeight: 'bold'}}
                  >
                    Программирование
                  </Typography>
                  <Typography
                    sx={{fontWeight: 'bold'}}
                  >
                    Умный дом/IoT
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Языки
                </Typography>
                <Divider sx={{mb: 2}}/>
                <Box sx={{my: 2}}>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <Typography
                        sx={{fontWeight: 'bold'}}
                      >
                        Английский (Pre-Intermediate)
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography sx={{textAlign: 'right'}}>
                        A2
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            {/* Правая колонка */}
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  variant="h4"
                  gutterBottom
                >
                  Гуриев Никита
                </Typography>
                <Divider sx={{mb: 2}}/>
                <Box sx={{my: 2}}>
                  <Typography gutterBottom>
                    {DESCRIPTION}
                  </Typography>
                </Box>
              </Box>
              {/* Опыт работы */}
              <Box sx={{mb: 2}}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    Опыт работы
                  </Typography>
                  <Divider sx={{mb: 2}}/>
                </Box>
                <Box>
                  <Box sx={{mt: 2}}>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        <Typography sx={{fontWeight: 'bold'}}>
                          Fullstack разработчик
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography sx={{textAlign: 'right'}}>
                          апр 2020 &mdash; июнь 2021
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography sx={{fontStyle: 'italic'}}>
                          ООО &laquo;АУРУМ&raquo;
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography>
                          Разработка приложений для Битрикс24 (боты (<Button
                          startIcon={<OpenInNewOutlinedIcon/>}
                          href="https://www.bitrix24.ru/apps/?app=nicedo.uvedomlyashka"
                          target="_blank">Уведомляшка</Button>), отчёты (HTML,
                          Word, Excel); XML-фиды (ДомКлик, АЯКС,
                          Яндекс.Недвижимость), действия с CRM, <Button
                          startIcon={<OpenInNewOutlinedIcon/>}
                          href="https://www.bitrix24.ru/apps/?app=nicedo.shakhmatka"
                          target="_blank">Шахматка</Button>), интеграция
                          Битрикс24
                          с Битрикс управление сайтом, ОКТЕЛЛ, опыт работы с
                          CRON
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="PHP"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="JavaScript"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Bootstrap"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{mt: 2}}>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        <Typography sx={{fontWeight: 'bold'}}>
                          Специалист
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography sx={{textAlign: 'right'}}>
                          июнь 2019 &mdash; июль 2019
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography sx={{fontStyle: 'italic'}}>
                          ПАО &laquo;Ростелеком&raquo;
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography>
                          Внесение правок в систему заявок Ростелеком
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{my: 2}}>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        <Typography sx={{fontWeight: 'bold'}}>
                          Техник автоматизированных систем управления
                          технологическими процессами (АСУ ТП)
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography sx={{textAlign: 'right'}}>
                          май 2015 &mdash; дек 2018
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography sx={{fontStyle: 'italic'}}>
                          ООО &laquo;РН-Информ&raquo; &mdash; ООО
                          ИК &laquo;СИБИНТЕК&raquo;
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography>
                          Обеспечение исправности ПЭВМ, пультов ТМ,
                          контроллерного
                          оборудования, осуществление программного сопровождения
                          систем телемеханики и техническое обслуживание
                          объектов
                          АСУ ТП
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="SCADA"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Metso"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="DeltaV"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="DirectLogic"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Язык релейной логики"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="FBD"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="JavaScript"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="NodeJS"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
              {/* Образование и квалификации */}
              <Box sx={{mb: 2}}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    Образование и квалификации
                  </Typography>
                  <Divider sx={{mb: 2}}/>
                </Box>
                <Box>
                  <Box sx={{mt: 2}}>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        <Typography sx={{fontWeight: 'bold'}}>
                          Бакалавриат, информатика и вычислительная
                          техника
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography sx={{textAlign: 'right'}}>
                          сен 2014 &mdash; июнь 2019
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography sx={{fontStyle: 'italic'}}>
                          Сургутский государственный университет
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography>
                          Пройдена программа бакалавриата по направлению
                          Автоматизированные системы обработки информации и
                          управления на факультете Информационных технологий и
                          вычислительной техники. Заочная форма обучения
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="PHP"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="JavaScript"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="C#"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="MS SQL"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Unity"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="CSS"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="HTML"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="GPSS World"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="AutoCAD"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="3DS Max"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{my: 2}}>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        <Typography sx={{fontWeight: 'bold'}}>
                          Специалитет, информационные технологии и
                          вычислительная
                          техника
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography sx={{textAlign: 'right'}}>
                          сен 2011 &mdash; июнь 2014
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography sx={{fontStyle: 'italic'}}>
                          Тюменский государственный нефтегазовый университет
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography>
                          Пройдена программа специалитета по направлению
                          Программирование в компьютерных системах на факультете
                          Информационных технологий и вычислительной техники.
                          Очная
                          форма обучения
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Delphi (Object Pascal)"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="MS SQL"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="CSS"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="HTML"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="AutoCAD"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="3DS Max"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
              {/* Рекомендации */}
              <Box sx={{mb: 2}}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    Рекомендации
                  </Typography>
                  <Divider sx={{mb: 2}}/>
                </Box>
                <Box sx={{mt: 2}}>
                  <Typography>
                    Рекомендации предоставляются по запросу
                  </Typography>
                </Box>
              </Box>
              {/* Навыки */}
              <Box sx={{mb: 2}}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    Навыки
                  </Typography>
                  <Divider sx={{mb: 2}}/>
                </Box>
                <Box sx={{mt: 2}}>
                  <Grid container>
                    <Grid item xs>
                      <Typography
                        sx={{fontWeight: 'bold'}}
                      >
                        JavaScript
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <LinearProgress
                        sx={{mt: 1}}
                        variant="determinate"
                        value={85}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs>
                      <Typography
                        sx={{fontWeight: 'bold'}}
                      >
                        MUI
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <LinearProgress
                        sx={{mt: 1}}
                        variant="determinate"
                        value={60}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs>
                      <Typography
                        sx={{fontWeight: 'bold'}}
                      >
                        WebStorm
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <LinearProgress
                        sx={{mt: 1}}
                        variant="determinate"
                        value={75}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs>
                      <Typography
                        sx={{fontWeight: 'bold'}}
                      >
                        React
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <LinearProgress
                        sx={{mt: 1}}
                        variant="determinate"
                        value={20}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs>
                      <Typography
                        sx={{fontWeight: 'bold'}}
                      >
                        NodeJS
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <LinearProgress
                        sx={{mt: 1}}
                        variant="determinate"
                        value={50}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs>
                      <Typography
                        sx={{fontWeight: 'bold'}}
                      >
                        nginx
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <LinearProgress
                        sx={{mt: 1}}
                        variant="determinate"
                        value={50}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs>
                      <Typography
                        sx={{fontWeight: 'bold'}}
                      >
                        Mongo
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <LinearProgress
                        sx={{mt: 1}}
                        variant="determinate"
                        value={25}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs>
                      <Typography
                        sx={{fontWeight: 'bold'}}
                      >
                        GraphQL
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <LinearProgress
                        sx={{mt: 1}}
                        variant="determinate"
                        value={25}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              {/* Курсы */}
              <Box sx={{mb: 2}}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    Курсы
                  </Typography>
                  <Divider sx={{mb: 2}}/>
                </Box>
                <Box sx={{mt: 2}}>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <Typography sx={{fontWeight: 'bold'}}>
                        Node JS. Практический курс. (Mongo, GraphQL, MySQL,
                        Express)
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography sx={{textAlign: 'right'}}>
                        окт 2021
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography sx={{fontStyle: 'italic'}}>
                        Udemy
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography>
                        Полный гайд по созданию сайтов и приложений на серверном
                        JavaScript, включая базы данных и создание API.
                      </Typography>
                      <Box>
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Серверный JavaScript"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Создание REST API"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="MySQL и MongoDB"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Серверный JavaScript"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Сайты на NodeJS и инфраструктура"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="ExpressJS"
                        />
                        <Chip
                          sx={{my: 1}}
                          size="small"
                          label="Основы GraphQL"
                        />
                      </Box>
                      <Typography>
                        <Button
                          startIcon={<OpenInNewOutlinedIcon/>}
                          href={MyCertificate}
                          target="_blank"
                        >
                          Сертификат
                        </Button>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  )
}