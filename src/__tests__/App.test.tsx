import React from 'react'
import {View} from 'react-native'
import AppNavigator from '../screens'
import {render} from'@testing-library/react-native'
import App from '../App'

jest.mock('../Screens', () => jest.fn())

describe('App', () =>{
    test('Should render routes', async ()=>{
        (AppNavigator as jest.Mock).mockReturnValueOnce(<View testID="mock-routes"/>)
        const wrapper = render(<App/>)
        wrapper.getByTestId('mock-routes')
    })
})