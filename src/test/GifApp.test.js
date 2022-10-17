import { render, screen, fireEvent } from '@testing-library/react';
import { GifApp } from '../GifApp';
import {GifGrid} from '../components/GifGrid'
describe('Test de <GifApp />', () => {
    
    test('Testear estado inicial', () => {

        render(<GifApp />);
        const h1 = screen.queryByRole('heading', {level:1});

        expect(h1).not.toBeNull();

    })
    
    test("se renderiza boton de reset", () =>{
        const {getByTestId} = render(<GifApp />);

        const r = getByTestId("bReset");
        
        expect(r).toBeTruthy();
    })


    test('Verificar el boton de Eliminar', () => {

        const {getByTestId} = render(<GifGrid  handleRemove={()=>{}}/>);

        const buttonRemove = getByTestId('bDelete');       
        
        fireEvent.click(buttonRemove);
            
        expect(buttonRemove).toBeTruthy();
        
    });


    test('Cambios de estado de categorias', () => {
        
        render(<GifApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.change(input, {target: {value: "Goku"}})
        fireEvent.submit(form);
    

    })


})
