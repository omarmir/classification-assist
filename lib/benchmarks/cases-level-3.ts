import type { BenchmarkCase } from './types'
import { createBenchmarkCase, reviewedAnswers } from './factory'

export const level3Cases: BenchmarkCase[] = [
  createBenchmarkCase({
    id: 'L3-001',
    difficulty: 'Level 3',
    expectedLabel: 'Public',
    title: 'Community bulletin with internal drafting history removed',
    notes: 'Looks operational but final text is public.',
    fileName: 'l3-001-public-community-bulletin.docx',
    sections: [
      { title: 'Final bulletin', text: 'The final bulletin tells residents where to find flood sandbags, which roads remain open, and where to phone for non-urgent service updates.' },
      { title: 'Release approval', text: 'A note at the end confirms that drafting comments were removed and the version is ready for public distribution.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L3-002',
    difficulty: 'Level 3',
    expectedLabel: 'Public',
    title: 'FAQ on temporary waiting room relocation',
    notes: 'Contains operational detail but no protected content.',
    fileName: 'l3-002-public-waiting-room-faq.docx',
    sections: [
      { title: 'Questions', text: 'Clients are told that the waiting room moved to the second floor because of ventilation work and that appointments continue as scheduled.' },
      { title: 'Answers', text: 'The FAQ includes transit directions, elevator access, and a public phone number for rescheduling.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L3-003',
    difficulty: 'Level 3',
    expectedLabel: 'Public',
    title: 'Web copy for regional services week',
    notes: 'Multi-section but entirely public.',
    fileName: 'l3-003-public-services-week.docx',
    sections: [
      { title: 'Overview', text: 'Regional Services Week will feature open counters, guided tours, and drop-in information sessions across the downtown campus.' },
      { title: 'Campaign assets', text: 'Suggested social copy, poster text, and a media contact line are included for public release.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L3-004',
    difficulty: 'Level 3',
    expectedLabel: 'Public',
    title: 'Revised agenda for bilingual information town hall',
    notes: 'Bilingual but benign.',
    fileName: 'l3-004-public-bilingual-town-hall.docx',
    sections: [
      { title: 'Agenda', text: 'Welcome remarks, service overview, questions from the public, and closing statements are listed in English and French.' },
      { title: 'Handling', text: 'This agenda may be posted online and printed at the venue.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L3-005',
    difficulty: 'Level 3',
    expectedLabel: 'Public',
    title: 'Lessons learned excerpt for public website',
    notes: 'Derived from internal material but sanitized.',
    fileName: 'l3-005-public-lessons-learned-excerpt.docx',
    sections: [
      { title: 'Excerpt', text: 'The excerpt lists generic lessons from a service redesign project: earlier signage, simpler appointment flows, and better queue messaging.' },
      { title: 'Publication decision', text: 'The excerpt was cleared for the website after personal and operationally sensitive details were removed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L3-006',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Public event plan with private volunteer appendix',
    notes: 'Main activity is public but appendix creates low-level protection need.',
    fileName: 'l3-006-pa-event-plan-volunteer-appendix.docx',
    sections: [
      { title: 'Event plan', text: 'The first section describes a public service fair schedule and room assignments.' },
      { title: 'Appendix A', text: 'Appendix A lists volunteer phone numbers, arrival times, and preferred contact methods for last-minute changes.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-007',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'After-action note on delayed appointments',
    notes: 'Contains client identifiers but no serious harm.',
    fileName: 'l3-007-pa-delayed-appointments.docx',
    sections: [
      { title: 'Summary', text: 'Managers reviewed a service disruption and attached the names and callback numbers of clients who left before their appointments resumed.' },
      { title: 'Assessment', text: 'The likely injury is limited to inconvenience and modest privacy concerns.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-008',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Branch move package with accessibility notes',
    notes: 'Aggregates minor personal details.',
    fileName: 'l3-008-pa-branch-move-package.docx',
    sections: [
      { title: 'Move package', text: 'The package assigns temporary desks, lists staff extension changes, and notes who requires ergonomic chairs near the elevators.' },
      { title: 'Handling note', text: 'The package should stay internal because it includes modest personal information, but serious injury is not expected.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-009',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Mentoring program digest with personal bios',
    notes: 'Short employee bios and preferences only.',
    fileName: 'l3-009-pa-mentoring-digest.docx',
    sections: [
      { title: 'Digest', text: 'The digest includes short employee bios, mentoring interests, and preferred meeting times for a branch matching exercise.' },
      { title: 'Impact', text: 'Disclosure would be undesirable because it reveals personal details, but the likely injury remains low.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-010',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Draft sign-in flow for ministerial visit',
    notes: 'Logistics plus names, not more.',
    fileName: 'l3-010-pa-ministerial-signin-flow.docx',
    sections: [
      { title: 'Flow', text: 'The draft sign-in flow explains where visitors wait, who escorts them, and which attendees requested pronunciation cues or mobility support.' },
      { title: 'Rationale', text: 'The logistics are not for public release because they identify individuals, but the likely injury is limited.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-011',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Town hall registration extract with meal preferences',
    notes: 'Small personal details only.',
    fileName: 'l3-011-pa-meal-preferences.docx',
    sections: [
      { title: 'Extract', text: 'The extract lists registrants, dietary restrictions, and emergency contact phone numbers for a staff town hall.' },
      { title: 'Use', text: 'The information should stay with organizers because of limited personal sensitivity.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-012',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Client services rota with direct extensions',
    notes: 'Operational routing information with low injury.',
    fileName: 'l3-012-pa-client-services-rota.docx',
    sections: [
      { title: 'Rota', text: 'Supervisors mapped which officers take overflow calls and included direct extensions and alternate desk locations for the week.' },
      { title: 'Handling', text: 'Release would be inconvenient and reveal internal contact details, but the likely injury is not serious.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-013',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Draft participant seating for stakeholder advisory board',
    notes: 'Named attendees and mobility notes only.',
    fileName: 'l3-013-pa-advisory-board-seating.docx',
    sections: [
      { title: 'Seating draft', text: 'The seating draft names attendees and notes who requires sight lines to an interpreter or nearby exits.' },
      { title: 'Assessment', text: 'The document creates modest privacy concerns but no serious injury if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-014',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Temporary access roster for maintenance contractors',
    notes: 'Contractor identities and windows only.',
    fileName: 'l3-014-pa-maintenance-contractor-roster.docx',
    sections: [
      { title: 'Roster', text: 'The roster records contractor names, vehicle plates, escort windows, and work locations for maintenance inside a public building.' },
      { title: 'Impact', text: 'It should not be publicly released, but the likely injury if it leaked would remain limited.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-015',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Internal notes on staff volunteer availability',
    notes: 'Benign, low-impact personal scheduling.',
    fileName: 'l3-015-pa-volunteer-availability.docx',
    sections: [
      { title: 'Availability notes', text: 'The branch coordinator lists who volunteered for weekend events and which employees asked not to be scheduled after 18:00.' },
      { title: 'Protection note', text: 'The notes carry limited personal sensitivity and support a Protected A decision.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-016',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Case conference summary with accommodation and compensation threads',
    notes: 'Crosses health and financial sensitivity.',
    fileName: 'l3-016-pb-case-conference-summary.docx',
    sections: [
      { title: 'Conference summary', text: 'A case conference linked an employee medical accommodation, reduced-hours salary adjustment, and direct deposit correction in one summary.' },
      { title: 'Expected harm', text: 'The combined information would cause serious personal and financial injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-017',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Wellness dashboard with named restrictions',
    notes: 'Dashboard format hides serious health content.',
    fileName: 'l3-017-pb-wellness-dashboard.docx',
    sections: [
      { title: 'Dashboard', text: 'Managers use a dashboard that lists each employee by name, return date, accommodation restriction, and whether a medical note has been renewed.' },
      { title: 'Protection rationale', text: 'The dashboard is operationally useful but clearly contains health record information that belongs at Protected B.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-018',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Narrative of payroll cleanup after medical leave',
    notes: 'Mixed narrative with serious cues.',
    fileName: 'l3-018-pb-payroll-cleanup-medical-leave.docx',
    sections: [
      { title: 'Narrative', text: 'Compensation described how a medical leave extension triggered a salary correction, overpayment recovery, and direct deposit update.' },
      { title: 'Impact', text: 'Both the health and financial elements support a serious injury threshold.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-019',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Credential incident memo tied to executive office',
    notes: 'Credential and identity detail in prose.',
    fileName: 'l3-019-pb-executive-credential-incident.docx',
    sections: [
      { title: 'Incident memo', text: 'The memo records a lost token, password reset, and alternate credential process for an executive office account during travel.' },
      { title: 'Assessment', text: 'Even without a form, the credential content creates serious injury risk and justifies Protected B.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-020',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Compassionate leave tracker with diagnosis shorthand',
    notes: 'Soft wording but serious health implications.',
    fileName: 'l3-020-pb-compassionate-leave-tracker.docx',
    sections: [
      { title: 'Tracker', text: 'A leave tracker uses shorthand to identify employees on compassionate leave, return plans, and clinician restrictions on duties.' },
      { title: 'Classification note', text: 'Despite the shorthand, the content would seriously affect the employees if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-021',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Investigation into repeated payroll deposit failures',
    notes: 'Multiple salary and bank records.',
    fileName: 'l3-021-pb-payroll-deposit-failures.docx',
    sections: [
      { title: 'Investigation note', text: 'Finance traced repeated payroll deposit failures by comparing old and new bank account values and salary timing for three employees.' },
      { title: 'Harm assessment', text: 'The material could cause serious financial harm and should be protected accordingly.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-022',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Labour briefing with annexed employee file extracts',
    notes: 'Annex hides the sensitive content.',
    fileName: 'l3-022-pb-labour-briefing-annex.docx',
    sections: [
      { title: 'Briefing', text: 'The briefing note itself is generic, but Annex B reproduces personnel file extracts and the grievance chronology under review.' },
      { title: 'Decision support', text: 'Taken together the note and annex support a Protected B classification because disclosure would seriously affect the employee and process.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-023',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Regional accommodations board running notes',
    notes: 'Meeting notes, not forms, but still health-sensitive.',
    fileName: 'l3-023-pb-accommodations-board-notes.docx',
    sections: [
      { title: 'Running notes', text: 'The board notes discuss which employees need medical accommodation, when diagnoses were updated, and what equipment was approved.' },
      { title: 'Assessment', text: 'The notes clearly reveal health record information and carry serious injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-024',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Back-office cheat sheet for compensation errors',
    notes: 'Looks informal but contains serious financial data.',
    fileName: 'l3-024-pb-compensation-cheat-sheet.docx',
    sections: [
      { title: 'Cheat sheet', text: 'Analysts compiled examples showing how to match salary periods to bank account corrections and direct deposit reversal requests.' },
      { title: 'Why protected', text: 'The examples expose serious financial data patterns and justify Protected B treatment.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-025',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Combined return-to-work and network access memo',
    notes: 'Health and credential risk in one item.',
    fileName: 'l3-025-pb-return-to-work-access-memo.docx',
    sections: [
      { title: 'Memo', text: 'The memo discusses a reduced-hours return, medical accommodation, and the temporary credential process needed because the employee account expired.' },
      { title: 'Risk', text: 'Disclosure would create serious injury through both health exposure and credential misuse.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-026',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Medical travel claim digest',
    notes: 'Narrative summary with health and finance.',
    fileName: 'l3-026-pb-medical-travel-digest.docx',
    sections: [
      { title: 'Digest', text: 'The digest explains why an employee received medical travel reimbursement and links the claim to a salary-coded direct deposit.' },
      { title: 'Impact statement', text: 'The content would cause serious injury if released because it mixes health circumstances and financial details.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-027',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Executive note on staffing complaint and employee id',
    notes: 'Complaint wording masks serious consequence.',
    fileName: 'l3-027-pb-executive-staffing-note.docx',
    sections: [
      { title: 'Executive note', text: 'An executive note refers to a staffing complaint, attaches the employee id, and summarises management concerns before an interview.' },
      { title: 'Classification note', text: 'Although brief, disclosure could seriously affect the employee and therefore belongs at Protected B.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-028',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Temporary access workaround for HR account',
    notes: 'Credential note tied to personnel records.',
    fileName: 'l3-028-pb-hr-account-workaround.docx',
    sections: [
      { title: 'Workaround', text: 'IT staff documented a temporary password and token workaround so an HR advisor could reach a personnel file before payroll close.' },
      { title: 'Assessment', text: 'The workaround carries credential and personnel risk that supports Protected B.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-029',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Manager summary of repeated health-related absences',
    notes: 'Summary format, serious content.',
    fileName: 'l3-029-pb-health-absence-summary.docx',
    sections: [
      { title: 'Summary', text: 'A manager summarized repeated health-related absences, clinician restrictions, and accommodation next steps for a staffing review.' },
      { title: 'Handling', text: 'The content remains health-sensitive and would cause serious injury if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-030',
    difficulty: 'Level 3',
    expectedLabel: 'Protected C',
    title: 'Annex on witness family regrouping after secure transfer',
    notes: 'Family regrouping details elevate severity.',
    fileName: 'l3-030-pc-witness-family-regrouping.docx',
    sections: [
      { title: 'Annex', text: 'The annex sets out regrouping locations, school pickup transfers, and decoy timing after a secure witness transfer.' },
      { title: 'Consequences', text: 'Disclosure would create extremely grave injury for the protected family and operation.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-031',
    difficulty: 'Level 3',
    expectedLabel: 'Protected C',
    title: 'Business continuity note with layered fallback movements',
    notes: 'Operational movements, not just generic continuity.',
    fileName: 'l3-031-pc-layered-fallback-movements.docx',
    sections: [
      { title: 'Continuity note', text: 'The note names the order in which emergency staff, mobile systems, and family supports move if a hidden operations site must be abandoned.' },
      { title: 'Why protected C', text: 'The level of detail would cause extremely grave injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-032',
    difficulty: 'Level 3',
    expectedLabel: 'Protected C',
    title: 'Secure route comparison for protected person movement',
    notes: 'Route comparison reveals severe risk.',
    fileName: 'l3-032-pc-secure-route-comparison.docx',
    sections: [
      { title: 'Comparison', text: 'Analysts compare three secure routes, pickup points, and escort configurations for moving a protected person between residences.' },
      { title: 'Risk', text: 'If disclosed, the information would create extremely grave injury to the individual and support operation.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-033',
    difficulty: 'Level 3',
    expectedLabel: 'Protected C',
    title: 'Support matrix for emergency witness schooling changes',
    notes: 'Civilian-looking topic but severe consequence.',
    fileName: 'l3-033-pc-witness-schooling-matrix.docx',
    sections: [
      { title: 'Matrix', text: 'The matrix coordinates school transfer timing, guardian hand-off, and shelter intake for children connected to a protected witness program.' },
      { title: 'Assessment', text: 'The likely injury from disclosure is extremely grave.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-034',
    difficulty: 'Level 3',
    expectedLabel: 'Protected C',
    title: 'Regional relocation rehearsal note',
    notes: 'Exercise note still exposes severe fallback details.',
    fileName: 'l3-034-pc-relocation-rehearsal-note.docx',
    sections: [
      { title: 'Rehearsal note', text: 'A rehearsal note lists who moves first, where spare vehicles wait, and how children are transferred if the relocation plan is activated.' },
      { title: 'Harm statement', text: 'The note would cause extremely grave injury if compromised because it mirrors the live plan.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-035',
    difficulty: 'Level 3',
    expectedLabel: 'Protected C',
    title: 'Continuity package for hidden service node',
    notes: 'Critical service node continuity.',
    fileName: 'l3-035-pc-hidden-service-node.docx',
    sections: [
      { title: 'Package', text: 'The package identifies the hidden service node, the order for activating backup clerks, and how to transport sealed files under escort.' },
      { title: 'Impact', text: 'The resulting operational injury from disclosure would be extremely grave.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-036',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Sanitized project note with live source annex',
    notes: 'Main note looks harmless, annex drives classification.',
    fileName: 'l3-036-conf-sanitized-note-source-annex.docx',
    sections: [
      { title: 'Project note', text: 'The front page describes partner coordination in general terms.' },
      { title: 'Annex C', text: 'Annex C cites a protected source, the next debriefing location, and how that reporting links to an investigation target.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-037',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Travel briefing for port watch team',
    notes: 'Port watch team actions linked to target.',
    fileName: 'l3-037-conf-port-watch-briefing.docx',
    sections: [
      { title: 'Briefing', text: 'Officers are told to watch for a traveller who may be linked to an investigation target described in earlier intelligence.' },
      { title: 'Reason', text: 'The operational relevance means disclosure would injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-038',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Partner matrix with source-derived cueing',
    notes: 'Cueing from a protected source.',
    fileName: 'l3-038-conf-partner-matrix-source-cueing.docx',
    sections: [
      { title: 'Matrix', text: 'The matrix tells partner units which cues from a protected source should trigger extra border questioning.' },
      { title: 'Handling', text: 'Compromise would injure the national interest by revealing source contribution and enforcement intent.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-039',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Backgrounder on suspicious marine arrival',
    notes: 'Operationally relevant target backgrounder.',
    fileName: 'l3-039-conf-marine-arrival-backgrounder.docx',
    sections: [
      { title: 'Backgrounder', text: 'The backgrounder links a suspicious marine arrival to an investigation target and includes source-derived context for the receiving unit.' },
      { title: 'Assessment', text: 'Release would injure the national interest and compromise a live operational lead.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-040',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Field log with debrief shorthand',
    notes: 'Sparse, but source-sensitive.',
    fileName: 'l3-040-conf-field-log-debrief-shorthand.docx',
    sections: [
      { title: 'Field log', text: 'The field log uses shorthand to record a protected source debrief and the next meeting cue for an intelligence officer.' },
      { title: 'Impact statement', text: 'The shorthand still reveals source handling and would injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-041',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Target support chain diagram',
    notes: 'Investigative relationships below Secret threshold.',
    fileName: 'l3-041-conf-target-support-chain-diagram.docx',
    sections: [
      { title: 'Diagram', text: 'A simple diagram shows how an investigation target may be supported by contacts at a port and a border crossing.' },
      { title: 'Handling note', text: 'Disclosure would injure the national interest by exposing a live investigative hypothesis.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-042',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Short note on source meeting relocation',
    notes: 'Meeting relocation still source-sensitive.',
    fileName: 'l3-042-conf-source-meeting-relocation.docx',
    sections: [
      { title: 'Relocation note', text: 'The officer relocated a protected source meeting and changed the verification phrase after a possible surveillance concern.' },
      { title: 'Assessment', text: 'Exposure would injure the national interest by revealing the handling of a source.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-043',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Enforcement note on target-linked baggage exam',
    notes: 'Border security operations but not higher ladder.',
    fileName: 'l3-043-conf-baggage-exam-note.docx',
    sections: [
      { title: 'Enforcement note', text: 'The note directs officers to examine baggage connected to a traveller linked by intelligence to an investigation target.' },
      { title: 'Harm statement', text: 'Compromise would injure the national interest by alerting subjects to enforcement interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-044',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Protected source handling reminder card',
    notes: 'Minimal text but sensitive meaning.',
    fileName: 'l3-044-conf-source-handling-card.docx',
    sections: [
      { title: 'Reminder card', text: 'A card reminds officers never to repeat the protected source verification phrase over recorded lines.' },
      { title: 'Why confidential', text: 'Even this small item would injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'no', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-045',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'Secure operations note with hidden classified network annex',
    notes: 'Secret because annex exposes secure comms.',
    fileName: 'l3-045-secret-hidden-network-annex.docx',
    sections: [
      { title: 'Operations note', text: 'The front note discusses an overnight readiness review in generic terms.' },
      { title: 'Annex D', text: 'Annex D lists the classified network bridge, secure conference fallback, and the national defence teams who would switch first.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-046',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'Readiness digest for collection outage tolerance',
    notes: 'Operational digest implies serious national harm.',
    fileName: 'l3-046-secret-collection-outage-tolerance.docx',
    sections: [
      { title: 'Digest', text: 'The digest measures how long signals intelligence coverage can be lost before national reporting fails and which teams bridge the gap.' },
      { title: 'Impact', text: 'This would seriously injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-047',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'National defence fallback routing for storm outage',
    notes: 'Storm framing hides Secret content.',
    fileName: 'l3-047-secret-storm-fallback-routing.docx',
    sections: [
      { title: 'Routing note', text: 'During a severe storm, national defence traffic would shift over a secondary classified network path using a restricted call sequence.' },
      { title: 'Harm note', text: 'The fallback routing would seriously injure the national interest if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-048',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'Collection desk handover with staffing shortage note',
    notes: 'Staffing note masks SIGINT detail.',
    fileName: 'l3-048-secret-desk-handover-shortage.docx',
    sections: [
      { title: 'Handover', text: 'The handover records which signals intelligence streams remain active despite a staffing shortage and how classified network access is preserved.' },
      { title: 'Reason', text: 'Disclosure would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-049',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'Secure room occupancy instructions during posture shift',
    notes: 'Facility occupancy tied to defence posture.',
    fileName: 'l3-049-secret-secure-room-occupancy.docx',
    sections: [
      { title: 'Instructions', text: 'The secure room occupancy instructions say which national defence teams enter first and which classified network terminals they use.' },
      { title: 'Assessment', text: 'The details would seriously injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-050',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'Bridge restoration timeline for secure conference failure',
    notes: 'Technical timeline but serious content.',
    fileName: 'l3-050-secret-bridge-restoration-timeline.docx',
    sections: [
      { title: 'Timeline', text: 'The timeline explains how engineers restore the secure conference bridge on the classified network after a failed update.' },
      { title: 'Impact', text: 'Compromise would seriously injure the national interest by showing recovery dependencies.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-051',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'Readiness fragment with compartmented phrase redacted',
    notes: 'Still Secret even after partial redaction.',
    fileName: 'l3-051-secret-redacted-fragment.docx',
    sections: [
      { title: 'Fragment', text: 'A partially redacted fragment still shows national defence readiness timing and a classified network fallback room number.' },
      { title: 'Classification note', text: 'Even after redaction, the remaining data would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-052',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'Signals watch occupancy card',
    notes: 'Sparse but clearly Secret.',
    fileName: 'l3-052-secret-signals-watch-occupancy.docx',
    sections: [
      { title: 'Occupancy card', text: 'The card states how many analysts must remain on the signals watch floor and which backup collection path they hold.' },
      { title: 'Handling', text: 'Compromise would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-053',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'Defence readiness margin calculation note',
    notes: 'Analytical note, still Secret.',
    fileName: 'l3-053-secret-readiness-margin-note.docx',
    sections: [
      { title: 'Calculation note', text: 'Analysts calculated how many minutes of delay national defence teams can absorb before a readiness margin is lost.' },
      { title: 'Expected injury', text: 'The note would seriously injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-054',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Compartmented continuity memo with innocent header',
    notes: 'Header looks generic but content is highest sensitivity.',
    fileName: 'l3-054-ts-innocent-header-continuity-memo.docx',
    sections: [
      { title: 'Continuity memo', text: 'Beneath a generic continuity header, the memo states how a compartmented source program is sustained if primary handlers disappear.' },
      { title: 'Damage statement', text: 'Compromise would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-055',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Special access extraction board with family dependencies',
    notes: 'Highest-level source protection plus dependants.',
    fileName: 'l3-055-ts-extraction-board.docx',
    sections: [
      { title: 'Extraction board', text: 'The board links source extraction timing to dependant moves and compartmented transport access under crisis conditions.' },
      { title: 'Assessment', text: 'The blend of source and family dependencies would cause exceptionally grave national injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-056',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Covert liaison fallback strip hidden in admin binder',
    notes: 'Buried item, still top category.',
    fileName: 'l3-056-ts-liaison-fallback-strip.docx',
    sections: [
      { title: 'Admin binder insert', text: 'A small insert gives the fallback sequence for covert liaison and compartmented source preservation if normal channels fail.' },
      { title: 'Why highest level', text: 'Exposure would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-057',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Strategic watch memo with compartmented cue words',
    notes: 'Cue words imply highest-tier program.',
    fileName: 'l3-057-ts-strategic-watch-cue-words.docx',
    sections: [
      { title: 'Watch memo', text: 'The watch memo uses compartmented cue words to identify when a strategic source network must shift to emergency posture.' },
      { title: 'Risk', text: 'Compromise would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-058',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Compartmented courier matrix for crisis relocation',
    notes: 'Courier matrix tied to special access program.',
    fileName: 'l3-058-ts-courier-matrix-crisis-relocation.docx',
    sections: [
      { title: 'Courier matrix', text: 'The matrix identifies who may courier compartmented material and how source records are moved during crisis relocation.' },
      { title: 'Handling', text: 'Unauthorized disclosure would cause exceptionally grave national injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-059',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Contingency note on preserving source legends',
    notes: 'Exceptional harm due to source legend exposure.',
    fileName: 'l3-059-ts-preserving-source-legends.docx',
    sections: [
      { title: 'Contingency note', text: 'The note explains how to preserve compartmented source legends if a secure location is lost and handlers must split.' },
      { title: 'Impact', text: 'The consequences of disclosure would be exceptionally grave.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-060',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Emergency instructions for source archive burn-down',
    notes: 'High-end archive protection action.',
    fileName: 'l3-060-ts-source-archive-burndown.docx',
    sections: [
      { title: 'Instructions', text: 'Emergency instructions tell archivists how to separate and destroy compartmented source material if the archive must be denied.' },
      { title: 'Damage statement', text: 'The instructions would cause exceptionally grave injury to the national interest if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-061',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Compartmented source network silence order',
    notes: 'Short order, highest impact.',
    fileName: 'l3-061-ts-source-network-silence-order.docx',
    sections: [
      { title: 'Silence order', text: 'Handlers must impose a silence order across a compartmented source network if a trigger event occurs in the next forty-eight hours.' },
      { title: 'Assessment', text: 'Disclosure would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-062',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Family-linked extraction rider for special access source',
    notes: 'Family dimension heightens already highest sensitivity.',
    fileName: 'l3-062-ts-family-linked-extraction-rider.docx',
    sections: [
      { title: 'Rider', text: 'The rider explains how dependants of a special access source are moved alongside the source during emergency extraction.' },
      { title: 'Restriction', text: 'This would cause exceptionally grave injury to the national interest if compromised.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-063',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Strategic source vault opening sequence',
    notes: 'Compartmented vault sequence.',
    fileName: 'l3-063-ts-source-vault-opening-sequence.docx',
    sections: [
      { title: 'Opening sequence', text: 'The sequence names the conditions under which a strategic source vault may be opened and which compartments must remain sealed.' },
      { title: 'Why top secret', text: 'Exposure would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-064',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Compartmented courier fallback path with source tags',
    notes: 'Source tags reveal highest-level program structure.',
    fileName: 'l3-064-ts-courier-fallback-source-tags.docx',
    sections: [
      { title: 'Fallback path', text: 'A courier fallback path lists source tags and alternate compartment labels for moving highly restricted material during an outage.' },
      { title: 'Expected injury', text: 'Compromise would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-065',
    difficulty: 'Level 3',
    expectedLabel: 'Public',
    title: 'Final notice on parking lot resurfacing',
    notes: 'Simple public case in contextual tier.',
    fileName: 'l3-065-public-parking-resurfacing.docx',
    sections: [
      { title: 'Notice', text: 'The parking lot will be resurfaced over two weekends and visitors should use the temporary west entrance.' },
      { title: 'Distribution', text: 'This final notice may be posted publicly.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L3-066',
    difficulty: 'Level 3',
    expectedLabel: 'Public',
    title: 'Open house caption set for social media',
    notes: 'Public campaign asset.',
    fileName: 'l3-066-public-open-house-captions.docx',
    sections: [
      { title: 'Caption set', text: 'Suggested captions promote an open house, accessible entrances, and online registration for a public information session.' },
      { title: 'Use', text: 'The set is approved for public social media channels.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L3-067',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Internal note on volunteer no-shows',
    notes: 'Low-sensitivity named list.',
    fileName: 'l3-067-pa-volunteer-no-shows.docx',
    sections: [
      { title: 'Internal note', text: 'The coordinator noted which volunteers did not arrive and recorded their phone numbers for follow-up.' },
      { title: 'Handling', text: 'The likely injury from disclosure is limited.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-068',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Personal case digest for attendance and treatment',
    notes: 'Serious health sensitivity.',
    fileName: 'l3-068-pb-attendance-treatment-digest.docx',
    sections: [
      { title: 'Digest', text: 'The digest explains that attendance issues are linked to treatment cycles and includes accommodation dates and employee id references.' },
      { title: 'Assessment', text: 'The content is sensitive enough to cause serious injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-069',
    difficulty: 'Level 3',
    expectedLabel: 'Protected C',
    title: 'Branch continuity worksheet with escort pairings',
    notes: 'Extremely grave operational injury case.',
    fileName: 'l3-069-pc-continuity-escort-pairings.docx',
    sections: [
      { title: 'Worksheet', text: 'The worksheet pairs escorts, vehicles, and alternate locations for relocating a protected service cell during a hostile event.' },
      { title: 'Impact', text: 'The likely injury if exposed would be extremely grave.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-070',
    difficulty: 'Level 3',
    expectedLabel: 'Confidential',
    title: 'Partner heads-up on source-linked traveller',
    notes: 'Compact Confidential example.',
    fileName: 'l3-070-conf-source-linked-traveller.docx',
    sections: [
      { title: 'Heads-up', text: 'A traveller linked by a protected source to an investigation target may present at a regional checkpoint tomorrow.' },
      { title: 'Use note', text: 'The heads-up would injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-071',
    difficulty: 'Level 3',
    expectedLabel: 'Secret',
    title: 'Partial handover note for secure watch floor',
    notes: 'Short but clearly Secret.',
    fileName: 'l3-071-secret-secure-watch-floor.docx',
    sections: [
      { title: 'Handover note', text: 'Keep two analysts on the secure watch floor until the classified network bridge is restored and the defence liaison confirms posture.' },
      { title: 'Restriction', text: 'Disclosure would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-072',
    difficulty: 'Level 3',
    expectedLabel: 'Top Secret',
    title: 'Compartmented direction on preserving source legends',
    notes: 'Short directive at highest level.',
    fileName: 'l3-072-ts-preserve-source-legends.docx',
    sections: [
      { title: 'Direction', text: 'Preserve source legends even if the compartmented handling chain is disrupted; split records only under extraction authority.' },
      { title: 'Damage statement', text: 'Exposure would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-073',
    difficulty: 'Level 3',
    expectedLabel: 'Protected B',
    title: 'Accommodation board summary with payroll impact',
    notes: 'Final PB case in this tier.',
    fileName: 'l3-073-pb-accommodation-board-payroll-impact.docx',
    sections: [
      { title: 'Summary', text: 'The board summary notes which accommodations affect pay codes, reduced hours, and direct deposit timing for active cases.' },
      { title: 'Classification note', text: 'The mix of medical and financial content supports a Protected B outcome.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L3-074',
    difficulty: 'Level 3',
    expectedLabel: 'Protected A',
    title: 'Internal escort table for community delegates',
    notes: 'Low-level personal logistics.',
    fileName: 'l3-074-pa-community-delegate-escort-table.docx',
    sections: [
      { title: 'Escort table', text: 'The table assigns escorts to community delegates and notes who asked for quiet waiting areas or translation support.' },
      { title: 'Handling', text: 'The likely injury remains limited, so Protected A is appropriate.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L3-075',
    difficulty: 'Level 3',
    expectedLabel: 'Public',
    title: 'Public script for service outage callback message',
    notes: 'Closes tier with public content.',
    fileName: 'l3-075-public-outage-callback-script.docx',
    sections: [
      { title: 'Callback script', text: 'Clients calling during the outage should be told when service will resume and where to find alternate public channels.' },
      { title: 'Distribution', text: 'The script is approved for public use by call centre agents.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  })
]
