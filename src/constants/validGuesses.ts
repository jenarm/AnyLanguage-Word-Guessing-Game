import { CONFIG } from './config'

export const VALIDGUESSES = [
  'apple',
  'women',
  'horse',
  'magic',
  'steak',
  
  
  
  
  
  
  
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
