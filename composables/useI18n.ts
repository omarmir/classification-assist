import type { ClassificationLabel, SupportedLocale } from '~~/lib/classification/types'
import { translate, translateLabel } from '~~/lib/classification/translations'

export const useI18n = () => {
  const locale = useState<SupportedLocale>('locale', () => 'en')

  return {
    locale,
    t: (key: string) => translate(locale.value, key),
    label: (value: ClassificationLabel) => translateLabel(locale.value, value)
  }
}
