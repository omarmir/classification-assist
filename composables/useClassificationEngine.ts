import { recommendClassification } from '~~/lib/classification/engine'

export const useClassificationEngine = () => {
  return { recommend: recommendClassification }
}
