
import { getSuperheroes } from './superheroesDataSource.mjs';

export function findById(id) {
    const superheroes = getSuperheroes();
    return superheroes.find(hero => hero.id === parseInt(id));
}

export function findByAttribute(attribute, value) {
    const superheroes = getSuperheroes();
    return superheroes.filter(hero => hero[attribute] && hero[attribute].toString().toLowerCase() === value.toLowerCase());
}

export function findOlderThan30() {
    const superheroes = getSuperheroes();
    return superheroes.filter(hero => hero.edad > 30 && hero.planetaOrigen.toLowerCase() === 'tierra' && hero.poder.length >= 2);
}
