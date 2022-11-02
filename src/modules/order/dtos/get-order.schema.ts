import { Schema } from "express-validator";

const getOrderSchema: Schema = {
  seller: {
    in: ['query'],
    isUUID: true,
    optional: true
  },
  country: {
    in: ['query'],
    isUUID: true,
    optional: true
  },
  before: {
    in: ['query'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Before Cursor is empty!',
    optional: true
  },
  after: {
    in: ['query'],
    isString: true,
    notEmpty: true,
    errorMessage: 'After Cursor is empty!',
    optional: true
  },
  limit: {
    in: ['query'],
    isNumeric: true,
    errorMessage: 'Invalid page limit!',
    optional: true
  }
}

export { getOrderSchema }