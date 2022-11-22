export class ErrorException extends Error {
  message: string;
  code: number;
  
  constructor(message: string, code: number = 500) {
    super()

    this.message = message;
    this.code = code;
  }
}