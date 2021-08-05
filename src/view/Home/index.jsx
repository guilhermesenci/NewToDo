import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Context from '../../context/Context'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  button: {
    margin: '0 0 100px 720px',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Home() {
  const [toDo, setTodo] = useState([
    { title: "1", desc: "descrição" },
    { title: "2", desc: "descrição" },
    { title: "3", desc: "descrição" },
  ]);

  const [newToDo, setNewToDo] = useState('')

  function handleAddToDo() {
    const toDoObject = { title: newToDo, desc: newToDo }
    setTodo([...toDo, toDoObject]);
    setNewToDo("");
  }

  const handleRemoveItem = (doneToDos) => {
    const completeToDo = toDo.filter((toDo) => toDo.title !== doneToDos)
    setTodo([completeToDo])
  }

  const classes = useStyles();
  const { setToken } = useContext(Context);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              To Do.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Organize suas tarefas, para não esquecer de nada.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid>
            <form>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoFocus
                label="Titulo"
                name="title"
                value={newToDo}
                onChange={e => setNewToDo(e.target.value)}
                key={toDo.title}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoFocus
                label="Descrição"
                name="desc"
                key={toDo.desc}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleAddToDo}
              >
                Enviar
              </Button>
            </form>
          </Grid>
          <p />
          <Grid container spacing={4}>
            {toDo.map((toDo) => (
              <Grid item key={toDo.title} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {toDo.title}
                    </Typography>
                    <Typography>
                      {toDo.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={handleRemoveItem}
                    >
                      Completar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Grid>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setToken(null)}
            size="large"
            className={classes.button}
          >
            Sair
          </Button>
        </Grid>
      </main>
    </React.Fragment>
  );
}

export default Home;