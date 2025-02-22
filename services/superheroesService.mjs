
import { findById, findByAttribute, findOlderThan30 } from '../repository/superheroesRepository.mjs';

export function getSuperheroById(id) {
    return findById(id) || { message: "Superhéroe no encontrado" };
}

export function getSuperheroesByAttribute(attribute, value) {
    return findByAttribute(attribute, value);
}

export function getOlderSuperheroes() {
    return findOlderThan30();
}
