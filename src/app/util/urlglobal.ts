import { InjectionToken } from "@angular/core"

export const URLGLOBAL = 'http://localhost:3000/api'
export const URLTOKEN = new InjectionToken<string>('token')
