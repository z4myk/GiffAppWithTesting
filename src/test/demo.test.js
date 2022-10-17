// import { getSaludo, getUser } from "./functions";
const  { getSaludo, getUser } = require("./functions")
describe('test demo', () => {

    test('test 1 - numero igual', () => {
        expect(1 === 1).toBe(true)
    });

    test('test 2 - Mensaje igual', () => {

        //1 arrange / inicio
       const message1 = 'hola';


       //2 act  / acciones
       const message2 = message1.trim()

       //3 assert / observar el comportamiento esperado
       expect(message1).toBe(message2)

    });


    test('test 3 - getSaludo', () => {

        const nombre = 'Sebastian'
        const message = getSaludo(nombre)

        expect(message).toBe(`Hola ${nombre}`)
    });


    test('test 4 - getUser', () => {

        const testUser =   {
            uid: 'ABC123',
            username: 'Agosto1986'
        }

        const user = getUser();

        expect(testUser).toEqual(user);
    })
    

})   