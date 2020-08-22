import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_USER, SET_CURRENT_ORGANIZER } from './types'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'


//User
export const registerUser = (userData, history, callback) => dispatch => {
    
    
      axios.post('/api/users/register', userData)
            .then(res => history.push('/sign-in'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data,
                    
                })
                if (typeof callback == "function") 
                    callback()
            })
           
}

export const loginUser = (userData, history) => dispatch =>{
    axios.post('/api/users/login', userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token)
            setAuthToken(token);
            //console.log(token)

            const decoded = jwt_decode(token)

            dispatch(setCurrentUser(decoded))
            history.push('/user/dashboard')
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false)
    dispatch(setCurrentUser({}))
    history.push('/')
}


//organizer

export const registerOrganizer = (organizerData, history, callback) => dispatch => {
    
    
    axios.post('/api/organizers/register', organizerData)
          .then(res => history.push('/sign-in'))
          .catch(err => {
              dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data,
                  
              })
              if (typeof callback == "function") 
                  callback()
          })
         
}

export const loginOrganizer = (organizerData, history) => dispatch =>{
  axios.post('/api/organizers/login', organizerData)
      .then(res => {
          const { token } = res.data;
          localStorage.setItem('jwtToken', token)
          setAuthToken(token);
          console.log(token)

          const decoded = jwt_decode(token)

          dispatch(setCurrentOrganizer(decoded))
          history.push('/organizer/dashboard')

      })
      .catch(err => 
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          })
      )
}

export const setCurrentOrganizer = decoded => {
  return {
      type: SET_CURRENT_ORGANIZER,
      payload: decoded
  }
}

export const logoutOrganizer = (history) => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false)
  dispatch(setCurrentOrganizer({}))
  history.push('/')
}