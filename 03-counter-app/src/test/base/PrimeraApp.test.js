import { shallow } from "enzyme";
import React from 'react';
import PrimeraApp from "../PrimeraApp";




describe('Pruebas de primera App', () => { 
    
    test('Debe mostrar PrimeraApp correctamente"', () => {

        const saludo = 'Hola soy ines'
        const wrapper = shallow (<PrimeraApp saludo={saludo}/>) 
        expect ( wrapper ).toMatchSnapshot();
     });


     test ('debe de mostrar el subtitulo enviado por props', () => {
         
        const saludo = 'Hola soy Goku';
        const wrapper = shallow(
        <PrimeraApp 
        saludo = { saludo }
        subtitulo = { subTitulo}
        /> 
      
        )

        const textoParrafo = wrapper.find('p').text();
        expect (textoParrafo).toBe (subTitulo)
    })
     
     
 });