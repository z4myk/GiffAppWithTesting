// const {render,screen} = require("@testing-library/react")
// const { GifGrid} = require("../../components/GifGrid")
// const  {useFetchGif} = require("../../hooks/useFetchGif")
import { render, screen}  from "@testing-library/react";
import { GifGrid} from "../../components/GifGrid"
import {useFetchGif} from "../../hooks/useFetchGif"

describe('test en <GifGrid />', () => {
    
    test('Debe mostrar inicialmente el loading', () => {
        
        useFetchGif.mockReturnValue({
            imagenes: [],
            loading: true
        })

        render(<GifGrid category={category} />  )
        screen.debug()
        expect(screen.getByText('cargando...').innerHTML).toBe('cargando...')
        expect(screen.getByText(category).innerHTML).toBe(category)

        expect(screen.getByText(category))
    })
    
    test('Debe mostrar items, cuando se cargan las imagenes en useFetchGifs', () => {
        
        useFetchGif.mockReturnValue({
            imagenes:[
                {id: 'ABC', title: 'Saitama', url: 'https://onepunch/saitama.jpg'},
                {id: 'ABC', title: 'Garou', url: 'https://onepunch/garou.jpg'}
            ],
            loading: false,
        })

        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length ).toBe(2)
    })
    
})
