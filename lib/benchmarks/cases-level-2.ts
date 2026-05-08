import type { BenchmarkCase } from './types'
import { createBenchmarkCase, reviewedAnswers } from './factory'

export const level2Cases: BenchmarkCase[] = [
  createBenchmarkCase({
    id: 'L2-001',
    difficulty: 'Level 2',
    expectedLabel: 'Public',
    title: 'Draft speaking points for community flood update',
    notes: 'Public-facing communication without protected details.',
    fileName: 'l2-001-public-flood-speaking-points.docx',
    sections: [
      { title: 'Purpose', text: 'These speaking points support a regional manager appearing at a community meeting on seasonal flood preparations and sandbag pickup locations.' },
      { title: 'Use', text: 'The text is intended for public delivery, media responses, and publication on the municipal partner page once approved.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L2-002',
    difficulty: 'Level 2',
    expectedLabel: 'Public',
    title: 'Event checklist for newcomer services fair',
    notes: 'Operational planning but clearly releasable.',
    fileName: 'l2-002-public-newcomer-fair.docx',
    sections: [
      { title: 'Checklist', text: 'The checklist covers booth signage, translated pamphlets, and volunteer arrival times for a newcomer services fair at the civic hall.' },
      { title: 'Audience', text: 'The document may be shared with partner organizations and posted on the event microsite as needed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L2-003',
    difficulty: 'Level 2',
    expectedLabel: 'Public',
    title: 'Transit detour note for service counter clients',
    notes: 'Plain public information.',
    fileName: 'l2-003-public-transit-detour.docx',
    sections: [
      { title: 'Client notice', text: 'Clients visiting the service counter next week should use the temporary east entrance because the main bus stop is under construction.' },
      { title: 'Distribution', text: 'The detour note can be posted in public areas, printed at reception, and read over the phone to callers.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L2-004',
    difficulty: 'Level 2',
    expectedLabel: 'Public',
    title: 'Regional office open data publication memo',
    notes: 'Explicitly releasable operational dataset.',
    fileName: 'l2-004-public-open-data-memo.docx',
    sections: [
      { title: 'Memo', text: 'The memo confirms that quarterly foot traffic counts contain no personal information and are approved for the open data catalogue.' },
      { title: 'Release note', text: 'Communications may treat the dataset as public and promote it through the standard digital channels.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L2-005',
    difficulty: 'Level 2',
    expectedLabel: 'Public',
    title: 'Draft agenda for accessibility information session',
    notes: 'Meeting logistics only.',
    fileName: 'l2-005-public-accessibility-agenda.docx',
    sections: [
      { title: 'Agenda', text: 'The agenda sets out welcome remarks, question periods, and demonstration slots for an accessibility information session open to the public.' },
      { title: 'Handling', text: 'The agenda is intended for external distribution and may be attached to registration confirmations.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L2-006',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Client callback list for missed appointments',
    notes: 'Low-sensitivity personal contact information.',
    fileName: 'l2-006-pa-client-callbacks.docx',
    sections: [
      { title: 'List', text: 'Supervisors compiled the names and callback numbers of clients who missed appointments after the front desk printer failed.' },
      { title: 'Assessment', text: 'The list should remain internal because it contains personal contact details, though the likely injury is limited to inconvenience and privacy irritation.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-007',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Volunteer sign-in package for outreach clinic',
    notes: 'Contact details and schedule assignments.',
    fileName: 'l2-007-pa-volunteer-package.docx',
    sections: [
      { title: 'Package', text: 'The package includes volunteer names, arrival windows, dietary notes, and emergency contact phone numbers for a one-day outreach clinic.' },
      { title: 'Handling note', text: 'It should remain within the organizing team because disclosure would reveal modest personal information with limited injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-008',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Interview logistics note with candidate arrival times',
    notes: 'Scheduling and contact details only.',
    fileName: 'l2-008-pa-interview-logistics.docx',
    sections: [
      { title: 'Logistics note', text: 'Human resources recorded candidate arrival times, parking instructions, and mobile numbers for a branch interview process.' },
      { title: 'Protection rationale', text: 'The note contains limited personal information and should not be disclosed beyond the panel, but the injury threshold remains low.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-009',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Temporary seating map for grievance hearing room',
    notes: 'Sensitive only because it identifies participants.',
    fileName: 'l2-009-pa-hearing-room-map.docx',
    sections: [
      { title: 'Map', text: 'The room map places employee representatives, observers, and interpreters around the hearing table and notes accommodation seating requests.' },
      { title: 'Handling', text: 'The map should stay internal because it names participants and accessibility needs, though the consequences of disclosure are limited.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-010',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Building access card pickup schedule',
    notes: 'Internal operational schedule with minor privacy content.',
    fileName: 'l2-010-pa-card-pickup-schedule.docx',
    sections: [
      { title: 'Schedule', text: 'Employees are listed in fifteen-minute blocks to collect new access cards and update desk telephone records at reception.' },
      { title: 'Why protected', text: 'The schedule exposes names and movement timing and therefore should not be posted publicly, but the likely injury is minor.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-011',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Participant list for branch mentoring breakfast',
    notes: 'Low-impact personal information.',
    fileName: 'l2-011-pa-mentoring-breakfast.docx',
    sections: [
      { title: 'Participant list', text: 'The list pairs mentors and new hires and notes pronunciation tips, coffee preferences, and seating adjustments for the breakfast session.' },
      { title: 'Use', text: 'Internal organizers should keep the list within the team because disclosure would create limited privacy concerns only.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-012',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Regional sign-language support request roster',
    notes: 'Accessibility roster with low injury if disclosed.',
    fileName: 'l2-012-pa-sign-language-roster.docx',
    sections: [
      { title: 'Roster', text: 'The roster shows which clients requested sign-language support at the regional counter and the times they are expected to arrive.' },
      { title: 'Assessment', text: 'The roster should remain internal because it reveals client preferences, but the likely injury is below the serious threshold.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-013',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Staff movement plan during lobby repainting',
    notes: 'Internal workplace arrangements.',
    fileName: 'l2-013-pa-staff-movement-plan.docx',
    sections: [
      { title: 'Movement plan', text: 'Managers noted which employees will temporarily work in alternate cubicles and how calls should be forwarded during lobby repainting.' },
      { title: 'Handling', text: 'The plan reveals internal arrangements and individual seating choices, so it should stay internal even though the likely injury is limited.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-014',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'External observer registration list',
    notes: 'Names and logistics only.',
    fileName: 'l2-014-pa-observer-registration.docx',
    sections: [
      { title: 'Registration list', text: 'The branch recorded the names of external observers, their organization, and building escort times for a policy demonstration.' },
      { title: 'Rationale', text: 'The list should not circulate outside event management because it identifies specific attendees, but serious injury is not likely.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-015',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Complaint handling worksheet for service delays',
    notes: 'Limited complaint file with contact info only.',
    fileName: 'l2-015-pa-complaint-worksheet.docx',
    sections: [
      { title: 'Worksheet', text: 'The worksheet captures a client name, phone number, and short description of a delay at the front counter during a systems outage.' },
      { title: 'Expected harm', text: 'If released, the worksheet would create a small privacy issue and possible embarrassment, but not serious injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-016',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Manager briefing on accommodation and workload limits',
    notes: 'Health-based accommodation without explicit marking.',
    fileName: 'l2-016-pb-accommodation-briefing.docx',
    sections: [
      { title: 'Briefing', text: 'The briefing tells a new manager that one employee cannot work night shifts because of a medical accommodation and includes treatment-related limits.' },
      { title: 'Impact', text: 'The content reveals health information that could cause serious injury if circulated outside the management and labour relations chain.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-017',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Detailed payroll reconciliation for acting assignments',
    notes: 'Multiple salary and banking references.',
    fileName: 'l2-017-pb-payroll-reconciliation.docx',
    sections: [
      { title: 'Reconciliation', text: 'The spreadsheet narrative explains salary adjustments, direct deposit timing, and the bank account correction needed for two acting assignments.' },
      { title: 'Why sensitive', text: 'Disclosure could result in serious financial harm and reputational injury to named employees.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-018',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Grievance intake note with personnel file reference',
    notes: 'Employment relations plus identifier data.',
    fileName: 'l2-018-pb-grievance-intake.docx',
    sections: [
      { title: 'Intake note', text: 'The labour relations officer logged a grievance allegation, the personnel file reference, and the employee request for interim measures.' },
      { title: 'Protection note', text: 'This is more than a routine complaint: release could seriously harm the employee and the process integrity.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-019',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Support ticket for lost token and password reset',
    notes: 'Credentials trigger serious injury risk.',
    fileName: 'l2-019-pb-token-reset.docx',
    sections: [
      { title: 'Support ticket', text: 'The user reported a lost token; support recorded the temporary password procedure, token serial, and manager approval for restoration.' },
      { title: 'Impact', text: 'The presence of credential details means unauthorized disclosure could cause serious injury through misuse of access.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-020',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Case note for employee diagnosis disclosure',
    notes: 'Health diagnosis in plain language.',
    fileName: 'l2-020-pb-diagnosis-note.docx',
    sections: [
      { title: 'Case note', text: 'During a call, the employee disclosed a diagnosis and asked for temporary duties. The adviser summarized the medical information and return plan.' },
      { title: 'Handling', text: 'Because the note contains diagnosis information, the likely injury from disclosure is serious.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-021',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Banking amendment request for overpayment recovery',
    notes: 'Direct financial exposure.',
    fileName: 'l2-021-pb-banking-amendment.docx',
    sections: [
      { title: 'Amendment request', text: 'Compensation asked finance to apply a new bank account destination for overpayment recovery and attached salary period details.' },
      { title: 'Damage', text: 'Improper disclosure could cause serious financial injury and facilitate fraud.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-022',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Accommodation tracker for five return-to-work cases',
    notes: 'Aggregated health and identifier details.',
    fileName: 'l2-022-pb-return-tracker.docx',
    sections: [
      { title: 'Tracker', text: 'The tracker lists employee id values, return dates, accommodation limits, and medical note status for five active cases.' },
      { title: 'Assessment', text: 'The aggregated personal and health information supports a Protected B classification.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-023',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Staffing complaint brief with disciplinary context',
    notes: 'Employment relations document with high sensitivity.',
    fileName: 'l2-023-pb-staffing-complaint.docx',
    sections: [
      { title: 'Complaint brief', text: 'The brief summarizes a staffing complaint, references prior disciplinary concerns, and lists the employee id and witness names.' },
      { title: 'Reason', text: 'Release would seriously affect the employee and undermine the process.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-024',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Medical travel reimbursement with claim receipts',
    notes: 'Health plus financial reimbursement detail.',
    fileName: 'l2-024-pb-medical-travel-reimbursement.docx',
    sections: [
      { title: 'Claim summary', text: 'The summary links a medical travel accommodation to reimbursement receipts, salary coding, and a direct deposit confirmation.' },
      { title: 'Classification rationale', text: 'The combined health and financial information creates serious injury risk if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-025',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'VPN restoration note for executive assistant',
    notes: 'Credentials and role context.',
    fileName: 'l2-025-pb-vpn-restoration.docx',
    sections: [
      { title: 'Restoration note', text: 'IT documented the VPN token replacement, temporary credential handling, and assistant account permissions during a service interruption.' },
      { title: 'Risk', text: 'Because credential details are present, the document should be treated as Protected B.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-026',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Detailed health absence recap for briefing binder',
    notes: 'Health record recap in management binder.',
    fileName: 'l2-026-pb-health-absence-recap.docx',
    sections: [
      { title: 'Recap', text: 'The binder recap names staff on absence and identifies which cases involve surgery recovery, mental health support, or accommodation follow-up.' },
      { title: 'Use note', text: 'This is serious personal information and should not move beyond the restricted management chain.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-027',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Compensation escalation for incorrect pay deposits',
    notes: 'Multiple bank account references.',
    fileName: 'l2-027-pb-pay-deposit-escalation.docx',
    sections: [
      { title: 'Escalation', text: 'Compensation escalated a pay issue affecting two employees and included the incorrect and corrected bank account information for each deposit.' },
      { title: 'Protection note', text: 'The account details and salary implications make the file appropriate for Protected B handling.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-028',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Labour briefing with employee file extracts',
    notes: 'Workplace relations plus identifiers.',
    fileName: 'l2-028-pb-labour-briefing.docx',
    sections: [
      { title: 'Briefing', text: 'The labour briefing reproduces extracts from an employee personnel file and a grievance chronology to prepare an executive call.' },
      { title: 'Assessment', text: 'The likely injury from disclosure is serious because of the employment and identifier content.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-029',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Accommodation note for front-line cashier',
    notes: 'Plain medical accommodation request.',
    fileName: 'l2-029-pb-cashier-accommodation.docx',
    sections: [
      { title: 'Note', text: 'The front-line cashier requested a medical accommodation limiting standing time and the note attaches a brief health explanation from the clinician.' },
      { title: 'Handling', text: 'Health information would cause serious injury if disclosed without authority.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-030',
    difficulty: 'Level 2',
    expectedLabel: 'Protected C',
    title: 'Annex on alternate site sequencing for regional emergency office',
    notes: 'Extremely grave operational injury without explicit marking.',
    fileName: 'l2-030-pc-alternate-site-sequencing.docx',
    sections: [
      { title: 'Annex', text: 'The annex describes which teams, vehicles, and family supports move first if the regional emergency office becomes unusable for more than twelve hours.' },
      { title: 'Impact statement', text: 'Because the annex reveals the relocation sequence for a critical service, compromise would cause extremely grave operational injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-031',
    difficulty: 'Level 2',
    expectedLabel: 'Protected C',
    title: 'Secure residence support package for dependants',
    notes: 'Personal safety plan with severe injury consequences.',
    fileName: 'l2-031-pc-residence-support-package.docx',
    sections: [
      { title: 'Support package', text: 'The package sets out movement windows, child transfer arrangements, and escort assignments for dependants in a secure residence program.' },
      { title: 'Why protected', text: 'Disclosure could place individuals at significant risk and would cause extremely grave injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-032',
    difficulty: 'Level 2',
    expectedLabel: 'Protected C',
    title: 'Continuity note for courthouse witness movement',
    notes: 'Protection movement planning.',
    fileName: 'l2-032-pc-courthouse-witness-movement.docx',
    sections: [
      { title: 'Movement note', text: 'The note lists courthouse arrival order, decoy vehicle use, and safe-hand-off points for relocated witnesses during a multi-day hearing.' },
      { title: 'Handling', text: 'The movement details would cause extremely grave injury if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-033',
    difficulty: 'Level 2',
    expectedLabel: 'Protected C',
    title: 'Service survival package for remote outage scenario',
    notes: 'Critical service continuity details.',
    fileName: 'l2-033-pc-service-survival-package.docx',
    sections: [
      { title: 'Package', text: 'Managers documented which staff, courier routes, and temporary workstations are required to keep a critical service alive through a three-day outage.' },
      { title: 'Expected injury', text: 'Compromise would expose the service survival design and could cause extremely grave injury to operations.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-034',
    difficulty: 'Level 2',
    expectedLabel: 'Protected C',
    title: 'Protective movement checklist for emergency court transfer',
    notes: 'High-risk individual movement case.',
    fileName: 'l2-034-pc-court-transfer-checklist.docx',
    sections: [
      { title: 'Checklist', text: 'The checklist records the route, escort numbers, and hand-over codes for an emergency court transfer involving a protected person.' },
      { title: 'Assessment', text: 'The transfer details would produce extremely grave injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-035',
    difficulty: 'Level 2',
    expectedLabel: 'Protected C',
    title: 'Alternate campus occupancy sequence',
    notes: 'Critical service occupancy order and fallbacks.',
    fileName: 'l2-035-pc-occupancy-sequence.docx',
    sections: [
      { title: 'Sequence', text: 'The sequence states which crisis teams, support clerks, and backup systems move into the alternate campus first during evacuation of the main building.' },
      { title: 'Impact', text: 'Unauthorized disclosure would cause extremely grave operational injury by exposing fallback sequencing.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-036',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Operational referral describing investigation target travel',
    notes: 'Clear national-interest injury without explicit marking.',
    fileName: 'l2-036-conf-target-travel-referral.docx',
    sections: [
      { title: 'Referral', text: 'The operational referral tells partner officers that an investigation target is expected to cross at a specific port and includes related law enforcement notes.' },
      { title: 'Risk', text: 'If released, the referral would injure the national interest and compromise enforcement action.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-037',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Protected source debrief calendar',
    notes: 'Source debrief planning at Confidential.',
    fileName: 'l2-037-conf-source-debrief-calendar.docx',
    sections: [
      { title: 'Calendar', text: 'The calendar identifies when a protected source will be debriefed, which intelligence questions remain open, and who will attend.' },
      { title: 'Handling note', text: 'The plan would injure the national interest if disclosed because it reveals source handling arrangements.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-038',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Border interdiction prep sheet',
    notes: 'Border security and enforcement timing.',
    fileName: 'l2-038-conf-border-interdiction.docx',
    sections: [
      { title: 'Prep sheet', text: 'Officers noted the lane, shift, and border security concern tied to an investigation target expected to arrive before dawn.' },
      { title: 'Expected injury', text: 'Disclosure would compromise the interdiction and injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-039',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Partner note on source reliability and access',
    notes: 'Source reliability evaluation.',
    fileName: 'l2-039-conf-source-reliability-note.docx',
    sections: [
      { title: 'Partner note', text: 'The note rates a protected source as highly reliable, explains access to a target network, and identifies the next approach method.' },
      { title: 'Handling', text: 'Compromise would injure intelligence operations and the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-040',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Law enforcement coordination note for ferry arrival',
    notes: 'Partner coordination at the Confidential level.',
    fileName: 'l2-040-conf-ferry-coordination.docx',
    sections: [
      { title: 'Coordination note', text: 'Law enforcement officers will meet an investigation target arriving by ferry and rely on a short intelligence cue from a protected source.' },
      { title: 'Restriction', text: 'The note must remain restricted because compromise would injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-041',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Internal summary of target-supporting courier route',
    notes: 'Investigative relevance without highest harm.',
    fileName: 'l2-041-conf-courier-route-summary.docx',
    sections: [
      { title: 'Summary', text: 'Field staff summarized an investigation target courier route and linked it to previous intelligence reporting from a protected source.' },
      { title: 'Assessment', text: 'The summary would injure the national interest if circulated outside the investigation.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-042',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Witness approach plan with protected source reference',
    notes: 'National-interest injury but not serious tier.',
    fileName: 'l2-042-conf-witness-approach-plan.docx',
    sections: [
      { title: 'Approach plan', text: 'The plan names which officers will speak to a witness and references a protected source report that makes the witness relevant.' },
      { title: 'Why confidential', text: 'Disclosure would compromise both the witness approach and source handling, injuring the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-043',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Intelligence liaison route note',
    notes: 'Source-linked meeting route.',
    fileName: 'l2-043-conf-liaison-route-note.docx',
    sections: [
      { title: 'Route note', text: 'The note gives a liaison officer the route and cover story for meeting a protected source in a neighbouring district.' },
      { title: 'Handling', text: 'The information would injure the national interest if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-044',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Case note linking target to border contact',
    notes: 'Straightforward national-interest injury case.',
    fileName: 'l2-044-conf-target-border-contact.docx',
    sections: [
      { title: 'Case note', text: 'The case note records that an investigation target is expected to meet a border contact identified through intelligence reporting.' },
      { title: 'Impact', text: 'Release could prejudice a live matter and injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-045',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'Readiness brief for secure exchange maintenance',
    notes: 'Classified network and defence posture.',
    fileName: 'l2-045-secret-secure-exchange-brief.docx',
    sections: [
      { title: 'Brief', text: 'The brief tells a senior director when the classified network secure exchange will be offline and which national defence functions must stand by.' },
      { title: 'Expected injury', text: 'The combination would seriously injure the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-046',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'Signals intelligence watch transition memo',
    notes: 'SIGINT transition details.',
    fileName: 'l2-046-secret-sigint-transition.docx',
    sections: [
      { title: 'Transition memo', text: 'The memo outlines the watch transition for signals intelligence coverage over a holiday weekend and the backup collection posture if staffing drops.' },
      { title: 'Handling', text: 'Release would seriously injure the national interest by exposing collection continuity.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-047',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'National defence call tree for posture change',
    notes: 'Posture call tree at Secret level.',
    fileName: 'l2-047-secret-defence-call-tree.docx',
    sections: [
      { title: 'Call tree', text: 'The call tree lists which officers receive the first notice of a national defence posture change and which classified network room they use.' },
      { title: 'Risk', text: 'Exposure would seriously injure the national interest by revealing the readiness cascade.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-048',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'Technical note on classified network fallback bridge',
    notes: 'Fallback bridge details.',
    fileName: 'l2-048-secret-fallback-bridge.docx',
    sections: [
      { title: 'Technical note', text: 'Network engineering documented the fallback bridge used if the primary classified network path fails during a high-priority event.' },
      { title: 'Impact', text: 'The note would seriously injure the national interest by exposing secure communications resilience.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-049',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'Collection outage timeline for signals desk',
    notes: 'Signals intelligence outage response.',
    fileName: 'l2-049-secret-collection-outage-timeline.docx',
    sections: [
      { title: 'Timeline', text: 'The signals desk keeps a timeline showing how quickly backup analysts must restore coverage if the collection stream drops.' },
      { title: 'Reason', text: 'Compromise would seriously injure the national interest by exposing collection endurance and weak points.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-050',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'Secure line reroute checklist',
    notes: 'Checklist for secure communications reroute.',
    fileName: 'l2-050-secret-secure-line-reroute.docx',
    sections: [
      { title: 'Checklist', text: 'Operations staff use the checklist to reroute a secure line over the classified network during an emergency maintenance event.' },
      { title: 'Assessment', text: 'Revealing the reroute method would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-051',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'Readiness fragment for overnight contingency',
    notes: 'Short but clearly serious national-interest injury.',
    fileName: 'l2-051-secret-overnight-contingency.docx',
    sections: [
      { title: 'Fragment', text: 'The fragment notes the overnight contingency posture for national defence liaison officers and the secure room they must report to.' },
      { title: 'Handling', text: 'This would seriously injure the national interest if exposed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-052',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'Duty handover card for collection platform',
    notes: 'Collection platform duty details.',
    fileName: 'l2-052-secret-duty-handover-card.docx',
    sections: [
      { title: 'Handover card', text: 'The card records which analyst takes over the collection platform, which signals intelligence feed is primary, and what to do if access degrades.' },
      { title: 'Expected harm', text: 'Compromise would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-053',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'Director note on defence messaging fallback',
    notes: 'Defence and secure comms context.',
    fileName: 'l2-053-secret-defence-messaging-fallback.docx',
    sections: [
      { title: 'Director note', text: 'The note identifies the fallback channel for defence messaging if the classified network conference service is unavailable.' },
      { title: 'Protection note', text: 'The document belongs at Secret because disclosure would seriously injure the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-054',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Compartmented notice on source chain preservation',
    notes: 'Highest-level source protection case without explicit marking.',
    fileName: 'l2-054-ts-source-chain-preservation.docx',
    sections: [
      { title: 'Notice', text: 'The notice identifies which handlers may preserve contact with a compartmented source chain if one node is exposed.' },
      { title: 'Damage', text: 'Compromise would cause exceptionally grave injury to the national interest and place sources at risk.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-055',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Compartmented activation memo for crisis room',
    notes: 'Special access activation sequence.',
    fileName: 'l2-055-ts-crisis-room-activation.docx',
    sections: [
      { title: 'Activation memo', text: 'The memo explains which compartmented participants may enter the crisis room and how source-derived material is introduced during activation.' },
      { title: 'Risk', text: 'Exposure would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-056',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Special access extraction authority sequence',
    notes: 'Authority sequence for source extraction.',
    fileName: 'l2-056-ts-extraction-sequence.docx',
    sections: [
      { title: 'Authority sequence', text: 'Only named officials in a compartmented program may authorize extraction of a special access source after compromise indicators appear.' },
      { title: 'Impact statement', text: 'Release of the sequence would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-057',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Compartmented watch change for strategic collection',
    notes: 'Strategic collection in a compartment.',
    fileName: 'l2-057-ts-strategic-watch-change.docx',
    sections: [
      { title: 'Watch change', text: 'The watch change card states who may continue strategic collection in a compartmented setting and what source caveats must be honoured.' },
      { title: 'Protection rationale', text: 'Disclosure would cause exceptionally grave national injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-058',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Compartmented notification strip for emergency partner alert',
    notes: 'Special access partner alerting.',
    fileName: 'l2-058-ts-partner-alert-strip.docx',
    sections: [
      { title: 'Notification strip', text: 'The strip lists the order in which compartmented partner channels must be alerted if a covert activity is compromised.' },
      { title: 'Handling', text: 'This information would cause exceptionally grave injury to the national interest if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-059',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Compartmented source relocation trigger memo',
    notes: 'Source relocation triggers at highest level.',
    fileName: 'l2-059-ts-relocation-trigger-memo.docx',
    sections: [
      { title: 'Trigger memo', text: 'The memo identifies threshold indicators that require immediate relocation of a compartmented source and suspension of contact channels.' },
      { title: 'Damage statement', text: 'Compromise would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-060',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Strategic source shutdown worksheet',
    notes: 'Exceptional national harm case.',
    fileName: 'l2-060-ts-shutdown-worksheet.docx',
    sections: [
      { title: 'Worksheet', text: 'The worksheet shows how to shut down a strategic source network while preserving compartmented records and emergency access rights.' },
      { title: 'Assessment', text: 'Unauthorized disclosure would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-061',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Emergency card for covert liaison continuity',
    notes: 'Covert continuity material.',
    fileName: 'l2-061-ts-covert-liaison-continuity.docx',
    sections: [
      { title: 'Emergency card', text: 'The card records the compartmented continuity path for covert liaison if regular coordination breaks down during a crisis.' },
      { title: 'Why highest level', text: 'Exposure would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-062',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Compartmented deconfliction note for source handlers',
    notes: 'Source handler deconfliction.',
    fileName: 'l2-062-ts-source-handler-deconfliction.docx',
    sections: [
      { title: 'Deconfliction note', text: 'The note explains how compartmented source handlers avoid crossing one another during a heightened alert period.' },
      { title: 'Expected injury', text: 'If released, the note would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-063',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Compartmented access roster for strategic watch floor',
    notes: 'Access roster at highest sensitivity.',
    fileName: 'l2-063-ts-watch-floor-roster.docx',
    sections: [
      { title: 'Roster', text: 'The roster names the individuals who may access the strategic watch floor when compartmented intelligence is active.' },
      { title: 'Handling note', text: 'Compromise would cause exceptionally grave national injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-064',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Compartmented route note for emergency courier',
    notes: 'Courier route tied to special access program.',
    fileName: 'l2-064-ts-emergency-courier-route.docx',
    sections: [
      { title: 'Route note', text: 'The note gives the emergency courier route and authentication pattern for moving compartmented material between secure locations.' },
      { title: 'Restriction', text: 'The route note would cause exceptionally grave harm if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-065',
    difficulty: 'Level 2',
    expectedLabel: 'Public',
    title: 'Public branch closure map for accessibility upgrades',
    notes: 'Public customer guidance.',
    fileName: 'l2-065-public-closure-map.docx',
    sections: [
      { title: 'Closure map', text: 'The map shows which entrances remain open during accessibility upgrades and how clients can reach temporary service counters.' },
      { title: 'Distribution', text: 'The map is intended for public handouts and web publication.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L2-066',
    difficulty: 'Level 2',
    expectedLabel: 'Public',
    title: 'Public notice on regional webinar access',
    notes: 'Final public example for level 2.',
    fileName: 'l2-066-public-webinar-access.docx',
    sections: [
      { title: 'Notice', text: 'Members of the public can join the regional webinar using the posted link and ask questions through the standard moderation tool.' },
      { title: 'Handling', text: 'The notice may be circulated broadly without restriction.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L2-067',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Workshop catering sheet with attendee allergies',
    notes: 'Minor personal sensitivity only.',
    fileName: 'l2-067-pa-catering-sheet.docx',
    sections: [
      { title: 'Sheet', text: 'The sheet lists attendee names, allergies, and vegetarian requests for a branch workshop lunch.' },
      { title: 'Assessment', text: 'The information is not public but would likely cause limited injury if disclosed.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-068',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Integrated case note on payroll and health accommodation',
    notes: 'Combines both serious domains.',
    fileName: 'l2-068-pb-integrated-case-note.docx',
    sections: [
      { title: 'Case note', text: 'The note combines a direct deposit correction with a medical accommodation update after an employee returned on reduced hours.' },
      { title: 'Why protected', text: 'Either element alone is sensitive; together they clearly support Protected B handling.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-069',
    difficulty: 'Level 2',
    expectedLabel: 'Protected C',
    title: 'Family support annex for emergency relocation',
    notes: 'Severe non-national injury case.',
    fileName: 'l2-069-pc-family-support-annex.docx',
    sections: [
      { title: 'Annex', text: 'The annex identifies family regrouping locations, school withdrawal timing, and emergency transport assignments if a protected employee must relocate at once.' },
      { title: 'Impact', text: 'Exposure would create extremely grave injury for the affected family and the associated operation.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-070',
    difficulty: 'Level 2',
    expectedLabel: 'Confidential',
    title: 'Confidential note on overnight source contact',
    notes: 'Simple source handling case.',
    fileName: 'l2-070-conf-overnight-source-contact.docx',
    sections: [
      { title: 'Note', text: 'A protected source will call after midnight from a public phone and the intelligence officer must use the agreed verification phrase.' },
      { title: 'Risk', text: 'Disclosure would injure the national interest and compromise the source.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-071',
    difficulty: 'Level 2',
    expectedLabel: 'Secret',
    title: 'Secret after-hours bridge activation steps',
    notes: 'Secure communications continuity.',
    fileName: 'l2-071-secret-bridge-activation.docx',
    sections: [
      { title: 'Activation steps', text: 'After-hours staff use these steps to bring up the classified network bridge when the main secure conference path fails.' },
      { title: 'Result', text: 'Compromise would seriously injure the national interest by exposing a secure communications fallback.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-072',
    difficulty: 'Level 2',
    expectedLabel: 'Top Secret',
    title: 'Compartmented source contact recovery steps',
    notes: 'Highest-level recovery plan.',
    fileName: 'l2-072-ts-source-contact-recovery.docx',
    sections: [
      { title: 'Recovery steps', text: 'If a compartmented source misses a contact, handlers must follow this recovery sequence before emergency extraction is triggered.' },
      { title: 'Damage statement', text: 'Release would cause exceptionally grave injury to the national interest.' }
    ],
    reviewedAnswers: reviewedAnswers({ nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-073',
    difficulty: 'Level 2',
    expectedLabel: 'Protected B',
    title: 'Compensation package for bereavement travel',
    notes: 'Serious personal and financial sensitivity.',
    fileName: 'l2-073-pb-bereavement-travel.docx',
    sections: [
      { title: 'Package', text: 'The compensation package includes direct deposit confirmation, travel receipts, and a note describing the compassionate leave basis.' },
      { title: 'Restriction', text: 'Disclosure would cause serious personal and financial injury.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L2-074',
    difficulty: 'Level 2',
    expectedLabel: 'Protected A',
    title: 'Internal office passcard pickup reminders',
    notes: 'Minor internal contact info only.',
    fileName: 'l2-074-pa-passcard-reminders.docx',
    sections: [
      { title: 'Reminders', text: 'Staff were reminded by name when to pick up passcards and whom to call if they were absent from the distribution window.' },
      { title: 'Assessment', text: 'The list should remain internal, but the likely harm from disclosure is limited.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L2-075',
    difficulty: 'Level 2',
    expectedLabel: 'Public',
    title: 'Public change notice for weekend kiosk hours',
    notes: 'Closes level 2 with a clean public case.',
    fileName: 'l2-075-public-kiosk-hours.docx',
    sections: [
      { title: 'Change notice', text: 'Weekend kiosk hours will shift to 10:00-16:00 for the summer period and the notice may be posted on all public channels.' },
      { title: 'Use', text: 'No sensitive information is present.' }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  })
]
