import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('pruebas en 11-async-await', () => {
    test('getImagen debe retornar un url de la imagen', async () => {

        const expected='uno';

        const actual= await getImagen();
        console.log(actual);

        expect(typeof actual).toBe('string');
    })
}); 
