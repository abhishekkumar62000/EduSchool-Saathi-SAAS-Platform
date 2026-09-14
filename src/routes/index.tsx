import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight, BarChart3, Bell, BookOpen, Building2, CalendarDays, Check,
  CheckCircle2, ChevronDown, ChevronRight, ClipboardCheck, Clock3, CreditCard,
  ExternalLink, FileBarChart, FileText, GraduationCap, HeartHandshake, IndianRupee, Layers3,
  Library, LockKeyhole, Mail, MapPin, Menu, MessageCircle, MonitorSmartphone,
  Package, Phone, Play, Route as RouteIcon, School, Search, Settings, ShieldCheck,
  Sparkles, Star, TrendingUp, UserCheck, Users, X, Zap, Award, CheckCheck,
  XCircle, Flame, Target, Compass
} from "lucide-react";
import schoolImage from "../assets/bihar-school-classroom.jpg";
import logoImg from "../assets/logo-optimized.png";
import { PwaInstallPrompt, InstallAppButton } from "../components/PwaInstallPrompt";
import { WhatsappChatbot } from "../components/WhatsappChatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduSchool-Saathi | #1 Multi-School Management SaaS Platform in Bihar" },
      { name: "description", content: "EduSchool-Saathi is a modern AI-powered School Management ERP for schools in Madhubani, Darbhanga, Patna & Bihar. Student admissions, 10-second attendance, instant fee receipts, and multi-role portals. Sponsored by Sehaat Saathi, Powered by TechSeva IT Solutions." },
      { name: "keywords", content: "EduSchool Saathi, EduSchool-Saathi, School ERP Bihar, Madhubani School Software, Darbhanga School Management, Bihar School SaaS, School Fee Receipt System, Student Attendance Software, Pre-Nursery to Class 12 ERP, TechSeva IT Solutions, Sehaat Saathi" },
      { property: "og:title", content: "EduSchool-Saathi | Complete Digital School Management Platform" },
      { property: "og:description", content: "Smart Schools. Connected Education. Simpler Management. Multi-tenant SaaS platform built for schools in Bihar and beyond. Sponsored by Sehaat Saathi, Powered by TechSeva IT Solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eduschool-saathi.vercel.app/" },
      { property: "og:image", content: "https://eduschool-saathi.vercel.app/logo-optimized.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EduSchool-Saathi | Digital School Management SaaS" },
      { name: "twitter:description", content: "Empower your school with 100% digital operations, automated fee receipts, and attendance tracking." },
      { name: "twitter:image", content: "https://eduschool-saathi.vercel.app/logo-optimized.png" },
    ],
  }),
  component: Index,
});

type IconType = typeof School;
type ModalTrigger = { onClick: () => void; children: ReactNode; className?: string };

const primaryCta = "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-brand transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const secondaryCta = "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const featureGroups = [
  { cat: "Core", icon: GraduationCap, title: "Student Management", desc: "Complete student profiles, classes, admissions and academic records in one place.", items: ["Student registration", "Class & section management", "Parent linking", "Search & student history"] },
  { cat: "Core", icon: Users, title: "Teacher & Staff", desc: "Organized profiles, roles, responsibilities and teaching assignments.", items: ["Teacher & staff profiles", "Department management", "Class assignments", "Staff records"] },
  { cat: "Academic", icon: ClipboardCheck, title: "Attendance", desc: "Fast daily attendance with class-wise history and monthly summaries.", items: ["Daily attendance", "Absence tracking", "Teacher attendance", "Parent visibility"] },
  { cat: "Finance", icon: IndianRupee, title: "Fee Management", desc: "Organize fee structures, payments, dues, receipts and financial reports.", items: ["Paid & pending fees", "Due dates", "Receipt management", "Parent fee visibility"] },
  { cat: "Academic", icon: FileBarChart, title: "Examinations", desc: "Create exams, enter marks and share clear academic results digitally.", items: ["Exam schedules", "Marks & grades", "Report cards", "Performance reports"] },
  { cat: "Academic", icon: BookOpen, title: "Homework & Assignments", desc: "Keep teachers, students and parents aligned on everyday learning.", items: ["Create homework", "Subject-wise tasks", "Submission tracking", "Homework history"] },
  { cat: "Academic", icon: CalendarDays, title: "Timetable", desc: "Coordinate classes, teachers, subjects, periods and daily schedules.", items: ["Class timetable", "Teacher timetable", "Period management", "Section schedules"] },
  { cat: "Connect", icon: Bell, title: "Notices & Announcements", desc: "Share important school and class updates with the right people.", items: ["School notices", "Class announcements", "Parent updates", "Important alerts"] },
  { cat: "Portals", icon: HeartHandshake, title: "Parent Portal", desc: "Give parents a clear view of their child's school journey.", items: ["Attendance & fees", "Homework", "Results", "Academic updates"] },
  { cat: "Portals", icon: MonitorSmartphone, title: "Student Portal", desc: "One simple place for students to access their academic information.", items: ["Attendance", "Homework & timetable", "Exams & results", "Notices"] },
  { cat: "Insights", icon: BarChart3, title: "Reports & Analytics", desc: "Turn daily school activity into useful, easy-to-read insights.", items: ["Attendance reports", "Fee reports", "Class performance", "Dashboard analytics"] },
  { cat: "Connect", icon: MessageCircle, title: "Communication", desc: "Support coordinated notices, reminders and academic updates.", items: ["Fee reminders", "Parent notifications", "School notices", "WhatsApp/SMS-ready concept"] },
  { cat: "Admin", icon: FileText, title: "Digital Records", desc: "Keep important student, teacher and academic records organized.", items: ["Academic records", "Fee records", "Attendance records", "Documents"] },
  { cat: "Admin", icon: Settings, title: "School Administration", desc: "Configure your school structure, users and academic sessions.", items: ["School profile", "Classes & subjects", "Roles & permissions", "School settings"] },
  { cat: "Extended", icon: Library, title: "Library Management", desc: "Track books, categories, issue and return records simply.", items: ["Book records", "Issue / return", "Student library history", "Library reports"] },
  { cat: "Extended", icon: RouteIcon, title: "Transport Management", desc: "Organize vehicles, routes, drivers and student allocations.", items: ["School vehicles", "Routes & drivers", "Transport allocation", "Student records"] },
  { cat: "Extended", icon: Package, title: "Inventory Management", desc: "Maintain visibility over school assets, supplies and stock.", items: ["School assets", "Supplies", "Stock records", "Inventory reports"] },
  { cat: "Extended", icon: FileText, title: "Certificates & Documents", desc: "Organize student certificates and academic documents digitally.", items: ["Student documents", "Certificates", "Academic documents", "Digital records"] },
  { cat: "Admin", icon: UserCheck, title: "Staff & HR Support", desc: "Support essential staff administration without unnecessary complexity.", items: ["Staff records", "Role management", "Staff information", "Basic administration"] },
];

const roles = {
  "Super Admin": { icon: Layers3, copy: "Manage the platform and onboard multiple independent schools.", stats: [["Total schools", "24"], ["Active schools", "22"], ["Students", "7,500"], ["Teachers", "150"]], tasks: ["School management", "Subscription overview", "Platform analytics"] },
  "School Admin": { icon: Building2, copy: "Manage the complete digital operations of your own school.", stats: [["Students", "650"], ["Teachers", "42"], ["Attendance", "94%"], ["Fees collected", "₹18.5L"]], tasks: ["Attendance summary", "Fee overview", "Exam & report management"] },
  Teacher: { icon: UserCheck, copy: "Everything teachers need for focused daily academic work.", stats: [["Classes today", "5"], ["Students", "186"], ["Attendance", "96%"], ["Homework", "3"]], tasks: ["Take Class 8A attendance", "Post Mathematics homework", "Enter Unit Test marks"] },
  Student: { icon: GraduationCap, copy: "Easy access to learning, schedules and academic progress.", stats: [["Attendance", "95%"], ["Homework", "4"], ["Next exam", "Maths"], ["Notices", "2"]], tasks: ["Science assignment due Friday", "Mathematics at 10:30", "View Unit Test results"] },
  Parent: { icon: HeartHandshake, copy: "Stay connected with your child's complete school journey.", stats: [["Attendance", "95%"], ["Fee status", "Paid"], ["Homework", "4"], ["Notices", "2"]], tasks: ["Attendance updated today", "New English homework", "Exam schedule published"] },
};

const faqs = [
 ["What is EduSchool-Saathi?", "A complete digital school management platform that brings administration, teachers, students and parents together."],
 ["Is it suitable for small schools?", "Yes. The platform is designed to be simple and scalable for small, growing, rural and semi-urban schools."],
 ["Can multiple schools use the platform?", "Yes. Multiple schools can use the common platform while operating in separate school-level environments."],
 ["Can each school have separate admin access?", "Yes. Each school can have its own administrators with role-based access for that school's operations."],
 ["Can teachers, students and parents have separate accounts?", "Yes. The platform concept supports separate role-based experiences for each member of the school community."],
 ["Can schools manage attendance digitally?", "Yes. Schools can manage daily, class-wise and historical attendance with summaries and reports."],
 ["Can schools manage fees?", "Yes. Fee structures, paid and pending fees, due dates, receipts and reports can be organized digitally."],
 ["Can schools manage examinations and results?", "Yes. Exam schedules, marks, grades, results and report cards are included in the platform modules."],
 ["Can parents see their child's information?", "Yes. Parent access can include attendance, fee status, homework, results, notices and academic updates."],
 ["Can the platform be customized for a school?", "Configuration can vary based on school size, operational needs and selected modules."],
 ["Is it suitable for rural and semi-urban schools?", "Yes. EduSchool-Saathi is designed around the practical needs of schools beyond major cities, especially across Bihar."],
 ["How can my school request a demo?", "Use any Request Demo button, complete the short form and the EduSchool-Saathi team can follow up."],
 ["How does pricing work?", "Plans start from ₹5,000 per month and may vary based on school size, requirements and selected modules."],
];

function TricolorBrandText({ size = "text-sm sm:text-base" }: { size?: string }) {
  return (
    <span className={`font-display font-black tracking-tight ${size} inline-flex items-center`}>
      <span className="text-[#1E40AF]">Edu</span>
      <span className="text-[#FF671F]">School</span>
      <span className="text-slate-400 mx-0.5">-</span>
      <span className="text-[#047857]">Saathi</span>
    </span>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="inline-flex items-center gap-2.5 group" aria-label="EduSchool-Saathi home">
      <div className={`relative ${compact ? "size-9 sm:size-10" : "size-10 sm:size-12"} overflow-hidden rounded-lg border border-primary/25 bg-white p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0`}>
        <img src={logoImg} alt="EduSchool-Saathi Logo" className="h-full w-full object-contain" />
      </div>
      <div className="min-w-0">
        <b className="block leading-tight truncate">
          <TricolorBrandText size={compact ? "text-sm sm:text-base" : "text-base sm:text-lg"} />
        </b>
        <span className="block text-[8px] sm:text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#FF671F] truncate">
          Har School Ka Saathi
        </span>
      </div>
    </a>
  );
}

function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 border-b border-emerald-500/20 text-white text-[11px] py-1.5 px-3">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center md:text-left">
        {/* Left Side: SaaS Identity */}
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 border border-emerald-500/30 shrink-0">
            <Sparkles className="size-2.5 text-emerald-400" /> Official SaaS
          </span>
          <span className="font-bold text-[11px] inline-flex items-center gap-0.5">
            <span className="text-sky-300">Edu</span>
            <span className="text-amber-400">School</span>
            <span className="text-white/50">-</span>
            <span className="text-emerald-400">Saathi</span>
            <span className="text-white/90 ml-1">ERP</span>
          </span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-emerald-200/80 hidden sm:inline text-[11px]">
            Smart Platform for Bihar & Beyond
          </span>
        </div>

        {/* Right Side: Partnerships & Direct Helpline */}
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[10px] sm:text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Sponsored:</span>
            <a
              href="https://sehaat-saathi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-bold text-emerald-300 hover:text-white transition-colors"
            >
              Sehaat Saathi <ExternalLink className="size-2.5 opacity-70" />
            </a>
          </div>

          <span className="text-white/20">|</span>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Powered by:</span>
            <a
              href="https://techseva-it-solutions.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-bold text-sky-300 hover:text-white transition-colors"
            >
              TechSeva <ExternalLink className="size-2.5 opacity-70" />
            </a>
          </div>

          <span className="text-white/20 hidden xs:inline">|</span>

          <a
            href="tel:6200087830"
            className="font-bold text-brand-warm hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <Phone className="size-2.5" /> 6200087830
          </a>
        </div>
      </div>
    </div>
  );
}

function Button({ onClick, children, className = primaryCta }: ModalTrigger) { return <button type="button" onClick={onClick} className={className}>{children}</button>; }

function SectionTitle({
  eyebrow,
  title,
  copy,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div
        className={`mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] ${
          dark ? "text-brand-warm" : "text-primary"
        }`}
      >
        <span className={`h-px w-6 ${dark ? "bg-brand-warm" : "bg-primary"}`} />
        {eyebrow}
      </div>
      <h2
        className={`font-display text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            dark ? "text-slate-300" : "text-muted-foreground"
          }`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

function Navbar({ openDemo }: { openDemo: () => void }) {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Partners", "ecosystem"],
    ["Solutions", "solutions"],
    ["ROI Calculator", "roi-calculator"],
    ["Features", "features"],
    ["Roles", "roles"],
    ["Pricing", "pricing"],
    ["Contact", "contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all">
      <AnnouncementBar />
      <div
        className={`transition-all ${
          scrolled
            ? "border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-xl"
            : "bg-background/80 backdrop-blur-md border-b border-border/40"
        }`}
      >
        <nav className="container flex h-16 sm:h-18 items-center justify-between" aria-label="Primary navigation">
          <Brand compact />

          <div className="hidden items-center gap-4 xl:gap-5 xl:flex">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-xs font-bold text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:6200087830"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-xs font-bold text-foreground hover:bg-accent transition-colors shadow-xs"
            >
              <Phone className="size-3.5 text-primary" /> +91 62000 87830
            </a>
            <Button onClick={openDemo} className={`${primaryCta} min-h-10 px-4 py-2 text-xs`}>
              Request Free Demo <ArrowRight className="size-4" />
            </Button>
          </div>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-md border border-border bg-card lg:hidden"
            onClick={() => setMobile(!mobile)}
            aria-expanded={mobile}
            aria-label="Toggle menu"
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </div>

      {mobile && (
        <div className="border-b border-border bg-background/98 px-5 pb-6 pt-2 shadow-xl backdrop-blur-2xl lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="container grid gap-1 pt-2">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobile(false)}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-accent hover:text-primary transition-colors"
              >
                {label}
                <ChevronRight className="size-4 text-muted-foreground" />
              </a>
            ))}
            <div className="pt-3 border-t border-border mt-2 space-y-2">
              <InstallAppButton className="w-full justify-center py-2.5" />
              <a
                href="tel:6200087830"
                className="flex items-center justify-center gap-2 rounded-md border border-border bg-card py-2.5 text-xs font-bold text-foreground"
              >
                <Phone className="size-3.5 text-primary" /> Call Advisor: +91 62000 87830
              </a>
              <Button
                onClick={() => {
                  setMobile(false);
                  openDemo();
                }}
                className={`${primaryCta} w-full`}
              >
                Request a Free School Demo <ArrowRight className="size-4" />
              </Button>
              <div className="text-[11px] text-muted-foreground text-center pt-2">
                📍 Bara Bazar Madhubani • ✉️ eduschoolsaathi@gmail.com
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Dashboard({ compact = false }: { compact?: boolean }) {
  const [activeTab, setActiveTab] = useState<"overview" | "attendance" | "fees" | "exams">("overview");

  // Interactive attendance simulation state
  const [attendanceList, setAttendanceList] = useState([
    { roll: 1, name: "Aarav Kumar", status: "P" },
    { roll: 2, name: "Sneha Kumari", status: "P" },
    { roll: 3, name: "Rohan Singh", status: "A" },
    { roll: 4, name: "Priya Sharma", status: "P" },
    { roll: 5, name: "Md. Farhan", status: "P" },
  ]);

  const toggleAttendance = (index: number) => {
    setAttendanceList(prev => prev.map((s, i) => i === index ? { ...s, status: s.status === "P" ? "A" : s.status === "A" ? "L" : "P" } : s));
  };

  const presentCount = attendanceList.filter(s => s.status === "P").length;
  const attendanceRate = Math.round((presentCount / attendanceList.length) * 100);

  const stats = [
    ["Total students", "7,500", Users, "+8.2%"],
    ["Teachers & staff", "150", UserCheck, "+6"],
    ["Attendance today", `${attendanceRate}%`, ClipboardCheck, "+2.4%"],
    ["Fees collected", "₹18.5L", IndianRupee, "82%"]
  ] as const;

  return (
    <div className="dashboard-shell overflow-hidden rounded-2xl border-2 border-dashboard-line/80 bg-dashboard text-dashboard-foreground shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all">
      {/* Top OS Window Header Bar */}
      <div className="flex h-12 items-center justify-between border-b border-dashboard-line px-4 bg-dashboard-panel/60">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="size-3 rounded-full bg-red-500/80 inline-block" />
            <span className="size-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="size-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="size-7 rounded bg-white p-0.5 overflow-hidden shrink-0 border border-primary/30">
            <img src={logoImg} alt="EduSchool-Saathi" className="size-full object-contain" />
          </div>
          <div>
            <b className="text-xs tracking-tight flex items-center gap-1">
              <span className="text-sky-300">Edu</span>
              <span className="text-amber-400">School</span>
              <span className="text-white/40">-</span>
              <span className="text-emerald-400">Saathi</span>
              <span className="text-white ml-1">ERP</span>
              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-500/30 ml-1">v4.2 Cloud</span>
            </b>
          </div>
        </div>

        {/* Interactive View Switcher inside Dashboard */}
        {!compact && (
          <div className="hidden sm:flex items-center gap-1 bg-dashboard rounded-lg p-1 border border-dashboard-line text-[11px]">
            {[
              { id: "overview", label: "Principal 360°" },
              { id: "attendance", label: "⚡ 10s Attendance" },
              { id: "fees", label: "💳 Fee Receipts" },
              { id: "exams", label: "📊 Gradecards" },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1 rounded font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-dashboard-muted hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2.5 text-[10px] text-dashboard-muted">
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-bold">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" /> Live Cloud
          </span>
          <Search className="size-3.5 hover:text-white transition-colors cursor-pointer"/>
          <Bell className="size-3.5 hover:text-white transition-colors cursor-pointer"/>
          <span className="size-6 rounded-full bg-primary/40 border border-primary/50 text-white font-bold flex items-center justify-center text-[10px]">
            AD
          </span>
        </div>
      </div>

      {/* Main OS Body */}
      <div className="flex">
        {!compact && (
          <aside className="hidden w-40 shrink-0 border-r border-dashboard-line p-3 md:block bg-dashboard/50">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-dashboard-muted block mb-2 px-2">
              School Modules
            </span>
            {[
              { name: "Dashboard", tab: "overview" },
              { name: "Attendance (10s)", tab: "attendance" },
              { name: "Fees & Receipts", tab: "fees" },
              { name: "Examinations", tab: "exams" },
              { name: "Students (7,500)", tab: "overview" },
              { name: "Staff & Teachers", tab: "overview" },
              { name: "Homework & Notices", tab: "overview" },
              { name: "Timetable & Periods", tab: "overview" },
              { name: "Reports & Analytics", tab: "overview" },
              { name: "School Settings", tab: "overview" },
            ].map((x) => (
              <button
                key={x.name}
                type="button"
                onClick={() => setActiveTab(x.tab as any)}
                className={`w-full text-left mb-1 rounded px-2.5 py-1.5 text-[10px] font-bold transition-all ${
                  (x.name === "Dashboard" && activeTab === "overview") ||
                  (x.name.includes("Attendance") && activeTab === "attendance") ||
                  (x.name.includes("Fees") && activeTab === "fees") ||
                  (x.name === "Examinations" && activeTab === "exams")
                    ? "bg-primary text-primary-foreground shadow-xs font-black"
                    : "text-dashboard-muted hover:bg-dashboard-panel hover:text-white"
                }`}
              >
                {x.name}
              </button>
            ))}
          </aside>
        )}

        <div className="min-w-0 flex-1 p-3.5 sm:p-5">
          {/* Header Banner inside screen */}
          <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2 border-b border-dashboard-line/50 pb-2.5">
            <div>
              <p className="text-[9px] font-semibold text-dashboard-muted">
                CURRENT SESSION: 2026–27 • MADHUBANI HQ CAMPUS
              </p>
              <b className="text-xs sm:text-base font-extrabold text-white">
                {activeTab === "overview" && "Good morning, Administrator • School Command Hub"}
                {activeTab === "attendance" && "Class 8th-A • 10-Second Smart Attendance System"}
                {activeTab === "fees" && "Instant Fee Counter & Automated Receipt Generator"}
                {activeTab === "exams" && "CBSE / Bihar Board Examination & Report Card Suite"}
              </b>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="rounded-md border border-dashboard-line bg-dashboard-panel px-2 py-1 text-[9px] text-dashboard-muted font-mono font-bold">
                PIN: #SCH-8492
              </span>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-3 animate-fadeIn">
              <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                {stats.map(([label, value, Icon, trend]) => (
                  <div key={label} className="rounded-lg border border-dashboard-line bg-dashboard-panel p-3 hover:border-primary/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="grid size-7 place-items-center rounded bg-primary/20 text-primary">
                        <Icon className="size-4" />
                      </span>
                      <span className="text-[8px] font-bold text-dashboard-success bg-dashboard-success/15 px-1.5 py-0.5 rounded">
                        {trend}
                      </span>
                    </div>
                    <b className="mt-2.5 block text-base sm:text-lg font-black text-white">{value}</b>
                    <span className="text-[9px] text-dashboard-muted font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-2.5">
                <div className="col-span-3 rounded-lg border border-dashboard-line bg-dashboard-panel p-3.5">
                  <div className="flex justify-between items-center text-[10px] mb-2">
                    <b className="text-white">Weekly Attendance Flow</b>
                    <span className="text-dashboard-muted">Avg 94.8%</span>
                  </div>
                  <div className="mt-3 flex h-20 items-end gap-2.5">
                    {[65, 82, 74, 95, 91, 86, 78].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <span
                          className="w-full rounded-t bg-gradient-to-t from-primary/60 to-primary transition-all hover:brightness-125"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[8px] text-dashboard-muted font-mono">
                    <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>TODAY</span>
                  </div>
                </div>

                <div className="col-span-2 rounded-lg border border-dashboard-line bg-dashboard-panel p-3.5 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px]">
                    <b className="text-white">Fee Target</b>
                    <span className="text-emerald-400 font-bold">82% Rec</span>
                  </div>
                  <div className="mx-auto my-1 grid size-16 sm:size-20 place-items-center rounded-full border-[6px] border-primary/80 bg-primary/10">
                    <div className="text-center">
                      <span className="text-xs sm:text-sm font-black text-white">82%</span>
                      <span className="block text-[7px] text-dashboard-muted">Collected</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[8px] text-dashboard-muted pt-1 border-t border-dashboard-line">
                    <span>Due: ₹3.2L</span>
                    <span className="text-emerald-400 font-bold">Paid: ₹18.5L</span>
                  </div>
                </div>
              </div>

              {!compact && (
                <div className="rounded-lg border border-dashboard-line bg-dashboard-panel p-3">
                  <div className="mb-2 flex justify-between text-[10px]">
                    <b className="text-white">Real-Time Operational Audit</b>
                    <span className="text-primary font-bold cursor-pointer">Live Updates</span>
                  </div>
                  <div className="space-y-1.5 text-[9px] text-dashboard-muted">
                    <div className="flex items-center justify-between border-t border-dashboard-line/40 pt-1.5">
                      <span className="flex items-center gap-1.5 text-white">
                        <CheckCircle2 className="size-3 text-dashboard-success" /> Class 8A Rollcall complete in 9.4 seconds
                      </span>
                      <span className="font-mono text-[8px]">10:14 AM</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-dashboard-line/40 pt-1.5">
                      <span className="flex items-center gap-1.5 text-white">
                        <CheckCircle2 className="size-3 text-dashboard-success" /> Fee receipt #REC-2026-904 generated for Aarav Kumar (₹3,200)
                      </span>
                      <span className="font-mono text-[8px]">10:02 AM</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: 10-SECOND ATTENDANCE SIMULATOR */}
          {activeTab === "attendance" && (
            <div className="space-y-3 animate-fadeIn">
              <div className="rounded-lg border border-dashboard-line bg-dashboard-panel p-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-dashboard-line mb-3">
                  <div>
                    <span className="text-[10px] text-dashboard-muted block">LIVE CLASS ROLLCALL</span>
                    <b className="text-sm font-bold text-white">Click any student to toggle Present / Absent / Leave</b>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400 block">{presentCount} of {attendanceList.length} Present</span>
                    <span className="text-[9px] text-dashboard-muted">Attendance Rate: {attendanceRate}%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {attendanceList.map((s, idx) => (
                    <div
                      key={s.roll}
                      onClick={() => toggleAttendance(idx)}
                      className="flex items-center justify-between rounded-md border border-dashboard-line/70 bg-dashboard/80 px-3 py-2 cursor-pointer hover:border-primary/50 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[10px] text-dashboard-muted">#{s.roll}</span>
                        <b className="text-xs text-white">{s.name}</b>
                        <span className="text-[9px] text-dashboard-muted">Class 8th-A</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                          s.status === "P"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                            : s.status === "A"
                            ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                            : "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                        }`}>
                          {s.status === "P" ? "✓ PRESENT" : s.status === "A" ? "✗ ABSENT" : "• ON LEAVE"}
                        </span>
                        <span className="text-[8px] text-dashboard-muted">click to toggle</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 pt-3 border-t border-dashboard-line flex items-center justify-between">
                  <span className="text-[10px] text-dashboard-muted">
                    ⚡ Auto absentee SMS/WhatsApp triggers automatically
                  </span>
                  <button
                    type="button"
                    onClick={() => alert("Simulated: Daily attendance locked & SMS sent to parents!")}
                    className="rounded bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-primary/90 transition-colors flex items-center gap-1"
                  >
                    <Check className="size-3.5" /> Submit & Notify Parents
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FEE RECEIPT & LEDGER */}
          {activeTab === "fees" && (
            <div className="space-y-3 animate-fadeIn">
              <div className="rounded-lg border border-dashboard-line bg-dashboard-panel p-3.5">
                <div className="grid grid-cols-3 gap-2 pb-3 mb-3 border-b border-dashboard-line text-center">
                  <div className="rounded border border-dashboard-line bg-dashboard p-2">
                    <span className="text-[8px] text-dashboard-muted block">TERM DEMAND</span>
                    <b className="text-xs sm:text-sm text-white font-bold">₹4,50,000</b>
                  </div>
                  <div className="rounded border border-dashboard-line bg-dashboard p-2">
                    <span className="text-[8px] text-emerald-400 block">COLLECTED (83%)</span>
                    <b className="text-xs sm:text-sm text-emerald-400 font-bold">₹3,75,000</b>
                  </div>
                  <div className="rounded border border-dashboard-line bg-dashboard p-2">
                    <span className="text-[8px] text-amber-400 block">OUTSTANDING DUES</span>
                    <b className="text-xs sm:text-sm text-amber-400 font-bold">₹75,000</b>
                  </div>
                </div>

                {/* Receipt Preview */}
                <div className="rounded-md border border-dashed border-primary/40 bg-dashboard/90 p-3">
                  <div className="flex justify-between items-center pb-2 border-b border-dashboard-line text-[10px]">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <FileText className="size-3 text-primary" /> DIGITAL FEE RECEIPT #REC-2026-904
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 font-mono font-bold px-1.5 py-0.5 rounded text-[8px]">
                      PAID VIA UPI
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-[10px]">
                    <div>
                      <span className="text-dashboard-muted block text-[8px]">STUDENT:</span>
                      <b className="text-white">Aarav Kumar (Roll #01)</b>
                      <span className="text-dashboard-muted block text-[8px] mt-1">CLASS & SECTION:</span>
                      <span className="text-white">Class 10th - Section B</span>
                    </div>
                    <div className="text-right">
                      <span className="text-dashboard-muted block text-[8px]">AMOUNT PAID:</span>
                      <b className="text-base font-black text-emerald-400">₹3,200</b>
                      <span className="text-dashboard-muted block text-[8px] mt-0.5">Includes Tuition + Lab Fee</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-dashboard-line flex items-center justify-between">
                    <span className="text-[8px] text-dashboard-muted font-mono">14-SEP-2026 10:02 AM • MADHUBANI HQ</span>
                    <button
                      type="button"
                      onClick={() => alert("Simulated: Branded School PDF Receipt downloaded!")}
                      className="rounded bg-primary/20 hover:bg-primary/40 text-primary border border-primary/30 px-2.5 py-1 text-[9px] font-bold transition-colors"
                    >
                      Print Receipt PDF ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: EXAM & REPORT CARDS */}
          {activeTab === "exams" && (
            <div className="space-y-3 animate-fadeIn">
              <div className="rounded-lg border border-dashboard-line bg-dashboard-panel p-3.5">
                <div className="flex justify-between items-center pb-2 border-b border-dashboard-line mb-3">
                  <div>
                    <span className="text-[9px] text-dashboard-muted block">CBSE & BIHAR BOARD COMPLIANT</span>
                    <b className="text-xs sm:text-sm font-bold text-white">Student Academic Marksheet Generator</b>
                  </div>
                  <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-black text-emerald-400">
                    GRADE A+ (94.2%)
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-[10px] mb-3">
                  <div className="rounded bg-dashboard p-2 border border-dashboard-line">
                    <span className="text-[8px] text-dashboard-muted block">MATHEMATICS</span>
                    <b className="text-white font-bold">96 / 100</b>
                  </div>
                  <div className="rounded bg-dashboard p-2 border border-dashboard-line">
                    <span className="text-[8px] text-dashboard-muted block">SCIENCE</span>
                    <b className="text-white font-bold">94 / 100</b>
                  </div>
                  <div className="rounded bg-dashboard p-2 border border-dashboard-line">
                    <span className="text-[8px] text-dashboard-muted block">ENGLISH</span>
                    <b className="text-white font-bold">91 / 100</b>
                  </div>
                  <div className="rounded bg-dashboard p-2 border border-dashboard-line">
                    <span className="text-[8px] text-dashboard-muted block">SOCIAL SCI</span>
                    <b className="text-white font-bold">96 / 100</b>
                  </div>
                </div>

                <div className="rounded bg-dashboard/70 p-2.5 border border-dashboard-line flex items-center justify-between text-[10px]">
                  <div>
                    <b className="text-white block">Automated Rank: #1 in Class 10B</b>
                    <span className="text-[8px] text-dashboard-muted">Attendance: 96% • Conduct: Outstanding</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert("Simulated: Digital Report Card PDF generated with school stamp and signature!")}
                    className="rounded bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 border border-emerald-500/40 px-3 py-1.5 text-xs font-bold transition-all"
                  >
                    Download Digital Report Card ↗
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Hero({ openDemo }: { openDemo: () => void }) {
  return (
    <section id="home" className="hero-grid relative overflow-hidden bg-hero pt-32 sm:pt-36 pb-16 text-hero-foreground">
      {/* Background ambient lighting effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-gradient-to-b from-primary/25 via-brand-sky/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-48 -left-24 size-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-64 -right-24 size-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Top Pill with Pulsing Dot */}
          <div className="mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-hero-foreground/20 bg-hero-foreground/5 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold text-hero-muted backdrop-blur-xl shadow-lg">
            <span className="flex items-center gap-1.5 text-emerald-400 font-extrabold">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              Live Cloud ERP
            </span>
            <span className="opacity-40">•</span>
            <div className="size-4 rounded-full bg-white p-0.5 overflow-hidden shrink-0 inline-flex items-center justify-center">
              <img src={logoImg} alt="Logo" className="size-full object-contain" />
            </div>
            <span className="text-brand-warm font-extrabold">#1 in Bihar</span>
            <span className="opacity-40 hidden xs:inline">•</span>
            <span className="hidden xs:inline">Pre-Nursery to 12th</span>
          </div>

          <h1 className="font-display text-3xl font-black leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="text-white/95">Har School Ka Saathi —</span>
            <span className="mt-3 block font-black">
              <span className="text-[#38BDF8] drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">Edu</span>
              <span className="text-[#FB923C] drop-shadow-[0_0_25px_rgba(251,146,60,0.4)]">School</span>
              <span className="text-white/60 mx-1">-</span>
              <span className="text-[#4ADE80] drop-shadow-[0_0_25px_rgba(74,222,128,0.4)]">Saathi</span>
            </span>
            <span className="mt-3 block text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent tracking-normal">
              Complete Digital School Management ERP
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-hero-muted sm:text-lg sm:leading-7">
            Say goodbye to paper registers, cash confusion, and expensive software traps. Empower your administration, teachers, students, and parents with an all-in-one cloud ERP designed specifically for ground realities in Bihar and across India.
          </p>

          {/* Strategic Alliance & Sponsorship Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-hero-muted">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-emerald-300">
              Sponsored by:{" "}
              <a href="https://sehaat-saathi.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white">
                Sehaat Saathi App ↗
              </a>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/15 border border-sky-500/30 px-3 py-1 text-sky-300">
              Powered by:{" "}
              <a href="https://techseva-it-solutions.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white">
                TechSeva IT Solutions ↗
              </a>
            </span>
          </div>

          <p className="mt-3 text-xs sm:text-sm font-bold text-brand-warm">
            📍 Headquartered in Bara Bazar Madhubani • Empowering Schools Across Bihar & India
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={openDemo} className={`${primaryCta} text-sm shadow-[0_0_30px_rgba(37,99,235,0.4)]`}>
              Request a Free Live School Demo <ArrowRight className="size-4" />
            </Button>
            <a
              href="tel:6200087830"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-hero-foreground/20 bg-hero-foreground/5 px-5 py-3 text-sm font-bold text-hero-foreground backdrop-blur transition hover:bg-hero-foreground/15"
            >
              <Phone className="size-4 text-emerald-400" /> Instant Call: +91 62000 87830
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-[0.14em] text-hero-muted">
            <span className="flex items-center gap-1.5"><Check className="size-3.5 text-success" /> 10-Second Attendance</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Check className="size-3.5 text-success" /> Zero Hardware Needed</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Check className="size-3.5 text-success" /> Instant WhatsApp Fee Receipts</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Check className="size-3.5 text-success" /> 100% Isolated Data</span>
          </div>
        </div>

        {/* Hero Interactive Dashboard Container with Floating Badges */}
        <div className="relative mx-auto mt-14 max-w-6xl">
          {/* Floating Badge 1 (Top Left) */}
          <div className="hidden xl:flex absolute -top-7 -left-10 z-20 items-center gap-2.5 rounded-xl border border-emerald-500/40 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl animate-float-slow text-left">
            <span className="grid size-9 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <ClipboardCheck className="size-5" />
            </span>
            <div>
              <b className="text-xs font-black text-white block">10-Sec Rollcall Done</b>
              <span className="text-[10px] text-emerald-300 font-semibold">Class 9A • 98.2% Present Today</span>
            </div>
          </div>

          {/* Floating Badge 2 (Top Right) */}
          <div className="hidden xl:flex absolute -top-7 -right-10 z-20 items-center gap-2.5 rounded-xl border border-brand-warm/40 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl animate-float-reverse text-left">
            <span className="grid size-9 place-items-center rounded-lg bg-brand-warm/20 text-brand-warm">
              <IndianRupee className="size-5" />
            </span>
            <div>
              <b className="text-xs font-black text-white block">₹42,500 Collected Today</b>
              <span className="text-[10px] text-brand-warm font-semibold">1-Click WhatsApp Receipts Sent</span>
            </div>
          </div>

          {/* Floating Badge 3 (Bottom Left) */}
          <div className="hidden xl:flex absolute -bottom-6 -left-6 z-20 items-center gap-2.5 rounded-xl border border-sky-500/40 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl animate-float-slow text-left">
            <span className="grid size-9 place-items-center rounded-lg bg-sky-500/20 text-sky-400">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <b className="text-xs font-black text-white block">100% Data Isolation</b>
              <span className="text-[10px] text-sky-300 font-semibold">Dedicated Cloud DB per School</span>
            </div>
          </div>

          {/* Floating Badge 4 (Bottom Right) */}
          <div className="hidden xl:flex absolute -bottom-6 -right-6 z-20 items-center gap-2.5 rounded-xl border border-amber-500/40 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl animate-float-reverse text-left">
            <span className="grid size-9 place-items-center rounded-lg bg-amber-500/20 text-amber-400">
              <Star className="size-5" />
            </span>
            <div>
              <b className="text-xs font-black text-white block">Rated 4.9 / 5.0</b>
              <span className="text-[10px] text-amber-300 font-semibold">Trusted by 24+ Bihar Schools</span>
            </div>
          </div>

          {/* Live Mockup */}
          <Dashboard />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const impacts = [
    { num: "24+", label: "Verified Partner Schools", sub: "Madhubani, Darbhanga & Patna" },
    { num: "7,500+", label: "Active Students & Parents", sub: "100% Digitally Connected" },
    { num: "10 Sec", label: "Fastest Daily Attendance", sub: "Auto SMS Alerts to Parents" },
    { num: "₹0", label: "Hidden Setup Cost", sub: "Zero Annual AMC Trap" },
  ];

  return (
    <section className="border-b border-border bg-gradient-to-b from-background via-muted/30 to-background py-16">
      <div className="container text-center">
        {/* Impact Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-10">
          {impacts.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border/80 bg-card p-5 shadow-soft hover:border-primary/40 hover:shadow-card transition-all"
            >
              <b className="font-display text-3xl sm:text-4xl font-black bg-gradient-to-r from-primary to-brand-sky bg-clip-text text-transparent">
                {item.num}
              </b>
              <h4 className="mt-2 text-xs sm:text-sm font-bold text-foreground">{item.label}</h4>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </div>

        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
          One Unified Platform • Endless Capabilities
        </p>
        <h3 className="mt-2 font-display text-2xl sm:text-3xl font-black text-foreground">
          Built Specifically for the Daily Operations of Indian Schools
        </h3>

        <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {[
            "10-Second Attendance", "Online & Cash Fee Receipts", "CBSE Marksheet Suite",
            "Digital Homework Desk", "Parent WhatsApp Updates", "Teacher Time-Table",
            "Multi-Branch Architecture", "Student ID Cards", "Transport & Bus Routes",
            "School Library ERP", "Daily Cashbook Audit"
          ].map(x => (
            <span key={x} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-xs hover:border-primary/40 transition-colors">
              ✓ {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problems() {
  const [problemMode, setProblemMode] = useState<"after" | "before">("after");

  const beforeProblems = [
    [Clock3, "30% Time Lost to Registers", "Teachers waste precious morning teaching periods calling rollcall and marking paper logs."],
    [IndianRupee, "Fee Leakage & Cash Mismatch", "Paper slips get lost, parents claim they paid, and accounting totals don't match cash in drawer."],
    [FileBarChart, "Exam Marksheet Chaos", "Manual report card preparation takes days of calculating totals and handwriting grades."],
    [MessageCircle, "Disconnected Parents", "Parents only find out about attendance or homework issues when they physically visit school."],
    [Layers3, "Scattered Paperwork", "Student documents, transfer certificates, and admission files stored in dusty paper folders."],
    [Search, "Zero Financial Visibility", "Directors have no live dashboard to see how much fee was collected today vs what is due."],
  ];

  const afterSolutions = [
    [Zap, "10-Second Digital Rollcall", "Complete entire class attendance on any mobile phone in 10 seconds with zero paperwork."],
    [ShieldCheck, "Zero-Leakage Fee Management", "1-click branded digital receipts, auto ledger updates, and instant WhatsApp dues reminders."],
    [Award, "Automated CBSE Gradecards", "Enter subject marks once. System auto-calculates total, percentage, grade, and generates printable PDF."],
    [HeartHandshake, "Connected Parent Portal", "Parents check real-time attendance, pending fees, homework, and exam timetables 24/7 on mobile."],
    [LockKeyhole, "Encrypted Cloud Records", "Every student admission, document, and certificate safely stored in 100% isolated cloud storage."],
    [TrendingUp, "360° Principal Intelligence", "Directors check live cashflow, class attendance %, and pending fee collection from anywhere."],
  ];

  const currentCards = problemMode === "after" ? afterSolutions : beforeProblems;

  return (
    <section className="section bg-muted/40 relative overflow-hidden">
      <div className="container">
        <SectionTitle
          eyebrow="The Transformation"
          title="From Traditional Chaos to Modern School Excellence"
          copy="See the clear contrast between running a school on paper registers vs. running on the EduSchool-Saathi cloud."
          center
        />

        {/* Interactive Chaos vs Clarity Switcher */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-xl border border-border bg-card p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setProblemMode("before")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                problemMode === "before"
                  ? "bg-destructive text-destructive-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <XCircle className="size-4" />
              Without EduSchool-Saathi (The Chaos)
            </button>
            <button
              type="button"
              onClick={() => setProblemMode("after")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                problemMode === "after"
                  ? "bg-emerald-600 text-white shadow-brand scale-105"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <CheckCircle2 className="size-4" />
              With EduSchool-Saathi (The Clarity & Order)
            </button>
          </div>
        </div>

        {/* Grid of 6 cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentCards.map(([I, t, d]) => (
            <div
              key={String(t)}
              className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 shadow-soft ${
                problemMode === "after"
                  ? "border-emerald-500/30 bg-card hover:border-emerald-500/60 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]"
                  : "border-destructive/20 bg-card hover:border-destructive/40 hover:shadow-card"
              }`}
            >
              <span
                className={`grid size-12 place-items-center rounded-lg ${
                  problemMode === "after"
                    ? "bg-emerald-500/15 text-emerald-600"
                    : "bg-destructive/10 text-destructive"
                }`}
              >
                <I className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{t as string}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d as string}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 font-display text-base sm:text-lg font-black text-primary">
            <Zap className="size-5 text-brand-warm" />
            EduSchool-Saathi brings your entire school from manual fatigue to modern excellence.
          </div>
        </div>
      </div>
    </section>
  );
}

function Platform({ openDemo }: { openDemo?: () => void }) {
  const [aboutTab, setAboutTab] = useState<"overview" | "comparison" | "vision" | "features">("overview");

  return (
    <>
      <section className="section overflow-hidden bg-background relative" id="about">
        {/* Subtle decorative glows */}
        <div className="absolute top-1/4 -left-40 size-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 size-96 rounded-full bg-brand-sky/5 blur-3xl pointer-events-none" />

        <div className="container relative">
          <SectionTitle
            eyebrow="Extraordinary School SaaS • About EduSchool-Saathi"
            title="The Modern Operating System Built for Tomorrow's Schools."
            copy="Crafted specifically to solve the grassroots ground realities of schools in Madhubani, Darbhanga, Patna, and Bihar. We empower educators with a unified, zero-friction cloud ERP that turns chaotic manual registers into instant digital intelligence."
          />

          {/* Interactive Navigation Pills for About Section */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-border/80 pb-4">
            {[
              { id: "overview", label: "🌟 Why EduSchool-Saathi?", subtitle: "Core Philosophy" },
              { id: "comparison", label: "⚡ Kaise Dusre Software Se Alag Hai?", subtitle: "Comparison Matrix" },
              { id: "vision", label: "🎯 Our Vision & Mission", subtitle: "Purpose & Promise" },
              { id: "features", label: "🚀 Core Features Quick Overview", subtitle: "Instant Capabilities" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setAboutTab(tab.id as any)}
                className={`group flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                  aboutTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-brand scale-[1.02]"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent hover:border-primary/30"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tabbed Content Area with Official Logo Showcase on Right */}
          <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Content Column based on Tab */}
            <div className="flex flex-col justify-between">
              {aboutTab === "overview" && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-extrabold text-primary">
                    <Sparkles className="size-3.5 text-brand-warm" />
                    Built for Ground Realities in Bihar & Beyond
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground">
                    "Na Koi Heavy Server, Na Lakho Ka Kharcha — Bas Ek Click Me Pura School Control"
                  </h3>

                  <p className="text-sm sm:text-base leading-7 text-muted-foreground">
                    Most legacy school software was built a decade ago for giant metro institutions with heavy IT teams and air-conditioned computer labs. In contrast, <b>EduSchool-Saathi</b> was designed right from the heart of Madhubani, Bihar — for principals, teachers, and parents who need lightning-fast speed on normal mobile connections.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2 pt-2">
                    {[
                      { icon: Zap, title: "Zero Setup or Installation", desc: "Open in any browser on phone, tablet or laptop. No expensive local server needed." },
                      { icon: ShieldCheck, title: "100% Data Isolation", desc: "Every school has its own independent database and dedicated role permissions." },
                      { icon: IndianRupee, title: "No Hidden AMC Traps", desc: "Transparent, predictable monthly subscription starting from just ₹5,000." },
                      { icon: MessageCircle, title: "Direct Parent Connectivity", desc: "Instant SMS/WhatsApp-ready notifications for fees, attendance, and homework." },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-lg border border-border bg-card p-3.5 shadow-xs hover:border-primary/40 transition-colors">
                        <span className="grid size-8 place-items-center rounded-md bg-accent text-primary mb-2">
                          <item.icon className="size-4" />
                        </span>
                        <b className="text-xs font-bold text-foreground block">{item.title}</b>
                        <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    {openDemo && (
                      <Button onClick={openDemo} className={primaryCta}>
                        Experience Live Demo <ArrowRight className="size-4" />
                      </Button>
                    )}
                    <a href="tel:6200087830" className={secondaryCta}>
                      <Phone className="size-4 text-primary" /> Call Advisor: +91 62000 87830
                    </a>
                  </div>
                </div>
              )}

              {aboutTab === "comparison" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand-warm/30 bg-brand-warm/10 px-3 py-1 text-xs font-extrabold text-brand-warm">
                    <Flame className="size-3.5" />
                    Dusre Software Se Kaise Alag Hai?
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground">
                    Traditional Software vs. EduSchool-Saathi
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Discover why progressive schools across Bihar are leaving legacy desktop software and spreadsheets behind.
                  </p>

                  <div className="grid gap-3 pt-2">
                    {[
                      {
                        feature: "Installation & Accessibility",
                        oldWay: "Desktop-only; locked to 1 PC; data lost if Windows crashes",
                        newWay: "100% Cloud SaaS; works on phone, tablet, laptop anywhere with continuous cloud backup",
                      },
                      {
                        feature: "Pricing & Contracts",
                        oldWay: "₹80,000–₹2,00,000 upfront + compulsory heavy Annual AMC charges",
                        newWay: "Starts at just ₹5,000/month; zero AMC traps, free updates included forever",
                      },
                      {
                        feature: "Daily Attendance Taking",
                        oldWay: "Manual paper registers or clunky software taking 25+ minutes per class",
                        newWay: "Superfast 10-Second Digital Attendance with instant SMS/WhatsApp parent alerts",
                      },
                      {
                        feature: "Fee Collection & Receipts",
                        oldWay: "Handwritten paper slips; high chance of fee leakage and cash confusion",
                        newWay: "Instant QR/online/cash collection with branded digital receipt printing",
                      },
                      {
                        feature: "Parent Involvement",
                        oldWay: "Parents have zero clue; must visit school office for every minor issue",
                        newWay: "Dedicated Parent Portal for live marks, attendance, dues, and school notices",
                      },
                    ].map((row, idx) => (
                      <div key={idx} className="rounded-lg border border-border bg-card p-3 shadow-xs hover:border-primary/30 transition-colors">
                        <div className="text-xs font-extrabold text-foreground pb-1 border-b border-border/50 mb-2 flex items-center justify-between">
                          <span>{row.feature}</span>
                          <span className="text-[10px] uppercase font-bold text-primary">EduSchool-Saathi Advantage</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2 text-xs">
                          <div className="flex items-start gap-1.5 text-destructive bg-destructive/5 rounded p-2 border border-destructive/10">
                            <XCircle className="size-3.5 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-[11px]"><b className="text-destructive">Old Software:</b> {row.oldWay}</span>
                          </div>
                          <div className="flex items-start gap-1.5 text-success bg-success/5 rounded p-2 border border-success/15">
                            <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-success" />
                            <span className="text-foreground text-[11px]"><b className="text-success">Saathi:</b> {row.newWay}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {aboutTab === "vision" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-extrabold text-emerald-600">
                    <Target className="size-3.5" />
                    Our Core Purpose & North Star
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground">
                    Our Vision & Mission for Bihar & India
                  </h3>

                  <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-accent/30 to-background p-5 shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary flex items-center gap-1.5">
                      <Compass className="size-3.5 text-primary" /> Our Vision
                    </span>
                    <h4 className="mt-2 font-display text-lg sm:text-xl font-black text-foreground">
                      "Har School Ka Saathi — Har Bachha Digitally Empowered"
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm leading-6 text-muted-foreground">
                      To create an educational ecosystem where every school — whether in Patna, Madhubani, Darbhanga, or remote village blocks — has seamless access to world-class software that saves time, ensures fee transparency, and empowers teachers to focus on teaching.
                    </p>
                  </div>

                  <div className="rounded-xl border border-brand-warm/30 bg-gradient-to-br from-brand-warm/5 via-card to-background p-5 shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-warm flex items-center gap-1.5">
                      <Target className="size-3.5 text-brand-warm" /> Our Mission
                    </span>
                    <h4 className="mt-2 font-display text-lg sm:text-xl font-black text-foreground">
                      Democratize Technology with Affordability & Ground Reality Design
                    </h4>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-success shrink-0" />
                        <span><b>Zero Fee Leakage:</b> Bring 100% financial transparency to school directors and owners.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-success shrink-0" />
                        <span><b>Save 2+ Hours Daily:</b> Give teachers automated marks entry, report card generation, and 10s attendance.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-success shrink-0" />
                        <span><b>Bridge Parents & Teachers:</b> Keep rural and semi-urban parents actively involved in their child's academic progress.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {aboutTab === "features" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-extrabold text-sky-600">
                    <Zap className="size-3.5" />
                    Instant High-Impact Capabilities
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground">
                    Quick Overview of EduSchool-Saathi Features
                  </h3>

                  <div className="grid gap-3 sm:grid-cols-2 pt-1">
                    {[
                      { title: "10-Second Attendance", tag: "Academic", desc: "Take whole class roll call in 10 seconds. Auto absentee SMS to parents." },
                      { title: "Instant Fee Receipts", tag: "Finance", desc: "One-click printable receipts, pending dues alert & automated ledger reconciliation." },
                      { title: "Exam & Grade Cards", tag: "Exams", desc: "CBSE & State Board compliant marks entry, grade auto-calculation & PDF print." },
                      { title: "Digital Homework", tag: "Learning", desc: "Subject-wise daily homework uploaded with deadlines & parent notifications." },
                      { title: "4 Role-Based Portals", tag: "Portals", desc: "Dedicated dashboards for Principal, Teachers, Students, and Parents." },
                      { title: "Multi-School SaaS", tag: "Enterprise", desc: "Manage single or multiple branches under one centralized Super Admin." },
                    ].map((f, i) => (
                      <div key={i} className="rounded-lg border border-border bg-card p-3.5 shadow-xs hover:border-primary/40 transition-colors">
                        <div className="flex items-center justify-between">
                          <b className="text-xs font-bold text-foreground">{f.title}</b>
                          <span className="text-[9px] font-extrabold uppercase rounded bg-accent px-1.5 py-0.5 text-primary">{f.tag}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a href="#features" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                      Explore all 19+ modules in full detail <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Official Logo Showcase replacing the old classroom photo */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-primary/20 via-teal-500/10 to-brand-warm/20 blur-xl" />

              <div className="relative w-full rounded-2xl border-2 border-primary/25 bg-gradient-to-b from-card via-card/95 to-muted p-6 sm:p-8 shadow-card flex flex-col items-center text-center">
                {/* Official Verification Seal */}
                <div className="w-full flex items-center justify-between pb-4 border-b border-border/70 mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                    <ShieldCheck className="size-3.5 text-emerald-600" /> Official SaaS Platform
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground">
                    Madhubani • Bihar • India
                  </span>
                </div>

                {/* Central Official Logo Presentation */}
                <div className="relative group my-2">
                  <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-md group-hover:bg-primary/30 transition-all" />
                  <div className="relative size-44 sm:size-52 rounded-2xl bg-white p-3 shadow-dashboard border-2 border-primary/30 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={logoImg}
                      alt="EduSchool-Saathi Official Logo"
                      className="size-full object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Logo Title & Tagline */}
                <div className="mt-5">
                  <h4 className="font-display text-2xl font-black tracking-tight flex items-center justify-center">
                    <span className="text-[#1E40AF]">Edu</span>
                    <span className="text-[#FF671F]">School</span>
                    <span className="text-slate-400 mx-0.5">-</span>
                    <span className="text-[#047857]">Saathi</span>
                  </h4>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF671F] mt-1">
                    Har School Ka Saathi
                  </p>
                  <p className="text-[11px] text-muted-foreground max-w-xs mx-auto mt-2 leading-relaxed">
                    The #1 Multi-School Management ERP & SaaS Platform for Schools across Bihar & India.
                  </p>
                </div>

                {/* Floating highlight badges */}
                <div className="mt-6 grid grid-cols-2 gap-2 w-full text-left">
                  <div className="rounded-lg border border-border bg-card/80 p-2.5 shadow-xs">
                    <span className="text-[10px] text-muted-foreground block">Architecture</span>
                    <b className="text-xs font-bold text-foreground flex items-center gap-1 mt-0.5">
                      <Zap className="size-3 text-brand-warm" /> 100% Cloud-Native
                    </b>
                  </div>
                  <div className="rounded-lg border border-border bg-card/80 p-2.5 shadow-xs">
                    <span className="text-[10px] text-muted-foreground block">Rollout Speed</span>
                    <b className="text-xs font-bold text-foreground flex items-center gap-1 mt-0.5">
                      <Clock3 className="size-3 text-primary" /> Under 24 Hours
                    </b>
                  </div>
                  <div className="rounded-lg border border-border bg-card/80 p-2.5 shadow-xs">
                    <span className="text-[10px] text-muted-foreground block">Data Privacy</span>
                    <b className="text-xs font-bold text-foreground flex items-center gap-1 mt-0.5">
                      <LockKeyhole className="size-3 text-success" /> Isolated Database
                    </b>
                  </div>
                  <div className="rounded-lg border border-border bg-card/80 p-2.5 shadow-xs">
                    <span className="text-[10px] text-muted-foreground block">Affordability</span>
                    <b className="text-xs font-bold text-foreground flex items-center gap-1 mt-0.5">
                      <IndianRupee className="size-3 text-brand-sky" /> ₹5,000/mo Onwards
                    </b>
                  </div>
                </div>

                {/* Bottom interactive action */}
                <div className="mt-6 w-full pt-4 border-t border-border/70 flex items-center justify-between text-[11px]">
                  <span className="text-muted-foreground font-medium">Have questions?</span>
                  <a href="tel:6200087830" className="font-bold text-primary hover:underline flex items-center gap-1">
                    <Phone className="size-3" /> +91 62000 87830
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Partnerships & Ecosystem Highlight */}
      <section className="section bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden" id="ecosystem">
        {/* Ambient background glows */}
        <div className="absolute -top-32 left-1/4 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 size-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <div className="mx-auto text-center max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              <Sparkles className="size-3.5 text-emerald-300" /> Strategic Tech Ecosystem
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Backed by Healthcare Innovation & Modern IT Engineering
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-7 text-slate-300">
              EduSchool-Saathi stands on a rock-solid foundation of cross-industry technology synergy — bringing together healthcare diagnostics, digital wellness, and enterprise cloud software.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Sponsor Card */}
            <div className="group relative rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/50 via-slate-900/80 to-slate-950/90 p-7 sm:p-9 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-300 border border-emerald-500/40">
                    Official Sponsor
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 animate-ping" /> Active Alliance
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 grid place-items-center text-emerald-300">
                    <Award className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-white group-hover:text-emerald-300 transition-colors">
                      Sehaat Saathi App
                    </h3>
                    <span className="text-xs font-semibold text-emerald-400/90">Healthcare & Diagnostics Companion</span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  India's pioneering digital healthcare and diagnostics platform, empowering students, faculty families, and communities with telemedicine, OPD booking, and digital health records.
                </p>

                <div className="mt-6 space-y-2.5 rounded-xl border border-emerald-500/20 bg-emerald-950/30 p-4 text-xs text-emerald-200">
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-emerald-400 shrink-0" />
                    <span>Student health & diagnostic checkup integration</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-emerald-400 shrink-0" />
                    <span>Annual on-campus school health wellness camps</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-emerald-400 shrink-0" />
                    <span>Digital student medical health card generation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-emerald-500/20 flex items-center justify-between">
                <span className="text-xs text-slate-400">Official Health Partner</span>
                <a
                  href="https://sehaat-saathi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 px-4 py-2 text-xs font-bold text-emerald-300 hover:text-white transition-all"
                >
                  Visit Sehaat Saathi App <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Powered By Card */}
            <div className="group relative rounded-2xl border border-sky-500/30 bg-gradient-to-b from-sky-950/50 via-slate-900/80 to-slate-950/90 p-7 sm:p-9 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-sky-300 border border-sky-500/40">
                    Engineering & Infrastructure
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-sky-400">
                    <span className="size-2 rounded-full bg-sky-400 animate-ping" /> Enterprise Grade
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-sky-500/20 border border-sky-500/30 grid place-items-center text-sky-300">
                    <Zap className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-white group-hover:text-sky-300 transition-colors">
                      TechSeva IT Solutions Agency
                    </h3>
                    <span className="text-xs font-semibold text-sky-400/90">Software Engineering & Cloud Architecture</span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Full-cycle software engineering and cloud transformation powerhouse delivering high-performance SaaS platforms, enterprise data pipelines, and responsive digital products.
                </p>

                <div className="mt-6 space-y-2.5 rounded-xl border border-sky-500/20 bg-sky-950/30 p-4 text-xs text-sky-200">
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-sky-400 shrink-0" />
                    <span>Multi-tenant isolated cloud architecture</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-sky-400 shrink-0" />
                    <span>99.9% uptime SLA & bank-grade 256-bit encryption</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-sky-400 shrink-0" />
                    <span>Continuous backup & instant disaster recovery</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-sky-500/20 flex items-center justify-between">
                <span className="text-xs text-slate-400">Technology & Cloud Partner</span>
                <a
                  href="https://techseva-it-solutions.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/30 px-4 py-2 text-xs font-bold text-sky-300 hover:text-white transition-all"
                >
                  Visit TechSeva IT Solutions <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Genesis & Vision Story */}
      <section className="section bg-gradient-to-br from-slate-950 via-teal-950/70 to-slate-950 text-white relative overflow-hidden">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-10 right-10 size-80 rounded-full bg-brand-warm/10 blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-warm/40 bg-brand-warm/15 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-warm">
                <Sparkles className="size-3.5 text-brand-warm" /> The Genesis & Vision
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.12] text-white">
                Why Was EduSchool-Saathi Born?
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                In small towns and rural districts across Bihar — from <b>Bara Bazar Madhubani</b> and Darbhanga to Samastipur and Patna — thousands of dedicated school owners and teachers wake up every morning fighting a war against paper registers, missing fee ledgers, and uncoordinated schedules.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
                When they looked for software, big metro vendors demanded ₹1,00,000+ upfront and locked them into painful annual maintenance contracts. We said: <b>No more.</b> Every school in Bihar deserves modern, high-speed digital power at a price that fits their budget.
              </p>

              {/* Quote Box */}
              <div className="mt-6 rounded-xl border-l-4 border-brand-warm bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-lg bg-white p-1 shrink-0 overflow-hidden shadow-sm">
                    <img src={logoImg} alt="EduSchool-Saathi" className="size-full object-contain" />
                  </div>
                  <div>
                    <b className="text-sm font-bold text-white block">
                      <span className="text-sky-300">Edu</span>
                      <span className="text-amber-400">School</span>
                      <span className="text-white/60">-</span>
                      <span className="text-emerald-400">Saathi</span>
                      <span className="text-white/80 font-medium text-xs ml-1.5">— &ldquo;Har School Ka Saathi&rdquo;</span>
                    </b>
                    <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                      Built for rural, semi-urban & progressive schools across Bihar & India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5"><Check className="size-4 text-emerald-400" /> ₹5,000/mo Base Plan</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Check className="size-4 text-emerald-400" /> No Heavy Server</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Check className="size-4 text-emerald-400" /> WhatsApp & SMS Ready</span>
              </div>
            </div>

            {/* 4 Interactive Pillars of Genesis */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  step: "01",
                  title: "The Problem We Saw",
                  desc: "Principals losing up to 30% of their day resolving fee disputes, attendance discrepancies, and manual exam calculations.",
                  border: "border-red-500/30 hover:border-red-400/60 bg-red-950/20",
                  badge: "bg-red-500/20 text-red-300",
                },
                {
                  step: "02",
                  title: "The Zero-Friction Solution",
                  desc: "A pure cloud SaaS ERP that requires zero IT setup and runs smoothly on normal Android phones and slow village internet.",
                  border: "border-sky-500/30 hover:border-sky-400/60 bg-sky-950/20",
                  badge: "bg-sky-500/20 text-sky-300",
                },
                {
                  step: "03",
                  title: "The Honest Pricing Model",
                  desc: "No hidden setup fees, no compulsory AMC traps. Pay a simple predictable monthly fee with continuous free upgrades.",
                  border: "border-emerald-500/30 hover:border-emerald-400/60 bg-emerald-950/20",
                  badge: "bg-emerald-500/20 text-emerald-300",
                },
                {
                  step: "04",
                  title: "The Lasting Impact",
                  desc: "Schools report 100% fee transparency, 95%+ parent satisfaction, and over 2 hours saved daily for every teacher.",
                  border: "border-amber-500/30 hover:border-amber-400/60 bg-amber-950/20",
                  badge: "bg-amber-500/20 text-amber-300",
                },
              ].map((card) => (
                <div
                  key={card.step}
                  className={`rounded-xl border ${card.border} p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${card.badge}`}>
                      Phase {card.step}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-extrabold">{card.step}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MultiSchool() {
  const [selectedSchool, setSelectedSchool] = useState<number>(0);
  const schools = [
    {
      id: "SCH-8492",
      name: "DPS Public School",
      location: "Bara Bazar, Madhubani",
      students: 580,
      teachers: 28,
      collection: "₹4.8L",
      attendance: "96.4%",
      plan: "Enterprise SaaS",
      dbStatus: "Encrypted & Isolated",
    },
    {
      id: "SCH-4102",
      name: "St. Xavier's Academy",
      location: "Laheriasarai, Darbhanga",
      students: 740,
      teachers: 36,
      collection: "₹6.2L",
      attendance: "94.8%",
      plan: "Enterprise SaaS",
      dbStatus: "Encrypted & Isolated",
    },
    {
      id: "SCH-9931",
      name: "Patna Central Model School",
      location: "Boring Road, Patna",
      students: 1120,
      teachers: 54,
      collection: "₹9.7L",
      attendance: "97.2%",
      plan: "Multi-Branch Pro",
      dbStatus: "Encrypted & Isolated",
    },
  ];

  const current = schools[selectedSchool];

  return (
    <section className="section bg-gradient-to-b from-background via-muted/30 to-background" id="solutions">
      <div className="container">
        <SectionTitle
          eyebrow="Multi-School SaaS Architecture"
          title="One Centralized Engine. Zero Data Leakage Between Schools."
          copy="Whether you run a single proud institution in Madhubani or manage 10 branches across Bihar, EduSchool-Saathi gives every school an isolated, private database with instant Super Admin visibility."
          center
        />

        {/* Interactive Tenant Switcher */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-card">
          {/* Top Super Admin Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="size-12 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-brand">
                <Layers3 className="size-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-black text-lg text-foreground">
                    EduSchool-Saathi Multi-Tenant Network
                  </h3>
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-600">
                    Live Cluster
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Select a school tenant below to inspect isolated database metrics:
                </p>
              </div>
            </div>

            {/* Selector Tabs */}
            <div className="flex items-center gap-2 bg-muted p-1 rounded-xl">
              {schools.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSchool(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedSchool === idx
                      ? "bg-card text-foreground shadow-sm border border-border"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.name.split(" ")[0]} ({s.id})
                </button>
              ))}
            </div>
          </div>

          {/* Active School Environment Card */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.3fr] items-center">
            {/* Left: Active School Details */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/20 text-primary">
                  Tenant ID: {current.id}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  Isolated Pod Active
                </span>
              </div>

              <div>
                <h4 className="font-display text-xl font-black text-foreground">
                  {current.name}
                </h4>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="size-3.5 text-brand-warm" /> {current.location}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-lg border border-border bg-card p-3 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                    Active Students
                  </span>
                  <b className="text-lg font-black text-foreground">{current.students}</b>
                </div>
                <div className="rounded-lg border border-border bg-card p-3 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                    Teaching Staff
                  </span>
                  <b className="text-lg font-black text-foreground">{current.teachers}</b>
                </div>
                <div className="rounded-lg border border-border bg-card p-3 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                    This Month Dues Collected
                  </span>
                  <b className="text-lg font-black text-emerald-600">{current.collection}</b>
                </div>
                <div className="rounded-lg border border-border bg-card p-3 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                    Daily Roll-call Rate
                  </span>
                  <b className="text-lg font-black text-primary">{current.attendance}</b>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-muted-foreground flex items-center justify-between">
                <span>License: <b>{current.plan}</b></span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <LockKeyhole className="size-3" /> {current.dbStatus}
                </span>
              </div>
            </div>

            {/* Right: Tenant Architecture Visual */}
            <div className="space-y-4">
              <h5 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Live Multi-Branch Tenant Map
              </h5>

              <div className="grid gap-3 sm:grid-cols-3">
                {schools.map((s, idx) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedSchool(idx)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                      selectedSchool === idx
                        ? "border-primary bg-card shadow-brand ring-2 ring-primary/20 -translate-y-1"
                        : "border-border bg-muted/40 hover:bg-card hover:border-primary/40 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="grid size-8 place-items-center rounded-lg bg-accent text-primary">
                        <School className="size-4" />
                      </span>
                      <span className="text-[9px] font-mono font-bold text-muted-foreground">
                        {s.id}
                      </span>
                    </div>
                    <b className="block text-xs font-bold text-foreground truncate">{s.name}</b>
                    <p className="text-[10px] text-muted-foreground mt-0.5 truncate">{s.location}</p>

                    <div className="mt-3 pt-2 border-t border-border flex items-center justify-between text-[10px]">
                      <span>{s.students} Students</span>
                      <span className="font-bold text-emerald-600">{s.attendance}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-border bg-card p-4 shadow-xs flex items-center gap-3">
                <ShieldCheck className="size-5 text-primary shrink-0" />
                <p className="text-xs text-muted-foreground">
                  <b className="text-foreground">Strict Tenant Isolation:</b> School A administrators and accountants can never see, edit, or access records belonging to School B or C. Data is partitioned at the database schema level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{/* School ROI & Savings Calculator */}
function RoiCalculator({ openDemo }: { openDemo: () => void }) {
  const [studentCount, setStudentCount] = useState<number>(500);

  // Dynamic calculations based on student count
  const adminHoursSaved = Math.round(studentCount * 0.28);
  const feeLeakagePrevented = Math.round(studentCount * 360);
  const paperRegistersSaved = Math.round(studentCount * 0.85);
  const parentTrustScore = studentCount > 800 ? "98.5%" : studentCount > 400 ? "96.8%" : "95.2%";

  return (
    <section className="section bg-gradient-to-b from-ink via-slate-900 to-ink text-ink-foreground relative overflow-hidden" id="roi-calculator">
      <div className="absolute -top-32 left-1/3 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 size-96 rounded-full bg-brand-warm/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-warm/40 bg-brand-warm/15 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-warm">
            <TrendingUp className="size-3.5 text-brand-warm" /> Interactive Value Simulator
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Calculate How Much Time & Money EduSchool-Saathi Saves Your School
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-muted">
            Drag the slider below to match your school's student strength and witness the real monthly and annual impact on administration, fee recovery, and teacher efficiency.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl rounded-2xl border border-ink-line bg-ink-panel p-6 sm:p-10 shadow-dashboard backdrop-blur-xl">
          {/* Slider & Presets Header */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-sky">
                  Select Total School Strength
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-4xl sm:text-5xl font-black text-white">
                    {studentCount}
                  </span>
                  <span className="text-sm font-semibold text-ink-muted">Enrolled Students</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-ink-muted mr-1 hidden sm:inline">
                  Presets:
                </span>
                {[250, 500, 1000, 1800].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setStudentCount(preset)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                      studentCount === preset
                        ? "bg-primary text-primary-foreground shadow-brand"
                        : "border border-ink-line bg-ink text-ink-muted hover:text-white hover:border-brand-sky/40"
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Range Input Slider */}
            <div className="pt-4">
              <input
                type="range"
                min="100"
                max="2000"
                step="25"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full h-3 bg-ink rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] font-mono text-ink-muted mt-2">
                <span>100 Students (Pre-School)</span>
                <span>500 Students (Standard)</span>
                <span>1,000 Students (High School)</span>
                <span>2,000 Students (Senior Secondary)</span>
              </div>
            </div>
          </div>

          {/* Impact Metric Cards Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-ink-line bg-ink p-4 transition-all hover:border-primary/50">
              <span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                Admin Hours Saved
                <Clock3 className="size-4 text-primary" />
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <b className="font-display text-2xl sm:text-3xl font-black text-white">
                  {adminHoursSaved}
                </b>
                <span className="text-xs text-ink-muted">hrs / month</span>
              </div>
              <p className="mt-2 text-[11px] text-ink-muted leading-relaxed">
                Automated attendance, fast fee receipts & one-click marks cards.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 transition-all hover:border-emerald-400/60">
              <span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Fee Leakage Prevented
                <IndianRupee className="size-4 text-emerald-400" />
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <b className="font-display text-2xl sm:text-3xl font-black text-emerald-400">
                  ₹{feeLeakagePrevented.toLocaleString("en-IN")}
                </b>
                <span className="text-xs text-emerald-300">/ year</span>
              </div>
              <p className="mt-2 text-[11px] text-emerald-200/70 leading-relaxed">
                Zero missed dues through instant WhatsApp/SMS receipts & alerts.
              </p>
            </div>

            <div className="rounded-xl border border-ink-line bg-ink p-4 transition-all hover:border-brand-sky/50">
              <span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-brand-sky">
                Paper Registers Eliminated
                <FileText className="size-4 text-brand-sky" />
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <b className="font-display text-2xl sm:text-3xl font-black text-white">
                  {paperRegistersSaved}
                </b>
                <span className="text-xs text-ink-muted">registers / yr</span>
              </div>
              <p className="mt-2 text-[11px] text-ink-muted leading-relaxed">
                Save paper costs, printing hassle, and storage shelf space.
              </p>
            </div>

            <div className="rounded-xl border border-ink-line bg-ink p-4 transition-all hover:border-brand-warm/50">
              <span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-brand-warm">
                Parent Engagement Rate
                <HeartHandshake className="size-4 text-brand-warm" />
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <b className="font-display text-2xl sm:text-3xl font-black text-brand-warm">
                  {parentTrustScore}
                </b>
                <span className="text-xs text-ink-muted">Satisfaction</span>
              </div>
              <p className="mt-2 text-[11px] text-ink-muted leading-relaxed">
                Parents stay connected with real-time academic progress.
              </p>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-8 pt-6 border-t border-ink-line flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold text-white">
                Ready to unlock ₹{(feeLeakagePrevented).toLocaleString("en-IN")} in annual recovered value?
              </p>
              <span className="text-[11px] text-ink-muted">
                Setup takes under 24 hours. No expensive hardware or server required.
              </span>
            </div>

            <Button onClick={openDemo} className={`${primaryCta} w-full sm:w-auto`}>
              Schedule Free On-Site Demo <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const cats = ["All", "Core", "Academic", "Finance", "Portals", "Connect", "Insights", "Admin", "Extended"];
  const [active, setActive] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredList = featureGroups.filter((module) => {
    const matchesCategory = active === "All" || module.cat === active;
    const matchesSearch =
      searchQuery.trim() === "" ||
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="features" className="section bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 size-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 size-96 rounded-full bg-violet-600/15 blur-3xl" />
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary mb-5">
            <Sparkles className="size-3.5" />Complete Platform Modules
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Everything Your School Needs{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Built into 19+ High-Speed Modules
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
            From pre-nursery to Class 12 — manage student admissions, instant fee collection, exam marks, and bus transport from a single lightning-fast dashboard.
          </p>
        </div>


        {/* Live Search & Category Bar */}
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search modules (e.g., 'attendance', 'fees', 'exam', 'parent')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 w-full rounded-full border border-white/10 bg-white/5 backdrop-blur-md pl-10 pr-4 text-xs sm:text-sm font-medium text-white placeholder:text-slate-500 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 ${
                  active === c
                    ? "bg-primary text-primary-foreground shadow-brand scale-105"
                    : "border border-white/15 bg-white/5 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Colorful Cards Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredList.length > 0 ? (
            filteredList.map(({ icon: I, title, desc, items, cat }, idx) => {
              type Palette = { grad: string; iconBg: string; badge: string; badgeText: string; border: string; glow: string };
              const palettes: Record<string, Palette> = {
                Core:     { grad: "from-blue-600 via-blue-500 to-indigo-600",     iconBg: "bg-white/20", badge: "bg-blue-900/50 text-blue-100 border border-blue-400/40",       badgeText: "text-blue-100/75",    border: "border-blue-500/30",    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"    },
                Academic: { grad: "from-violet-600 via-purple-500 to-pink-600",   iconBg: "bg-white/20", badge: "bg-violet-900/50 text-violet-100 border border-violet-400/40", badgeText: "text-violet-100/75",  border: "border-violet-500/30",  glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"    },
                Finance:  { grad: "from-emerald-600 via-green-500 to-teal-600",   iconBg: "bg-white/20", badge: "bg-emerald-900/50 text-emerald-100 border border-emerald-400/40", badgeText: "text-emerald-100/75", border: "border-emerald-500/30", glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"    },
                Portals:  { grad: "from-orange-500 via-amber-500 to-yellow-500",  iconBg: "bg-white/20", badge: "bg-amber-900/50 text-amber-100 border border-amber-400/40",     badgeText: "text-amber-100/75",   border: "border-amber-500/30",   glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"    },
                Connect:  { grad: "from-rose-600 via-pink-500 to-fuchsia-600",    iconBg: "bg-white/20", badge: "bg-rose-900/50 text-rose-100 border border-rose-400/40",         badgeText: "text-rose-100/75",    border: "border-rose-500/30",    glow: "hover:shadow-[0_0_40px_rgba(244,63,94,0.4)]"     },
                Insights: { grad: "from-cyan-600 via-sky-500 to-blue-500",        iconBg: "bg-white/20", badge: "bg-cyan-900/50 text-cyan-100 border border-cyan-400/40",         badgeText: "text-cyan-100/75",    border: "border-cyan-500/30",    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"     },
                Admin:    { grad: "from-slate-600 via-slate-500 to-zinc-600",     iconBg: "bg-white/20", badge: "bg-slate-800/60 text-slate-100 border border-slate-400/40",     badgeText: "text-slate-100/75",   border: "border-slate-400/30",   glow: "hover:shadow-[0_0_40px_rgba(100,116,139,0.4)]"   },
                Extended: { grad: "from-indigo-600 via-violet-500 to-purple-700", iconBg: "bg-white/20", badge: "bg-indigo-900/50 text-indigo-100 border border-indigo-400/40",   badgeText: "text-indigo-100/75",  border: "border-indigo-500/30",  glow: "hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"    },
              };
              const p = palettes[cat] ?? palettes["Core"];
              return (
                <article
                  key={title}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.grad} p-6 shadow-xl border ${p.border} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${p.glow} flex flex-col justify-between cursor-default`}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-white/10 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-8 -left-6 size-28 rounded-full bg-black/15 blur-2xl" />
                  <div>
                    <div className="flex items-start justify-between">
                      <span className={`grid size-12 place-items-center rounded-xl ${p.iconBg} text-white backdrop-blur-sm shadow-md ring-1 ring-white/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <I className="size-6 drop-shadow" />
                      </span>
                      <span className={`rounded-full ${p.badge} px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-sm`}>
                        {cat}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-black text-white drop-shadow leading-tight transition-colors duration-300 group-hover:text-yellow-100">
                      {title}
                    </h3>
                    <p className={`mt-2 min-h-12 text-xs sm:text-sm leading-6 ${p.badgeText}`}>
                      {desc}
                    </p>
                  </div>
                  <ul className="mt-5 grid gap-2 border-t border-white/20 pt-4">
                    {items.map((x) => (
                      <li key={x} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                        <Check className="size-3.5 shrink-0 text-white/70 drop-shadow" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-sm font-semibold text-slate-400">
                No modules found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setActive("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-primary hover:underline"
              >
                Reset Search &amp; Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Roles() {
  const [active, setActive] = useState<keyof typeof roles>("School Admin");
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const r = roles[active];

  const toggleTask = (task: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [`${active}-${task}`]: !prev[`${active}-${task}`],
    }));
  };

  return (
    <section id="roles" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Role-Based Experiences"
          title="Tailored Portals for Every Member of the School Family"
          copy="Principals, Teachers, Students, and Parents each get an intuitive dedicated portal focused only on what they need to accomplish today."
          center
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist">
          {(Object.keys(roles) as (keyof typeof roles)[]).map((k) => {
            const I = roles[k].icon;
            return (
              <button
                role="tab"
                aria-selected={active === k}
                key={k}
                onClick={() => setActive(k)}
                className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold transition-all ${
                  active === k
                    ? "border-primary bg-primary text-primary-foreground shadow-brand"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                <I className="size-4" />
                {k}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid overflow-hidden rounded-2xl border border-border bg-card shadow-card lg:grid-cols-[.8fr_1.2fr]">
          {/* Left Column: Role Details */}
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <span className="grid size-12 place-items-center rounded-xl bg-accent text-primary">
              <r.icon className="size-6" />
            </span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[.14em] text-primary">
              {active} Experience
            </p>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-black">
              A Clearer School Day, From One Single Screen.
            </h3>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {r.copy}
            </p>

            {/* Interactive Clickable Task Checklist */}
            <div className="mt-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                Click Tasks to Experience Daily Flow:
              </span>
              <ul className="space-y-2.5">
                {r.tasks.map((x) => {
                  const isDone = !!completedTasks[`${active}-${x}`];
                  return (
                    <li
                      key={x}
                      onClick={() => toggleTask(x)}
                      className={`cursor-pointer rounded-lg border p-2.5 text-xs font-semibold transition-all flex items-center justify-between ${
                        isDone
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700"
                          : "border-border bg-muted/40 hover:bg-accent text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <CheckCircle2
                          className={`size-4 ${
                            isDone ? "text-emerald-600 fill-emerald-100" : "text-muted-foreground"
                          }`}
                        />
                        <span className={isDone ? "line-through text-emerald-800" : ""}>{x}</span>
                      </span>
                      <span className="text-[10px] uppercase font-bold text-muted-foreground">
                        {isDone ? "Done ✓" : "Click to mark"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right Column: Live Simulator View */}
          <div className="bg-ink p-5 sm:p-8 flex flex-col justify-center">
            <div className="rounded-xl border border-ink-line bg-ink-panel p-5 sm:p-6 text-ink-foreground shadow-dashboard">
              <div className="flex items-center justify-between border-b border-ink-line pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-sky">
                    Role Simulation Active
                  </span>
                  <h4 className="font-display text-lg font-bold text-white">
                    {active} Portal Interface
                  </h4>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                  Online
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {r.stats.map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-ink-line bg-ink p-3.5">
                    <b className="font-display text-xl font-bold text-white">{value}</b>
                    <span className="mt-1 block text-[10px] text-ink-muted uppercase font-semibold">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-ink-line bg-ink p-4">
                <b className="text-xs font-bold text-white block mb-3">Live Active Actions</b>
                <div className="space-y-2">
                  {r.tasks.map((x, i) => {
                    const isDone = !!completedTasks[`${active}-${x}`];
                    return (
                      <div
                        key={x}
                        className={`flex items-center justify-between rounded p-2 text-xs transition-colors ${
                          isDone ? "bg-emerald-950/40 text-emerald-300" : "bg-ink-panel text-ink-muted"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="grid size-4 place-items-center rounded-full bg-brand-sky/20 text-[10px] font-bold text-brand-sky">
                            {i + 1}
                          </span>
                          <span>{x}</span>
                        </span>
                        {isDone && <span className="text-[10px] text-emerald-400 font-bold">Processed</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks(){const steps=[[Phone,"Talk to Us","Tell us about your school and everyday needs."],[Settings,"School Onboarding","Set up school information, classes and staff."],[Users,"Create School Accounts","Prepare appropriate access for every role."],[Play,"Start Managing","Move attendance, fees, exams and records online."],[TrendingUp,"Grow Digitally","Add more workflows as your school evolves."]];return <section id="how-it-works" className="section bg-muted/40"><div className="container"><SectionTitle eyebrow="Simple onboarding" title="Get Your School Digitally Connected in Simple Steps" center/><div className="relative mt-14 grid gap-4 md:grid-cols-5 md:before:absolute md:before:left-[10%] md:before:right-[10%] md:before:top-7 md:before:h-px md:before:bg-border">{steps.map(([I,t,d],i)=><div key={String(t)} className="relative rounded-md border border-border bg-card p-5 shadow-soft md:border-0 md:bg-transparent md:p-0 md:text-center md:shadow-none"><span className="relative mx-auto grid size-14 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-brand"><I className="size-5"/></span><span className="mt-4 block text-[10px] font-extrabold uppercase tracking-widest text-primary">Step {i+1}</span><h3 className="mt-1 font-display font-bold">{t as string}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{d as string}</p></div>)}</div></div></section>}

function Benefits() {
  const groups = [
    {
      title: "Built to Make School Management Easier",
      sub: "For school leaders",
      icon: Building2,
      items: [
        "Reduce manual work",
        "Centralize information",
        "Organize fee records",
        "Improve visibility",
        "Simplify examinations",
        "Reduce paperwork",
      ],
    },
    {
      title: "Give Teachers More Time to Teach",
      sub: "For teachers",
      icon: UserCheck,
      items: [
        "Faster attendance",
        "Easy homework",
        "Simple marks entry",
        "Timetable access",
        "Student information",
        "Digital communication",
      ],
    },
    {
      title: "Keep Parents Connected",
      sub: "For parents",
      icon: HeartHandshake,
      items: [
        "Know attendance",
        "Track fees",
        "View homework",
        "Check results",
        "Receive notices",
        "Stay updated",
      ],
    },
    {
      title: "A Better Digital Student Experience",
      sub: "For students",
      icon: GraduationCap,
      items: [
        "Academic information",
        "Homework",
        "Attendance",
        "Timetable",
        "Examinations",
        "Results",
      ],
    },
  ];

  return (
    <section id="benefits" className="section bg-gradient-to-b from-ink via-slate-900 to-ink text-ink-foreground relative overflow-hidden">
      <div className="container relative z-10">
        <SectionTitle
          eyebrow="Benefits for everyone"
          title="A Better School Day, for Every Role"
          copy="Reduce administrative friction and give each member of the school community the right information at the right time."
          dark
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-ink-line bg-ink-panel p-6 sm:p-8 transition-all hover:border-brand-sky/50 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-lg bg-brand-sky/15 text-brand-sky">
                  <g.icon className="size-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-warm">
                  {g.sub}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-white">
                {g.title}
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {g.items.map((x) => (
                  <span key={x} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <Check className="size-3.5 text-success shrink-0" />
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission(){const values=[[Sparkles,"Simplicity","Technology should make school management easier, not harder."],[MapPin,"Accessibility","Digital tools should reach schools beyond major cities."],[HeartHandshake,"Connection","Schools, teachers, students and parents should stay connected."],[TrendingUp,"Growth","Help schools evolve from manual systems to modern operations."]];return <><section className="section"><div className="container grid items-center gap-12 lg:grid-cols-2"><div className="relative"><img src={schoolImage} alt="Students and teacher using digital learning tools" width={1600} height={1056} loading="lazy" className="aspect-[5/4] rounded-lg object-cover shadow-card"/><div className="absolute bottom-4 left-4 right-4 rounded-md bg-ink/90 p-5 text-ink-foreground backdrop-blur sm:left-auto sm:max-w-xs"><MapPin className="size-5 text-brand-warm"/><b className="mt-2 block font-display text-lg">Technology belongs everywhere.</b><p className="mt-1 text-xs leading-5 text-ink-muted">Madhubani · Darbhanga · North Bihar · Rural & semi-urban communities</p></div></div><div><SectionTitle eyebrow="Our local mission" title="Bringing Digital School Management Closer to Every School." copy="Our goal is to help schools in rural and semi-urban communities adopt modern digital management without the complexity and cost traditionally associated with custom software."/><p className="mt-6 border-l-2 border-brand-warm pl-5 font-display text-xl font-bold">Technology should not be limited to big cities or large institutions.</p></div></div></section><section className="section bg-muted/40"><div className="container"><div className="grid gap-5 lg:grid-cols-2"><div className="rounded-lg bg-primary p-8 text-primary-foreground shadow-brand"><span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Our mission</span><h2 className="mt-3 font-display text-3xl font-extrabold">Digitally empower every school.</h2><p className="mt-4 leading-7 text-primary-foreground/80">To digitally empower schools with simple, affordable and accessible technology that reduces complexity, improves communication and creates a connected education experience.</p></div><div className="rounded-lg border border-border bg-card p-8 shadow-soft"><span className="text-xs font-bold uppercase tracking-widest text-primary">Our vision</span><h2 className="mt-3 font-display text-3xl font-extrabold">Every School. Connected. Digitally Empowered.</h2><p className="mt-4 leading-7 text-muted-foreground">A connected education ecosystem where every school, teacher, student and parent can access smarter tools in a simpler and more meaningful way.</p></div></div><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{values.map(([I,t,d])=><div key={String(t)} className="rounded-md border border-border bg-card p-5"><I className="size-5 text-primary"/><h3 className="mt-4 text-xs font-extrabold uppercase tracking-widest">{t as string}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{d as string}</p></div>)}</div></div></section></>}

function Showcase(){return <section className="section"><div className="container"><SectionTitle eyebrow="Product showcase" title="See Your School at a Glance" copy="Understand attendance, fees, student performance and daily activity without searching through files." center/><div className="mx-auto mt-10 max-w-6xl"><Dashboard/></div></div></section>}

function MobileExperience() {
  const phones = [
    {
      title: "Parent App",
      icon: HeartHandshake,
      stats: [["Child attendance", "95%"], ["Fee status", "Paid"]],
      list: ["Homework due Friday", "Latest school notice"],
    },
    {
      title: "Teacher App",
      icon: UserCheck,
      stats: [["Today's classes", "5"], ["Attendance", "96%"]],
      list: ["Post homework", "View students"],
    },
    {
      title: "Student App",
      icon: GraduationCap,
      stats: [["Next class", "Maths"], ["Homework", "4"]],
      list: ["View timetable", "Unit Test results"],
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-ink via-slate-900 to-ink text-ink-foreground relative overflow-hidden">
      <div className="container relative z-10">
        <SectionTitle
          eyebrow="Always within reach"
          title="A Simple Experience on Every Screen"
          copy="Focused mobile views keep parents, teachers and students connected wherever their day takes them."
          center
          dark
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {phones.map((p, i) => (
            <div
              key={p.title}
              className={`mx-auto w-full max-w-[280px] rounded-[2rem] border-[6px] border-ink-line bg-background p-2 shadow-dashboard ${
                i === 1 ? "md:-translate-y-5" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-[1.4rem] bg-muted p-4 text-foreground">
                <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-border" />
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-muted-foreground">GOOD MORNING</span>
                    <b className="block text-sm">{p.title}</b>
                  </div>
                  <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                    <p.icon className="size-4" />
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {p.stats.map(([a, b]) => (
                    <div className="rounded-md bg-card p-3 shadow-xs" key={a}>
                      <b className="text-sm">{b}</b>
                      <span className="mt-1 block text-[8px] text-muted-foreground">{a}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 space-y-2">
                  {p.list.map((x) => (
                    <div
                      key={x}
                      className="flex items-center gap-2 rounded-md bg-card p-3 text-[10px] font-semibold shadow-xs"
                    >
                      <CheckCircle2 className="size-4 text-success" />
                      {x}
                    </div>
                  ))}
                </div>
                <nav className="mt-6 flex justify-around border-t border-border pt-3 text-muted-foreground">
                  <School className="size-4 text-primary" />
                  <CalendarDays className="size-4" />
                  <Bell className="size-4" />
                  <Users className="size-4" />
                </nav>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ openDemo }: { openDemo: () => void }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section bg-muted/40">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            eyebrow="Transparent School-Friendly Pricing"
            title="Affordable Without Compromise. Zero Hidden AMC."
            copy="Pay a simple subscription with unlimited student records, regular feature updates, and dedicated on-call support from Bara Bazar Madhubani."
            center
          />

          {/* Billing Switcher Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                !isAnnual
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                isAnnual
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual Billing
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black uppercase text-emerald-600">
                Special Annual Discount
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {/* Starter School */}
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-muted-foreground">
                  Starter School
                </span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">0–300 Students</span>
              </div>
              <h3 className="font-display text-2xl font-black text-foreground mt-2">
                Starter School Plan
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Manage 0 to 300 students. Perfect for primary & growing institutions adopting digital records.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <b className="font-display text-4xl font-black text-foreground">
                  ₹{isAnnual ? "49,999" : "4,999"}
                </b>
                <span className="text-xs text-muted-foreground">/{isAnnual ? "year (one-time)" : "month"}</span>
              </div>
              <span className="text-[10px] text-muted-foreground block mt-1">
                {isAnnual ? "One-time annual payment • Zero hidden AMC" : "Billed monthly, cancel anytime"}
              </span>

              <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-xs">
                {[
                  "Manage 0 to 300 Students Completely",
                  "Student Profiles & Admission Desk",
                  "Daily Roll Call & 10s Attendance",
                  "Fee Management & Digital Receipts",
                  "Class Notices & Announcements",
                  "Standard Phone & Email Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-success shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button onClick={openDemo} className={`${secondaryCta} mt-8 w-full`}>
              Choose Starter <ArrowRight className="size-4" />
            </Button>
          </div>

          {/* Standard Pro (Most Popular) */}
          <div className="relative rounded-2xl border-2 border-primary bg-gradient-to-b from-card via-card to-primary/5 p-7 shadow-card flex flex-col justify-between scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary-foreground shadow-brand">
              Most Popular in Bihar
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-primary">
                  Standard Pro
                </span>
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-black text-emerald-700">0–700 Students</span>
              </div>
              <h3 className="font-display text-2xl font-black text-foreground mt-2">
                Standard Pro Plan
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Manage 0 to 700 students. Comprehensive ERP with parent portal, marks cards & fee recovery.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <b className="font-display text-4xl font-black text-foreground">
                  ₹{isAnnual ? "59,000" : "6,999"}
                </b>
                <span className="text-xs text-muted-foreground">/{isAnnual ? "year (one-time)" : "month"}</span>
              </div>
              <span className="text-[10px] text-muted-foreground block mt-1">
                {isAnnual ? "Billed annually ₹59,000 one-time • Save ₹24,989/yr" : "Billed monthly • Cancel anytime"}
              </span>

              <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-xs">
                {[
                  "Manage 0 to 700 Students Completely",
                  "All Starter Features Included",
                  "CBSE & State Board Report Cards",
                  "Parent & Student Mobile Portals",
                  "Automatic SMS/WhatsApp Fee Alerts",
                  "Staff Timetable & Homework Tracker",
                  "Priority Support (Madhubani HQ)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button onClick={openDemo} className={`${primaryCta} mt-8 w-full`}>
              Start Free School Trial <ArrowRight className="size-4" />
            </Button>
          </div>

          {/* Institutional / Multi-Branch */}
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-muted-foreground">
                  Multi-Branch & Enterprise
                </span>
                <span className="text-[10px] font-bold text-muted-foreground">Unlimited Students</span>
              </div>
              <h3 className="font-display text-2xl font-black text-foreground mt-2">
                Enterprise Network
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                For school chains, colleges, and trust societies requiring multi-campus SaaS.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <b className="font-display text-4xl font-black text-foreground">
                  Custom
                </b>
                <span className="text-xs text-muted-foreground">/ institution</span>
              </div>
              <span className="text-[10px] text-muted-foreground block mt-1">
                Tailored SLA & dedicated database instance
              </span>

              <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-xs">
                {[
                  "Everything in Standard Pro",
                  "Multi-Campus Central Super Admin",
                  "Library, Inventory & Transport Modules",
                  "Sehaat Saathi Health Card Integration",
                  "Dedicated Account Manager & Onsite Training",
                  "Custom Domain & White-label Branding",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-success shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button onClick={openDemo} className={`${secondaryCta} mt-8 w-full`}>
              Contact For Enterprise <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Need a customized plan for multiple branches or government grant schools? Call our helpline:{" "}
          <a href="tel:6200087830" className="font-bold text-primary hover:underline">
            +91 62000 87830
          </a>
        </p>
      </div>
    </section>
  );
}

function WhyAndPrivacy() {
  const why = [
    [Layers3, "Complete Platform", "Manage multiple school operations from one place."],
    [Zap, "Easy to Use", "Designed for administrators, teachers, students and parents."],
    [IndianRupee, "Affordable", "Go digital without expensive custom software."],
    [HeartHandshake, "Connected", "Bring the complete school community onto one platform."],
    [TrendingUp, "Scalable", "Start with your school and grow with your digital needs."],
    [MapPin, "Built for Local Needs", "Designed with rural and semi-urban Bihar in mind."],
  ];

  return (
    <>
      <section className="section bg-background text-foreground">
        <div className="container">
          <SectionTitle
            eyebrow="A long-term partner"
            title="Why Schools Choose EduSchool-Saathi"
            center
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {why.map(([I, t, d]) => (
              <div
                key={String(t)}
                className="rounded-xl border border-border bg-card p-6 shadow-soft hover:border-primary/40 hover:shadow-card transition-all"
              >
                <I className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{t as string}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{d as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
        <div className="container grid gap-10 lg:grid-cols-2 items-center relative z-10">
          <div>
            <SectionTitle
              eyebrow="Thoughtful by design"
              title="Built with School Data Privacy in Mind"
              copy="EduSchool-Saathi is designed around school-level data isolation, role-based access and controlled permissions."
              dark
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Role-Based Access",
              "School-Level Data Isolation",
              "Controlled Permissions",
              "Secure Authentication Concept",
              "Backup-Ready Architecture",
              "Privacy-Focused Design",
            ].map((x) => (
              <div
                key={x}
                className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 text-xs font-bold text-white shadow-sm"
              >
                <LockKeyhole className="size-4 shrink-0 text-brand-warm" />
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQ(){const [open,setOpen]=useState(0);return <section className="section"><div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><SectionTitle eyebrow="Questions, answered" title="Everything You Need to Know" copy="Clear answers for school owners and directors exploring EduSchool-Saathi."/><div>{faqs.map(([q,a],i)=><div key={q} className="border-b border-border"><button type="button" className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-bold" onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}>{q}<ChevronDown className={`size-4 shrink-0 transition ${open===i?"rotate-180 text-primary":""}`}/></button><div className={`grid transition-all ${open===i?"grid-rows-[1fr] pb-5":"grid-rows-[0fr]"}`}><p className="overflow-hidden text-sm leading-6 text-muted-foreground">{a}</p></div></div>)}</div></div></section>}

function FinalCta({ openDemo }: { openDemo: () => void }) {
  return (
    <section id="contact" className="section bg-hero text-hero-foreground">
      <div className="container text-center">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-brand-warm">Apne School Ko Digital Banayein</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black sm:text-5xl">
          Ready to Take Your School Digital?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-hero-muted">
          Join the journey towards simpler, smarter and more connected school management — from Bara Bazar Madhubani and Darbhanga to schools across Bihar & India.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={openDemo}>
            Request a Free Demo <ArrowRight className="size-4" />
          </Button>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-hero-foreground/20 px-5 py-3 text-sm font-bold transition hover:bg-hero-foreground/10"
            href="mailto:eduschoolsaathi@gmail.com"
          >
            <Mail className="size-4" /> Contact EduSchool-Saathi
          </a>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left sm:grid-cols-3">
          <div className="rounded-lg border border-hero-foreground/15 bg-hero-foreground/5 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-brand-warm">
              <MapPin className="size-4" />
              <b className="text-xs uppercase tracking-wider">Office Address</b>
            </div>
            <p className="mt-2 text-xs font-bold text-white">Bara Bazar Madhubani</p>
            <span className="text-[11px] text-hero-muted block mt-0.5">Bihar, India</span>
          </div>

          <div className="rounded-lg border border-hero-foreground/15 bg-hero-foreground/5 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-brand-warm">
              <Phone className="size-4" />
              <b className="text-xs uppercase tracking-wider">Call / WhatsApp</b>
            </div>
            <div className="mt-2 space-y-1">
              <a href="tel:6200087830" className="block text-xs font-bold text-white hover:text-brand-warm transition-colors">
                +91 62000 87830
              </a>
              <a href="tel:9934276622" className="block text-xs font-bold text-white hover:text-brand-warm transition-colors">
                +91 99342 76622
              </a>
              <a href="tel:94700741183" className="block text-xs font-bold text-white hover:text-brand-warm transition-colors">
                +91 94700 74183 / 94700741183
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-hero-foreground/15 bg-hero-foreground/5 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-brand-warm">
              <Mail className="size-4" />
              <b className="text-xs uppercase tracking-wider">Official Email</b>
            </div>
            <a
              href="mailto:eduschoolsaathi@gmail.com"
              className="mt-2 block text-xs font-bold text-white hover:text-brand-warm transition-colors break-all"
            >
              eduschoolsaathi@gmail.com
            </a>
            <span className="text-[11px] text-hero-muted block mt-0.5">Instant response for schools</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { t: "Platform", a: [["About Platform", "#about"], ["Partners", "#ecosystem"], ["All Features", "#features"], ["How It Works", "#how-it-works"], ["Pricing Plans", "#pricing"]] },
    { t: "Portals", a: [["School Management", "#roles"], ["Teacher Portal", "#roles"], ["Student Dashboard", "#roles"], ["Parent App", "#roles"]] },
    { t: "Resources", a: [["FAQ", "#faq"], ["Request Demo", "#home"], ["School Benefits", "#benefits"], ["Contact Us", "#contact"]] },
    { t: "Ecosystem", a: [["Sehaat Saathi App", "https://sehaat-saathi.vercel.app/"], ["TechSeva IT Solutions", "https://techseva-it-solutions.vercel.app/"], ["Privacy Policy", "#about"], ["Terms of Service", "#about"]] },
  ];

  return (
    <footer className="border-t border-ink-line bg-ink py-14 text-ink-foreground">
      <div className="container grid gap-10 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Brand />
          <p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">
            EduSchool-Saathi is a next-generation multi-school ERP and educational SaaS platform designed to automate attendance, fee collection, examinations, and communication.
          </p>

          {/* Official Sponsorship & Powered By Badges in Footer */}
          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 space-y-2.5 max-w-sm">
            <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-brand-warm" /> Strategic Tech Alliances:
            </div>
            <div className="text-xs text-ink-muted">
              <span className="font-semibold text-emerald-400">Sponsored by:</span>{" "}
              <a
                href="https://sehaat-saathi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-emerald-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              >
                Sehaat Saathi App <ExternalLink className="size-2.5" />
              </a>
            </div>
            <div className="text-xs text-ink-muted">
              <span className="font-semibold text-sky-400">Powered BY :-</span>{" "}
              <a
                href="https://techseva-it-solutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-sky-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              >
                TechSeva IT Solutions Agency <ExternalLink className="size-2.5" />
              </a>
            </div>
          </div>

          <p className="mt-5 text-xs text-ink-muted leading-5">
            <b>Address:</b> Bara Bazar Madhubani, Bihar, India<br />
            <b>Phone:</b>{" "}
            <a href="tel:6200087830" className="hover:text-white underline">6200087830</a> •{" "}
            <a href="tel:9934276622" className="hover:text-white underline">9934276622</a> •{" "}
            <a href="tel:94700741183" className="hover:text-white underline">94700741183</a><br />
            <b>Email:</b>{" "}
            <a href="mailto:eduschoolsaathi@gmail.com" className="hover:text-white underline">eduschoolsaathi@gmail.com</a><br />
            Empowering Rural, Semi-Urban & Growing Schools across Bihar & India
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {cols.map((c) => (
            <div key={c.t}>
              <b className="text-xs font-extrabold uppercase tracking-widest text-primary">{c.t}</b>
              <div className="mt-4 space-y-2.5">
                {c.a.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="block text-xs text-ink-muted hover:text-ink-foreground transition-colors"
                  >
                    {label} {href.startsWith("http") ? "↗" : ""}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-12 flex flex-col gap-3 border-t border-ink-line pt-6 text-[11px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span>© 2026 </span>
          <span className="font-bold inline-flex items-center">
            <span className="text-sky-400">Edu</span>
            <span className="text-amber-400">School</span>
            <span className="text-white/40">-</span>
            <span className="text-emerald-400">Saathi</span>
          </span>
          <span>. All rights reserved.</span>
          <span>•</span>
          <span className="text-amber-400 font-semibold">Har School Ka Saathi</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <span className="text-ink-muted">#1 School Management SaaS in Bihar</span>
          <span>•</span>
          <a href="#about" className="hover:text-white transition-colors">Privacy</a>
          <span>•</span>
          <a href="#about" className="hover:text-white transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
}

function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!open) return null;
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-ink/75 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Request a free demo"
    >
      <div className="my-auto w-full max-w-2xl rounded-xl border border-border bg-card shadow-dashboard overflow-hidden">
        <div className="flex items-center justify-between border-b border-border bg-muted/40 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-white p-1 shadow-xs border border-border overflow-hidden shrink-0">
              <img src={logoImg} alt="EduSchool-Saathi" className="size-full object-contain" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">Free school demo</span>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-foreground">See EduSchool-Saathi in action</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="grid size-10 place-items-center rounded-md border border-border hover:bg-accent transition-colors"
            aria-label="Close demo form"
          >
            <X className="size-5" />
          </button>
        </div>

        {done ? (
          <div className="p-10 text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-success/10 text-success">
              <CheckCircle2 className="size-8" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-extrabold">Demo Request Received!</h3>
            <p className="mt-2 text-muted-foreground text-sm max-w-md mx-auto">
              Thank you for your interest. Our school onboarding specialist will reach out to you within 24 hours to arrange a personalized demonstration.
            </p>
            <Button onClick={() => { setDone(false); onClose(); }} className={`${secondaryCta} mt-6`}>
              Done / Close
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-4 p-5 sm:p-6 sm:grid-cols-2">
            {[
              ["School Name", "school", "text", "e.g. St. Xavier's High School"],
              ["Owner / Director Name", "name", "text", "e.g. Rajesh Kumar"],
              ["Phone Number", "phone", "tel", "e.g. 9876543210"],
              ["Email Address", "email", "email", "e.g. principal@school.edu.in"],
              ["City / District", "city", "text", "e.g. Madhubani / Darbhanga"],
              ["Approximate Students", "students", "number", "e.g. 500"],
            ].map(([label, id, type, placeholder]) => (
              <label key={id} className="text-xs font-bold text-foreground">
                {label} <span className="text-destructive">*</span>
                <input
                  required
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  className="mt-1.5 h-11 w-full rounded-md border border-input bg-background px-3 text-sm font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20 placeholder:text-muted-foreground/50"
                />
              </label>
            ))}
            <label className="text-xs font-bold text-foreground sm:col-span-2">
              Any Specific Needs / Message (Optional)
              <textarea
                placeholder="Tell us about your current challenges (e.g. fee collection, attendance, report cards)..."
                className="mt-1.5 min-h-20 w-full rounded-md border border-input bg-background p-3 text-sm font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20 placeholder:text-muted-foreground/50"
              />
            </label>

            <div className="sm:col-span-2 rounded-md bg-muted/60 p-3 text-[11px] text-muted-foreground flex items-center justify-between gap-2">
              <span>🔒 100% confidential. No spam guaranteed.</span>
              <span className="font-semibold text-primary">Pre-Nursery to 12th</span>
            </div>

            <button type="submit" className={`${primaryCta} sm:col-span-2 w-full text-sm font-bold`}>
              Request My Free School Demo <ArrowRight className="size-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Index() {
  const [demo, setDemo] = useState(false);
  return (
    <>
      <Navbar openDemo={() => setDemo(true)} />
      <main>
        <Hero openDemo={() => setDemo(true)} />
        <TrustStrip />
        <Problems />
        <Platform openDemo={() => setDemo(true)} />
        <RoiCalculator openDemo={() => setDemo(true)} />
        <Features />
        <Roles />
        <HowItWorks />
        <Benefits />
        <Mission />
        <Showcase />
        <MobileExperience />
        <Pricing openDemo={() => setDemo(true)} />
        <WhyAndPrivacy />
        <FAQ />
        <FinalCta openDemo={() => setDemo(true)} />
      </main>
      <Footer />
      <DemoModal open={demo} onClose={() => setDemo(false)} />
      <PwaInstallPrompt />
      <WhatsappChatbot />
    </>
  );
}
