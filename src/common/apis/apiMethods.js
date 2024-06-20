import axios from "axios"
import config from "../../setup/config"

const baseURL = config.backend_url
const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => Promise.reject(error))

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) { }
  })

export const get = async (url, params) => {
  try {
    const response = await axios.get(url, { params })
    return response.data
  } catch (error) {
    console.error("GET request failed", error);
    throw error
  }
}

export const post = async (url, data) => {
  try {
    const response = await axios.post(url, data)
    return response.data
  } catch (error) {
    console.error("POST request failed", error)
    throw error
  }
}

export const put = async (url, data) => {
  try {
    const response = await axios.put(url, data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const del = async (url) => {
  try {
    const response = await axios.delete(url)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}