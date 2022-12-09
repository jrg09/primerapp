import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('pruebas en 07 desestriucturacion arreglos', () => {
    test('test de retornaArreglo', () => {

        const [letras, numeros] = retornaArreglo();

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
    })
});  