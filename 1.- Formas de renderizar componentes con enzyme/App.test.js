import React from 'react'
import { configure, shallow } from 'enzyme'
// SHALLOW renderin API 
//shallow: renderizado superficial dentro de la memoria, independiente, componente como unidad y no como secundarios
//mount: interactuar con las apis de el DOM, de contexto Global
//render: transforma el arbol de componentes de react en un marcado html lo envuelve en cheerio.js
import Adapter from 'enzyme-adapter-react-16'
import App, { Title } from './App'

configure({
  adapter: new Adapter()
})

describe('Probando componente <App />', () => {
  test('Probando renderizado de componente', () => {
    const wrapper = shallow(<App />)

    // console.log(wrapper.find('h1'))
    // console.log(wrapper.find('div ~ p').length)
    // console.log(wrapper.find('[type="checkbox"]').html())
    // console.log(wrapper.find(Title).html())

    // expect(wrapper.find('h1').html()).toBe('<h1>Introduccion a Unit Testing</h1>')
    // expect(wrapper.find('h1')).toHaveLength(1)
    // expect(wrapper.html()).toBe('<div><h1>Introduccion a Unit Testing</h1></div>')
  })
})