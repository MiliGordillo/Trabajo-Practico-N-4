
import fs from 'fs';

const filePath = './superheroes.txt';

export function getSuperheroes() {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}
