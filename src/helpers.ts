type ErrorOrNull = Error | null

export const DEFAULT_TYPE: string = 'about:blank'

export class ProblemError extends Error {
  title: string
  status: number
  originalError?: ErrorOrNull
  type?: string;
  details?: { [key: string]: any }

  constructor(title: string, status: number, originalError?: ErrorOrNull, type: string = DEFAULT_TYPE, details?: { [key: string]: any }) {
    super(title)

    this.title = title
    this.status = status
    this.originalError = originalError
    this.type = type
    this.details = details

    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export const createProblemError = (
  title: string,
  statusCode: number,
  original?: ErrorOrNull,
  type?: string,
  details?: { [key: string]: any }
): ProblemError => new ProblemError(title, statusCode, original, type, details)
