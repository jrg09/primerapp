import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../data/heroes";

describe('Pruebas sobre 08-import heroes', () => {

    test('getHeroeById debe regresar un heroe', () => {
        //const expected='uno';
        const id = 1;
        const actual=getHeroeById(id);
        
        console.log(actual);

        expect(actual).toEqual(heroes.find((heroe) => heroe.id === id));
    })
}); 