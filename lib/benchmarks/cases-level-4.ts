import type { BenchmarkCase } from './types'
import { createBenchmarkCase, reviewedAnswers } from './factory'

export const level4Cases: BenchmarkCase[] = [
  createBenchmarkCase({
    id: 'L4-001',
    difficulty: 'Level 4',
    expectedLabel: 'Public',
    title: 'Bilingual shell for public access update',
    notes: 'Bilingual wording and internal drafting labels, but final content is public.',
    fileName: 'l4-001-public-bilingual-access-update.docx',
    sections: [
      { title: 'Version finale / Final version', text: 'Les clients peuvent utiliser l’entrée ouest pendant les travaux. Visitors may continue to use the west entrance during construction.' },
      { title: 'Release status', text: 'This version replaces the internal draft and is approved for publication on the public website and at reception.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L4-002',
    difficulty: 'Level 4',
    expectedLabel: 'Public',
    title: 'Redlined agenda where only the clean copy remains',
    notes: 'Looks like an internal artifact but the remaining text is public.',
    fileName: 'l4-002-public-redlined-agenda.docx',
    sections: [
      { title: 'Agenda clean copy', text: 'Welcome, service overview, bilingual Q and A, and closing remarks are the only retained items after all internal comments were removed.' },
      { title: 'Publication note', text: 'The clean copy may be posted publicly and shared with registrants.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L4-003',
    difficulty: 'Level 4',
    expectedLabel: 'Public',
    title: '“Internal use” footer on public weather notice',
    notes: 'Misleading footer but content is still public.',
    fileName: 'l4-003-public-weather-notice.docx',
    sections: [
      { title: 'Notice', text: 'Heavy winds may affect ferry service after 18:00. Clients should check the public status line before travelling.' },
      { title: 'Context', text: 'A stale footer from an internal template remains, but there is no protected content in the notice itself.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L4-004',
    difficulty: 'Level 4',
    expectedLabel: 'Public',
    title: 'Decontextualized excerpt from outreach binder',
    notes: 'Excerpt looks clipped from internal package but is safe.',
    fileName: 'l4-004-public-outreach-excerpt.docx',
    sections: [
      { title: 'Excerpt', text: 'Service kiosks will operate from 10:00 to 16:00 and offer printed guides in English and French.' },
      { title: 'Decision', text: 'Only the outreach copy was retained; no internal annexes or contact lists remain.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L4-005',
    difficulty: 'Level 4',
    expectedLabel: 'Public',
    title: 'Draft poster text with obsolete confidentiality stamp',
    notes: 'Obsolete stamp should not override substance.',
    fileName: 'l4-005-public-obsolete-stamp-poster.docx',
    sections: [
      { title: 'Poster text', text: 'Service week begins Monday. Drop by the atrium to meet program staff and learn how to book appointments online.' },
      { title: 'Stamp history', text: 'An old “do not distribute” stamp remained from a drafting phase, but the reviewed version contains only public promotional text.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L4-006',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'Open house package with a hidden emergency contact tab',
    notes: 'Public-facing package but one tab contains low-level personal data.',
    fileName: 'l4-006-pa-open-house-contact-tab.docx',
    sections: [
      { title: 'Main package', text: 'Most pages describe the public open house schedule and parking instructions.' },
      { title: 'Tab 4', text: 'A hidden tab lists volunteer emergency contact numbers and preferred callback methods if shifts change at short notice.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-007',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'French checklist with participant mobility notes',
    notes: 'Bilingual formatting masks small personal sensitivity.',
    fileName: 'l4-007-pa-french-mobility-checklist.docx',
    sections: [
      { title: 'Liste de contrôle', text: 'La liste confirme l’arrivée des participants, les sièges réservés et les besoins de mobilité pour une visite guidée.' },
      { title: 'Utilisation', text: 'Le document ne doit pas être diffusé publiquement car il contient des détails personnels limités, mais le préjudice probable demeure faible.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-008',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'Visitor coordination board embedded in public deck',
    notes: 'One slide carries internal names and arrival windows.',
    fileName: 'l4-008-pa-visitor-board-embedded.docx',
    sections: [
      { title: 'Slides 1-8', text: 'The first slides describe a public consultation event and the order of panels.' },
      { title: 'Slide 9', text: 'Slide 9 lists visitor names, arrival windows, and direct extensions for escorts, creating only limited personal sensitivity.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-009',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'After-hours sign-in notes mixed into facilities log',
    notes: 'Low-level employee movement detail.',
    fileName: 'l4-009-pa-after-hours-signin-log.docx',
    sections: [
      { title: 'Facilities log', text: 'Most of the log concerns room setup, but two columns record who stayed late and which cell number to use if the alarm is triggered.' },
      { title: 'Assessment', text: 'The personal information is limited and leads to Protected A rather than a higher category.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-010',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'Old staffing worksheet reused for event registration',
    notes: 'No serious data, but internal names remain.',
    fileName: 'l4-010-pa-reused-staffing-worksheet.docx',
    sections: [
      { title: 'Worksheet', text: 'A repurposed worksheet now tracks event registration, but it still contains internal staff names, phone extensions, and accessibility seating notes.' },
      { title: 'Handling', text: 'Disclosure would be undesirable but the likely injury remains limited.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-011',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'Community booklet with internal escort appendix',
    notes: 'Public shell, internal appendix.',
    fileName: 'l4-011-pa-community-booklet-escort-appendix.docx',
    sections: [
      { title: 'Booklet', text: 'The booklet explains a public information day in plain language.' },
      { title: 'Appendix G', text: 'Appendix G identifies internal escorts, delegate names, and pickup times; the appendix should not be publicly shared, but the injury threshold is still low.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-012',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: '“Not for release” training file with only minor participant data',
    notes: 'Label-like language is misleading; content is low sensitivity.',
    fileName: 'l4-012-pa-training-file-minor-data.docx',
    sections: [
      { title: 'Training file', text: 'The file lists which employees attended, who required quiet seating, and which direct line to call if one person is late.' },
      { title: 'Classification note', text: 'Despite the stern header, the actual injury threshold remains low and consistent with Protected A.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-013',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'Merged event script and attendee support notes',
    notes: 'Minor personal data embedded in otherwise public text.',
    fileName: 'l4-013-pa-merged-script-support-notes.docx',
    sections: [
      { title: 'Script', text: 'Most of the document is public event script, but the final page records who requested wheelchair routing and where to direct them on arrival.' },
      { title: 'Impact', text: 'Those support notes create limited personal sensitivity only.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-014',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'Registration extract using initials and phone fragments',
    notes: 'Still identifying enough for low injury.',
    fileName: 'l4-014-pa-initials-phone-fragments.docx',
    sections: [
      { title: 'Extract', text: 'The extract uses initials and partial phone numbers for registrants who need call-backs if the workshop location changes.' },
      { title: 'Assessment', text: 'The partial data still creates limited privacy concerns but not serious injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-015',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'Late-stage layout proof with participant names in margins',
    notes: 'Sensitive only because of marginal notes.',
    fileName: 'l4-015-pa-layout-proof-margin-names.docx',
    sections: [
      { title: 'Layout proof', text: 'The body of the proof is public poster text, but margin notes identify which participants should sit near exits and interpreters.' },
      { title: 'Handling', text: 'The marginal data supports Protected A only.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-016',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Executive deck with discreet health shorthand',
    notes: 'Shorthand still reveals serious health content.',
    fileName: 'l4-016-pb-executive-deck-health-shorthand.docx',
    sections: [
      { title: 'Deck', text: 'A staffing deck uses coded phrases to identify which employees are on medical accommodation and which files require updated clinician notes.' },
      { title: 'Impact', text: 'Even coded, the information would cause serious injury if interpreted outside the authorized circle.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-017',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: '“Admin only” memo hiding direct deposit reversals',
    notes: 'Looks routine but includes serious financial exposure.',
    fileName: 'l4-017-pb-admin-memo-direct-deposit-reversals.docx',
    sections: [
      { title: 'Admin memo', text: 'The memo appears routine but lists failed direct deposit reversals, bank account changes, and salary timing for named staff.' },
      { title: 'Assessment', text: 'The resulting harm from disclosure would be serious, not minor.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-018',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Operations briefing with an appended diagnosis note',
    notes: 'Sensitive annex under operational cover.',
    fileName: 'l4-018-pb-ops-briefing-diagnosis-annex.docx',
    sections: [
      { title: 'Operations briefing', text: 'The main briefing discusses staffing coverage.' },
      { title: 'Attachment', text: 'The attachment reproduces an employee diagnosis note and return-to-work limits, which would cause serious injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-019',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Bilingual compensation email thread',
    notes: 'Language mixing obscures serious financial content.',
    fileName: 'l4-019-pb-bilingual-compensation-thread.docx',
    sections: [
      { title: 'Courriel / Email', text: 'Le dossier confirme une nouvelle coordination bancaire. The thread also lists direct deposit corrections and salary recovery dates.' },
      { title: 'Handling', text: 'Despite the casual thread format, disclosure would cause serious financial injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-020',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Support log with masked token values and personnel link',
    notes: 'Masked credentials still sensitive.',
    fileName: 'l4-020-pb-masked-token-log.docx',
    sections: [
      { title: 'Support log', text: 'The token serial is partially masked, but the log still identifies the employee id, password reset flow, and system privileges restored.' },
      { title: 'Why protected', text: 'The combination remains capable of causing serious injury through unauthorized access.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-021',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Accommodation tracker embedded in branch dashboard',
    notes: 'Dashboard UI style hides sensitivity.',
    fileName: 'l4-021-pb-accommodation-dashboard-embed.docx',
    sections: [
      { title: 'Dashboard extract', text: 'One region of a dashboard maps accommodations, health follow-ups, employee ids, and revised salary codes for active cases.' },
      { title: 'Assessment', text: 'The presentation style does not reduce the serious injury risk.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-022',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Condensed grievance timeline with identity fragments',
    notes: 'Fragmented identifiers still serious.',
    fileName: 'l4-022-pb-condensed-grievance-timeline.docx',
    sections: [
      { title: 'Timeline', text: 'The timeline uses initials and personnel file fragments while describing grievance steps and management responses.' },
      { title: 'Impact', text: 'The employment relations content remains serious enough for Protected B.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-023',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Travel claim note with implicit medical reason',
    notes: 'Indirect health rationale plus money.',
    fileName: 'l4-023-pb-implicit-medical-travel-claim.docx',
    sections: [
      { title: 'Claim note', text: 'The note avoids saying “medical” directly, but explains recurring clinic travel, reimbursement, and direct deposit correction for the claimant.' },
      { title: 'Classification note', text: 'The combined context still supports serious injury and Protected B.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-024',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Sanitized cover memo with live personnel file excerpt',
    notes: 'Cover looks safe; excerpt drives sensitivity.',
    fileName: 'l4-024-pb-cover-memo-personnel-excerpt.docx',
    sections: [
      { title: 'Cover memo', text: 'The cover memo speaks in general staffing terms.' },
      { title: 'Appendix B', text: 'Appendix B reproduces personnel file entries, accommodation restrictions, and grievance notes. Disclosure would cause serious injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-025',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Shared drive cleanup list with hidden banking fields',
    notes: 'Spreadsheet cleanup context hides serious data.',
    fileName: 'l4-025-pb-shared-drive-cleanup-banking-fields.docx',
    sections: [
      { title: 'Cleanup list', text: 'A shared drive cleanup list seems administrative until one tab reveals bank account changes, direct deposit reversals, and employee names.' },
      { title: 'Assessment', text: 'The hidden tab pushes the item to Protected B because serious financial injury is possible.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-026',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Return-to-work speaking points for managers',
    notes: 'Speaking points format, but substantive medical detail.',
    fileName: 'l4-026-pb-return-to-work-speaking-points.docx',
    sections: [
      { title: 'Speaking points', text: 'Managers are coached on what to say to an employee returning with diagnosis-based restrictions and reduced salary implications.' },
      { title: 'Impact', text: 'The content would cause serious injury if disclosed beyond the need-to-know circle.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-027',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'HR dashboard export with credential workaround comments',
    notes: 'Serious data appears in comments column.',
    fileName: 'l4-027-pb-dashboard-export-comments.docx',
    sections: [
      { title: 'Export', text: 'The visible columns are mundane, but the comments column records a token bypass, password issue, and personnel file access justification.' },
      { title: 'Handling', text: 'The comments create serious injury risk and support Protected B.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-028',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Informal note on “health matters” and payroll timing',
    notes: 'Euphemistic wording does not reduce severity.',
    fileName: 'l4-028-pb-euphemistic-health-payroll-note.docx',
    sections: [
      { title: 'Informal note', text: 'A supervisor mentions ongoing health matters, reduced duties, and delayed payroll adjustments requiring a direct deposit correction.' },
      { title: 'Assessment', text: 'The euphemisms still imply serious personal and financial injury if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-029',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Payroll issue card attached to grievance briefing',
    notes: 'Two medium clues combine into serious injury.',
    fileName: 'l4-029-pb-payroll-card-grievance-briefing.docx',
    sections: [
      { title: 'Briefing', text: 'The briefing on a grievance attaches a small payroll issue card showing salary timing, bank corrections, and employee file linkage.' },
      { title: 'Why protected', text: 'Together the attachments support serious injury and Protected B.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-030',
    difficulty: 'Level 4',
    expectedLabel: 'Protected C',
    title: 'Public-facing slide deck with hidden relocation appendix',
    notes: 'Benign shell conceals severe movement details.',
    fileName: 'l4-030-pc-slide-deck-hidden-relocation-appendix.docx',
    sections: [
      { title: 'Slides', text: 'The visible slides discuss emergency readiness at a very high level.' },
      { title: 'Appendix Z', text: 'Appendix Z details how a protected family, escorts, and vehicles relocate if a secure residence is compromised, creating extremely grave injury if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-031',
    difficulty: 'Level 4',
    expectedLabel: 'Protected C',
    title: 'Exercise notes that match the live witness route',
    notes: 'Exercise framing should not lower classification.',
    fileName: 'l4-031-pc-exercise-notes-live-witness-route.docx',
    sections: [
      { title: 'Exercise notes', text: 'Although labelled as an exercise, the notes mirror the actual route, hand-off points, and timing for a protected witness transfer.' },
      { title: 'Impact', text: 'Because the exercise mirrors the live arrangement, disclosure would cause extremely grave injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-032',
    difficulty: 'Level 4',
    expectedLabel: 'Protected C',
    title: 'Childcare rider inside business continuity package',
    notes: 'Civil support details elevate severity.',
    fileName: 'l4-032-pc-childcare-rider-continuity-package.docx',
    sections: [
      { title: 'Continuity package', text: 'The package includes a childcare rider that coordinates school pickup, guardian transfer, and shelter intake for a protected household.' },
      { title: 'Assessment', text: 'Those details would cause extremely grave injury if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-033',
    difficulty: 'Level 4',
    expectedLabel: 'Protected C',
    title: 'Generic campus plan with precise escort sequence',
    notes: 'Generic title, severe content.',
    fileName: 'l4-033-pc-generic-campus-plan-escort-sequence.docx',
    sections: [
      { title: 'Campus plan', text: 'Beneath a generic title, the document sets the escort sequence, route, and fallback rooms for moving protected occupants across campus.' },
      { title: 'Why protected C', text: 'The likely operational and personal injury from disclosure is extremely grave.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-034',
    difficulty: 'Level 4',
    expectedLabel: 'Protected C',
    title: 'Annex split across French and English sections',
    notes: 'Language mixing complicates reading, not classification.',
    fileName: 'l4-034-pc-bilingual-annex.docx',
    sections: [
      { title: 'Résumé', text: 'Le document semble administratif au début.' },
      { title: 'Annex', text: 'The annex then specifies the relocation route, safe stop, and transfer timing for protected dependants. Disclosure would cause extremely grave injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-035',
    difficulty: 'Level 4',
    expectedLabel: 'Protected C',
    title: 'Fallback staffing matrix with location aliases',
    notes: 'Aliases still reveal severe continuity structure.',
    fileName: 'l4-035-pc-fallback-staffing-matrix-location-aliases.docx',
    sections: [
      { title: 'Matrix', text: 'Aliases replace site names, but the matrix still shows which protected teams, vehicles, and support children move first during fallback activation.' },
      { title: 'Impact', text: 'The likely injury remains extremely grave.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-036',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Benign logistics note with source verification phrase',
    notes: 'Tiny source cue hidden in a routine note.',
    fileName: 'l4-036-conf-logistics-note-source-phrase.docx',
    sections: [
      { title: 'Logistics note', text: 'Most of the note is about meeting time and coffee service, but one line includes the protected source verification phrase to use on arrival.' },
      { title: 'Handling', text: 'That single line means disclosure would injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-037',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Partner summary with initials instead of target name',
    notes: 'Initials still tied to investigation target.',
    fileName: 'l4-037-conf-partner-summary-initials.docx',
    sections: [
      { title: 'Summary', text: 'The summary uses initials, but makes clear that officers should look for a traveller linked to an investigation target at a border crossing.' },
      { title: 'Assessment', text: 'The operational relevance means the likely injury is to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-038',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Source note hidden inside “research references” appendix',
    notes: 'Disguised source handling detail.',
    fileName: 'l4-038-conf-source-note-research-appendix.docx',
    sections: [
      { title: 'Research references', text: 'Most of the appendix lists open sources, but one paragraph identifies a protected source meeting location and reminder phrase.' },
      { title: 'Impact', text: 'That content would injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-039',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Travel note with covert border cue',
    notes: 'Looks like travel admin, but cues enforcement action.',
    fileName: 'l4-039-conf-travel-note-border-cue.docx',
    sections: [
      { title: 'Travel note', text: 'A “travel note” says a traveller should be quietly referred if a protected source cue appears at primary inspection.' },
      { title: 'Why confidential', text: 'The operational cue injures the national interest if revealed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-040',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Sparse debrief card with source alias only',
    notes: 'Minimal but clearly source-linked.',
    fileName: 'l4-040-conf-debrief-card-source-alias.docx',
    sections: [
      { title: 'Debrief card', text: 'Alias “Birch” confirmed. Use alternate room. Do not repeat prior phrase on recorded line.' },
      { title: 'Assessment', text: 'Even sparse source-handling content would injure the national interest if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'no', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-041',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Port maintenance note with enforcement rendezvous',
    notes: 'Routine surface, live enforcement underneath.',
    fileName: 'l4-041-conf-port-maintenance-rendezvous.docx',
    sections: [
      { title: 'Maintenance note', text: 'The note mentions a late-night rendezvous near the maintenance gate so law enforcement can meet a target-linked vehicle without notice.' },
      { title: 'Impact statement', text: 'Compromise would injure the national interest and the active operation.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-042',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Partner deck with one slide on source-derived trigger',
    notes: 'Single slide changes classification.',
    fileName: 'l4-042-conf-partner-deck-source-trigger.docx',
    sections: [
      { title: 'Partner deck', text: 'Slide 12 states that a protected source trigger should prompt silent secondary review of a named traveller group.' },
      { title: 'Why protected', text: 'That slide alone would injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-043',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Internal briefing with veiled target reference',
    notes: 'Indirect wording still points to a live target.',
    fileName: 'l4-043-conf-veiled-target-reference.docx',
    sections: [
      { title: 'Briefing', text: '“The subject discussed in Tuesday’s call may arrive by coach; treat any contact as target-linked and inform the border security desk.”' },
      { title: 'Assessment', text: 'The indirect wording still supports a Confidential decision because the national interest would be injured by disclosure.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-044',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Source handling instruction buried in travel annex',
    notes: 'Source content hidden under unrelated heading.',
    fileName: 'l4-044-conf-source-instruction-travel-annex.docx',
    sections: [
      { title: 'Travel annex', text: 'One travel annex line states that the protected source should never be met at the same terminal twice in one month.' },
      { title: 'Handling', text: 'That instruction is enough to injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'no', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-045',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'Storm prep deck with hidden classified network recovery path',
    notes: 'Weather framing hides serious national injury.',
    fileName: 'l4-045-secret-storm-prep-network-recovery.docx',
    sections: [
      { title: 'Storm prep deck', text: 'Most slides cover generators and staffing, but one slide shows the classified network recovery path and the secure conference fallback bridge.' },
      { title: 'Impact', text: 'Disclosure would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-046',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'French memo on “liaison readiness” with defence posture detail',
    notes: 'French header, serious national content.',
    fileName: 'l4-046-secret-french-liaison-readiness.docx',
    sections: [
      { title: 'Mémo', text: 'Le mémo décrit quel groupe de liaison de la défense nationale doit se présenter en premier et par quel réseau classifié.' },
      { title: 'Évaluation', text: 'La divulgation causerait un préjudice grave à l’intérêt national.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-047',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'Operations room seating plan with secure bridge numbers',
    notes: 'Seating plan appearance hides secure comms detail.',
    fileName: 'l4-047-secret-seating-plan-secure-bridge.docx',
    sections: [
      { title: 'Seating plan', text: 'The seating plan also identifies which classified network bridge each defence liaison seat must use if the primary room fails.' },
      { title: 'Assessment', text: 'The secure bridge mapping makes this Secret, not routine.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-048',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'Collection staffing note disguised as overtime request',
    notes: 'Overtime theme hides SIGINT readiness.',
    fileName: 'l4-048-secret-overtime-request-collection-staffing.docx',
    sections: [
      { title: 'Overtime request', text: 'The request explains that signals intelligence coverage cannot drop below two analysts without losing a classified reporting line.' },
      { title: 'Why Secret', text: 'The true content would seriously injure the national interest if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-049',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'Maintenance checklist with national defence bridge identifiers',
    notes: 'Checklist format conceals classified relevance.',
    fileName: 'l4-049-secret-maintenance-checklist-bridge-identifiers.docx',
    sections: [
      { title: 'Checklist', text: 'A maintenance checklist names the bridge identifiers used to carry national defence traffic when the secure conference path is down.' },
      { title: 'Impact statement', text: 'Disclosure would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-050',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'Informal handover with SIGINT watch cue words',
    notes: 'Informal style does not lower harm.',
    fileName: 'l4-050-secret-informal-handover-sigint-cues.docx',
    sections: [
      { title: 'Handover', text: '“Keep Birch window live until the backup channel comes up; use the signals intelligence floor if the normal room is dark.”' },
      { title: 'Assessment', text: 'This would seriously injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-051',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'Call list hidden in an evacuation workbook',
    notes: 'Workbook contains secure defence fallback calls.',
    fileName: 'l4-051-secret-call-list-evacuation-workbook.docx',
    sections: [
      { title: 'Workbook', text: 'Most pages discuss fire exits, but one sheet lists the defence liaison call order and the classified network room to use if the main floor is lost.' },
      { title: 'Reason', text: 'That sheet would seriously injure the national interest if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-052',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'Highly edited transcript with secure conference references',
    notes: 'Edited transcript still reveals serious detail.',
    fileName: 'l4-052-secret-edited-transcript-secure-conference.docx',
    sections: [
      { title: 'Transcript fragment', text: 'Even after editing, the fragment names the secure conference fallback, the classified network bridge, and a defence readiness time.' },
      { title: 'Impact', text: 'The fragment remains Secret because disclosure would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-053',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'Secure room whiteboard capture',
    notes: 'Ephemeral capture still serious.',
    fileName: 'l4-053-secret-whiteboard-capture.docx',
    sections: [
      { title: 'Whiteboard capture', text: 'A capture of a secure room whiteboard lists watch teams, classified network bridges, and national defence readiness checkpoints.' },
      { title: 'Classification note', text: 'The capture would seriously injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-054',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Admin binder index with compartment names',
    notes: 'Index seems harmless but reveals compartmented program structure.',
    fileName: 'l4-054-ts-admin-binder-compartment-index.docx',
    sections: [
      { title: 'Index', text: 'The index lists compartment labels, source preservation instructions, and emergency access tabs inside an admin binder.' },
      { title: 'Impact', text: 'The structure alone would cause exceptionally grave injury to the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-055',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Children’s transportation table in special access annex',
    notes: 'Domestic-looking detail, highest-level consequence.',
    fileName: 'l4-055-ts-children-transport-table.docx',
    sections: [
      { title: 'Special access annex', text: 'A table explains how children linked to a special access source are moved, who rides with them, and which cover stories apply.' },
      { title: 'Assessment', text: 'The likely injury from disclosure is exceptionally grave.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-056',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Bilingual note on source network silence',
    notes: 'Short bilingual directive at highest tier.',
    fileName: 'l4-056-ts-bilingual-source-silence.docx',
    sections: [
      { title: 'Directive / Directive', text: 'Suspendre tout contact avec le réseau compartimenté. Do not re-open any source channel without extraction authority.' },
      { title: 'Dommage / Damage', text: 'La divulgation causerait un préjudice exceptionnellement grave à l’intérêt national.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-057',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Courier receipt carrying covert source tags',
    notes: 'Receipt-like format but catastrophic consequence.',
    fileName: 'l4-057-ts-courier-receipt-source-tags.docx',
    sections: [
      { title: 'Receipt', text: 'A small receipt lists sealed packets by source tag and the alternate compartment they move to during emergency courier transfer.' },
      { title: 'Handling', text: 'That is enough to cause exceptionally grave national injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-058',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Calendar hold for compartmented extraction window',
    notes: 'Calendar-style item still highest tier.',
    fileName: 'l4-058-ts-calendar-hold-extraction-window.docx',
    sections: [
      { title: 'Calendar hold', text: 'A calendar hold reserves the extraction window for a compartmented source and lists the standby authority chain.' },
      { title: 'Why top secret', text: 'Disclosure would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-059',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Training exercise using real compartment labels',
    notes: 'Exercise context should not reduce actual sensitivity.',
    fileName: 'l4-059-ts-exercise-real-compartment-labels.docx',
    sections: [
      { title: 'Exercise note', text: 'An exercise sheet uses the real compartment labels and source preservation rules from a live special access program.' },
      { title: 'Assessment', text: 'Because real labels are used, disclosure would cause exceptionally grave injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-060',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Archive transfer list with special access lineage',
    notes: 'Lineage details reveal highest-tier structure.',
    fileName: 'l4-060-ts-archive-transfer-lineage.docx',
    sections: [
      { title: 'Transfer list', text: 'The archive transfer list maps source lineage, compartment ownership, and destruction fallback if the archive is denied.' },
      { title: 'Impact statement', text: 'Compromise would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-061',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Minimal access card for crisis compartment',
    notes: 'Minimal text still catastrophic if exposed.',
    fileName: 'l4-061-ts-minimal-access-card.docx',
    sections: [
      { title: 'Access card', text: 'Cardholders Birch, Cedar, and Flint may enter the crisis compartment only after silence order phase two is declared.' },
      { title: 'Assessment', text: 'The card would cause exceptionally grave national injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-062',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Policy annex with covert source care instructions',
    notes: 'Policy framing hides highest-level source care detail.',
    fileName: 'l4-062-ts-policy-annex-source-care.docx',
    sections: [
      { title: 'Policy annex', text: 'What looks like a policy annex actually describes how to care for covert source dependants during an emergency relocation.' },
      { title: 'Impact', text: 'The likely injury from disclosure is exceptionally grave.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-063',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Email footer carrying compartmented alternate numbers',
    notes: 'Footer text can still be highest sensitivity.',
    fileName: 'l4-063-ts-email-footer-alternate-numbers.docx',
    sections: [
      { title: 'Footer', text: 'If the ordinary path is unavailable, use the compartmented alternate numbers on the reverse side after confirming source silence.' },
      { title: 'Handling', text: 'This footer instruction would cause exceptionally grave injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-064',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Special access custody chain hidden in courier SOP',
    notes: 'Operational SOP contains special access chain.',
    fileName: 'l4-064-ts-custody-chain-courier-sop.docx',
    sections: [
      { title: 'Courier SOP', text: 'A late section in the courier SOP describes the custody chain for special access packets and the source tags they contain.' },
      { title: 'Why highest level', text: 'The custody chain disclosure would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-065',
    difficulty: 'Level 4',
    expectedLabel: 'Public',
    title: 'Client poster with an old internal filename',
    notes: 'Filename noise only.',
    fileName: 'l4-065-public-old-internal-filename-poster.docx',
    sections: [
      { title: 'Poster', text: 'The poster tells clients how to reach a temporary service kiosk during renovations.' },
      { title: 'Filename note', text: 'An internal filename appears in the footer, but no protected content is present.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L4-066',
    difficulty: 'Level 4',
    expectedLabel: 'Public',
    title: 'Final web copy carrying “draft” watermark',
    notes: 'Watermark alone should not change classification.',
    fileName: 'l4-066-public-draft-watermark-web-copy.docx',
    sections: [
      { title: 'Web copy', text: 'The page copy explains holiday hours, accessible entrances, and how to make appointments online.' },
      { title: 'Assessment', text: 'A leftover draft watermark is present, but the content is public.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L4-067',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'Event script with emergency contact line in footer',
    notes: 'Low-impact contact detail in footer.',
    fileName: 'l4-067-pa-event-script-footer-contact.docx',
    sections: [
      { title: 'Script', text: 'The public event script ends with a footer naming an organizer and their mobile number for volunteer call-backs.' },
      { title: 'Impact', text: 'The footer creates limited privacy sensitivity and supports Protected A.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-068',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Travel summary that quietly reveals treatment schedule',
    notes: 'Indirect health disclosure plus money.',
    fileName: 'l4-068-pb-travel-summary-treatment-schedule.docx',
    sections: [
      { title: 'Summary', text: 'A travel summary lists recurring clinic dates, reimbursement deposits, and reduced-hours coding without using overt medical language.' },
      { title: 'Classification note', text: 'The indirect wording still creates serious injury if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-069',
    difficulty: 'Level 4',
    expectedLabel: 'Protected C',
    title: 'Exercise workbook with real family relocation sequencing',
    notes: 'Real sequencing keeps it at Protected C.',
    fileName: 'l4-069-pc-exercise-workbook-family-sequencing.docx',
    sections: [
      { title: 'Workbook', text: 'The workbook is labelled as an exercise but includes the actual order for relocating a protected family and their escorts.' },
      { title: 'Assessment', text: 'Disclosure would cause extremely grave injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-070',
    difficulty: 'Level 4',
    expectedLabel: 'Confidential',
    title: 'Travel desk note with source-arranged meeting point',
    notes: 'Travel framing hides source handling.',
    fileName: 'l4-070-conf-travel-desk-source-meeting.docx',
    sections: [
      { title: 'Desk note', text: 'A travel desk note identifies a meeting point arranged through a protected source and warns officers not to repeat the phrase aloud.' },
      { title: 'Reason', text: 'Disclosure would injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-071',
    difficulty: 'Level 4',
    expectedLabel: 'Secret',
    title: 'Public safety checklist with defence bridge appendix',
    notes: 'Mixed framing, Secret substance.',
    fileName: 'l4-071-secret-public-safety-checklist-defence-appendix.docx',
    sections: [
      { title: 'Checklist', text: 'Most of the checklist covers generic preparedness, but Appendix E maps the defence bridge and classified network fallback for secure coordination.' },
      { title: 'Impact', text: 'The appendix would seriously injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-072',
    difficulty: 'Level 4',
    expectedLabel: 'Top Secret',
    title: 'Source legend transfer note hidden in drafting comments',
    notes: 'Comment text alone is enough for Top Secret.',
    fileName: 'l4-072-ts-source-legend-transfer-comments.docx',
    sections: [
      { title: 'Drafting comments', text: 'One comment instructs editors not to mention where source legends transfer if the compartmented archive is split during extraction.' },
      { title: 'Assessment', text: 'That single instruction would cause exceptionally grave injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-073',
    difficulty: 'Level 4',
    expectedLabel: 'Protected B',
    title: 'Sheet of “temporary fixes” for payroll and access',
    notes: 'Informal heading, serious content.',
    fileName: 'l4-073-pb-temporary-fixes-payroll-access.docx',
    sections: [
      { title: 'Temporary fixes', text: 'The sheet lists direct deposit fixes, salary code adjustments, and a temporary credential path to access the employee record.' },
      { title: 'Handling', text: 'The likely injury from disclosure is serious.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L4-074',
    difficulty: 'Level 4',
    expectedLabel: 'Protected A',
    title: 'Poster proof with volunteer call tree in notes pane',
    notes: 'Notes pane adds only low-level sensitivity.',
    fileName: 'l4-074-pa-poster-proof-call-tree-notes.docx',
    sections: [
      { title: 'Poster proof', text: 'The visible poster is public, but the notes pane lists volunteer call order and mobile numbers for setup delays.' },
      { title: 'Impact', text: 'The notes support Protected A because injury would be limited.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L4-075',
    difficulty: 'Level 4',
    expectedLabel: 'Public',
    title: 'Final all-clear notice after site disruption',
    notes: 'Closes the corpus with a clean public case after hard tiers.',
    fileName: 'l4-075-public-all-clear-notice.docx',
    sections: [
      { title: 'All-clear notice', text: 'Service has resumed at normal counters, all entrances are open, and clients may proceed without further changes.' },
      { title: 'Release', text: 'The notice is cleared for broad public distribution.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  })
]
