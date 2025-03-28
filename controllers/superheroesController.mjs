
import { getSuperheroById, getSuperheroesByAttribute, getOlderSuperheroes } from '../services/superheroesService.mjs';
export function getHeroById(req, res) {
    const id = req.params.id;
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido" });
    }
    res.json(getSuperheroById(id));
}

export function getHeroesByAttribute(req, res) {
    const { atributo, valor } = req.params;
    res.json(getSuperheroesByAttribute(atributo, valor));
}

export function getOlderHeroes(req, res) {
    res.json(getOlderSuperheroes());
}