import React from 'react'
import WeatherCoordinates from '../../components/WeatherCoordinates'
import {render} from'@testing-library/react-native'


describe('WeatherScreen', () =>{
    test('Should render correctly', async ()=>{
        const wrapper = render(<WeatherCoordinates/>)
        wrapper.getByTestId('weather-coordinates')
    })
})