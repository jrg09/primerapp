import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";

describe('Tests sobre Counter APp', () => {

    const title = 'Prueba de App';

    test('debe incrementar en +1 con el botón +1 ', () => {

        const initialValue = 13;

        const {getByTestId} = render(<App title={title} initial={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(getByTestId('span-test').innerHTML).toBe((initialValue+1).toString());


    })

    test('[con screen] debe incrementar en +1 con el botón +1 ', () => {

        const initialValue = 17;

        render(<App title={title} initial={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        
        expect(screen.getByTestId('span-test').innerHTML).toBe((initialValue+1).toString());
        


    })

    test('[con screen] debe descrementar en -1 con el botón -1', () => {

        const initialValue = 23;

        render(<App title={title} initial={initialValue}/>);
        fireEvent.click(screen.getByText('-1'));

        //screen.debug();
        
        expect(screen.getByTestId('span-test').innerHTML).toBe((initialValue-1).toString());
        


    })


    test('should resetear el contador inicial que se mande', () => { 
        
        const initialValue = 141;

        render(<App title={title} initial={initialValue}/>);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));


        fireEvent.click (screen.getByRole('button', {name:'btn-reset'}));

        //screen.debug();
        
        expect(screen.getByTestId('span-test').innerHTML).toBe((initialValue).toString());

     })

}); 