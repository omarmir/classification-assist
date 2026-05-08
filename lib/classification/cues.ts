const publicReleasePatterns = [
  /\bapproved for public release\b/gi,
  /\bready for public distribution\b/gi,
  /\bposted publicly\b/gi,
  /\bpublic posting\b/gi,
  /\bpublic handouts?\b/gi,
  /\bpublic delivery\b/gi,
  /\bpost(?:ed)? (?:on|to) (?:the )?website\b/gi,
  /\bpublic website\b/gi,
  /\bopen to the public\b/gi,
  /\bfor the public\b/gi,
  /\bsocial media\b/gi,
  /\bopen data\b/gi,
  /\bmedia\b/gi,
  /\bshared publicly\b/gi,
  /\bfreely shared\b/gi,
  /\bapproved for publication\b/gi,
  /\bapproved for public(?: |-)distribution\b/gi,
  /\bmay be shared with the public\b/gi,
  /\bmay be posted\b/gi,
  /\bfor public use\b/gi,
  /\bfor public distribution\b/gi,
  /\bintended for external distribution\b/gi,
  /\bintended for public delivery\b/gi
]

const publicSafePatterns = [
  /\bno protected content\b/gi,
  /\bcontains only public\b/gi,
  /\bpublic promotional text\b/gi,
  /\bclean copy\b/gi,
  /\bstale footer\b/gi,
  /\bobsolete (?:confidentiality )?stamp\b/gi,
  /\bold internal filename\b/gi,
  /\bno internal annexes? (?:or contact lists? )?remain\b/gi,
  /\bonly the outreach copy was retained\b/gi,
  /\breplaces the internal draft\b/gi,
  /\bfinal version\b/gi,
  /\bversion finale\b/gi,
  /\bcontains only public promotional text\b/gi
]

const restrictedPatterns = [
  /\binternal(?: distribution| use)?\b/gi,
  /\bnot for public release\b/gi,
  /\bnot be posted publicly\b/gi,
  /\bshould not circulate(?: outside)?\b/gi,
  /\bshould remain internal\b/gi,
  /\bwithin the office\b/gi,
  /\bprivacy concerns?\b/gi,
  /\bprivacy impact\b/gi,
  /\bunauthorized disclosure\b/gi,
  /\binconvenience\b/gi,
  /\brestricted\b/gi,
  /\bneed(?:-|\s)to(?:-|\s)know\b/gi,
  /\bmust remain\b/gi,
  /\bdo not distribute\b/gi,
  /\bnot be publicly shared\b/gi,
  /\bnot be disclosed\b/gi,
  /\bauthorized circle\b/gi,
  /\blimited to\b/gi,
  /\borganizers?\b/gi,
  /\borganizing team\b/gi,
  /\bmanagement chain\b/gi,
  /\bne doit pas être diffusé publiquement\b/gi
]

const aggregationPatterns = [
  /\b(appendix|annex|tracker|matrix|register|dashboard|roster|worksheet|board|case file|case files)\b/gi,
  /\b(?:case|continuity|evidence|information|operational|personal|distribution) package\b/gi,
  /\b(aggregate|aggregation|combined|linked|summary of active cases)\b/gi
]

const minorImpactPatterns = [
  /\bwould inconvenience\b/gi,
  /\bminor privacy\b/gi,
  /\blimited privacy concerns?\b/gi,
  /\blimited personal sensitivity\b/gi,
  /\blimited personal information\b/gi,
  /\blikely injury is minor\b/gi,
  /\blikely injury remains low\b/gi,
  /\blikely injury remains limited\b/gi,
  /\bserious injury is not likely\b/gi,
  /\bdétails personnels limités\b/gi,
  /\ble préjudice probable demeure faible\b/gi,
  /\bpréjudice probable demeure faible\b/gi
]

const seriousImpactPatterns = [
  /\bserious financial harm\b/gi,
  /\b(?:would cause|could cause|result in) serious injury\b/gi,
  /\bserious personal and financial injury\b/gi,
  /\bpréjudice sérieux\b/gi,
  /\bcauserait un préjudice grave\b/gi
]

const extremeImpactPatterns = [
  /\bextremely grave\b/gi,
  /\bextremely grave injury\b/gi,
  /\bpréjudice extrêmement grave\b/gi
]

const nationalSeriousPatterns = [
  /\bgrave injury to the national interest\b/gi,
  /\bserious injury to the national interest\b/gi,
  /\bpréjudice grave à l[’']intérêt national\b/gi
]

const nationalExceptionalPatterns = [
  /\bexceptionally grave injury\b/gi,
  /\bexceptionally grave harm\b/gi,
  /\bpréjudice exceptionnellement grave\b/gi
]

export const countPatternHits = (text: string, patterns: RegExp[]) =>
  patterns.reduce((count, pattern) => count + (text.match(pattern)?.length ?? 0), 0)

export const publicReleaseCueScore = (text: string) => countPatternHits(text, publicReleasePatterns)

export const publicSafeCueScore = (text: string) => countPatternHits(text, publicSafePatterns)

export const restrictedCueScore = (text: string) => countPatternHits(text, restrictedPatterns)

export const hasPublicReleaseCue = (text: string) => publicReleaseCueScore(text) > 0

export const hasRestrictedCue = (text: string) => restrictedCueScore(text) > 0

export const hasAggregationCue = (text: string) => countPatternHits(text, aggregationPatterns) > 0

export const minorImpactCueScore = (text: string) => countPatternHits(text, minorImpactPatterns)

export const seriousImpactCueScore = (text: string) => countPatternHits(text, seriousImpactPatterns)

export const extremeImpactCueScore = (text: string) => countPatternHits(text, extremeImpactPatterns)

export const nationalSeriousCueScore = (text: string) => countPatternHits(text, nationalSeriousPatterns)

export const nationalExceptionalCueScore = (text: string) => countPatternHits(text, nationalExceptionalPatterns)
