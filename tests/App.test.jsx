import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe('Pruebas en <App/>', () => {
    // test('debe hacer match con el snapshot', () => {

    //     const title = "Hola, Soy Jorge";
    //     const {container} = render(<App title={title}/>);

    //     expect(container).toMatchSnapshot();

    //     //expect(actual).toBe(expected);
    // });
    
    test('debe mostrar titulo en h1', () => {

        const title = "Hola, Soy Jorge";
        const {container,getByText} = render(<App title={title}/>);

        expect(getByText(title).innerHTML).toContain(title);
    }); 

    test('debe mostrar el subtitulo enviado por props', () => { 
        
        const title = 'Hola';
        const subtitle = 'es una prueba';

        render(<App title={title} subtitle={subtitle}/>);

        expect(screen.getAllByText(subtitle, {exact: false})).toBeTruthy();
     })
});  