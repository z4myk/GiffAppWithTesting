
import { render, screen } from "@testing-library/react";
// const {render, screen} = require("@testing-library/react")
import { GifItem }  from "../../components/GifItem";
// const { GifItem } = require( "../../components/GifItem")
describe('Test en <GiftItem />', () => {
    
    const title = 'Dragon Ball';
    const url = 'https://dragon-ball.com/goku.jpg';

    test('Debe concidir con el snapshot ', () => {

        const {container} = render(<GifItem title={title} url={url}/>)
        
        expect( container ).toMatchSnapshot();
    })
    
    test('Debe encontrar un texto', () => {
        
        const {getByText} = render(<GifItem title={title} url={url} />);
        expect( getByText(title) ).toBeTruthy();

    })
    

    test('Debe encontrar por test-id ', () => {
        
       render( <GifItem title={title} url={url} /> );

       const {getByTestId} = screen;

        expect(getByTestId('test-title').innerHTML).toContain(title);

    })

    test('Debe mostrar URL y ALT ', () => {
        
        // screen.debug()

        const {src, alt} = screen.getByRole( 'img' );
        expect(src).toContain(url)
        expect(alt).toContain('gif')
    })
    


})
