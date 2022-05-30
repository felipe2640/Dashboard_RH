import axios from 'axios'
import { type } from 'os'

export const URL = process.env.NEXT_API

export const api = axios.create({baseURL:(URL)})
