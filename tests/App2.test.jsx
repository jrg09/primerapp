import { render,screen } from "@testing-library/react";
import App from "../src/App";

describe('Pruebas en <App/>', () => {
    
    const title = "Hola, Soy Jorge";

    test('debe hacer match con el snapshot', () => {

        const {container} = render(<App title={title}/>);

        expect(container).toMatchSnapshot();
    }); 

    test('should mostrar mensaje "hola sour x"', async () => { 
        render(<App title={title}></App>);
        //expect(screen.getByText(title)).toBeTruthy();
        const actual = (await screen.findAllByText(title)).length;
        console.log('actual',actual);
        expect(actual).toBe(1);
     })
}); 