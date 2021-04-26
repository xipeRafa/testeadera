import { createStore } from './arrays'

describe('Haciendo pruebas a listas / Arrays', () => {

  test('Probando agregar una nueva fruta', () => {
    const store = createStore()

    store.addFruit('fresa')

    expect(store.getFruits()).toStrictEqual([ 'fresa' ])

  })

  test('Probando agregar dos nueva frutas', () => {
    const store = createStore()

    store.addFruit('fresa')
    store.addFruit('melon')

    expect(store.getFruits()).toStrictEqual([ 'fresa', 'melon' ]) //toStrictEqual arryas (tuBe)

  })

  test('Probando si contiene fruta espefica', () => {
    const store = createStore()

    store.addFruit('manzana')
    store.addFruit('pera')

    expect(store.getFruits()).toContain('pera')
    expect(store.getFruits()).not.toContain('banana')
  })

  test('Probando la longitud del array', () => {
    const store = createStore()

    store.addFruit('manzana')
    store.addFruit('pera')
    store.addFruit('banana')

    expect(store.getFruits()).toHaveLength(3)
  })

  test('Probando agregar un objeto con informacion de frutas', () => {
    const store = createStore()

    store.addFruit({
      name: 'fruta',
      price: 10
    })

    expect(store.getFruits()).toContainEqual({ name: 'fruta', price: 10 })
  })

})