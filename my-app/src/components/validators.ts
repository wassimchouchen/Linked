import {
  isRequired,
  isEmail,
  isNumber,
  isMinNumber,
  isMaxNumber,
  isLength,
  isMinLength,
  isMaxLength,
  isPattern,
} from '@formiz/validations'

const messages = {
  REQUIRED: 'This field is required',
  EMAIL: 'This field must be a valid email',
  NUMBER: 'This field must be a number',
  MIN_NUMBER: (limit: number) =>
    `This field must be a number greater than or equal to ${limit}`,
  MAX_NUMBER: (limit: number) =>
    `This field must be a number less than or equal to ${limit}`,
  LENGTH: (limit: number) =>
    `This field must be a string with a length equal to ${limit}`,
  MIN_LENGTH: (limit: number) =>
    `This field must be a string with a length greater than or equal to ${limit}`,
  MAX_LENGTH: (limit: number) =>
    `This field must be a string with a length less than or equal to ${limit}`,
  PATTERN: 'This field is invalid',
}

export const required = {
  rule: isRequired(),
  message: messages.REQUIRED,
}

export const email = {
  rule: isEmail(),
  message: messages.EMAIL,
}

export const number = {
  rule: isNumber(),
  message: messages.NUMBER,
}

export const min = (limit: number) => ({
  rule: isMinNumber(limit),
  message: messages.MIN_NUMBER(limit),
})

export const max = (limit: number) => ({
  rule: isMaxNumber(limit),
  message: messages.MAX_NUMBER(limit),
})

export const length = (limit: number) => ({
  rule: isLength(limit),
  message: messages.LENGTH(limit),
})

export const minLength = (limit: number) => ({
  rule: isMinLength(limit),
  message: messages.MIN_LENGTH(limit),
})

export const maxLength = (limit: number) => ({
  rule: isMaxLength(limit),
  message: messages.MAX_LENGTH(limit),
})

export const pattern = (regex: RegExp) => ({
  rule: isPattern(regex),
  message: messages.PATTERN,
})

export default messages
