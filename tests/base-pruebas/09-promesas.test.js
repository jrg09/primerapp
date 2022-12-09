import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    
    test('getHeroeByIdAsync', (done) => {
        const expected='uno';

        const id = 1;
        
        getHeroeByIdAsync(id).then(hero => {
           done(expect(hero).toEqual({id:1,name:'Batman',owner:'DC'}));
        });
        
        //expect(actual).toBe(actual);
    });

    test('getHeroeByIdAsync debe dar error si heroe no existe', (done) => {
        const expected='uno';

        const id = 112;
        
        getHeroeByIdAsync(id).then(hero => {
           done(expect(hero).toEqual({id:1,name:'Batman',owner:'DC'}));
        }).catch(err => {
            console.log(err);
            done(expect(err).toBe('No se pudo encontrar el héroe' + id));
        });
        
        //expect(actual).toBe(actual);
    });

    test('getHeroeByIdAsync async',async ()=>{
        const id = 2;
        const hero = await getHeroeByIdAsync(id);
        expect(hero).toEqual({id:2,name:'Spiderman',owner:'Marvel'});
    })
    
});  