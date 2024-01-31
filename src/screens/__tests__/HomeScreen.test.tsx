import React from 'react'
import HomeScreen from '../HomeScreen'
import {render} from'@testing-library/react-native'

describe('HomeScreen', () =>{
    test('Should render correctly', ()=>{
        const wrapper = render(<HomeScreen/>)
        wrapper.getByTestId('home-screen')
    })
})

describe('Title section', () =>{

    jest.useFakeTimers('modern')
    jest.setSystemTime(946684800000) // Saturday, 01 January 2000 00:00 UTC
    

});