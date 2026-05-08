import type { BenchmarkCase } from './types'
import { createBenchmarkCase, reviewedAnswers } from './factory'

export const level1Cases: BenchmarkCase[] = [
  createBenchmarkCase({
    id: 'L1-001',
    difficulty: 'Level 1',
    expectedLabel: 'Public',
    title: 'Public web notice for harbour ferry maintenance',
    notes: 'Straight public release notice with explicit marking and no injury cues.',
    fileName: 'l1-001-public-ferry-maintenance.docx',
    extractedMarkings: ['Public'],
    sections: [
      {
        title: 'Notice',
        text: 'Public. The Atlantic Harbour Service Centre will close the ferry loading lane between 10 June and 12 June for repainting and routine deck maintenance.'
      },
      {
        title: 'Release instructions',
        text: 'The notice may be posted to the regional website, shared on municipal channels, and included in stakeholder newsletters without restriction.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Public', nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L1-002',
    difficulty: 'Level 1',
    expectedLabel: 'Public',
    title: 'Public statement on seasonal park shuttle hours',
    notes: 'Routine public operations announcement.',
    fileName: 'l1-002-public-shuttle-hours.docx',
    extractedMarkings: ['Public'],
    sections: [
      {
        title: 'Purpose',
        text: 'Public. The Prairie Visitor Services Office is extending park shuttle hours on weekends from 08:00 to 20:00 during the summer season.'
      },
      {
        title: 'Audience',
        text: 'This update is intended for public posting, radio community bulletins, and printed visitor maps distributed at entry points.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Public', nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L1-003',
    difficulty: 'Level 1',
    expectedLabel: 'Public',
    title: 'Public open house invitation for service redesign',
    notes: 'Low-risk invitation document.',
    fileName: 'l1-003-public-open-house.docx',
    extractedMarkings: ['Public'],
    sections: [
      {
        title: 'Invitation',
        text: 'Public. Residents are invited to attend an open house hosted by the Pacific Programs Directorate to review the proposed lobby redesign for the service counter.'
      },
      {
        title: 'Distribution',
        text: 'The invitation may be sent to community associations, posted in local libraries, and quoted in news releases.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Public', nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L1-004',
    difficulty: 'Level 1',
    expectedLabel: 'Public',
    title: 'Public FAQ for winter road checkpoint hours',
    notes: 'Operational but fully public content.',
    fileName: 'l1-004-public-checkpoint-faq.docx',
    extractedMarkings: ['Public'],
    sections: [
      {
        title: 'Questions and answers',
        text: 'Public. This FAQ explains winter operating hours, holiday closures, and lane availability at the Northern Roads Information Desk.'
      },
      {
        title: 'Use',
        text: 'Staff may share the document with callers and copy the text directly into the public web knowledge base.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Public', nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L1-005',
    difficulty: 'Level 1',
    expectedLabel: 'Public',
    title: 'Public stakeholder schedule for regional expo booth',
    notes: 'Simple public engagement schedule.',
    fileName: 'l1-005-public-expo-schedule.docx',
    extractedMarkings: ['Public'],
    sections: [
      {
        title: 'Schedule',
        text: 'Public. The Capital Outreach Unit will staff an information booth at the annual government services expo from 09:00 to 17:00 on 4 September.'
      },
      {
        title: 'Handling',
        text: 'The schedule can be printed for visitors, sent to exhibitors, and used in social media event reminders.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Public', nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),

  createBenchmarkCase({
    id: 'L1-006',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Internal contact list for reception coverage',
    notes: 'Contains basic personal contact details with limited injury if disclosed.',
    fileName: 'l1-006-pa-reception-contacts.docx',
    sections: [
      {
        title: 'Coverage roster',
        text: 'The roster assigns reception coverage for the Atlantic regional counter. Mobile numbers are included so staff can be reached if the desk opens early.'
      },
      {
        title: 'Handling note',
        text: 'Use the roster only within the office. If disclosed externally it would inconvenience employees and expose direct contact details, but would not cause serious injury.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-007',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Visitor parking accommodation list',
    notes: 'Low-level internal handling for visitor arrangements.',
    fileName: 'l1-007-pa-visitor-parking.docx',
    sections: [
      {
        title: 'Visitor list',
        text: 'The Prairie regional office prepared a list of external visitors requiring reserved parking spaces, language support, or sign-in escorts for a half-day workshop.'
      },
      {
        title: 'Why protected',
        text: 'The list identifies individuals and travel details. Unapproved disclosure would create minor privacy concerns and inconvenience, but not serious harm.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-008',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Interview panel arrival sheet',
    notes: 'Basic staffing administration with low injury threshold.',
    fileName: 'l1-008-pa-interview-arrivals.docx',
    sections: [
      {
        title: 'Panel logistics',
        text: 'The sheet lists candidate arrival times, preferred names, and accessibility reminders for a one-day interview board at the Pacific operations office.'
      },
      {
        title: 'Assessment',
        text: 'If released, the sheet would reveal limited personal information and scheduling data. The likely consequence is minor embarrassment or inconvenience.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-009',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Office move checklist with staff seat assignments',
    notes: 'Contains internal seat assignments and contact extensions.',
    fileName: 'l1-009-pa-office-move.docx',
    sections: [
      {
        title: 'Move checklist',
        text: 'The Northern operations hub prepared a move checklist showing desk numbers, telephone extensions, and ergonomic requests for employees shifting floors next month.'
      },
      {
        title: 'Handling',
        text: 'The document should stay within the branch because it reveals internal locations and personal workspace preferences, though the likely injury remains limited.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-010',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Training attendance register for onboarding session',
    notes: 'Internal attendance list with minor privacy impact.',
    fileName: 'l1-010-pa-training-register.docx',
    sections: [
      {
        title: 'Attendance',
        text: 'The Capital policy branch kept an attendance register for new employees, including dietary preferences and emergency contact names for the orientation lunch.'
      },
      {
        title: 'Classification note',
        text: 'Disclosure would create a minor privacy issue and some embarrassment. It should not be distributed outside the delivery team.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),

  createBenchmarkCase({
    id: 'L1-011',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Routine complaint file on service counter delay',
    notes: 'Client complaint with limited personal context.',
    fileName: 'l1-011-pa-counter-complaint.docx',
    sections: [
      {
        title: 'Complaint summary',
        text: 'A member of the public complained that the service counter in Halifax opened thirty minutes late and requested a call back from a supervisor.'
      },
      {
        title: 'Internal use',
        text: 'The file contains the caller name and phone number. It should remain internal because disclosure would expose personal contact information with low injury.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-012',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Draft visitor escort list for ministerial floor tour',
    notes: 'Basic internal handling with names and timing.',
    fileName: 'l1-012-pa-escort-list.docx',
    sections: [
      {
        title: 'Escort list',
        text: 'The list assigns employees to escort community delegates through the ministerial floor during a building tour and records wheelchair access requirements.'
      },
      {
        title: 'Expected injury',
        text: 'Unauthorized disclosure would reveal names and logistical preferences, causing inconvenience and limited privacy impact rather than serious harm.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-013',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Internal RSVP sheet for branch recognition event',
    notes: 'Personal preferences and attendance choices only.',
    fileName: 'l1-013-pa-rsvp-sheet.docx',
    sections: [
      {
        title: 'RSVP sheet',
        text: 'The branch coordinator recorded employee RSVP choices, food allergies, and guest counts for a small recognition event in the Prairie office.'
      },
      {
        title: 'Handling note',
        text: 'The sheet should stay within the organizing team. Disclosure could embarrass staff or expose minor personal information but would not cause serious injury.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'no', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-014',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Workspace equipment preference form',
    notes: 'Contains ordinary employee preferences and contact details.',
    fileName: 'l1-014-pa-equipment-preferences.docx',
    sections: [
      {
        title: 'Form summary',
        text: 'Employees in the Pacific branch completed a preference form for monitor height, keyboard style, and alternate contact numbers during an office refresh.'
      },
      {
        title: 'Protection rationale',
        text: 'The form is not for public release because it contains employee preferences and contact details, but the injury threshold remains low.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-015',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Daily access pass log for archived records room',
    notes: 'Limited personal tracking information.',
    fileName: 'l1-015-pa-access-pass-log.docx',
    sections: [
      {
        title: 'Log',
        text: 'The Northern records room keeps a daily pass log showing which clerks signed out a temporary access badge and the time they returned it.'
      },
      {
        title: 'Use note',
        text: 'The log should remain internal because it identifies staff movement patterns in a limited way, with likely injury below the serious threshold.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),

  createBenchmarkCase({
    id: 'L1-016',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Employee medical accommodation summary',
    notes: 'Health information should be treated as Protected B.',
    fileName: 'l1-016-pb-medical-accommodation.docx',
    sections: [
      {
        title: 'Accommodation summary',
        text: 'The report records a medical accommodation request for an employee returning from leave, including diagnosis details, medication limits, and workstation requirements.'
      },
      {
        title: 'Handling',
        text: 'Disclosure would reveal personal health information and could cause serious injury to the individual. Distribution must be limited to labour relations and the manager.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-017',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Direct deposit change request package',
    notes: 'Financial identifiers and banking data.',
    fileName: 'l1-017-pb-direct-deposit.docx',
    sections: [
      {
        title: 'Request package',
        text: 'The package contains employee direct deposit instructions, bank account numbers, salary coding, and the signed authorization form for a payroll correction.'
      },
      {
        title: 'Classification rationale',
        text: 'Unauthorized disclosure could enable fraud and serious financial harm. The package is restricted to compensation staff.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-018',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Return-to-work file with diagnosis notes',
    notes: 'Explicit health record content.',
    fileName: 'l1-018-pb-return-to-work.docx',
    sections: [
      {
        title: 'Case file',
        text: 'The file summarizes the employee medical note, return-to-work restrictions, diagnosis language from the physician, and a phased schedule recommendation.'
      },
      {
        title: 'Safeguards',
        text: 'The file includes personal health record information. Disclosure would cause serious personal injury and workplace harm.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-019',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Performance file with employee id and grievance summary',
    notes: 'Personal employment file with elevated sensitivity.',
    fileName: 'l1-019-pb-performance-grievance.docx',
    sections: [
      {
        title: 'Employment file note',
        text: 'The note references the employee id, a grievance chronology, and a supervisor assessment prepared before a formal meeting.'
      },
      {
        title: 'Risk',
        text: 'Release outside the authorized circle would seriously affect the employee and the integrity of the process.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-020',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Compensation correction with salary history',
    notes: 'Salary history and payroll correction data.',
    fileName: 'l1-020-pb-compensation-correction.docx',
    sections: [
      {
        title: 'Correction details',
        text: 'Compensation staff documented a salary overpayment correction, prior salary values, tax deductions, and direct deposit adjustments for one employee.'
      },
      {
        title: 'Handling instructions',
        text: 'The file is limited to compensation and finance advisors because disclosure could cause serious financial and reputational injury.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),

  createBenchmarkCase({
    id: 'L1-021',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Medical leave extension note for analyst',
    notes: 'Direct medical content.',
    fileName: 'l1-021-pb-medical-leave-extension.docx',
    sections: [
      {
        title: 'Extension note',
        text: 'The analyst submitted a medical note extending leave due to treatment and mental health follow-up. The manager attached the note to a staffing update.'
      },
      {
        title: 'Impact',
        text: 'The combined document contains sensitive health record information and should be treated as serious injury material.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-022',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Emergency contact file with employee medical restrictions',
    notes: 'Personal identifiers plus health restrictions.',
    fileName: 'l1-022-pb-emergency-contacts.docx',
    sections: [
      {
        title: 'Emergency list',
        text: 'The list records employee emergency contacts, medication storage instructions, and medical accommodation notes for after-hours supervisors.'
      },
      {
        title: 'Handling guidance',
        text: 'Only supervisors with a need to know may access the file because disclosure could cause serious personal injury.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-023',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Lost wallet reimbursement with banking details',
    notes: 'Financial reimbursement file.',
    fileName: 'l1-023-pb-wallet-reimbursement.docx',
    sections: [
      {
        title: 'Claim package',
        text: 'The reimbursement package includes transit receipts, a void cheque, bank account confirmation, and salary coding for urgent repayment.'
      },
      {
        title: 'Assessment',
        text: 'Because the package contains banking details and salary-linked information, it should be treated as Protected B.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-024',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Credential reset record with employee id',
    notes: 'Credentials plus identifier data.',
    fileName: 'l1-024-pb-credential-reset.docx',
    sections: [
      {
        title: 'Reset record',
        text: 'IT support logged the employee id, temporary credential issue, token handoff, and manager approval for an urgent account recovery.'
      },
      {
        title: 'Distribution',
        text: 'The record must stay within the support chain because disclosure could lead to unauthorized access and serious injury.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-025',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Case management note with diagnosis and salary continuation',
    notes: 'Strong health and financial cues.',
    fileName: 'l1-025-pb-case-management.docx',
    sections: [
      {
        title: 'Case note',
        text: 'The labour relations advisor recorded the employee diagnosis summary, salary continuation request, and dates of treatment under the case file.'
      },
      {
        title: 'Result',
        text: 'The note would clearly cause serious personal injury if disclosed and therefore belongs in Protected B handling.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),

  createBenchmarkCase({
    id: 'L1-026',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Accommodation tracker with personnel file numbers',
    notes: 'Personal and medical details grouped in one tracker.',
    fileName: 'l1-026-pb-accommodation-tracker.docx',
    sections: [
      {
        title: 'Tracker',
        text: 'The tracker lists personnel file references, accommodation restrictions, medical follow-up dates, and workstation status for five employees.'
      },
      {
        title: 'Handling',
        text: 'The aggregation of medical and identifier data requires Protected B treatment.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-027',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Branch discipline file with grievance chronology',
    notes: 'Sensitive employment relations file.',
    fileName: 'l1-027-pb-discipline-file.docx',
    sections: [
      {
        title: 'Chronology',
        text: 'The file sets out disciplinary steps, grievance meeting dates, the employee id, and management recommendations for further action.'
      },
      {
        title: 'Impact statement',
        text: 'The document could seriously affect the employee and the fairness of proceedings if released beyond authorized officials.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-028',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Vaccination accommodation register',
    notes: 'Health register with names and restrictions.',
    fileName: 'l1-028-pb-vaccination-register.docx',
    sections: [
      {
        title: 'Register',
        text: 'The register records employee names, vaccination accommodation decisions, medical note references, and return dates for restricted tasks.'
      },
      {
        title: 'Protection note',
        text: 'Because the register links names to health-related decisions, it requires Protected B handling.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-029',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Remote access issue ticket with token and manager note',
    notes: 'Contains credentials and identity linkage.',
    fileName: 'l1-029-pb-remote-access-ticket.docx',
    sections: [
      {
        title: 'Ticket details',
        text: 'The ticket records the user name, token serial, temporary credential reset, and manager confirmation for an after-hours remote access issue.'
      },
      {
        title: 'Assessment',
        text: 'The presence of credential information and employee identity makes disclosure capable of causing serious injury.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-030',
    difficulty: 'Level 1',
    expectedLabel: 'Protected C',
    title: 'Protected C relocation list for threatened witnesses',
    notes: 'Explicit marking and extremely grave injury if exposed.',
    fileName: 'l1-030-pc-relocation-witnesses.docx',
    extractedMarkings: ['Protected C'],
    sections: [
      {
        title: 'Relocation schedule',
        text: 'Protected C. The schedule identifies temporary addresses, transport windows, and case aliases for witnesses being moved between secure accommodations.'
      },
      {
        title: 'Handling',
        text: 'Disclosure would place individuals at severe risk and undermine protective operations. Circulation is limited to the relocation cell.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Protected C', nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-031',
    difficulty: 'Level 1',
    expectedLabel: 'Protected C',
    title: 'Protected C continuity relocation priorities',
    notes: 'Explicit marking for severe operational harm.',
    fileName: 'l1-031-pc-continuity-priorities.docx',
    extractedMarkings: ['Protected C'],
    sections: [
      {
        title: 'Priority list',
        text: 'Protected C. The list sets out which critical service teams would be moved first to alternate facilities if a downtown campus became unavailable.'
      },
      {
        title: 'Reason',
        text: 'Unauthorized disclosure would create extremely grave operational injury by exposing continuity sequencing and personnel movement priorities.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Protected C', nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-032',
    difficulty: 'Level 1',
    expectedLabel: 'Protected C',
    title: 'Protected C secure site access matrix',
    notes: 'Exposure would severely compromise a protected site.',
    fileName: 'l1-032-pc-site-access-matrix.docx',
    extractedMarkings: ['Protected C'],
    sections: [
      {
        title: 'Access matrix',
        text: 'Protected C. The matrix links site zones to escort rules, overnight occupancy levels, and fallback workstation assignments for a protected coordination centre.'
      },
      {
        title: 'Impact note',
        text: 'The document would enable a detailed understanding of protective arrangements and could cause extremely grave injury if lost.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Protected C', nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-033',
    difficulty: 'Level 1',
    expectedLabel: 'Protected C',
    title: 'Protected C evacuation assignment table',
    notes: 'Explicitly protected emergency movement plan.',
    fileName: 'l1-033-pc-evacuation-table.docx',
    extractedMarkings: ['Protected C'],
    sections: [
      {
        title: 'Assignment table',
        text: 'Protected C. The table identifies who activates the evacuation sequence for a secure residence and which vehicles are used for each dependent group.'
      },
      {
        title: 'Handling note',
        text: 'It would cause extremely grave harm to individuals and operations if this plan were disclosed.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Protected C', nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-034',
    difficulty: 'Level 1',
    expectedLabel: 'Protected C',
    title: 'Protected C alternate facility activation package',
    notes: 'Critical service survival package.',
    fileName: 'l1-034-pc-alternate-facility.docx',
    extractedMarkings: ['Protected C'],
    sections: [
      {
        title: 'Activation package',
        text: 'Protected C. The package identifies alternate facilities, pre-positioned vehicles, and custody arrangements for portable systems used to sustain a critical service.'
      },
      {
        title: 'Assessment',
        text: 'Exposure would reveal the full emergency move package and could cause extremely grave operational injury.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Protected C', nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),

  createBenchmarkCase({
    id: 'L1-035',
    difficulty: 'Level 1',
    expectedLabel: 'Protected C',
    title: 'Protected C continuity annex for ministerial residence',
    notes: 'Residence-related continuity plan with severe harm potential.',
    fileName: 'l1-035-pc-residence-annex.docx',
    extractedMarkings: ['Protected C'],
    sections: [
      {
        title: 'Residence annex',
        text: 'Protected C. The annex sets out entry restrictions, evacuation tasks, and child-care transfer arrangements if the residence is secured on short notice.'
      },
      {
        title: 'Damage statement',
        text: 'The package reveals sensitive protective arrangements and could produce extremely grave injury if compromised.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Protected C', nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),

  createBenchmarkCase({
    id: 'L1-036',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential law enforcement target summary',
    notes: 'National-interest injury with explicit marking.',
    fileName: 'l1-036-conf-target-summary.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Target summary',
        text: 'Confidential. The package summarizes a law enforcement file on an investigation target and lists border security concerns linked to planned travel.'
      },
      {
        title: 'Handling',
        text: 'Disclosure would injure the national interest and compromise investigative activity.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-037',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential protected source meeting note',
    notes: 'Source sensitivity with national-interest effect.',
    fileName: 'l1-037-conf-source-note.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Meeting note',
        text: 'Confidential. The note records information provided by a protected source during a meeting with field intelligence officers and identifies follow-up locations.'
      },
      {
        title: 'Impact',
        text: 'Improper release would endanger the source relationship and injure the national interest.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-038',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential border referral package',
    notes: 'Straightforward border security harm case.',
    fileName: 'l1-038-conf-border-referral.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Referral package',
        text: 'Confidential. Border security officers prepared a referral package linking a traveller to an active investigation target and an intelligence watch note.'
      },
      {
        title: 'Restriction',
        text: 'The package must remain on a need-to-know basis because disclosure would compromise enforcement action.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-039',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential source reliability worksheet',
    notes: 'Protected source evaluation content.',
    fileName: 'l1-039-conf-source-reliability.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Worksheet',
        text: 'Confidential. The worksheet scores protected source reliability, notes intelligence access, and outlines the next debriefing topic.'
      },
      {
        title: 'Consequences',
        text: 'Loss of the worksheet would injure the national interest and hinder intelligence collection.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-040',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential enforcement staging note',
    notes: 'Simple enforcement note with national-interest injury.',
    fileName: 'l1-040-conf-enforcement-staging.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Staging note',
        text: 'Confidential. The note provides the time and place for a law enforcement team to meet before approaching an investigation target at a border crossing.'
      },
      {
        title: 'Handling note',
        text: 'The note should remain restricted because disclosure would alert the subject and injure enforcement operations.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),

  createBenchmarkCase({
    id: 'L1-041',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential intelligence referral to partners',
    notes: 'Partner intelligence referral with moderate national sensitivity.',
    fileName: 'l1-041-conf-intel-referral.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Referral',
        text: 'Confidential. Intelligence staff prepared a referral to a partner unit describing an investigation target and relevant protected source reporting.'
      },
      {
        title: 'Rationale',
        text: 'The referral could injure the national interest if exposed before action is taken.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-042',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential port interception note',
    notes: 'Short interception note linked to target activity.',
    fileName: 'l1-042-conf-port-interception.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Interception note',
        text: 'Confidential. The note outlines which officers will meet an investigation target arriving by ferry and what intelligence questions must be asked first.'
      },
      {
        title: 'Restriction',
        text: 'Disclosure would prejudice the approach and injure the national interest.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-043',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential case note for source payment pickup',
    notes: 'Protected source handling detail.',
    fileName: 'l1-043-conf-source-pickup.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Pickup note',
        text: 'Confidential. The case note lists the payment pickup point for a protected source and the telephone script to confirm attendance.'
      },
      {
        title: 'Why confidential',
        text: 'The note would compromise source handling and injure the national interest if disclosed.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-044',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential field observation summary',
    notes: 'National-interest injury, not yet at serious threshold.',
    fileName: 'l1-044-conf-field-observation.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Observation summary',
        text: 'Confidential. Field officers summarized an observation of a suspected facilitator and linked the activity to an existing intelligence lead.'
      },
      {
        title: 'Expected harm',
        text: 'The record would injure the national interest by exposing an active lead if released.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-045',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret classified network maintenance window',
    notes: 'Straight Secret case with explicit marking.',
    fileName: 'l1-045-secret-network-window.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Maintenance window',
        text: 'Secret. The package identifies the classified network maintenance window, fallback communications path, and validation checklist for national defence systems.'
      },
      {
        title: 'Restriction',
        text: 'Compromise would seriously injure the national interest by exposing classified network dependencies.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-046',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret signals intelligence collection schedule',
    notes: 'Explicit Secret material.',
    fileName: 'l1-046-secret-sigint-schedule.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Collection schedule',
        text: 'Secret. The schedule coordinates signals intelligence coverage periods, named watch officers, and collection system handover times.'
      },
      {
        title: 'Damage assessment',
        text: 'Disclosure would seriously injure the national interest by revealing collection timing and system availability.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-047',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret defence readiness task board',
    notes: 'National defence content at Secret.',
    fileName: 'l1-047-secret-readiness-board.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Task board',
        text: 'Secret. The board assigns national defence readiness tasks to specific teams and lists the standby posture needed to support a contingency alert.'
      },
      {
        title: 'Handling note',
        text: 'Compromise would cause serious national injury by exposing force readiness posture and dependencies.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-048',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret communications reroute instructions',
    notes: 'Classified network reroute plan.',
    fileName: 'l1-048-secret-reroute.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Reroute instructions',
        text: 'Secret. These instructions explain how to reroute classified network traffic if the primary exchange fails during a national event.'
      },
      {
        title: 'Risk',
        text: 'The instructions reveal sensitive technical posture and would seriously injure the national interest if lost.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-049',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret signals intelligence duty roster',
    notes: 'Identifies SIGINT watch structure.',
    fileName: 'l1-049-secret-duty-roster.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Duty roster',
        text: 'Secret. The roster names the signals intelligence duty teams, alternate leads, and escalation path for collection outages overnight.'
      },
      {
        title: 'Handling',
        text: 'This document would seriously injure the national interest by disclosing internal watch arrangements.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),

  createBenchmarkCase({
    id: 'L1-050',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret platform availability briefing',
    notes: 'Operational readiness and defence indicators.',
    fileName: 'l1-050-secret-platform-availability.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Briefing',
        text: 'Secret. The briefing identifies which national defence platforms are available this week and the communications rules for rapid retasking.'
      },
      {
        title: 'Expected injury',
        text: 'Disclosure would cause serious injury to the national interest by exposing readiness posture.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-051',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret alternate circuit test plan',
    notes: 'Technical test plan for classified network fallback.',
    fileName: 'l1-051-secret-circuit-test.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Test plan',
        text: 'Secret. The plan sets the order for testing alternate classified network circuits and the rollback steps if the secure exchange does not recover.'
      },
      {
        title: 'Handling note',
        text: 'Loss of the plan would seriously injure secure communications posture.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-052',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret defence liaison call sheet',
    notes: 'National defence coordination with serious national harm if exposed.',
    fileName: 'l1-052-secret-liaison-call-sheet.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Call sheet',
        text: 'Secret. The call sheet provides the sequence for notifying national defence liaison officers if a contingency alert is issued overnight.'
      },
      {
        title: 'Reason',
        text: 'The sequence and named contacts would seriously injure the national interest if exposed.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-053',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret collection outage response note',
    notes: 'SIGINT response path.',
    fileName: 'l1-053-secret-collection-outage.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Outage response',
        text: 'Secret. The note defines who must respond if a signals intelligence collection path drops during a scheduled surveillance window.'
      },
      {
        title: 'Restriction',
        text: 'The operational response chain must remain tightly held because compromise would seriously injure the national interest.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-054',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret special access source registry',
    notes: 'Highest national-interest injury with explicit marking.',
    fileName: 'l1-054-ts-source-registry.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Registry',
        text: 'Top Secret. The registry identifies special access source aliases, contact triggers, and emergency extraction conditions for a compartmented program.'
      },
      {
        title: 'Damage statement',
        text: 'Compromise would cause exceptionally grave injury to the national interest and place lives at immediate risk.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-055',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret compartmented collection posture brief',
    notes: 'Explicit Top Secret case.',
    fileName: 'l1-055-ts-collection-posture.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Posture brief',
        text: 'Top Secret. The brief sets the compartmented collection posture for a national crisis and names the authorizing chain for emergency activation.'
      },
      {
        title: 'Expected injury',
        text: 'Unauthorized disclosure would cause exceptionally grave injury to the national interest.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-056',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret emergency war room activation binder',
    notes: 'Highest-level emergency activation content.',
    fileName: 'l1-056-ts-war-room-binder.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Activation binder',
        text: 'Top Secret. The binder contains emergency war room activation instructions, compartmented participant lists, and source protection measures.'
      },
      {
        title: 'Protection note',
        text: 'Disclosure would cause exceptionally grave injury to national security and cannot be tolerated.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-057',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret compartmented liaison route card',
    notes: 'Sensitive route card for special access movement.',
    fileName: 'l1-057-ts-route-card.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Route card',
        text: 'Top Secret. The card specifies the secure movement route and authentication steps for compartmented liaison officers during an emergency call-out.'
      },
      {
        title: 'Why top secret',
        text: 'Loss of the route card would cause exceptionally grave injury to the national interest.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-058',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret covert partner notification sequence',
    notes: 'Exceptional harm if disclosed.',
    fileName: 'l1-058-ts-partner-notification.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Notification sequence',
        text: 'Top Secret. The sequence names covert partner channels and the order in which they must be notified if a compartmented collection program is exposed.'
      },
      {
        title: 'Damage statement',
        text: 'The material would cause exceptionally grave injury to the national interest if compromised.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-059',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret source relocation trigger note',
    notes: 'High-compartment relocation trigger note.',
    fileName: 'l1-059-ts-source-relocation.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Trigger note',
        text: 'Top Secret. The note defines the conditions under which a compartmented source network must be relocated and which channels can authorize the move.'
      },
      {
        title: 'Handling',
        text: 'Compromise would cause exceptionally grave injury to the national interest and endanger multiple human sources.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),

  createBenchmarkCase({
    id: 'L1-060',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret strategic signals watch board',
    notes: 'Compartmented strategic watch information.',
    fileName: 'l1-060-ts-watch-board.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Watch board',
        text: 'Top Secret. The watch board identifies who can see compartmented strategic signals intelligence during a crisis weekend and the fallback approval chain.'
      },
      {
        title: 'Protection rationale',
        text: 'The board would cause exceptionally grave national harm if disclosed outside the compartment.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-061',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret emergency compartment access list',
    notes: 'Explicit highest-level access roster.',
    fileName: 'l1-061-ts-access-list.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Access list',
        text: 'Top Secret. The list names the cleared individuals who may enter the compartmented operations room during an emergency activation.'
      },
      {
        title: 'Use note',
        text: 'The list cannot be disclosed because it would cause exceptionally grave harm to national security and source protection.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-062',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret emergency extraction authority card',
    notes: 'Authority card tied to special access source extraction.',
    fileName: 'l1-062-ts-extraction-authority.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Authority card',
        text: 'Top Secret. The card states who can authorize the emergency extraction of a compartmented source under crisis conditions.'
      },
      {
        title: 'Risk note',
        text: 'Any disclosure would cause exceptionally grave injury to the national interest and compromise a special access program.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-063',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret covert continuity contact strip',
    notes: 'Compact but exceptionally sensitive contact material.',
    fileName: 'l1-063-ts-contact-strip.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Contact strip',
        text: 'Top Secret. The strip lists covert continuity contacts and one-time notification windows for use only if regular channels fail.'
      },
      {
        title: 'Assessment',
        text: 'Because it reveals compartmented emergency channels, the strip would cause exceptionally grave national injury if disclosed.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-064',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret crisis source protection worksheet',
    notes: 'Worksheet for compartmented source protection.',
    fileName: 'l1-064-ts-source-protection.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Worksheet',
        text: 'Top Secret. The worksheet pairs source aliases with extraction options and fallback contact methods if the compartmented program is exposed.'
      },
      {
        title: 'Restriction',
        text: 'The worksheet must remain Top Secret because compromise would cause exceptionally grave injury to the national interest.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),

  createBenchmarkCase({
    id: 'L1-065',
    difficulty: 'Level 1',
    expectedLabel: 'Public',
    title: 'Public holiday closure message for call centre',
    notes: 'Extra public case to round out level one coverage.',
    fileName: 'l1-065-public-holiday-closure.docx',
    extractedMarkings: ['Public'],
    sections: [
      {
        title: 'Closure notice',
        text: 'Public. The call centre will close on the statutory holiday and reopen at 08:30 the next business day.'
      },
      {
        title: 'Publication',
        text: 'The message is approved for website publication, telephone greeting updates, and social media replies.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Public', nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L1-066',
    difficulty: 'Level 1',
    expectedLabel: 'Public',
    title: 'Public update on passport outreach clinic',
    notes: 'Low-risk public announcement.',
    fileName: 'l1-066-public-outreach-clinic.docx',
    extractedMarkings: ['Public'],
    sections: [
      {
        title: 'Update',
        text: 'Public. A temporary passport outreach clinic will operate from the civic hall on Friday for walk-in information sessions.'
      },
      {
        title: 'Distribution',
        text: 'Staff may share the update freely with local media and municipal partners.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Public', nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  }),
  createBenchmarkCase({
    id: 'L1-067',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Internal seating plan for branch retreat',
    notes: 'Minor privacy and preference information only.',
    fileName: 'l1-067-pa-seating-plan.docx',
    sections: [
      {
        title: 'Plan',
        text: 'The branch retreat seating plan records preferred names, accessibility notes, and emergency phone numbers for facilitators.'
      },
      {
        title: 'Handling',
        text: 'The plan should not be released outside organizers, but the probable injury is limited.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-068',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Case file for workplace injury follow-up',
    notes: 'Health and employment detail combined.',
    fileName: 'l1-068-pb-workplace-injury.docx',
    sections: [
      {
        title: 'Follow-up file',
        text: 'The workplace injury follow-up file includes the employee medical note, accommodation request, salary continuation status, and return date.'
      },
      {
        title: 'Impact',
        text: 'Release would cause serious personal injury and therefore requires Protected B handling.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-069',
    difficulty: 'Level 1',
    expectedLabel: 'Protected C',
    title: 'Protected C protective movement note',
    notes: 'Short but severe non-national injury case.',
    fileName: 'l1-069-pc-protective-movement.docx',
    extractedMarkings: ['Protected C'],
    sections: [
      {
        title: 'Movement note',
        text: 'Protected C. The note lists the route, timing, and dependent support sequence for a protected family relocation.'
      },
      {
        title: 'Assessment',
        text: 'Compromise would create extremely grave harm to individuals and operations.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Protected C', nonNationalImpact: 'extremely_grave', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-070',
    difficulty: 'Level 1',
    expectedLabel: 'Confidential',
    title: 'Confidential interview note from border source',
    notes: 'Protected source reference sets national-interest injury.',
    fileName: 'l1-070-conf-border-source.docx',
    extractedMarkings: ['Confidential'],
    sections: [
      {
        title: 'Interview note',
        text: 'Confidential. A protected source described planned border security evasion methods used by an investigation target.'
      },
      {
        title: 'Restriction',
        text: 'Release would injure the national interest and compromise source value.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Confidential', nationalInterestImpact: 'national_injury', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-071',
    difficulty: 'Level 1',
    expectedLabel: 'Secret',
    title: 'Secret contingency call-up matrix',
    notes: 'Serious national-interest injury case.',
    fileName: 'l1-071-secret-callup-matrix.docx',
    extractedMarkings: ['Secret'],
    sections: [
      {
        title: 'Matrix',
        text: 'Secret. The matrix lists who must be called to support a national defence readiness shift and which classified network bridge they must use.'
      },
      {
        title: 'Handling',
        text: 'Exposure would seriously injure the national interest by revealing the response chain.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Secret', nationalInterestImpact: 'national_serious', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-072',
    difficulty: 'Level 1',
    expectedLabel: 'Top Secret',
    title: 'Top Secret contingency source shutdown card',
    notes: 'Compact but clearly highest-level content.',
    fileName: 'l1-072-ts-shutdown-card.docx',
    extractedMarkings: ['Top Secret'],
    sections: [
      {
        title: 'Shutdown card',
        text: 'Top Secret. The shutdown card specifies how to suspend a compartmented source network if exposure is suspected.'
      },
      {
        title: 'Damage note',
        text: 'Compromise would cause exceptionally grave injury to the national interest.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Top Secret', nationalInterestImpact: 'national_exceptional', aggregationRisk: 'yes', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-073',
    difficulty: 'Level 1',
    expectedLabel: 'Protected B',
    title: 'Salary reconciliation sheet for acting assignments',
    notes: 'Straight financial sensitivity case.',
    fileName: 'l1-073-pb-acting-salary-sheet.docx',
    sections: [
      {
        title: 'Reconciliation sheet',
        text: 'The sheet lists salary changes, acting pay amounts, and direct deposit corrections for employees who rotated into higher duties.'
      },
      {
        title: 'Restriction',
        text: 'Unauthorized release would cause serious financial and personal injury.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'serious', aggregationRisk: 'possible', distributionScope: 'restricted_need_to_know' })
  }),
  createBenchmarkCase({
    id: 'L1-074',
    difficulty: 'Level 1',
    expectedLabel: 'Protected A',
    title: 'Temporary building access list for contractors',
    notes: 'Basic list with names and scheduling details.',
    fileName: 'l1-074-pa-contractor-access-list.docx',
    sections: [
      {
        title: 'Access list',
        text: 'The list names contractors scheduled to enter the building this week and records escort requirements and parking plate numbers.'
      },
      {
        title: 'Handling',
        text: 'The list should stay internal because it contains personal and logistical details, though the likely injury is limited.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ nonNationalImpact: 'injury', aggregationRisk: 'possible', distributionScope: 'internal_limited' })
  }),
  createBenchmarkCase({
    id: 'L1-075',
    difficulty: 'Level 1',
    expectedLabel: 'Public',
    title: 'Public advisory on front-counter renovation noise',
    notes: 'Final public case closing the level.',
    fileName: 'l1-075-public-renovation-advisory.docx',
    extractedMarkings: ['Public'],
    sections: [
      {
        title: 'Advisory',
        text: 'Public. Visitors may hear intermittent renovation noise near the front counter between 13:00 and 16:00 this week.'
      },
      {
        title: 'Use',
        text: 'The text may be shared publicly without restriction.'
      }
    ],
    reviewedAnswers: reviewedAnswers({ officialMarking: 'Public', nonNationalImpact: 'none', aggregationRisk: 'no', distributionScope: 'public_release' })
  })
]
