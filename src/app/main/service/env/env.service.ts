import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // base url
  public apiUrl = 'http://localhost:3000';
  // Storage Type
  public storage = localStorage;

  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() { }
}
