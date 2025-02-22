
import { getSuperheroById, getSuperheroesByAttribute, getOlderSuperheroes } from '../services/superheroesService.mjs';

export function getHeroById(req, res) {
    const id = req.params.id;
    res.json(getSuperheroById(id));
}

export function getHeroesByAttribute(req, res) {
    const { atributo, valor } = req.params;
    res.json(getSuperheroesByAttribute(atributo, valor));
}

export function getOlderHeroes(req, res) {
    res.json(getOlderSuperheroes());
}
