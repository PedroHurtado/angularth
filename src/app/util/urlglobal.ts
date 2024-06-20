import { HttpClient } from "@angular/common/http"
import { InjectionToken } from "@angular/core"
import { GetallService } from "../getall.service"

export const URLGLOBAL = 'https://jsonplaceholder.typicode.com/'
export const URLTOKEN = new InjectionToken<string>('token')
export const deps = [HttpClient, URLTOKEN]

export const factory = (path:string)=>{
  return (http:HttpClient, urlApi:string)=>{
    return new GetallService(http,urlApi,path)
  }
}
