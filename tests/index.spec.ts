import { expect, test } from 'vitest'
import { deduplicate } from '../src/utils/text-deduplication'
import { extractWithEn, extractWithZh } from '../src/utils/text-extraction';

test('deduplicate', () => {
  const data = ['1', '1', '2', '2', '3']
  const result = ['1', '2', '3']
  expect(deduplicate(data)).toEqual(result)
})

test.only('extract', () => {
  expect(extractWithEn('hello world')).toEqual(['hello', 'world'])
  expect(extractWithZh('你好世界')).toEqual(['你好', '世界'])
})