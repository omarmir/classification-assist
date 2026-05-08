import { scanDocument } from '~~/lib/classification/scanner'

export const useHeuristicScanner = () => {
  return { scan: scanDocument }
}
