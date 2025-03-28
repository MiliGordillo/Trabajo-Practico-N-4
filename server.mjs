
import express from 'express';
import { getHeroById, getHeroesByAttribute, getOlderHeroes } from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

app.get('/superheroes/id/:id', getHeroById);
app.get('/superheroes/atributo/:atributo/:valor', getHeroesByAttribute);
app.get('/superheroes/edad/mayorA30', getOlderHeroes);
 
/*
http://localhost:3005/superheroes/id/1
http://localhost:3005/superheroes/atributo/debilidad/Radioactiva
http://localhost:3005/superheroes/edad/mayorA30 
*/

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 

