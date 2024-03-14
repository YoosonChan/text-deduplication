import { cut } from 'nodejieba';

export function extractWithEn(text: string) {
  let result: string[] = []
  if (text.length && typeof text === 'string') {
    result = text.split(' ')
    // TODO - handle punctuation marks
  }
  return result
}

export function extractWithZh(text: string) {
  let result: string[] = []
  if (text.length && typeof text === 'string') {
    result = cut(text)
    // result = text.split('')
    // TODO - handle punctuation marks
  }
  return result
}