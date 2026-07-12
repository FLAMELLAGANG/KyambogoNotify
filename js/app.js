/* ═══════════════════════════════════════════════════════════════
   KYAMBOGO NOTIFY — app.js  (Shared Data Store + Utilities)
   ═══════════════════════════════════════════════════════════════ */

/* ── ADMIN CREDENTIALS ── */
var ADMIN_CREDENTIALS = { username: 'kyu_admin', password: 'KyU@Notify2026!' };

/* ── COLOUR TOKENS (inline-style fallbacks for dynamic HTML) ── */
var C = {
  primary:'#725c00', primaryFixed:'#ffe07e', primaryContainer:'#ebc84e',
  onPrimary:'#ffffff', onPrimaryFixed:'#231b00', onPrimaryContainer:'#675300',
  surface:'#f9f9f9', surfaceContainer:'#eeeeee', surfaceContainerHigh:'#e8e8e8',
  surfaceContainerHighest:'#e2e2e2', surfaceContainerLow:'#f3f3f4', surfaceContainerLowest:'#ffffff',
  onSurface:'#1a1c1c', secondary:'#5f5e5e', secondaryContainer:'#e5e2e1',
  onSecondaryContainer:'#656464', onTertiaryFixed:'#1a1c1c', onTertiary:'#ffffff',
  error:'#ba1a1a', errorContainer:'#ffdad6', outline:'#7e7663', outlineVariant:'#cfc6af',
  tertiaryFixed:'#e2e2e2', tertiaryContainer:'#cacbcb', onTertiaryContainer:'#545656',
  secondaryFixedDim:'#c9c6c5', primaryFixedDim:'#e6c44a'
};

/* ═══════════════════════════════════════════════════════════════
   DATA STORE
   ═══════════════════════════════════════════════════════════════ */
var KyuDB = {

  notices: [
    {
      id:'ntc-exam-timetable-001',
      title:'2026/2027 Semester One Final Examination Timetable',
      category:'Examinations',
      urgency:'urgent',
      author:'Academic Registrar',
      department:'Office of the Academic Registrar',
      date:'2026-10-28',
      snippet:'All students must note the revised examination schedule. Several papers have been rescheduled to accommodate elective clusters.',
      body:'Examinations are scheduled to commence on Monday, November 4, 2026, across all campus venues. Students are strongly advised to verify their specific paper codes and seating arrangements as several changes have been made from the draft version to accommodate elective clusters.\n\nThe University maintains a zero-tolerance policy towards examination malpractice. Any student found in possession of unauthorized materials—including mobile phones, smartwatches, or handwritten notes—will face immediate disciplinary action as per the University Charter.',
      deadline:'Friday, October 31, 2026 — 5:00 PM',
      requirements:['Valid University Identity Card (Physical copy required).','Duly signed Examination Permit (Downloadable from the Student Portal).','Proof of full tuition payment for the current semester.'],
      attachments:[{name:'Final Exam Timetable.pdf',size:'2.4 MB',date:'REVISED OCT 14'},{name:'Examination Guidelines.pdf',size:'1.1 MB',date:'STUDENT CODE'}]
    },
    {
      id:'ntc-student-id-system-002',
      title:'New Student ID System Launch — Mandatory Registration',
      category:'Administration',
      urgency:'urgent',
      author:'Directorate of Information Systems',
      department:'ICT Directorate',
      date:'2026-10-25',
      snippet:'All students are required to register for the new biometric student ID system by November 15, 2026.',
      body:'The Directorate of Information Systems is pleased to announce the launch of the new biometric Student Identification System. This system replaces the old card-based IDs and will be the sole accepted form of identity for all university services from January 2027.\n\nRegistration is open from October 28 to November 15, 2026 at the ICT Centre, Block C. Students must bring their old ID cards and a recent passport photo.',
      deadline:'November 15, 2026 — Registration Deadline',
      requirements:['Old student ID card','Recent passport photograph (2 copies)','Original admission letter or student registration form'],
      attachments:[{name:'ID Registration Guide.pdf',size:'1.2 MB',date:'OCT 25'}]
    },
    {
      id:'ntc-guild-elections-003',
      title:'Call for Applications: Student Guild Leadership Positions',
      category:'Student Life',
      urgency:'normal',
      author:'Electoral Commission',
      department:'Students Guild',
      date:'2026-10-18',
      snippet:'The Electoral Commission is now accepting nomination forms for the upcoming guild representative council (GRC) elections.',
      body:'The Electoral Commission hereby invites all interested students to apply for leadership positions in the 2026/2027 Students Guild. Positions available include Guild President, Vice-President, and Faculty Representatives.\n\nNomination forms are available at the Guild Secretariat, Administration Block Room 12. Completed forms must be submitted by November 5, 2026.',
      deadline:'November 5, 2026 — Nominations Close',
      requirements:['Completed nomination form','Two academic referees','Clear academic standing (no pending disciplinary cases)'],
      attachments:[{name:'Nomination Form.pdf',size:'0.8 MB',date:'OCT 18'}]
    },
    {
      id:'ntc-tuition-fees-004',
      title:'Semester Two Tuition Fee Payment Deadline Notice',
      category:'Finance',
      urgency:'urgent',
      author:'Bursar\'s Office',
      department:'Finance Department',
      date:'2026-10-20',
      snippet:'All students are reminded that Semester Two tuition fees must be paid by November 30, 2026 to avoid deregistration.',
      body:'The Bursar\'s Office wishes to remind all continuing students that the deadline for Semester Two tuition fee payment is November 30, 2026. Students who fail to clear their fees by this date will be deregistered from their programmes and denied access to university facilities.\n\nPayment can be made via bank transfer to Stanbic Bank Account No. 9030004567891 or through MTN Mobile Money to 0312-290000.',
      deadline:'November 30, 2026 — Final Payment Deadline',
      requirements:['Payment receipt','Student number reference on all transactions'],
      attachments:[{name:'Fee Structure 2026-2027.pdf',size:'1.8 MB',date:'SEP 01'}]
    },
    {
      id:'ntc-library-hours-005',
      title:'Extended Library Hours During Examination Period',
      category:'Academics',
      urgency:'normal',
      author:'University Librarian',
      department:'Library Services',
      date:'2026-10-22',
      snippet:'The university library will operate extended hours from November 1–30 to support students during the examination period.',
      body:'To support students during the upcoming examination period, the University Library will operate extended hours from November 1 to November 30, 2026.\n\nNew hours: Monday–Friday 7:00 AM – 11:00 PM, Saturday–Sunday 8:00 AM – 10:00 PM. All reading rooms and computer labs will be fully operational.',
      attachments:[{name:'Library Extended Hours Schedule.pdf',size:'0.5 MB',date:'OCT 22'}]
    },
    {
      id:'ntc-football-championship-006',
      title:'Inter-Faculty Football Championship Finals — This Weekend',
      category:'Sports & Events',
      urgency:'normal',
      author:'Sports Department',
      department:'Physical Education & Sports',
      date:'2026-10-15',
      snippet:'The highly anticipated inter-faculty football championship finals will take place this Saturday at the main sports ground.',
      body:'The Sports Department is delighted to announce that the Inter-Faculty Football Championship Finals will be held on Saturday, November 2, 2026 at the Main Sports Ground starting at 2:00 PM.\n\nThe final match will be between the Faculty of Engineering and the Faculty of Education. Entry is free for all students and staff with valid university IDs.',
      attachments:[]
    },
    {
      id:'ntc-careers-fair-007',
      title:'Annual Careers Fair 2026 — Over 50 Employers Attending',
      category:'Careers',
      urgency:'normal',
      author:'Career Guidance Centre',
      department:'Student Affairs',
      date:'2026-10-12',
      snippet:'Kyambogo University\'s Annual Careers Fair will host over 50 top employers from various industries.',
      body:'The Career Guidance Centre is pleased to announce the Annual Careers Fair 2026, scheduled for November 15–16, 2026 at the University Conference Hall.\n\nOver 50 employers from banking, engineering, education, technology, and NGO sectors will be in attendance. Students in their final years are especially encouraged to attend and bring updated CVs.',
      deadline:'November 15–16, 2026 — Event Dates',
      attachments:[{name:'Participating Employers List.pdf',size:'1.5 MB',date:'OCT 12'},{name:'CV Writing Tips.pdf',size:'0.9 MB',date:'OCT 12'}]
    },
    {
      id:'ntc-health-vaccination-008',
      title:'Free Vaccination Drive — Meningitis & Hepatitis B',
      category:'Health & Welfare',
      urgency:'normal',
      author:'University Health Centre',
      department:'Student Health Services',
      date:'2026-10-10',
      snippet:'A free vaccination drive will be conducted at the University Health Centre from November 4–7, 2026.',
      body:'The University Health Centre in partnership with the Ministry of Health will conduct a free vaccination drive for all students and staff. Vaccines available include Meningitis (MenACWY) and Hepatitis B.\n\nNo appointment required. Simply present your university ID at the Health Centre, Science Block from 8:00 AM – 4:00 PM, November 4–7, 2026.',
      attachments:[{name:'Vaccination Information Sheet.pdf',size:'0.7 MB',date:'OCT 10'}]
    },
    {
      id:'ntc-research-conference-009',
      title:'Annual Research Conference Call for Abstracts',
      category:'Research & Innovation',
      urgency:'normal',
      author:'Directorate of Research',
      department:'Research & Publications',
      date:'2026-10-08',
      snippet:'The Directorate of Research invites submissions of research abstracts for the 2026 Annual Research Conference.',
      body:'The Directorate of Research invites all postgraduate students, academic staff, and researchers to submit abstracts for the 2026 Annual Research Conference themed "Technology, Sustainability and Development in East Africa."\n\nAbstracts of not more than 300 words should be submitted via email to research@kyu.ac.ug by November 10, 2026.',
      deadline:'November 10, 2026 — Abstract Submission Deadline',
      attachments:[{name:'Abstract Submission Guidelines.pdf',size:'1.1 MB',date:'OCT 08'},{name:'Conference Program Draft.pdf',size:'2.3 MB',date:'OCT 08'}]
    },
    {
      id:'ntc-accommodation-010',
      title:'Semester Two Accommodation Applications Now Open',
      category:'Administration',
      urgency:'normal',
      author:'Dean of Students',
      department:'Student Affairs',
      date:'2026-10-05',
      snippet:'Applications for university accommodation for Semester Two 2026/2027 are now being accepted.',
      body:'The Dean of Students office is now accepting applications for university accommodation for Semester Two, Academic Year 2026/2027. Priority will be given to first-year students, students with disabilities, and students coming from outside Kampala Metropolitan Area.\n\nApplication forms are available at the Student Affairs Office, Block A. Completed applications must be accompanied by proof of enrolment.',
      deadline:'November 20, 2026 — Application Deadline',
      requirements:['Completed accommodation application form','Proof of enrolment for current semester','Two passport photographs','Copy of student ID'],
      attachments:[{name:'Accommodation Application Form.pdf',size:'0.6 MB',date:'OCT 05'}]
    },
    {
      id:'ntc-engineering-lab-011',
      title:'Engineering Lab Closure Notice — Maintenance Schedule',
      category:'Administration',
      urgency:'urgent',
      author:'Dean of Engineering',
      department:'Faculty of Engineering',
      date:'2026-10-22',
      snippet:'The main Engineering laboratory complex will be closed for scheduled maintenance from November 1–3, 2026.',
      body:'This is to notify all students and staff of the Faculty of Engineering that the Main Laboratory Complex (Blocks E1-E4) will be closed for scheduled electrical maintenance and equipment calibration from Saturday, November 1 to Monday, November 3, 2026.\n\nAll practical sessions scheduled during this period will be rescheduled. Students will be notified through their respective course coordinators.',
      attachments:[]
    },
    {
      id:'ntc-scholarship-012',
      title:'Government of Uganda Scholarship Applications 2027',
      category:'Finance',
      urgency:'urgent',
      author:'Scholarships Office',
      department:'Academic Affairs',
      date:'2026-10-01',
      snippet:'Applications are open for the Government of Uganda Merit-Based Scholarship Programme for Academic Year 2027.',
      body:'The Scholarships Office invites applications for the Government of Uganda Merit-Based Scholarship Programme for the Academic Year 2027. Scholarships are available for undergraduate and postgraduate students with excellent academic records.\n\nEligibility: Minimum CGPA of 4.0, Ugandan citizen, enrolled in a government-sponsored programme.',
      deadline:'November 25, 2026 — Application Deadline',
      requirements:['Certified academic transcripts','Two academic referee letters','Proof of citizenship (National ID or Passport)','Statement of financial need'],
      attachments:[{name:'Scholarship Application Form.pdf',size:'1.4 MB',date:'OCT 01'},{name:'Scholarship Guidelines 2027.pdf',size:'2.0 MB',date:'OCT 01'}]
    },
    {
      id:'ntc-student-hub-013',
      title:'New Student Innovation Hub Opens — Application for Workspace',
      category:'Research & Innovation',
      urgency:'normal',
      author:'Vice Chancellor\'s Office',
      department:'Office of the Vice Chancellor',
      date:'2026-09-28',
      snippet:'Kyambogo University officially opens the state-of-the-art Student Innovation Hub. Students can apply for workspace.',
      body:'Kyambogo University is proud to announce the official opening of the Student Innovation Hub, a state-of-the-art facility designed to foster creativity, entrepreneurship, and technology-driven innovation among students.\n\nThe Hub features 3D printing labs, software development workstations, a maker space, and collaborative meeting rooms. Students with innovative project ideas can apply for dedicated workspace by submitting a project proposal to the Dean of Students office.',
      attachments:[{name:'Innovation Hub Brochure.pdf',size:'3.2 MB',date:'SEP 28'},{name:'Workspace Application Form.pdf',size:'0.9 MB',date:'SEP 28'}]
    },
    {
      id:'ntc-cultural-week-014',
      title:'Kyambogo Cultural Week 2026 — Programme of Events',
      category:'Student Life',
      urgency:'normal',
      author:'Guild Cultural Committee',
      department:'Students Guild',
      date:'2026-09-25',
      snippet:'Celebrate diversity and talent at the annual Kyambogo Cultural Week from November 10–14, 2026.',
      body:'The Guild Cultural Committee is delighted to present the programme for Kyambogo Cultural Week 2026, themed "Unity in Diversity." The event will run from November 10–14, 2026 and features cultural performances, food fairs, art exhibitions, and the prestigious Miss/Mr Kyambogo pageant.\n\nAll students are encouraged to participate. Department representatives should register their cultural groups by October 31, 2026.',
      deadline:'October 31, 2026 — Cultural Group Registration',
      attachments:[{name:'Cultural Week Programme.pdf',size:'1.6 MB',date:'SEP 25'}]
    },
    {
      id:'ntc-it-maintenance-015',
      title:'Planned ICT System Maintenance — Student Portal Downtime',
      category:'Administration',
      urgency:'urgent',
      author:'ICT Helpdesk',
      department:'ICT Directorate',
      date:'2026-10-29',
      snippet:'The Student Portal and all online services will be unavailable on Sunday, November 3, 2026 from 12:00 AM to 6:00 AM for scheduled maintenance.',
      body:'The ICT Directorate wishes to notify all students and staff that the Student Portal (portal.kyu.ac.ug), E-Learning Platform, and associated online services will be temporarily unavailable on Sunday, November 3, 2026 from 12:00 Midnight to 6:00 AM for scheduled system maintenance and security updates.\n\nAll transactions (exam registrations, fee payments, course registrations) should be completed before this window.',
      attachments:[]
    }
  ],

  submissions: [
    {
      id:'sub-001',
      userEmail:'alex.mugisha@students.kyu.ac.ug',
      userName:'Alex Mugisha',
      category:'Events',
      title:'Inter-Faculty Football Championship Finals',
      description:'The Football Championship Finals are this Saturday. Come cheer your faculty team!',
      date:'2024-10-18',
      status:'APPROVED',
      noticeId:'ntc-football-championship-006'
    },
    {
      id:'sub-002',
      userEmail:'alex.mugisha@students.kyu.ac.ug',
      userName:'Alex Mugisha',
      category:'Lost & Found',
      title:'Found Keys: Central Library Study Wing',
      description:'Found a bunch of keys near the study wing. Contact lost and found office.',
      date:'2024-10-12',
      status:'APPROVED',
      noticeId:'ntc-library-hours-005'
    },
    {
      id:'sub-003',
      userEmail:'alex.mugisha@students.kyu.ac.ug',
      userName:'Alex Mugisha',
      category:'Admin',
      title:'Registration Extension for Late Applicants',
      description:'Requesting admin to extend the registration window for late applicants.',
      date:'2024-10-05',
      status:'REJECTED',
      rejectionReason:'This falls outside our editorial scope. Please contact the Registrar\'s office directly.'
    },
    {
      id:'sub-004',
      userEmail:'faith.nakawooya@students.kyu.ac.ug',
      userName:'Faith Nakawooya',
      category:'Student Life',
      title:'Drama Club Auditions — Next Week',
      description:'The Kyambogo Drama Club is holding auditions for the end-of-year production next Monday at the Arts Block.',
      date:'2026-10-27',
      status:'UNDER REVIEW'
    }
  ],

  users: [
    { name:'Alex Mugisha', email:'alex.mugisha@students.kyu.ac.ug', avatar:'AM', initials:'AM' },
    { name:'Faith Nakawooya', email:'faith.nakawooya@students.kyu.ac.ug', avatar:'FN', initials:'FN' },
    { name:'Brian Ssekandi', email:'b.ssekandi@students.kyu.ac.ug', avatar:'BS', initials:'BS' }
  ],

  /* ── SIMULATED GOOGLE USERS (for auth mock) ── */
  googleUsers: [
    { name:'Alex Mugisha', email:'alex.mugisha@students.kyu.ac.ug', initials:'AM', avatar:'https://ui-avatars.com/api/?name=Alex+Mugisha&background=725c00&color=fff&size=64' },
    { name:'Faith Nakawooya', email:'faith.nakawooya@students.kyu.ac.ug', initials:'FN', avatar:'https://ui-avatars.com/api/?name=Faith+Nakawooya&background=725c00&color=fff&size=64' },
    { name:'Diana Atim', email:'diana.atim@students.kyu.ac.ug', initials:'DA', avatar:'https://ui-avatars.com/api/?name=Diana+Atim&background=725c00&color=fff&size=64' },
    { name:'Joel Aturinda', email:'j.aturinda@students.kyu.ac.ug', initials:'JA', avatar:'https://ui-avatars.com/api/?name=Joel+Aturinda&background=725c00&color=fff&size=64' },
    { name:'Sandra Kemigisha', email:'s.kemigisha@students.kyu.ac.ug', initials:'SK', avatar:'https://ui-avatars.com/api/?name=Sandra+Kemigisha&background=725c00&color=fff&size=64' }
  ],

  /* ─ Methods ─ */
  getNotices: function(filters) {
    var list = this.notices.slice();
    filters = filters || {};
    if (filters.category && filters.category !== 'All') {
      list = list.filter(n => n.category === filters.category);
    }
    if (filters.search) {
      var q = filters.search.toLowerCase();
      list = list.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.snippet.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q) ||
        (n.author && n.author.toLowerCase().includes(q))
      );
    }
    if (filters.timeline === '7days') {
      var cutoff = new Date(); cutoff.setDate(cutoff.getDate()-7);
      list = list.filter(n => new Date(n.date) >= cutoff);
    }
    if (filters.timeline === 'month') {
      var cutoff2 = new Date(); cutoff2.setMonth(cutoff2.getMonth()-1);
      list = list.filter(n => new Date(n.date) >= cutoff2);
    }
    if (filters.timeline === 'archived') {
      list = list.filter(n => new Date(n.date).getFullYear() <= 2024);
    }
    return list;
  },
  getNoticeById: function(id) {
    return this.notices.find(n => n.id === id) || null;
  },
  addNotice: function(notice) {
    notice.id = notice.id || ('ntc-' + Date.now());
    notice.date = notice.date || new Date().toISOString().slice(0,10);
    this.notices.unshift(notice);
    this._persistNotices();
    return notice;
  },
  updateNotice: function(id, data) {
    var idx = this.notices.findIndex(n => n.id === id);
    if (idx !== -1) {
      Object.assign(this.notices[idx], data);
      this._persistNotices();
      return this.notices[idx];
    }
    return null;
  },
  deleteNotice: function(id) {
    var idx = this.notices.findIndex(n => n.id === id);
    if (idx !== -1) { this.notices.splice(idx, 1); this._persistNotices(); return true; }
    return false;
  },
  addSubmission: function(data) {
    data.id = 'sub-' + Date.now();
    data.date = new Date().toISOString().slice(0,10);
    data.status = 'UNDER REVIEW';
    this.submissions.unshift(data);
    this._persistSubmissions();
    return data;
  },
  approveSubmission: function(id, editedData) {
    var sub = this.submissions.find(s => s.id === id);
    if (sub) {
      sub.status = 'APPROVED';
      if (editedData) Object.assign(sub, editedData);
      var notice = this.addNotice({
        id: 'ntc-' + id,
        title: sub.title,
        category: sub.category,
        urgency: 'normal',
        author: sub.userName || 'Visitor Submission',
        department: 'Community Board',
        date: new Date().toISOString().slice(0,10),
        snippet: sub.description ? sub.description.slice(0,120) : '',
        body: sub.description || '',
        attachments: []
      });
      sub.noticeId = notice.id;
      this._persistSubmissions();
      return sub;
    }
    return null;
  },
  rejectSubmission: function(id, reason) {
    var sub = this.submissions.find(s => s.id === id);
    if (sub) {
      sub.status = 'REJECTED';
      sub.rejectionReason = reason;
      this._persistSubmissions();
      return sub;
    }
    return null;
  },
  sendEmailNotification: function(to, subject, body) {
    showEmailToast({ to: to, subject: subject, preview: body, timestamp: new Date().toLocaleTimeString() });
  },
  _persistNotices: function() {
    try { localStorage.setItem('kyu_notices_extra', JSON.stringify(this.notices.filter(n => n.id.startsWith('ntc-sub-') || n._dynamic))); } catch(e){}
  },
  _persistSubmissions: function() {
    try { localStorage.setItem('kyu_submissions', JSON.stringify(this.submissions)); } catch(e){}
  },
  _loadPersisted: function() {
    try {
      var subs = localStorage.getItem('kyu_submissions');
      if (subs) { this.submissions = JSON.parse(subs); }
      var extras = localStorage.getItem('kyu_notices_extra');
      if (extras) {
        var ex = JSON.parse(extras);
        ex.forEach(n => { if (!this.notices.find(x => x.id === n.id)) { this.notices.unshift(n); } });
      }
    } catch(e) {}
  }
};

/* Load persisted data on boot */
KyuDB._loadPersisted();

/* ═══════════════════════════════════════════════════════════════
   AUTH HELPERS
   ═══════════════════════════════════════════════════════════════ */
function getSession() {
  try { var s = localStorage.getItem('kyu_session'); return s ? JSON.parse(s) : null; } catch(e){ return null; }
}
function setSession(user) {
  try { localStorage.setItem('kyu_session', JSON.stringify(user)); } catch(e){}
}
function clearSession() {
  try { localStorage.removeItem('kyu_session'); } catch(e){}
}
function isAdmin() {
  try { return localStorage.getItem('kyu_admin_session') === 'true'; } catch(e){ return false; }
}

/* ═══════════════════════════════════════════════════════════════
   TOAST SYSTEM
   ═══════════════════════════════════════════════════════════════ */
function showToast(message, type) {
  type = type || 'info';
  var container = document.getElementById('kyu-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'kyu-toast-container';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:12px;max-width:380px;';
    document.body.appendChild(container);
  }
  var colors = { success:'#1a7c3a', error:'#ba1a1a', info:'#725c00', email:'#1a1c1c', warning:'#d97706' };
  var icons = { success:'check_circle', error:'cancel', info:'info', email:'mail', warning:'warning' };
  var toast = document.createElement('div');
  toast.style.cssText = 'background:' + (colors[type]||colors.info) + ';color:#fff;padding:14px 18px;border-radius:8px;display:flex;align-items:center;gap:12px;font-family:"Plus Jakarta Sans",sans-serif;font-size:14px;font-weight:600;box-shadow:0 4px 24px rgba(0,0,0,0.18);transform:translateX(120%);transition:transform 0.3s ease;min-width:260px;';
  toast.innerHTML = '<span class="material-symbols-outlined" style="font-size:20px;flex-shrink:0;">' + (icons[type]||'info') + '</span><span style="flex:1;">' + message + '</span><button onclick="this.parentElement.remove()" style="background:none;border:none;color:#fff;cursor:pointer;padding:0;"><span class="material-symbols-outlined" style="font-size:18px;">close</span></button>';
  container.appendChild(toast);
  setTimeout(() => { toast.style.transform = 'translateX(0)'; }, 10);
  setTimeout(() => { toast.style.transform = 'translateX(120%)'; setTimeout(() => toast.remove(), 300); }, 4500);
}

/* ═══════════════════════════════════════════════════════════════
   EMAIL TOAST
   ═══════════════════════════════════════════════════════════════ */
function showEmailToast(data) {
  var container = document.getElementById('kyu-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'kyu-toast-container';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:12px;max-width:380px;';
    document.body.appendChild(container);
  }
  var toast = document.createElement('div');
  toast.style.cssText = 'background:#1a1c1c;color:#fff;padding:16px 18px;border-radius:8px;font-family:"Plus Jakarta Sans",sans-serif;box-shadow:0 4px 24px rgba(0,0,0,0.25);transform:translateX(120%);transition:transform 0.3s ease;width:360px;';
  toast.innerHTML = '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span class="material-symbols-outlined" style="color:#e6c44a;font-size:18px;">mail</span><span style="font-size:10px;letter-spacing:0.1em;font-weight:700;color:#e6c44a;">EMAIL SENT · '+(data.timestamp||'')+'</span><button onclick="this.closest(\'div[style*=position]\').remove()||this.closest(\'div\').remove()" style="margin-left:auto;background:none;border:none;color:#fff;cursor:pointer;"><span class="material-symbols-outlined" style="font-size:16px;">close</span></button></div><p style="font-size:12px;color:#c9c6c5;margin-bottom:4px;">TO: '+data.to+'</p><p style="font-size:13px;font-weight:700;margin-bottom:6px;">'+data.subject+'</p><p style="font-size:12px;color:#c9c6c5;line-height:1.5;">'+data.preview+'</p>';
  container.appendChild(toast);
  setTimeout(() => { toast.style.transform = 'translateX(0)'; }, 10);
  setTimeout(() => { toast.style.transform = 'translateX(120%)'; setTimeout(() => toast.remove(), 300); }, 6000);
}

function simulateEmailSend(to, type, noticeTitle) {
  var subject = type === 'approved'
    ? 'Your Notice Has Been Approved — Kyambogo Notify'
    : 'Update on Your Notice Submission — Kyambogo Notify';
  var preview = type === 'approved'
    ? 'Your notice "' + noticeTitle + '" has been approved and is now live on the notice board.'
    : 'Your notice "' + noticeTitle + '" was not approved at this time. Please check your submission history for details.';
  showEmailToast({ to: to, subject: subject, preview: preview, timestamp: new Date().toLocaleTimeString() });
}

/* ═══════════════════════════════════════════════════════════════
   PUSH NOTIFICATIONS
   ═══════════════════════════════════════════════════════════════ */
function requestPushPermission() {
  if (!getSession()) return;
  if (localStorage.getItem('kyu_push_prompted')) return;
  if ('Notification' in window && Notification.permission === 'default') {
    setTimeout(showPushPromptModal, 3000);
  }
}

function showPushPromptModal() {
  if (document.getElementById('kyu-push-modal')) return;
  localStorage.setItem('kyu_push_prompted', '1');
  var m = document.createElement('div');
  m.id = 'kyu-push-modal';
  m.style.cssText = 'position:fixed;bottom:24px;left:24px;z-index:9998;background:#fff;border:1px solid #cfc6af;border-radius:12px;padding:24px;max-width:340px;box-shadow:0 8px 32px rgba(0,0,0,0.12);font-family:"Plus Jakarta Sans",sans-serif;';
  m.innerHTML = '<div style="display:flex;gap:12px;align-items:flex-start;"><span class="material-symbols-outlined" style="color:#725c00;font-size:28px;margin-top:2px;">notifications</span><div><p style="font-weight:700;font-size:15px;margin:0 0 6px;">Stay Informed</p><p style="font-size:13px;color:#5f5e5e;margin:0 0 16px;line-height:1.5;">Enable push notifications to receive urgent university announcements instantly.</p><div style="display:flex;gap:8px;"><button onclick="enablePush()" style="background:#725c00;color:#fff;border:none;padding:8px 16px;border-radius:6px;font-weight:700;font-size:12px;cursor:pointer;letter-spacing:0.05em;">ENABLE</button><button onclick="document.getElementById(\'kyu-push-modal\').remove()" style="background:none;border:1px solid #cfc6af;padding:8px 16px;border-radius:6px;font-size:12px;cursor:pointer;color:#5f5e5e;">LATER</button></div></div></div>';
  document.body.appendChild(m);
}

function enablePush() {
  if ('Notification' in window) {
    Notification.requestPermission().then(function(p) {
      localStorage.setItem('kyu_push_opted_in', p);
      var m = document.getElementById('kyu-push-modal');
      if (m) m.remove();
      if (p === 'granted') showToast('Push notifications enabled!', 'success');
      else showToast('Push notifications not enabled.', 'info');
    });
  }
}

function sendPushNotification(title, body) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body: body, icon: 'logo3.png' });
  }
}

/* ═══════════════════════════════════════════════════════════════
   FORM VALIDATION
   ═══════════════════════════════════════════════════════════════ */
function validateForm(fields) {
  var valid = true;
  fields.forEach(function(field) {
    var el = document.getElementById(field.id);
    var err = document.getElementById(field.id + '-error');
    if (!el) return;
    var val = el.value ? el.value.trim() : '';
    var fail = false;
    if (!val) fail = true;
    if (field.min && val.length < field.min) fail = true;
    if (fail) {
      if (err) { err.textContent = field.message; err.style.display = 'block'; }
      el.style.borderColor = '#ba1a1a';
      el.style.outline = '2px solid #ba1a1a';
      valid = false;
    } else {
      if (err) err.style.display = 'none';
      el.style.borderColor = '';
      el.style.outline = '';
    }
  });
  return valid;
}

/* ═══════════════════════════════════════════════════════════════
   AUTH MODAL
   ═══════════════════════════════════════════════════════════════ */
function showAuthModal(onSuccess) {
  if (document.getElementById('kyu-auth-modal')) return;
  var users = KyuDB.googleUsers;
  var userOptions = users.map(u =>
    '<button onclick="selectGoogleUser(\'' + u.email + '\')" style="display:flex;align-items:center;gap:12px;width:100%;padding:10px 12px;border:1px solid #e2e2e2;border-radius:8px;background:#fff;cursor:pointer;text-align:left;transition:background 0.2s;" onmouseover="this.style.background=\'#f3f3f4\'" onmouseout="this.style.background=\'#fff\'">' +
      '<img src="' + u.avatar + '" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">' +
      '<div><p style="font-weight:700;font-size:14px;margin:0;">' + u.name + '</p><p style="font-size:12px;color:#5f5e5e;margin:0;">' + u.email + '</p></div>' +
    '</button>'
  ).join('');

  var overlay = document.createElement('div');
  overlay.id = 'kyu-auth-modal';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(26,28,28,0.6);z-index:10000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);';
  overlay.innerHTML = '<div style="background:#fff;border-radius:16px;padding:40px;max-width:440px;width:calc(100% - 48px);box-shadow:0 20px 60px rgba(0,0,0,0.2);font-family:\'Plus Jakarta Sans\',sans-serif;">' +
    '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">' +
      '<div><p style="font-size:11px;letter-spacing:0.1em;font-weight:700;color:#725c00;margin:0 0 8px;">KYAMBOGO NOTIFY</p><h2 style="font-size:24px;font-weight:700;margin:0 0 8px;">Sign In to Continue</h2><p style="font-size:14px;color:#5f5e5e;margin:0 0 24px;">Select your university account to proceed</p></div>' +
      '<button onclick="document.getElementById(\'kyu-auth-modal\').remove()" style="background:none;border:none;cursor:pointer;padding:4px;"><span class="material-symbols-outlined" style="font-size:24px;color:#5f5e5e;">close</span></button>' +
    '</div>' +
    '<div id="google-user-list" style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">' + userOptions + '</div>' +
    '<p style="text-align:center;font-size:11px;color:#7e7663;margin:0;">Simulated Google OAuth · Academic Use Only</p>' +
  '</div>';
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
  window._authOnSuccess = onSuccess || null;
}

function selectGoogleUser(email) {
  var user = KyuDB.googleUsers.find(u => u.email === email);
  if (!user) return;
  setSession(user);
  var modal = document.getElementById('kyu-auth-modal');
  if (modal) modal.remove();
  updateNavAuth();
  showToast('Welcome, ' + user.name + '!', 'success');
  requestPushPermission();
  if (window._authOnSuccess) { window._authOnSuccess(user); window._authOnSuccess = null; }
}

/* ═══════════════════════════════════════════════════════════════
   NAV AUTH STATE UPDATE
   ═══════════════════════════════════════════════════════════════ */
function updateNavAuth() {
  var session = getSession();
  var btns = document.querySelectorAll('[data-auth-btn]');
  btns.forEach(function(btn) {
    if (session) {
      btn.innerHTML = '<img src="' + session.avatar + '" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid #725c00;" title="' + session.name + '">' +
        '<span style="font-size:12px;font-weight:700;letter-spacing:0.05em;">' + session.name.split(' ')[0].toUpperCase() + '</span>' +
        '<span class="material-symbols-outlined" style="font-size:16px;">expand_more</span>';
      btn.onclick = function() { showUserMenu(btn, session); };
    } else {
      btn.innerHTML = 'Continue with Google <span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle;">arrow_forward</span>';
      btn.onclick = function() { showAuthModal(); };
    }
  });
  /* Also update any existing static buttons not marked with data-auth-btn */
  document.querySelectorAll('button').forEach(function(b) {
    if (b.textContent.trim().startsWith('Continue with Google') && !b.dataset.authBtn) {
      if (session) {
        b.innerHTML = '<img src="' + session.avatar + '" style="width:28px;height:28px;border-radius:50%;border:2px solid #725c00;vertical-align:middle;"> <span style="font-size:12px;font-weight:700;">' + session.name.split(' ')[0] + '</span> <span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle;">expand_more</span>';
        b.onclick = function(e) { e.stopPropagation(); showUserMenu(b, session); };
      } else {
        b.onclick = function() { showAuthModal(); };
      }
    }
  });
}

function showUserMenu(anchor, session) {
  var existing = document.getElementById('kyu-user-menu');
  if (existing) { existing.remove(); return; }
  var rect = anchor.getBoundingClientRect();
  var menu = document.createElement('div');
  menu.id = 'kyu-user-menu';
  menu.style.cssText = 'position:fixed;top:'+(rect.bottom+8)+'px;right:'+(window.innerWidth-rect.right)+'px;background:#fff;border:1px solid #cfc6af;border-radius:10px;padding:8px;min-width:200px;box-shadow:0 8px 24px rgba(0,0,0,0.12);z-index:10001;font-family:"Plus Jakarta Sans",sans-serif;';
  menu.innerHTML = '<div style="padding:12px;border-bottom:1px solid #eeeeee;margin-bottom:4px;"><p style="font-weight:700;font-size:14px;margin:0;">' + session.name + '</p><p style="font-size:12px;color:#5f5e5e;margin:4px 0 0;">' + session.email + '</p></div>' +
    '<button onclick="window.location.href=\'visitor-portal.html\'" style="display:flex;align-items:center;gap:8px;width:100%;padding:10px 12px;border:none;background:none;cursor:pointer;font-size:13px;border-radius:6px;" onmouseover="this.style.background=\'#f3f3f4\'" onmouseout="this.style.background=\'none\'"><span class="material-symbols-outlined" style="font-size:18px;color:#725c00;">dashboard</span>My Workspace</button>' +
    '<button onclick="clearSession();updateNavAuth();showToast(\'Signed out.\',\'info\');document.getElementById(\'kyu-user-menu\').remove();" style="display:flex;align-items:center;gap:8px;width:100%;padding:10px 12px;border:none;background:none;cursor:pointer;font-size:13px;border-radius:6px;color:#ba1a1a;" onmouseover="this.style.background=\'#fff8f8\'" onmouseout="this.style.background=\'none\'"><span class="material-symbols-outlined" style="font-size:18px;">logout</span>Sign Out</button>';
  document.body.appendChild(menu);
  setTimeout(() => { document.addEventListener('click', function handler(e) { if (!menu.contains(e.target)) { menu.remove(); document.removeEventListener('click', handler); } }); }, 10);
}

/* ═══════════════════════════════════════════════════════════════
   ACTION AUTH GATE
   ═══════════════════════════════════════════════════════════════ */
function checkActionAuth(callback) {
  var session = getSession();
  if (session) {
    if (callback) callback(session);
    else window.location.href = 'visitor-portal.html';
  } else {
    showAuthModal(function(user) {
      setTimeout(function() {
        if (callback) callback(user);
        else window.location.href = 'visitor-portal.html';
      }, 400);
    });
  }
}

/* ═══════════════════════════════════════════════════════════════
   COUNT-UP ANIMATION
   ═══════════════════════════════════════════════════════════════ */
function countUp(el, target, duration) {
  duration = duration || 1200;
  var start = 0;
  var step = target / (duration / 16);
  var timer = setInterval(function() {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start).toLocaleString();
    if (start >= target) clearInterval(timer);
  }, 16);
}

function initCountUps() {
  document.querySelectorAll('[data-countup]').forEach(function(el) {
    var target = parseInt(el.dataset.countup);
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) { countUp(el, target); obs.disconnect(); }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════ */
function initFAQ() {
  document.querySelectorAll('[data-faq]').forEach(function(item) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      var answer = item.querySelector('[data-faq-answer]');
      var icon = item.querySelector('[data-faq-icon]');
      if (!answer) return;
      var open = answer.style.display !== 'none' && answer.style.display !== '';
      /* close all */
      document.querySelectorAll('[data-faq-answer]').forEach(a => { a.style.display='none'; });
      document.querySelectorAll('[data-faq-icon]').forEach(i => { i.textContent = 'add'; });
      if (!open) {
        answer.style.display = 'block';
        if (icon) icon.textContent = 'close';
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   CATEGORY BADGE COLOURS
   ═══════════════════════════════════════════════════════════════ */
var categoryColours = {
  'Examinations': { bg:'#ffdad6', text:'#93000a' },
  'Administration': { bg:'#e5e2e1', text:'#1c1b1b' },
  'Finance': { bg:'#ffe07e', text:'#231b00' },
  'Academics': { bg:'#e2e2e2', text:'#1a1c1c' },
  'Student Life': { bg:'#cacbcb', text:'#1a1c1c' },
  'Sports & Events': { bg:'#ebc84e', text:'#231b00' },
  'Careers': { bg:'#eeeeee', text:'#5f5e5e' },
  'Health & Welfare': { bg:'#d0f0e0', text:'#0a3d22' },
  'Research & Innovation': { bg:'#e0e4ff', text:'#1a2a6c' },
  'Lost & Found': { bg:'#f0e8d8', text:'#5c3a00' },
  'Events': { bg:'#ebc84e', text:'#231b00' }
};
function getCategoryStyle(cat) {
  var c = categoryColours[cat] || { bg:'#eeeeee', text:'#1a1c1c' };
  return 'background:' + c.bg + ';color:' + c.text + ';';
}

/* ═══════════════════════════════════════════════════════════════
   FORMAT DATE
   ═══════════════════════════════════════════════════════════════ */
function formatDate(dateStr) {
  var d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
}

/* ═══════════════════════════════════════════════════════════════
   DAILY SCHEDULE DATA (for discover.html)
   ═══════════════════════════════════════════════════════════════ */
var dailySchedule = [
  { time:'08:00 AM', event:'Exam Registration Verification', venue:'Registrar\'s Office', type:'admin', noticeId:'ntc-exam-timetable-001' },
  { time:'09:00 AM', event:'Student ID Biometric Capture', venue:'ICT Centre, Block C', type:'admin', noticeId:'ntc-student-id-system-002' },
  { time:'10:00 AM', event:'Careers Fair Opening Ceremony', venue:'University Conference Hall', type:'event', noticeId:'ntc-careers-fair-007' },
  { time:'11:30 AM', event:'Guild Election Briefing', venue:'Main Auditorium', type:'student', noticeId:'ntc-guild-elections-003' },
  { time:'02:00 PM', event:'Football Championship Finals', venue:'Main Sports Ground', type:'sport', noticeId:'ntc-football-championship-006' },
  { time:'03:30 PM', event:'Innovation Hub Workshop', venue:'Student Innovation Hub', type:'research', noticeId:'ntc-student-hub-013' },
  { time:'05:00 PM', event:'Vaccination Drive Closes', venue:'Health Centre, Science Block', type:'health', noticeId:'ntc-health-vaccination-008' }
];

/* ═══════════════════════════════════════════════════════════════
   BOOT: RUN ON ALL PAGES
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  updateNavAuth();
  initCountUps();
  initFAQ();
  /* Push permission for authenticated users */
  if (getSession()) requestPushPermission();
});
