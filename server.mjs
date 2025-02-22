
import express from 'express';
import { getHeroById, getHeroesByAttribute, getOlderHeroes } from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

app.get('/superheroes/id/:id', getHeroById);
app.get('/superheroes/atributo/:atributo/:valor', getHeroesByAttribute);
app.get('/superheroes/edad/mayorA30', getOlderHeroes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
