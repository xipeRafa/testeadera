import { saluda , getId, despide  } from './strings'

describe('Pruebas de strings', () => {

  const saludo = saluda('Gerardo')
  const id = getId()
  const saludoDespide = despide() 

  test('Probando la funcion saluda', () => {
    expect(saludo).toMatch('Hola soy')  //toMatch evalua si existen los caraceres en texto
  })

   test('Probando la funcion despide', () => {
    /* expect(saludoDespide).not.toMatch('Bye') */
    expect(saludoDespide).toMatch('Bye')
  })

 test('Probando la funcion getId', () => {
    expect(id).toMatch(/\d{2}-\d{3}/)
  })
   
 }) 