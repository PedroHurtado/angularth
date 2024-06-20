import { HttpClient } from "@angular/common/http"
import { FactorySansProvider, InjectionToken } from "@angular/core"
import { GetallService } from "../getall.service"

export const URLGLOBAL = 'https://jsonplaceholder.typicode.com/'
export const URLTOKEN = new InjectionToken<string>('token')
const deps = [HttpClient, URLTOKEN]

const  factory = (path:string)=>{
  return (http:HttpClient, urlApi:string)=>{
    return new GetallService(http,urlApi,path)
  }
}
export const createFactory=(path:string):FactorySansProvider=>{
  return {
    useFactory:factory(path),
    deps:deps
  }
}
