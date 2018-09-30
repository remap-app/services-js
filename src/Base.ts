import fetch from 'cross-fetch'
import { createProblemError, DEFAULT_TYPE as DEFAULT_ERROR_TYPE } from './helpers'
import { DEFAULT_OPTIONS } from './constants'

type HTTP_METHOD = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'

export interface ReMapBaseRequestHeaders {
  [key: string]: any;
}

export interface ReMapOptions {
  RESTAURANTS_SERVICE_ORIGIN?: string;
  STOCKS_SERVICE_ORIGIN?: string;
  AUTHENTICATION_SERVICE_ORIGIN?: string;
  baseRequestHeaders?: ReMapBaseRequestHeaders;
}

export class Base {
  protected RESTAURANTS_SERVICE_ORIGIN: string;
  protected STOCKS_SERVICE_ORIGIN: string;
  protected AUTHENTICATION_SERVICE_ORIGIN: string;

  constructor(private options?: ReMapOptions) {
    const opts = options || {}
    this.RESTAURANTS_SERVICE_ORIGIN = opts.RESTAURANTS_SERVICE_ORIGIN || DEFAULT_OPTIONS.RESTAURANTS_SERVICE_ORIGIN
    this.STOCKS_SERVICE_ORIGIN = opts.STOCKS_SERVICE_ORIGIN || DEFAULT_OPTIONS.STOCKS_SERVICE_ORIGIN
    this.AUTHENTICATION_SERVICE_ORIGIN = opts.AUTHENTICATION_SERVICE_ORIGIN || DEFAULT_OPTIONS.AUTHENTICATION_SERVICE_ORIGIN
  }

  private async request(method: HTTP_METHOD, url: string, options?: RequestInit): Promise<any> {
    const res = await fetch(url, { ...options, method, mode: 'cors' }).catch((e: Error) => { throw e })

    if (!res.ok) {
      const body = await res.json().catch((e: Error) => {
        return { detail: 'JSON parse error', originalMessage: e.toString() }
      })

      throw createProblemError(res.statusText, res.status, null, DEFAULT_ERROR_TYPE, body)
    }

    return res
  }

  protected async get(url: string, options?: RequestInit): Promise<any> {
    return await this.request('GET', url, options)
  }

  protected async post(url: string, options?: RequestInit): Promise<any> {
    return await this.request('POST', url, options)
  }

  protected async put(url: string, options?: RequestInit): Promise<any> {
    return await this.request('PUT', url, options)
  }

  protected async patch(url: string, options?: RequestInit): Promise<any> {
    return await this.request('PATCH', url, options)
  }

  protected async delete(url: string, options?: RequestInit): Promise<any> {
    return await this.request('DELETE', url, options)
  }
}
