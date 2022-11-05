import { expect, test, } from '@jest/globals';
const testAPI  = require('./testeApi')
import api from '../Utils/axios'

test('expect api return data', () => {
    expect(testAPI(api)).toBeDefined()
  });