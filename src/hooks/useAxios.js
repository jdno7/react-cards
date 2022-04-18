import {useState} from 'react'
import axios from 'axios'
import uuid from 'uuid'

const useAxios = () => {
    const [state, setState] = useState([])
    
    try {
        const updateState = async (url, variable="") => {
            const response = await axios.get(url+variable)
            setState(state => [...state, {...response.data}])
        }
        
        return [state, updateState]

    } catch (e) {
        throw (e)
    }
   
}

export default useAxios;