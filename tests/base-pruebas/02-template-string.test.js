import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('primer prueba en template', () => { 
    test('test sobre 02-template', () => { 
        const name = 'Jorge';
        const resultado = getSaludo(name);
        expect(resultado).toBe(`Hola ${name}`);
     })
 });