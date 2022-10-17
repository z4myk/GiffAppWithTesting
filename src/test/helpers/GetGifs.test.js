
import {getGifs} from "../../helpers/getGifs"

describe('Test en getGifs', () => {
    test('Debe retornar el arreglo de gifs', async() => {
        
        const gifs = await getGifs('Dragon ball')

        expect(gifs.length ).toBeGreatherThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    })
    
})
