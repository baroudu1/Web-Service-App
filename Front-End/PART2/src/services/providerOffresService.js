import axios from 'axios'
import { API_URL } from './config'


export const getAllOffres = async () => {

  let { data: Offres } = await axios.get(API_URL + '/providers/offres')

  return Offres
}

export const registerProvider = async (name,username,password,email,roles) => {

  
  let { data: test } = await axios.post(API_URL + '/auth/register',{name,username,password,email,roles})


  return test
}

export const getStatus = async (email) => {
  let { data: Owners } = await axios.get(API_URL + '/providers/myStatus/' + email)
  return Owners
}

export const registerProvider1 = async (provider) => {

  console.log(provider)
  

  let { data: test1 } = await axios.post(API_URL + '/providers', provider)

  return test1
}

