import LocationService from "../LocationService";
import {render} from'@testing-library/react-native'

describe('LocationService', () =>{
    test('Should return current lat & lng', async ()=>{
        const position = await LocationService.getCurrentPosition()
        expect(position).toEqual({
            latitude: 0,
            longitude: 0
        })
    })
})