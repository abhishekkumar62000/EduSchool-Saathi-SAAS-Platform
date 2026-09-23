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
import founderCeoImg from "../assets/Founder CEO.png";
import founderImg from "../assets/Founder.jpeg";
import founderPosterImg from "../../EduSchoolSaathi Poster Image/Founder Advertisment2.jpeg";
import aboutPosterImg from "../../EduSchoolSaathi Poster Image/Poster1.jpeg";
import featuresPosterImg from "../../EduSchoolSaathi Poster Image/Poster6.jpeg";
import founderAdvertisementImg from "../../EduSchoolSaathi Poster Image/Founder Advertisment.jpeg";
import heroPosterImg from "../../EduSchoolSaathi Poster Image/hero section poster.png";
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
    <div className="relative z-50 flex flex-col bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 border-b border-emerald-500/20 text-white text-[11px]">

      {/* ✅ TOP ROW — Official Website & Trial Access — BOLD & PROMINENT */}
      <div className="bg-gradient-to-r from-[#FF671F]/25 via-[#1E40AF]/30 to-[#047857]/25 border-b border-white/10 py-1.5 px-3">
        <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-300 border border-amber-400/40 shrink-0">
            🌐 Official Website
          </span>
          <a
            href="https://eduschoolsaathi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-black text-xs sm:text-[13px] text-amber-300 hover:text-white transition-colors underline underline-offset-2 decoration-amber-400/60"
          >
            eduschoolsaathi.org <ExternalLink className="size-3 opacity-80" />
          </a>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/25 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-300 border border-emerald-500/30 shrink-0">
            🚀 Free Trial Login
          </span>
          <a
            href="https://app.eduschoolsaathi.org/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-black text-xs sm:text-[13px] text-emerald-300 hover:text-white transition-colors underline underline-offset-2 decoration-emerald-400/60"
          >
            app.eduschoolsaathi.org/login <ExternalLink className="size-3 opacity-80" />
          </a>
        </div>
      </div>

      {/* BOTTOM ROW — SaaS Identity + Partners */}
      <div className="py-1.5 px-3">
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

          <span className="text-white/20 hidden sm:inline">|</span>

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

          <span className="text-white/20 hidden sm:inline">|</span>

          <a
            href="tel:6200087830"
            className="font-bold text-brand-warm hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <Phone className="size-2.5" /> 6200087830
          </a>
        </div>
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
        <span className="tricolor-sheen h-1 w-10 rounded-full shadow-[0_0_0_1px_rgba(15,23,42,0.08)]" />
        {eyebrow}
      </div>
      <h2
        className={`animate-section-heading font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.14] ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-7 ${
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
    ["About", "about"],
    ["Founder & CEO", "founder"],
    ["25+ Schools Network", "schools-network-link"],
    ["Partners", "ecosystem"],
    ["Features", "features"],
    ["Roles", "roles"],
    ["Pricing", "pricing"],
    ["Contact", "contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all gpu-layer">
      <AnnouncementBar />
      <div
        className={`transition-all ${
          scrolled
            ? "border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-xl"
            : "bg-background/80 backdrop-blur-md border-b border-border/40"
        }`}
      >
        <nav className="container flex h-16 sm:h-18 items-center justify-between gap-3" aria-label="Primary navigation">
          <Brand compact />

          <div className="hidden items-center gap-2 lg:flex xl:gap-4">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={id === "schools-network-link" ? "/schools-network" : `#${id}`}
                className={`text-[11px] xl:text-xs font-bold transition-colors whitespace-nowrap ${
                  id === "schools-network-link"
                    ? "text-sky-400 hover:text-sky-300 font-extrabold flex items-center gap-1 bg-sky-500/10 border border-sky-400/30 px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-full"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {id === "schools-network-link" && <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://eduschoolsaathi.org/#trial"
              className={`${primaryCta} min-h-9 sm:min-h-10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold hidden sm:inline-flex`}
            >
              Request Free Demo <ArrowRight className="size-3.5 sm:size-4" />
            </a>

            <button
              type="button"
              className="grid size-9 sm:size-10 place-items-center rounded-md border border-border bg-card lg:hidden touch-manipulation"
              onClick={() => setMobile(!mobile)}
              aria-expanded={mobile}
              aria-label="Toggle menu"
            >
              {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {mobile && (
        <div className="border-b border-border bg-background/98 px-5 pb-6 pt-2 shadow-xl backdrop-blur-2xl lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="container grid gap-1 pt-2">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={id === "schools-network-link" ? "/schools-network" : `#${id}`}
                onClick={() => setMobile(false)}
                className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${
                  id === "schools-network-link"
                    ? "bg-sky-500/10 text-sky-400 font-extrabold border border-sky-400/25"
                    : "hover:bg-accent hover:text-primary"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {id === "schools-network-link" && <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />}
                  {label}
                </span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </a>
            ))}
            <div className="pt-3 border-t border-border mt-2 space-y-2">
              <InstallAppButton className="w-full justify-center py-2.5" />
              <a
                href="https://eduschoolsaathi.org/#trial"
                onClick={() => setMobile(false)}
                className={`${primaryCta} w-full`}
              >
                Request a Free School Demo <ArrowRight className="size-4" />
              </a>
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

      {/* Mobile View Switcher - Interactive tabs for smartphones */}
      {!compact && (
        <div className="flex sm:hidden overflow-x-auto no-scrollbar gap-1 border-b border-dashboard-line bg-dashboard-panel/90 p-1.5 text-[10px]">
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
              className={`px-2.5 py-1 rounded font-bold whitespace-nowrap transition-all shrink-0 ${
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

        <div className="min-w-0 flex-1 p-3 sm:p-5">
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

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                <div className="col-span-1 sm:col-span-3 rounded-lg border border-dashboard-line bg-dashboard-panel p-3.5">
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

                <div className="col-span-1 sm:col-span-2 rounded-lg border border-dashboard-line bg-dashboard-panel p-3.5 flex flex-col justify-between">
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
    <section id="home" className="hero-grid relative overflow-hidden bg-hero pt-28 sm:pt-32 pb-16 text-hero-foreground">
      {/* Ambient background glow behind Hero */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-gradient-to-b from-primary/20 via-brand-sky/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-20 size-72 rounded-full bg-[#FF671F]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-48 -right-20 size-72 rounded-full bg-[#047857]/15 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Top Pill with Pulsing Dot */}
          <div className="mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1.5 rounded-full border border-hero-foreground/20 bg-hero-foreground/5 px-3.5 py-2 text-[11px] leading-tight sm:text-xs font-bold text-hero-muted backdrop-blur-xl shadow-lg">
            <span className="flex items-center gap-1.5 text-emerald-400 font-extrabold">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              Live Cloud ERP
              <span className="opacity-40">•</span>
            </span>
            <span className="inline-flex max-w-full items-center justify-center gap-1.5 text-center">
              <span className="size-4 rounded-full bg-white p-0.5 overflow-hidden shrink-0 inline-flex items-center justify-center">
                <img src={logoImg} alt="Logo" className="size-full object-contain" />
              </span>
              <span className="text-brand-warm font-extrabold">Bihar No1 👑 School ERP Software</span>
            </span>
            <span className="opacity-40 hidden xs:inline">•</span>
            <span className="hidden xs:inline">Pre-Nursery to 12th</span>
          </div>

          <h1 className="animate-hero-title font-display text-3xl font-black leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
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
            <a
              href="https://eduschoolsaathi.org/#trial"
              className={`${primaryCta} text-sm shadow-[0_0_30px_rgba(37,99,235,0.4)]`}
            >
              Request a Free Live School Demo <ArrowRight className="size-4" />
            </a>
            <a
              href="tel:6200087830"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-hero-foreground/20 bg-hero-foreground/5 px-5 py-3 text-sm font-bold text-hero-foreground backdrop-blur transition hover:bg-hero-foreground/15"
            >
              <Phone className="size-4 text-emerald-400" /> Instant Call: +91 62000 87830
            </a>
          </div>

          {/* ✅ OFFICIAL WEBSITE & FREE TRIAL ACCESS — BOLD PROMINENT LINKS */}
          <div className="mt-6 mx-auto max-w-2xl rounded-2xl border border-amber-400/30 bg-gradient-to-r from-[#FF671F]/15 via-[#1E40AF]/20 to-[#047857]/15 p-4 backdrop-blur-md shadow-lg">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-300 text-center mb-3">
              🌐 Official Platform — Direct Access Links
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Main Website */}
              <a
                href="https://eduschoolsaathi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-amber-400/60 bg-amber-400/10 px-5 py-2.5 text-sm font-black text-amber-300 hover:bg-amber-400/25 hover:text-white hover:border-amber-400 transition-all shadow-md w-full sm:w-auto justify-center"
              >
                <span className="text-base">🔗</span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-400/80 leading-tight">Official Website</span>
                  <span className="font-black text-sm sm:text-base">eduschoolsaathi.org</span>
                </span>
                <ExternalLink className="size-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>

              <span className="text-white/30 text-xl hidden sm:inline">|</span>

              {/* Trial Login */}
              <a
                href="https://app.eduschoolsaathi.org/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-emerald-400/60 bg-emerald-400/10 px-5 py-2.5 text-sm font-black text-emerald-300 hover:bg-emerald-400/25 hover:text-white hover:border-emerald-400 transition-all shadow-md w-full sm:w-auto justify-center"
              >
                <span className="text-base">🚀</span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 leading-tight">Free Trial Login</span>
                  <span className="font-black text-sm sm:text-base">app.eduschoolsaathi.org/login</span>
                </span>
                <ExternalLink className="size-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-[0.14em] text-hero-muted">
            <span className="flex items-center gap-1.5"><Check className="size-3.5 text-success" /> 10-Second Attendance</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Check className="size-3.5 text-success" /> Zero Hardware Needed</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Check className="size-3.5 text-success" /> Instant WhatsApp Fee Receipts</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Check className="size-3.5 text-success" /> 100% Isolated Data</span>
          </div>

          {/* ========================================================================= */}
          {/* CENTERED HERO POSTER IMAGE PRESENTATION (FULL VISIBILITY & WOW FACTOR) */}
          {/* ========================================================================= */}
          <div className="mt-12 mx-auto max-w-4xl relative group">
            {/* Tricolor Ambient Aura around Poster */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-r from-[#FF671F] via-[#38BDF8] to-[#047857] opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            {/* Poster Card Container */}
            <div className="relative rounded-2xl sm:rounded-3xl border-2 border-white/30 bg-slate-950/90 p-2 sm:p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
              <img
                src={heroPosterImg}
                alt="EduSchool-Saathi Official Campaign Poster - Padhega Bihar Tabhi To Badhega Bihar"
                className="w-full h-auto max-h-[380px] sm:max-h-[500px] md:max-h-[560px] object-contain object-center rounded-xl sm:rounded-2xl mx-auto select-none transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
                decoding="async"
              />

              {/* Bottom Quick Feature Tagline bar below the image */}
              <div className="mt-2.5 pt-2 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 px-2 text-[10px] sm:text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  पढ़ेंगा बिहार तभी तो बढ़ेगा बिहार
                </span>
                <span className="text-amber-300 font-extrabold uppercase tracking-wider">
                  📞 Helpdesk: +91 62000 87830
                </span>
              </div>
            </div>
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

function FounderPoster() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_10%_20%,rgba(255,103,31,0.12),transparent_28%),radial-gradient(circle_at_90%_75%,rgba(19,136,8,0.12),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)] py-8 sm:py-12">
      <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
      <div className="container relative">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#138808]/25 bg-white/85 p-3 shadow-card backdrop-blur sm:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-gradient-to-r from-orange-50 via-white to-green-50 px-4 py-3 sm:px-5">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#c2410c]">
                <Sparkles className="size-3.5 text-[#FF671F]" /> Founder message
              </span>
              <h2 className="mt-1 font-display text-lg font-black text-foreground sm:text-xl">Digital power for every Indian school</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-800">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> EduSchool-Saathi Bihar
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70">
            <img
              src={founderPosterImg}
              alt="EduSchool-Saathi founder advertisement and school management ERP features"
              className="mx-auto block h-auto w-full max-w-5xl object-contain"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const [selectedCapability, setSelectedCapability] = useState(0);

  const impacts = [
    { num: "24+", label: "Verified Partner Schools", sub: "Madhubani, Darbhanga & Patna" },
    { num: "7,500+", label: "Active Students & Parents", sub: "100% Digitally Connected" },
    { num: "10 Sec", label: "Fastest Daily Attendance", sub: "Auto SMS Alerts to Parents" },
    { num: "₹0", label: "Hidden Setup Cost", sub: "Zero Annual AMC Trap" },
  ];

  const capabilities = [
    [ClipboardCheck, "10-Second Attendance", "Mark a complete class from any phone, review absences, and keep monthly history ready for parents and principals.", "Teachers & Admin"],
    [IndianRupee, "Online & Cash Fee Receipts", "Track paid and pending fees, issue branded receipts, and keep every collection visible in one school ledger.", "Accounts & Admin"],
    [Award, "CBSE Marksheet Suite", "Enter marks once and generate calculated grades, percentages, report cards, and exam performance insights.", "Teachers & Principal"],
    [BookOpen, "Digital Homework Desk", "Publish subject-wise work, track learning tasks, and keep students and parents aligned beyond the classroom.", "Teachers & Students"],
    [MessageCircle, "Parent WhatsApp Updates", "Connect families with attendance, fee reminders, notices, homework, and academic updates at the right time.", "Parents & School"],
    [CalendarDays, "Teacher Time-Table", "Coordinate periods, subjects, sections, and teacher schedules without clashes or last-minute confusion.", "School Admin"],
    [Building2, "Multi-Branch Architecture", "Run multiple independent schools with separate access, records, permissions, and a clear super-admin view.", "Super Admin"],
    [ShieldCheck, "Secure Student Records", "Keep admissions, profiles, certificates, documents, and academic history organized in an isolated cloud workspace.", "Every School Role"],
    [RouteIcon, "Transport & Bus Routes", "Organize vehicles, routes, drivers, and student allocations from the same connected school platform.", "School Admin"],
    [Library, "School Library ERP", "Track book records, issue and return activity, student history, and library reports without paper registers.", "Librarian & Students"],
    [TrendingUp, "Daily Principal Dashboard", "See attendance, fee collection, class performance, staff activity, and the next action in one live command view.", "Principal & Owner"],
  ] as const;
  const [CapabilityIcon, capabilityTitle, capabilityDescription, capabilityRole] = capabilities[selectedCapability];

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-muted/30 to-background py-16">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />
      <div className="absolute -right-32 top-20 size-80 rounded-full bg-[#138808]/10 blur-3xl pointer-events-none" />
      <div className="container text-center">
        {/* Impact Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-10">
          {impacts.map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-xl border border-border/80 bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-[#138808]/40 hover:shadow-card"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />
              <b className="font-display text-3xl sm:text-4xl font-black bg-gradient-to-r from-primary to-brand-sky bg-clip-text text-transparent">
                {item.num}
              </b>
              <h4 className="mt-2 text-xs sm:text-sm font-bold text-foreground">{item.label}</h4>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </div>

        <p className="inline-flex items-center gap-2 rounded-full border border-[#FF671F]/30 bg-[#FF671F]/5 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[#d94d0b]">
          <span className="size-2 rounded-full bg-[#138808] shadow-[0_0_0_3px_rgba(19,136,8,0.12)]" />
          One Unified Platform <span className="text-slate-400">•</span> Endless Capabilities
        </p>
        <h3 className="mt-2 font-display text-2xl sm:text-3xl font-black text-foreground">
          Built Specifically for the Daily Operations of Indian Schools
        </h3>

        <div className="mx-auto mt-7 grid max-w-5xl gap-4 text-left grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-wrap content-start justify-center gap-2 rounded-2xl border border-border bg-card p-4 shadow-soft">
            {capabilities.map(([Icon, title], idx) => (
              <button
                key={title}
                type="button"
                onClick={() => setSelectedCapability(idx)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-bold transition-all ${
                  selectedCapability === idx
                    ? "border-[#138808]/50 bg-[#138808]/10 text-[#0b6d06] shadow-sm"
                    : "border-border bg-background text-muted-foreground hover:border-[#FF671F]/50 hover:text-foreground"
                }`}
              >
                {selectedCapability === idx ? <CheckCircle2 className="size-3.5" /> : <Icon className="size-3.5" />}
                {title}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#138808]/30 bg-gradient-to-br from-[#063b19] via-slate-950 to-[#102c20] p-6 text-white shadow-card sm:p-7">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#138808]/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-300">
                  <CapabilityIcon className="size-3.5" /> Live capability view
                </span>
                <h4 className="mt-4 font-display text-xl font-black sm:text-2xl">{capabilityTitle}</h4>
              </div>
              <span className="hidden size-12 place-items-center rounded-xl bg-[#FF671F]/15 text-[#ff9b6d] sm:grid">
                <CapabilityIcon className="size-6" />
              </span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">{capabilityDescription}</p>
            <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-bold text-white/60">
              <Users className="size-4 text-[#ff9b6d]" /> Designed for: <span className="text-white">{capabilityRole}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  const [problemMode, setProblemMode] = useState<"after" | "before">("after");
  const [selectedProblem, setSelectedProblem] = useState(0);

  const beforeProblems = [
    [Clock3, "Morning Lost to Roll Call", "Teachers begin the day with paper registers, missing names, manual totals, and no instant attendance history."],
    [IndianRupee, "Fees Without a Single Source of Truth", "Handwritten slips, scattered ledgers, and cash reconciliation make every collection harder to trust."],
    [FileBarChart, "Results Built by Hand", "Marks, totals, grades, and report cards are calculated repeatedly, creating delays and avoidable errors."],
    [MessageCircle, "Parents Outside the Loop", "Attendance, homework, notices, and dues reach families late because updates depend on phone calls and diaries."],
    [Layers3, "Records Buried in Files", "Admissions, student profiles, certificates, and academic history stay scattered across cupboards and spreadsheets."],
    [Search, "No Live Principal View", "School leaders cannot instantly see attendance, fee dues, staff activity, or the health of each class."],
  ];

  const afterSolutions = [
    [Zap, "Attendance in 10 Seconds", "Mark a complete class on any phone, see absences instantly, and keep a searchable daily and monthly history."],
    [ShieldCheck, "Fees to Receipt in One Flow", "Create branded receipts, update the student ledger, track dues, and keep collection visibility crystal clear."],
    [Award, "Marks In. Report Card Out.", "Enter subject marks once and generate totals, grades, rankings, and school-ready digital report cards in moments."],
    [HeartHandshake, "Parents Stay Connected", "Give families one mobile-friendly view for attendance, fees, homework, results, timetables, and notices."],
    [LockKeyhole, "Every Record Ready When Needed", "Keep student profiles, admissions, certificates, documents, and academic history organized in a secure cloud workspace."],
    [TrendingUp, "One Dashboard. Full Control.", "Give principals live signals for attendance, fee collection, school activity, class performance, and next action."],
  ];

  const currentCards = problemMode === "after" ? afterSolutions : beforeProblems;
  const selectedCard = currentCards[selectedProblem];
  const SelectedIcon = selectedCard[0];

  return (
    <section className="section relative overflow-hidden bg-muted/40">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />
      <div className="absolute -right-40 top-24 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-[#FF671F]/10 blur-3xl pointer-events-none" />
      <div className="container relative">
        <SectionTitle
          eyebrow="The Transformation"
          title="From Traditional Chaos to Modern School Excellence"
          copy="Every school day has a pressure point. Tap one to see how EduSchool-Saathi turns it into a faster workflow, a clearer record, and a better experience for every role."
          center
        />

        <div className="mt-8 flex justify-center">
          <div className="inline-flex max-w-full flex-wrap justify-center rounded-xl border border-border bg-card p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => {
                setProblemMode("before");
                setSelectedProblem(0);
              }}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                problemMode === "before"
                  ? "bg-destructive text-destructive-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <XCircle className="size-4" />
              Without ERP (Daily Friction)
            </button>
            <button
              type="button"
              onClick={() => {
                setProblemMode("after");
                setSelectedProblem(0);
              }}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                problemMode === "after"
                  ? "bg-emerald-600 text-white shadow-brand scale-105"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <CheckCircle2 className="size-4" />
              With EduSchool-Saathi (The Smart School)
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-card">
            <div className="absolute bottom-5 left-7 top-5 w-px bg-gradient-to-b from-[#FF671F] via-slate-200 to-[#138808]" />
            <div className="relative space-y-1">
              {currentCards.map(([I, t], idx) => (
                <button
                  key={String(t)}
                  type="button"
                  onClick={() => setSelectedProblem(idx)}
                  className={`relative flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all ${
                    selectedProblem === idx
                      ? problemMode === "after"
                        ? "bg-emerald-500/10 text-foreground shadow-sm"
                        : "bg-destructive/10 text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full border-2 bg-card ${
                    selectedProblem === idx
                      ? problemMode === "after" ? "border-emerald-500 text-emerald-600" : "border-destructive text-destructive"
                      : "border-border text-muted-foreground"
                  }`}>
                    <I className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground">Step {String(idx + 1).padStart(2, "0")}</span>
                    <span className="block truncate text-sm font-bold">{t as string}</span>
                  </span>
                  {selectedProblem === idx && <ChevronRight className="ml-auto size-4 shrink-0 text-primary" />}
                </button>
              ))}
            </div>
          </div>

          <div className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 shadow-card ${
            problemMode === "after" ? "border-emerald-500/30 bg-gradient-to-br from-emerald-950 to-slate-950 text-white" : "border-destructive/20 bg-gradient-to-br from-slate-950 to-red-950 text-white"
          }`}>
            <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] ${
                  problemMode === "after" ? "bg-emerald-400/15 text-emerald-300" : "bg-red-400/15 text-red-300"
                }`}>
                  {problemMode === "after" ? <CheckCircle2 className="size-3.5" /> : <XCircle className="size-3.5" />}
                  {problemMode === "after" ? "Built for Indian Schools" : "The daily friction"}
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-white/50">School operations / {String(selectedProblem + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-2xl font-black leading-tight sm:text-3xl">{selectedCard[1] as string}</h3>
              </div>
              <span className={`hidden size-16 shrink-0 place-items-center rounded-2xl sm:grid ${problemMode === "after" ? "bg-emerald-400/15 text-emerald-300" : "bg-red-400/15 text-red-300"}`}>
                <SelectedIcon className="size-8" />
              </span>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">{selectedCard[2] as string}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
              <span className="text-xs font-bold text-white/50">{problemMode === "after" ? "Result:" : "What changes:"}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-black text-white">
                {problemMode === "after" ? "More time. More trust. More control." : "A better way is one tap away."}
                <ArrowRight className="size-4 text-brand-warm" />
              </span>
            </div>
          </div>
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
      <section className="section relative overflow-hidden bg-background" id="about">
        {/* Subtle decorative glows */}
        <div className="absolute top-1/4 -left-40 size-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 size-96 rounded-full bg-brand-sky/5 blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />

        <div className="container relative">
          <SectionTitle
            eyebrow="Extraordinary School SaaS • About EduSchool-Saathi"
            title="The Modern Operating System Built for Tomorrow's Schools."
            copy="Crafted specifically to solve the grassroots ground realities of schools in Madhubani, Darbhanga, Patna, and Bihar. We empower educators with a unified, zero-friction cloud ERP that turns chaotic manual registers into instant digital intelligence."
          />

          {/* Interactive Navigation for About Section */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-soft">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
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
                aria-selected={aboutTab === tab.id}
                className={`group relative flex min-h-16 items-center gap-2 rounded-xl border px-3 py-3 text-left text-xs sm:text-sm font-bold transition-all duration-300 ${
                  aboutTab === tab.id
                    ? "border-[#138808]/50 bg-gradient-to-br from-[#138808]/15 via-white to-[#FF671F]/10 text-foreground shadow-sm"
                    : "border-transparent bg-background text-muted-foreground hover:border-[#FF671F]/40 hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className={`grid size-8 shrink-0 place-items-center rounded-lg text-[10px] font-black ${aboutTab === tab.id ? "bg-[#138808] text-white" : "bg-muted text-muted-foreground"}`}>
                  {String(["overview", "comparison", "vision", "features"].indexOf(tab.id) + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block truncate">{tab.label}</span>
                  <span className={`mt-0.5 block text-[10px] font-semibold ${aboutTab === tab.id ? "text-[#d94d0b]" : "text-muted-foreground"}`}>{tab.subtitle}</span>
                </span>
                {aboutTab === tab.id && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />}
              </button>
            ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-1 flex-1 rounded-full bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />
            <span>Explore the Saathi system</span>
            <span className="h-1 flex-1 rounded-full bg-gradient-to-r from-[#138808] via-white to-[#FF671F]" />
          </div>

          {/* Tabbed Content Area with Official Logo Showcase on Right */}
          <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Content Column based on Tab */}
            <div className="flex flex-col justify-between">
              {aboutTab === "overview" && (
                <div className="space-y-5 animate-about-panel">
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
                      <div key={idx} className="group rounded-lg border border-border bg-card p-3.5 shadow-xs transition-all hover:-translate-y-1 hover:border-[#138808]/40 hover:shadow-card">
                        <span className="grid size-8 place-items-center rounded-md bg-gradient-to-br from-[#FF671F]/15 via-white to-[#138808]/15 text-[#0b6d06] mb-2 transition-transform group-hover:scale-110">
                          <item.icon className="size-4" />
                        </span>
                        <b className="text-xs font-bold text-foreground block">{item.title}</b>
                        <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a href="https://eduschoolsaathi.org/#trial" className={primaryCta}>
                      Experience Live Demo <ArrowRight className="size-4" />
                    </a>
                    <a href="tel:6200087830" className={secondaryCta}>
                      <Phone className="size-4 text-primary" /> Call Advisor: +91 62000 87830
                    </a>
                  </div>
                </div>
              )}

              {aboutTab === "comparison" && (
                <div className="space-y-4 animate-about-panel">
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
                <div className="space-y-4 animate-about-panel">
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
                <div className="space-y-4 animate-about-panel">
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

              <div className="relative w-full rounded-2xl border-2 border-[#138808]/30 bg-gradient-to-b from-card via-card/95 to-muted p-6 sm:p-8 shadow-card flex flex-col items-center text-center">
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />
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
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#FF671F]/25 via-white to-[#138808]/25 blur-md group-hover:bg-primary/30 transition-all" />
                  <div className="relative aspect-square w-full max-w-sm rounded-2xl bg-white p-2 shadow-dashboard border-2 border-[#FF671F]/30 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                    <img
                      src={aboutPosterImg}
                      alt="EduSchool-Saathi Poster - Smart Schools Stronger Bharat"
                      className="size-full object-contain rounded-xl filter drop-shadow-md"
                      loading="lazy"
                      decoding="async"
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
      <section className="ecosystem-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.16),transparent_28%),radial-gradient(circle_at_92%_78%,rgba(19,136,8,0.14),transparent_30%),linear-gradient(135deg,#fffdf9_0%,#ffffff_48%,#f5fbf4_100%)] text-foreground" id="ecosystem">
        <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 size-96 rounded-full bg-[#FF671F]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 size-96 rounded-full bg-[#138808]/10 blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <div className="mx-auto text-center max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF671F]/40 bg-white/5 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#ff9b6d]">
              <Sparkles className="size-3.5 text-[#FF671F]" /> Strategic Tech Ecosystem
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
              Two Forces. One Mission. Smarter Schools.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-7 text-muted-foreground">
              EduSchool-Saathi connects trusted healthcare innovation with enterprise-grade cloud engineering, so every Indian school gets technology that is healthier, safer, faster, and built for real daily operations.
            </p>
          </div>

          <div className="relative mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <span className="grid size-14 place-items-center rounded-full border border-[#FF671F]/30 bg-white text-[#138808] shadow-card">
                <span className="text-lg font-black">+</span>
              </span>
            </div>
            {/* Sponsor Card */}
            <div className="ecosystem-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-600/25 bg-white/90 p-6 shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/60 hover:shadow-[0_24px_70px_rgba(19,136,8,0.18)] sm:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 border border-emerald-300">
                    Official Sponsor
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                    <span className="size-2 rounded-full bg-emerald-500 animate-ping" /> Active Alliance
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-emerald-50 border border-emerald-300 grid place-items-center text-emerald-700">
                    <Award className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-foreground group-hover:text-emerald-700 transition-colors sm:text-3xl">
                      Sehaat Saathi App
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700">Healthcare & Diagnostics Companion</span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A trusted digital healthcare and diagnostics companion helping schools care for student wellness through telemedicine, OPD access, diagnostics, and secure digital health records.
                </p>

                <div className="mt-6 space-y-2.5 rounded-xl border border-emerald-200 bg-emerald-50/90 p-4 text-xs text-emerald-900">
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-emerald-600 shrink-0" />
                    <span>Student wellness and diagnostic checkup integration</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-emerald-600 shrink-0" />
                    <span>On-campus health and awareness initiatives</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-emerald-600 shrink-0" />
                    <span>Digital student health card readiness</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-emerald-200 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Official Health Partner</span>
                <a
                  href="https://sehaat-saathi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-4 py-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-all"
                >
                  Visit Sehaat Saathi App <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Powered By Card */}
            <div className="ecosystem-card ecosystem-card-delay group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-sky-600/25 bg-white/90 p-6 shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/60 hover:shadow-[0_24px_70px_rgba(14,165,233,0.16)] sm:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#138808] via-white to-[#FF671F]" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-sky-700 border border-sky-300">
                    Engineering & Infrastructure
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-sky-700">
                    <span className="size-2 rounded-full bg-sky-500 animate-ping" /> Enterprise Grade
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-sky-50 border border-sky-300 grid place-items-center text-sky-700">
                    <Zap className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-foreground group-hover:text-sky-700 transition-colors sm:text-3xl">
                      TechSeva IT Solutions Agency
                    </h3>
                    <span className="text-xs font-semibold text-sky-700">Software Engineering & Cloud Architecture</span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The engineering backbone behind dependable school technology, from multi-tenant SaaS architecture and secure data systems to responsive products that work across phones, tablets, and desktops.
                </p>

                <div className="mt-6 space-y-2.5 rounded-xl border border-sky-200 bg-sky-50/90 p-4 text-xs text-sky-900">
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-sky-600 shrink-0" />
                    <span>Multi-tenant isolated cloud architecture</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-sky-600 shrink-0" />
                    <span>Reliable uptime and bank-grade data protection</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="size-4 text-sky-600 shrink-0" />
                    <span>Continuous backup and recovery-ready infrastructure</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-sky-200 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Technology & Cloud Partner</span>
                <a
                  href="https://techseva-it-solutions.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-300 px-4 py-2 text-xs font-bold text-sky-700 hover:text-sky-900 transition-all"
                >
                  Visit TechSeva IT Solutions <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Genesis & Vision Story */}
      <section className="genesis-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_20%,rgba(255,103,31,0.14),transparent_28%),radial-gradient(circle_at_92%_75%,rgba(19,136,8,0.14),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)] text-foreground">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#138808_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-10 right-10 size-80 rounded-full bg-[#FF671F]/10 blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-warm/40 bg-brand-warm/15 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-warm">
                <Sparkles className="size-3.5 text-brand-warm" /> The Genesis & Vision
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.12] text-foreground">
                Why Was EduSchool-Saathi Born?
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                In small towns and rural districts across Bihar — from <b>Bara Bazar Madhubani</b> and Darbhanga to Samastipur and Patna — thousands of dedicated school owners and teachers wake up every morning fighting a war against paper registers, missing fee ledgers, and uncoordinated schedules.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                When they looked for software, big metro vendors demanded ₹1,00,000+ upfront and locked them into painful annual maintenance contracts. We said: <b>No more.</b> Every school in Bihar deserves modern, high-speed digital power at a price that fits their budget.
              </p>

              {/* Quote Box */}
              <div className="mt-6 rounded-xl border-l-4 border-[#FF671F] bg-white/85 p-5 shadow-soft backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-lg bg-white p-1 shrink-0 overflow-hidden shadow-sm">
                    <img src={logoImg} alt="EduSchool-Saathi" className="size-full object-contain" />
                  </div>
                  <div>
                    <b className="text-sm font-bold text-foreground block">
                      <span className="text-sky-300">Edu</span>
                      <span className="text-amber-400">School</span>
                      <span className="text-slate-400">-</span>
                      <span className="text-emerald-700">Saathi</span>
                      <span className="text-muted-foreground font-medium text-xs ml-1.5">— &ldquo;Har School Ka Saathi&rdquo;</span>
                    </b>
                    <p className="text-xs text-[#c2410c] font-medium mt-0.5">
                      Built for rural, semi-urban & progressive schools across Bihar & India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-muted-foreground">
                <span className="flex items-center gap-1.5"><Check className="size-4 text-emerald-600" /> ₹5,000/mo Base Plan</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Check className="size-4 text-emerald-600" /> No Heavy Server</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Check className="size-4 text-emerald-600" /> WhatsApp & SMS Ready</span>
              </div>
            </div>

            {/* 4 Interactive Pillars of Genesis */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  step: "01",
                  title: "The Problem We Saw",
                  desc: "Principals losing up to 30% of their day resolving fee disputes, attendance discrepancies, and manual exam calculations.",
                  border: "border-[#FF671F]/35 hover:border-[#FF671F]/70 bg-orange-50",
                  badge: "bg-orange-100 text-orange-700",
                },
                {
                  step: "02",
                  title: "The Zero-Friction Solution",
                  desc: "A pure cloud SaaS ERP that requires zero IT setup and runs smoothly on normal Android phones and slow village internet.",
                  border: "border-sky-500/35 hover:border-sky-400/70 bg-sky-50",
                  badge: "bg-sky-100 text-sky-700",
                },
                {
                  step: "03",
                  title: "The Honest Pricing Model",
                  desc: "No hidden setup fees, no compulsory AMC traps. Pay a simple predictable monthly fee with continuous free upgrades.",
                  border: "border-emerald-500/35 hover:border-emerald-400/70 bg-emerald-50",
                  badge: "bg-emerald-100 text-emerald-700",
                },
                {
                  step: "04",
                  title: "The Lasting Impact",
                  desc: "Schools report 100% fee transparency, 95%+ parent satisfaction, and over 2 hours saved daily for every teacher.",
                  border: "border-amber-500/35 hover:border-amber-400/70 bg-amber-50",
                  badge: "bg-amber-100 text-amber-700",
                },
              ].map((card) => (
                <div
                  key={card.step}
                  className={`genesis-card rounded-xl border ${card.border} p-5 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${card.badge}`}>
                      Phase {card.step}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground font-extrabold">{card.step}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

{/* ============================================================ */}
{/* FOUNDER & LEADERSHIP SPOTLIGHT (Abhishek Kumar) */}
{/* ============================================================ */}
function FounderLeadership({ openDemo }: { openDemo: () => void }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-white border-y border-white/10" id="founder">
      {/* 🇮🇳 Indian Tricolor Ambient Backlight */}
      <div className="pointer-events-none absolute -top-32 left-1/4 size-96 rounded-full bg-[#FF671F]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 size-96 rounded-full bg-[#047857]/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(30,64,175,0.12),transparent)]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF671F]/40 bg-gradient-to-r from-[#FF671F]/20 via-blue-950/40 to-[#047857]/20 px-4 py-1 text-xs font-black backdrop-blur-md shadow-inner">
            <Sparkles className="size-3.5 text-amber-400" />
            <span className="text-[#FB923C] font-black tracking-wider uppercase">LEADERSHIP &amp; VISION</span>
            <span className="text-white/40">•</span>
            <span className="text-emerald-400 font-extrabold">EMPOWERING SMART EDUCATION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Meet The Founder &amp; CEO —{" "}
            <span className="block mt-1 bg-gradient-to-r from-[#38BDF8] via-[#FB923C] to-[#4ADE80] bg-clip-text text-transparent">
              Abhishek Kumar
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tech visionary, product architect, and serial entrepreneur building high-impact platforms across Education, Healthcare, and Enterprise IT.
          </p>
        </div>

        {/* Founder Card - Two Column Grid */}
        <div className="max-w-6xl mx-auto rounded-3xl border border-[#FF671F]/30 bg-slate-900/60 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.6)] overflow-hidden ring-1 ring-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Official High-Res Photo & Social Links */}
            <div className="lg:col-span-5 relative p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="relative group w-full max-w-sm">
                {/* Tricolor Ring Glow behind photo */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#FF671F] via-[#1E40AF] to-[#047857] opacity-60 blur-lg group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Photo container with natural full height so photo is never cropped */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/25 shadow-2xl bg-slate-950">
                  <img
                    src={founderImg}
                    alt="Abhishek Kumar - Founder & CEO of EduSchool-Saathi"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
                </div>

                {/* Compact, clean Name & Title badge placed directly below the photo */}
                <div className="mt-3.5 w-full py-2.5 px-3 rounded-xl bg-slate-950/90 border border-white/15 text-center shadow-lg">
                  <b className="text-base sm:text-lg font-black text-white block tracking-tight">
                    Abhishek Kumar
                  </b>
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#FF671F] block mt-0.5">
                    Founder &amp; Chief Executive Officer
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 block mt-0.5">
                    Serial Entrepreneur • Tech Innovator
                  </span>
                </div>
              </div>

              {/* Founder Social Connect Profiles */}
              <div className="mt-4 w-full max-w-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block text-center mb-2.5">
                  Connect Directly With Abhishek Kumar
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/abhishek-kumar-807853375/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/40 text-sky-300 hover:bg-[#0A66C2] hover:text-white transition-all text-[11px] font-extrabold shadow-xs group"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="size-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/abhishekkumar62000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 hover:text-white transition-all text-[11px] font-extrabold shadow-xs group"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="size-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/developer__abhiii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 border border-pink-500/40 text-pink-300 hover:border-pink-400 hover:text-white transition-all text-[11px] font-extrabold shadow-xs group"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="size-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Clear Founder Message & Venture Portfolio */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                {/* Top Badge */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2">
                  <span className="text-[#FF671F] font-black uppercase tracking-widest text-[10px]">
                    MESSAGE FROM THE FOUNDER
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                  &ldquo;Technology Should Be Simple, Fast &amp; Accessible To Every School.&rdquo;
                </h3>

                {/* Easy to Understand Founder Message */}
                <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    <b className="text-white">Namaste! I am Abhishek Kumar.</b> When I looked at how schools manage their daily work, I saw teachers and principals wasting hours every day on paper registers, fee collection mistakes, and slow manual reports.
                  </p>
                  <p>
                    Most software in the market was too complex, expensive, and difficult to operate. We created <b>EduSchool-Saathi</b> to solve this completely — giving school owners full control on their smartphone, giving teachers 10-second attendance, and giving parents instant WhatsApp receipts.
                  </p>
                  <p className="text-amber-200/90 font-medium">
                    Our commitment is simple: <b>No heavy setup, zero hidden costs, and 24/7 dedicated support.</b>
                  </p>
                </div>

                {/* Multiple Companies Run by Abhishek Kumar with Clickable Live Links */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#FF671F]">
                      Portfolio Of Ventures Founded &amp; Led By Abhishek Kumar:
                    </span>
                    <span className="text-[10px] text-slate-400 hidden sm:inline">
                      Click to visit live platforms ↗
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Venture 1: EduSchool-Saathi */}
                    <a
                      href="https://eduschool-saathi.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-slate-950 p-3.5 hover:border-blue-400 hover:scale-[1.02] transition-all group block shadow-md"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="size-8 rounded-lg bg-blue-500/20 grid place-items-center text-blue-400 group-hover:scale-110 transition-transform">
                          <School className="size-4" />
                        </div>
                        <ExternalLink className="size-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <b className="text-xs font-bold text-white block group-hover:text-sky-300 transition-colors">
                        EduSchool-Saathi
                      </b>
                      <span className="text-[10px] text-sky-300 block font-semibold mt-0.5">
                        School ERP SaaS
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1 leading-tight">
                        Complete cloud ERP engine for 25+ schools with zero data leakage.
                      </p>
                    </a>

                    {/* Venture 2: Sehaat Saathi App */}
                    <a
                      href="https://sehaat-saathi.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/50 to-slate-950 p-3.5 hover:border-emerald-400 hover:scale-[1.02] transition-all group block shadow-md"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="size-8 rounded-lg bg-emerald-500/20 grid place-items-center text-emerald-400 group-hover:scale-110 transition-transform">
                          <HeartHandshake className="size-4" />
                        </div>
                        <ExternalLink className="size-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <b className="text-xs font-bold text-white block group-hover:text-emerald-300 transition-colors">
                        Sehaat Saathi App
                      </b>
                      <span className="text-[10px] text-emerald-300 block font-semibold mt-0.5">
                        Digital Healthcare Platform
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1 leading-tight">
                        Healthcare access &amp; doctor consultation platform for Bharat.
                      </p>
                    </a>

                    {/* Venture 3: TechSeva IT Solutions Agency */}
                    <a
                      href="https://techseva-it-solutions.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-950/50 to-slate-950 p-3.5 hover:border-amber-400 hover:scale-[1.02] transition-all group block shadow-md"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="size-8 rounded-lg bg-amber-500/20 grid place-items-center text-amber-400 group-hover:scale-110 transition-transform">
                          <Zap className="size-4" />
                        </div>
                        <ExternalLink className="size-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <b className="text-xs font-bold text-white block group-hover:text-amber-300 transition-colors">
                        TechSeva IT Agency
                      </b>
                      <span className="text-[10px] text-amber-300 block font-semibold mt-0.5">
                        Full-Suite IT Solutions
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1 leading-tight">
                        Custom web apps, enterprise software &amp; digital marketing.
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Founder Access & CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Direct Founder Helpline</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a href="tel:6200087830" className="text-xs sm:text-sm font-black text-amber-300 hover:underline">
                      +91 62000 87830
                    </a>
                    <span className="text-white/30">•</span>
                    <a href="mailto:eduschoolsaathi@gmail.com" className="text-xs sm:text-sm font-bold text-slate-300 hover:text-white">
                      eduschoolsaathi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href="https://wa.me/916200087830?text=Hello%20Abhishek%20Sir!%20I%20visited%20EduSchool-Saathi%20and%20want%20to%20discuss%20school%20ERP."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Phone className="size-3.5" /> WhatsApp Founder
                  </a>
                  <a
                    href="https://eduschoolsaathi.org/#trial"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-brand hover:brightness-110 active:scale-95 transition-all"
                  >
                    Schedule Demo <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
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
    <section className="roi-light section relative overflow-hidden bg-[radial-gradient(circle_at_12%_20%,rgba(255,103,31,0.14),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(19,136,8,0.14),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)] text-foreground" id="roi-calculator">
      <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
      <div className="absolute -top-32 left-1/3 size-96 rounded-full bg-[#FF671F]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 size-96 rounded-full bg-[#138808]/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-warm/40 bg-brand-warm/15 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-warm">
            <TrendingUp className="size-3.5 text-brand-warm" /> Interactive Value Simulator
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Calculate How Much Time & Money EduSchool-Saathi Saves Your School
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Drag the slider below to match your school's student strength and witness the real monthly and annual impact on administration, fee recovery, and teacher efficiency.
          </p>
        </div>

        <div className="roi-panel mt-12 mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-card backdrop-blur-xl sm:p-10">
          {/* Slider & Presets Header */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-sky">
                  Select Total School Strength
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-4xl sm:text-5xl font-black text-foreground">
                    {studentCount}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">Enrolled Students</span>
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
                        : "border border-slate-200 bg-slate-50 text-slate-600 hover:text-foreground hover:border-brand-sky/40"
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
                className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between gap-2 text-[11px] font-mono text-muted-foreground mt-2">
                <span>100 Students (Pre-School)</span>
                <span>500 Students (Standard)</span>
                <span>1,000 Students (High School)</span>
                <span>2,000 Students (Senior Secondary)</span>
              </div>
            </div>
          </div>

          {/* Impact Metric Cards Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-1 hover:border-[#FF671F]/50">
              <span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Admin Hours Saved
                <Clock3 className="size-4 text-primary" />
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <b className="font-display text-2xl sm:text-3xl font-black text-foreground">
                  {adminHoursSaved}
                </b>
                <span className="text-xs text-muted-foreground">hrs / month</span>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
                Automated attendance, fast fee receipts & one-click marks cards.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 transition-all hover:-translate-y-1 hover:border-emerald-500/60">
              <span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                Fee Leakage Prevented
                <IndianRupee className="size-4 text-emerald-400" />
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <b className="font-display text-2xl sm:text-3xl font-black text-emerald-400">
                  ₹{feeLeakagePrevented.toLocaleString("en-IN")}
                </b>
                <span className="text-xs text-emerald-700">/ year</span>
              </div>
              <p className="mt-2 text-[11px] text-emerald-800 leading-relaxed">
                Zero missed dues through instant WhatsApp/SMS receipts & alerts.
              </p>
            </div>

            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 transition-all hover:-translate-y-1 hover:border-brand-sky/60">
              <span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-sky-700">
                Paper Registers Eliminated
                <FileText className="size-4 text-brand-sky" />
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <b className="font-display text-2xl sm:text-3xl font-black text-foreground">
                  {paperRegistersSaved}
                </b>
                <span className="text-xs text-muted-foreground">registers / yr</span>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
                Save paper costs, printing hassle, and storage shelf space.
              </p>
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 transition-all hover:-translate-y-1 hover:border-[#FF671F]/60">
              <span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-brand-warm">
                Parent Engagement Rate
                <HeartHandshake className="size-4 text-brand-warm" />
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <b className="font-display text-2xl sm:text-3xl font-black text-brand-warm">
                  {parentTrustScore}
                </b>
                <span className="text-xs text-muted-foreground">Satisfaction</span>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
                Parents stay connected with real-time academic progress.
              </p>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold text-foreground">
                Ready to unlock ₹{(feeLeakagePrevented).toLocaleString("en-IN")} in annual recovered value?
              </p>
              <span className="text-[11px] text-muted-foreground">
                Setup takes under 24 hours. No expensive hardware or server required.
              </span>
            </div>

            <a
              href="https://eduschoolsaathi.org/#trial"
              className={`${primaryCta} w-full sm:w-auto`}
            >
              Schedule Free On-Site Demo <ArrowRight className="size-4" />
            </a>
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
  const [selectedFeature, setSelectedFeature] = useState(featureGroups[0].title);

  const filteredList = featureGroups.filter((module) => {
    const matchesCategory = active === "All" || module.cat === active;
    const matchesSearch =
      searchQuery.trim() === "" ||
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const selectedModule = filteredList.find((module) => module.title === selectedFeature) ?? filteredList[0];

  return (
    <section id="features" className="features-light section content-auto relative overflow-hidden bg-[radial-gradient(circle_at_8%_15%,rgba(255,103,31,0.13),transparent_28%),radial-gradient(circle_at_92%_82%,rgba(19,136,8,0.13),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)]">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 tricolor-sheen" />
      <div className="pointer-events-none absolute -top-40 left-1/4 size-96 rounded-full bg-[#FF671F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 size-96 rounded-full bg-[#138808]/10 blur-3xl" />
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF671F]/35 bg-[#FF671F]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#c2410c] mb-5">
            <Sparkles className="size-3.5" />Complete Platform Modules <span className="text-[#138808]">• 19+ ERP Tools</span>
          </span>
          <div className="features-poster-frame mx-auto mb-8 mt-2 max-w-4xl overflow-hidden rounded-3xl border border-[#138808]/25 bg-white p-2 shadow-card sm:p-4">
            <img
              src={featuresPosterImg}
              alt="EduSchool-Saathi complete school management ERP platform poster"
              className="mx-auto block h-auto w-full rounded-2xl object-contain"
              loading="eager"
              decoding="async"
            />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
            Everything Your School Needs{" "}
            <span className="bg-gradient-to-r from-[#FF671F] via-[#1E40AF] to-[#138808] bg-clip-text text-transparent">
              Built into 19+ High-Speed Modules
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            From pre-nursery to Class 12 — manage student admissions, instant fee collection, exam marks, and bus transport from a single lightning-fast dashboard.
          </p>
        </div>


        {/* Live Search & Category Bar */}
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#138808]" />
            <input
              type="text"
              placeholder="Search modules (e.g., 'attendance', 'fees', 'exam', 'parent')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 w-full rounded-full border border-slate-200 bg-white/90 backdrop-blur-md pl-10 pr-4 text-xs sm:text-sm font-medium text-foreground placeholder:text-slate-400 outline-none transition focus:border-[#138808]/60 focus:ring-2 focus:ring-[#138808]/20 shadow-soft"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-foreground"
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
                    ? "bg-[#138808] text-white shadow-[0_8px_20px_rgba(19,136,8,0.22)] scale-105"
                    : "border border-slate-200 bg-white/80 text-slate-600 hover:text-foreground hover:border-[#FF671F]/40 hover:bg-orange-50"
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
                Core:     { grad: "from-white via-blue-50 to-white", iconBg: "bg-blue-100", badge: "bg-blue-50 text-blue-700 border border-blue-200", badgeText: "text-slate-600", border: "border-blue-200", glow: "hover:shadow-[0_18px_45px_rgba(30,64,175,0.16)]" },
                Academic: { grad: "from-white via-orange-50 to-white", iconBg: "bg-orange-100", badge: "bg-orange-50 text-orange-700 border border-orange-200", badgeText: "text-slate-600", border: "border-orange-200", glow: "hover:shadow-[0_18px_45px_rgba(255,103,31,0.16)]" },
                Finance:  { grad: "from-white via-emerald-50 to-white", iconBg: "bg-emerald-100", badge: "bg-emerald-50 text-emerald-700 border border-emerald-200", badgeText: "text-slate-600", border: "border-emerald-200", glow: "hover:shadow-[0_18px_45px_rgba(19,136,8,0.16)]" },
                Portals:  { grad: "from-white via-amber-50 to-white", iconBg: "bg-amber-100", badge: "bg-amber-50 text-amber-700 border border-amber-200", badgeText: "text-slate-600", border: "border-amber-200", glow: "hover:shadow-[0_18px_45px_rgba(245,158,11,0.16)]" },
                Connect:  { grad: "from-white via-rose-50 to-white", iconBg: "bg-rose-100", badge: "bg-rose-50 text-rose-700 border border-rose-200", badgeText: "text-slate-600", border: "border-rose-200", glow: "hover:shadow-[0_18px_45px_rgba(244,63,94,0.14)]" },
                Insights: { grad: "from-white via-cyan-50 to-white", iconBg: "bg-cyan-100", badge: "bg-cyan-50 text-cyan-700 border border-cyan-200", badgeText: "text-slate-600", border: "border-cyan-200", glow: "hover:shadow-[0_18px_45px_rgba(6,182,212,0.16)]" },
                Admin:    { grad: "from-white via-slate-50 to-white", iconBg: "bg-slate-100", badge: "bg-slate-100 text-slate-700 border border-slate-200", badgeText: "text-slate-600", border: "border-slate-200", glow: "hover:shadow-[0_18px_45px_rgba(100,116,139,0.14)]" },
                Extended: { grad: "from-white via-green-50 to-white", iconBg: "bg-green-100", badge: "bg-green-50 text-green-700 border border-green-200", badgeText: "text-slate-600", border: "border-green-200", glow: "hover:shadow-[0_18px_45px_rgba(22,101,52,0.16)]" },
              };
              const p = palettes[cat] ?? palettes["Core"];
              return (
                <article
                  key={title}
                  role="button"
                  tabIndex={0}
                  aria-pressed={selectedFeature === title}
                  onClick={() => setSelectedFeature(title)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedFeature(title);
                    }
                  }}
                  className={`features-card group relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.grad} p-6 shadow-soft border ${p.border} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${p.glow} flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF671F] ${selectedFeature === title ? "ring-2 ring-[#138808] ring-offset-2" : ""}`}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-white/10 blur-2xl" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 tricolor-sheen opacity-80" />
                  <div>
                    <div className="flex items-start justify-between">
                      <span className={`grid size-12 place-items-center rounded-xl ${p.iconBg} text-[#138808] shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <I className="size-6" />
                      </span>
                      <span className={`rounded-full ${p.badge} px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-sm`}>
                        {cat}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-black text-foreground leading-tight transition-colors duration-300 group-hover:text-[#c2410c]">
                      {title}
                    </h3>
                    <p className={`mt-2 min-h-12 text-xs sm:text-sm leading-6 ${p.badgeText}`}>
                      {desc}
                    </p>
                  </div>
                  <ul className="mt-5 grid gap-2 border-t border-slate-200 pt-4">
                    {items.map((x) => (
                      <li key={x} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check className="size-3.5 shrink-0 text-[#138808]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#c2410c] opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                    Open module view <ArrowRight className="size-3" />
                  </span>
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

        {selectedModule && (
          <div className="feature-command-panel mt-8 overflow-hidden rounded-2xl border border-[#138808]/25 bg-white/90 shadow-card backdrop-blur-xl">
            <div className="h-1 tricolor-sheen" />
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-100 via-white to-green-100 text-[#138808] shadow-sm ring-1 ring-[#FF671F]/25">
                <selectedModule.icon className="size-8" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#c2410c]">Live ERP module view • {selectedModule.cat}</span>
                <h3 className="mt-1 font-display text-2xl font-black text-foreground">{selectedModule.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{selectedModule.desc}</p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 lg:min-w-52">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">Included workflow</span>
                <ul className="mt-2 space-y-1.5">
                  {selectedModule.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs font-semibold text-emerald-950">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
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
    <section id="roles" className="roles-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.12),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.12),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)]">
      <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
      <div className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-[#FF671F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 size-96 rounded-full bg-[#138808]/10 blur-3xl" />
      <div className="container">
        <SectionTitle
          eyebrow="Role-Based Experiences"
          title="Tailored Portals for Every Member of the School Family"
          copy="Principals, Teachers, Students, and Parents each get an intuitive dedicated portal focused only on what they need to accomplish today."
          center
        />

        <div className="mt-10 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center" role="tablist">
          {(Object.keys(roles) as (keyof typeof roles)[]).map((k) => {
            const I = roles[k].icon;
            return (
              <button
                role="tab"
                aria-selected={active === k}
                key={k}
                onClick={() => setActive(k)}
                className={`relative flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-xs font-bold transition-all sm:px-4 ${
                  active === k
                    ? "border-[#138808]/45 bg-gradient-to-br from-[#138808]/15 via-white to-[#FF671F]/10 text-foreground shadow-sm ring-1 ring-[#138808]/15"
                    : "border-slate-200 bg-white/85 text-muted-foreground hover:text-foreground hover:border-[#FF671F]/40 hover:-translate-y-0.5"
                }`}
              >
                <I className="size-4" />
                {k}
              </button>
            );
          })}
        </div>

        <div className="role-workspace relative mt-8 grid overflow-hidden rounded-2xl border border-[#138808]/20 bg-white/90 shadow-card backdrop-blur-xl lg:grid-cols-[.8fr_1.2fr]">
          <div className="absolute inset-x-0 top-0 z-10 h-1 tricolor-sheen" />
          {/* Left Column: Role Details */}
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-orange-100 via-white to-green-100 text-[#138808] shadow-sm ring-1 ring-[#FF671F]/25">
              <r.icon className="size-6" />
            </span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[.14em] text-[#c2410c]">
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
          <div className="role-preview relative bg-gradient-to-br from-orange-50/70 via-white to-green-50/70 p-5 sm:p-8 flex flex-col justify-center border-t border-slate-200 lg:border-t-0 lg:border-l">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0369a1]">
                    Role Simulation Active
                  </span>
                  <h4 className="font-display text-lg font-bold text-foreground">
                    {active} Portal Interface
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {r.stats.map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 transition-all hover:-translate-y-1 hover:border-[#FF671F]/40">
                    <b className="font-display text-xl font-bold text-foreground">{value}</b>
                    <span className="mt-1 block text-[10px] text-muted-foreground uppercase font-semibold">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <b className="text-xs font-bold text-foreground block mb-3">Live Active Actions</b>
                <div className="space-y-2">
                  {r.tasks.map((x, i) => {
                    const isDone = !!completedTasks[`${active}-${x}`];
                    return (
                      <div
                        key={x}
                        className={`flex items-center justify-between rounded p-2 text-xs transition-colors ${
                          isDone ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-white text-slate-600 border border-slate-200"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="grid size-4 place-items-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-700">
                            {i + 1}
                          </span>
                          <span>{x}</span>
                        </span>
                        {isDone && <span className="text-[10px] text-emerald-700 font-bold">Processed</span>}
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

function HowItWorks() {
  const steps = [
    [Phone, "Talk to Us", "Tell us about your school, student strength, and everyday needs."],
    [Settings, "School Onboarding", "Set up school information, classes, sections, staff, and academic sessions."],
    [Users, "Create School Accounts", "Prepare the right access for principals, teachers, students, and parents."],
    [Play, "Start Managing", "Move attendance, fees, exams, homework, and records online."],
    [TrendingUp, "Grow Digitally", "Add more workflows as your school evolves across Bihar and India."],
  ] as const;
  const [activeStep, setActiveStep] = useState(0);
  const [ActiveIcon, activeTitle, activeCopy] = steps[activeStep];

  return (
    <section id="how-it-works" className="onboarding-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.12),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.12),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)]">
      <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
      <div className="container relative z-10">
        <SectionTitle eyebrow="Simple onboarding" title="Get Your School Digitally Connected in Simple Steps" copy="A guided path from first conversation to a confident, connected school operation." center />
        <div className="onboarding-journey mt-10 grid gap-4 grid-cols-1 lg:grid-cols-[1.15fr_.85fr]">
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map(([Icon, title], index) => (
              <button
                key={title}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`onboarding-step group relative rounded-2xl border p-4 text-left transition-all sm:text-center ${activeStep === index ? "border-[#138808]/50 bg-white shadow-card ring-1 ring-[#138808]/15" : "border-slate-200 bg-white/70 hover:-translate-y-1 hover:border-[#FF671F]/50"}`}
              >
                <span className={`relative mx-auto grid size-12 place-items-center rounded-full border-4 border-white shadow-sm transition-transform group-hover:scale-110 ${activeStep === index ? "bg-[#138808] text-white" : "bg-orange-50 text-[#c2410c]"}`}>
                  <Icon className="size-5" />
                </span>
                <span className="mt-3 block text-[10px] font-extrabold uppercase tracking-widest text-[#c2410c]">Step {String(index + 1).padStart(2, "0")}</span>
                <span className="mt-1 block font-display text-sm font-black text-foreground">{title}</span>
                {activeStep === index && <span className="absolute inset-x-4 bottom-0 h-1 rounded-full bg-gradient-to-r from-[#FF671F] via-white to-[#138808]" />}
              </button>
            ))}
          </div>
          <div className="onboarding-detail relative overflow-hidden rounded-2xl border border-[#138808]/25 bg-white p-6 shadow-card sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#c2410c]"><ActiveIcon className="size-3.5" /> Your next milestone</span>
            <h3 className="mt-5 font-display text-2xl font-black text-foreground">{activeTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{activeCopy}</p>
            <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
              <span className="font-display text-3xl font-black text-[#138808]">{String(activeStep + 1).padStart(2, "0")}</span>
              <span className="text-xs font-semibold text-muted-foreground">of 05 steps to a smarter school day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  const [activeBenefit, setActiveBenefit] = useState(0);
  const ActiveBenefitIcon = groups[activeBenefit].icon;

  return (
    <section id="benefits" className="benefits-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.13),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.13),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)]">
      <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
      <div className="container relative z-10">
        <SectionTitle
          eyebrow="Benefits for everyone"
          title="A Better School Day, for Every Role"
          copy="Reduce administrative friction and give each member of the school community the right information at the right time."
          center
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {groups.map((g, index) => (
            <div
              key={g.title}
              role="button"
              tabIndex={0}
              onClick={() => setActiveBenefit(index)}
              onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActiveBenefit(index); } }}
              className={`benefit-card cursor-pointer rounded-2xl border p-5 transition-all hover:-translate-y-1 ${activeBenefit === index ? "border-[#138808]/45 bg-white shadow-card ring-1 ring-[#138808]/15" : "border-slate-200 bg-white/75 hover:border-[#FF671F]/45"}`}
            >
              <div className="flex items-center gap-3">
                <span className={`grid size-11 place-items-center rounded-xl ${activeBenefit === index ? "bg-[#138808] text-white" : "bg-orange-50 text-[#c2410c]"}`}>
                  <g.icon className="size-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#c2410c]">
                  {g.sub}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-black text-foreground">
                {g.title}
              </h3>
            </div>
          ))}
          </div>
          <div className="benefit-detail relative overflow-hidden rounded-2xl border border-[#138808]/25 bg-white p-6 shadow-card sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
            <div className="flex items-start justify-between gap-4">
              <div><span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#c2410c]">Impact for {groups[activeBenefit].sub.replace("For ", "")}</span><h3 className="mt-2 font-display text-2xl font-black text-foreground sm:text-3xl">{groups[activeBenefit].title}</h3></div>
              <span className="hidden size-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-100 via-white to-green-100 text-[#138808] sm:grid"><ActiveBenefitIcon className="size-7" /></span>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">A focused experience keeps the right people moving with less friction and more visibility throughout the school day.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {groups[activeBenefit].items.map((item) => <div key={item} className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 text-xs font-bold text-emerald-950"><Check className="size-4 shrink-0 text-emerald-600" />{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission(){const values=[[Sparkles,"Simplicity","Technology should make school management easier, not harder."],[MapPin,"Accessibility","Digital tools should reach schools beyond major cities."],[HeartHandshake,"Connection","Schools, teachers, students and parents should stay connected."],[TrendingUp,"Growth","Help schools evolve from manual systems to modern operations."]];return <><section className="section"><div className="container grid items-center gap-12 lg:grid-cols-2"><div className="relative"><img src={schoolImage} alt="Students and teacher using digital learning tools" width={1600} height={1056} loading="lazy" className="aspect-[5/4] rounded-lg object-cover shadow-card"/><div className="absolute bottom-4 left-4 right-4 rounded-md bg-ink/90 p-5 text-ink-foreground backdrop-blur sm:left-auto sm:max-w-xs"><MapPin className="size-5 text-brand-warm"/><b className="mt-2 block font-display text-lg">Technology belongs everywhere.</b><p className="mt-1 text-xs leading-5 text-ink-muted">Madhubani · Darbhanga · North Bihar · Rural & semi-urban communities</p></div></div><div><SectionTitle eyebrow="Our local mission" title="Bringing Digital School Management Closer to Every School." copy="Our goal is to help schools in rural and semi-urban communities adopt modern digital management without the complexity and cost traditionally associated with custom software."/><p className="mt-6 border-l-2 border-brand-warm pl-5 font-display text-xl font-bold">Technology should not be limited to big cities or large institutions.</p></div></div></section><section className="section bg-muted/40"><div className="container"><div className="grid gap-5 lg:grid-cols-2"><div className="rounded-lg bg-primary p-8 text-primary-foreground shadow-brand"><span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Our mission</span><h2 className="mt-3 font-display text-3xl font-extrabold">Digitally empower every school.</h2><p className="mt-4 leading-7 text-primary-foreground/80">To digitally empower schools with simple, affordable and accessible technology that reduces complexity, improves communication and creates a connected education experience.</p></div><div className="rounded-lg border border-border bg-card p-8 shadow-soft"><span className="text-xs font-bold uppercase tracking-widest text-primary">Our vision</span><h2 className="mt-3 font-display text-3xl font-extrabold">Every School. Connected. Digitally Empowered.</h2><p className="mt-4 leading-7 text-muted-foreground">A connected education ecosystem where every school, teacher, student and parent can access smarter tools in a simpler and more meaningful way.</p></div></div><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{values.map(([I,t,d])=><div key={String(t)} className="rounded-md border border-border bg-card p-5"><I className="size-5 text-primary"/><h3 className="mt-4 text-xs font-extrabold uppercase tracking-widest">{t as string}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{d as string}</p></div>)}</div></div></section></>}

function MissionPremium() {
  const values = [[Sparkles, "Simplicity", "Technology should make school management easier, not harder."], [MapPin, "Accessibility", "Digital tools should reach schools beyond major cities."], [HeartHandshake, "Connection", "Schools, teachers, students and parents should stay connected."], [TrendingUp, "Growth", "Help schools evolve from manual systems to modern operations."]] as const;
  const [activeValue, setActiveValue] = useState(0);
  const [ValueIcon, valueTitle, valueCopy] = values[activeValue];
  return <>
    <section className="mission-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.13),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.13),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)]"><div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" /><div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]"><div className="mission-image-card relative overflow-hidden rounded-3xl border border-[#138808]/25 bg-white p-2 shadow-card"><img src={schoolImage} alt="Students and teacher using digital learning tools" width={1600} height={1056} loading="lazy" className="aspect-[5/4] rounded-2xl object-cover" /><div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur sm:left-auto sm:max-w-xs"><MapPin className="size-5 text-[#FF671F]" /><b className="mt-2 block font-display text-lg text-foreground">Technology belongs everywhere.</b><p className="mt-1 text-xs leading-5 text-muted-foreground">Madhubani · Darbhanga · North Bihar · Rural & semi-urban communities</p></div></div><div><SectionTitle eyebrow="Our local mission" title="Bringing Digital School Management Closer to Every School." copy="Our goal is to help schools in rural and semi-urban communities adopt modern digital management without the complexity and cost traditionally associated with custom software." /><p className="mt-6 border-l-4 border-[#FF671F] pl-5 font-display text-xl font-black text-foreground">Technology should not be limited to big cities or large institutions.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{values.map(([Icon, title], index) => <button key={title} type="button" onClick={() => setActiveValue(index)} className={`mission-value-card rounded-2xl border p-4 text-left transition-all ${activeValue === index ? "border-[#138808]/45 bg-white shadow-card" : "border-slate-200 bg-white/70 hover:-translate-y-1 hover:border-[#FF671F]/45"}`}><Icon className={`size-5 ${activeValue === index ? "text-[#138808]" : "text-[#c2410c]"}`} /><b className="mt-2 block font-display text-sm text-foreground">{title}</b></button>)}</div><div className="mission-value-detail mt-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5"><span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700">Our guiding value</span><div className="mt-2 flex items-center gap-3"><ValueIcon className="size-5 text-emerald-600" /><b className="font-display text-lg text-emerald-950">{valueTitle}</b></div><p className="mt-2 text-sm leading-6 text-emerald-900">{valueCopy}</p></div></div></div></section>
    <section className="vision-light section relative overflow-hidden bg-white"><div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" /><div className="container relative grid gap-5 lg:grid-cols-2"><div className="vision-card rounded-3xl border border-[#138808]/25 bg-gradient-to-br from-green-50 via-white to-orange-50 p-7 shadow-card sm:p-10"><span className="text-xs font-extrabold uppercase tracking-widest text-[#138808]">Our vision</span><h2 className="mt-3 font-display text-3xl font-black text-foreground">Every school confident. Every child digitally empowered.</h2><p className="mt-4 leading-7 text-muted-foreground">Create an education ecosystem where schools in Patna, Madhubani, Darbhanga, and remote village blocks can access world-class tools that save time, improve transparency, and help teachers focus on teaching.</p><span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#c2410c] shadow-sm"><Target className="size-4" /> Bihar to India, one school at a time</span></div><div className="mission-card rounded-3xl border border-[#FF671F]/25 bg-gradient-to-br from-orange-50 via-white to-green-50 p-7 shadow-card sm:p-10"><span className="text-xs font-extrabold uppercase tracking-widest text-[#c2410c]">Our mission</span><h2 className="mt-3 font-display text-3xl font-black text-foreground">Make school technology practical, affordable, and human.</h2><div className="mt-5 space-y-3">{["Bring fee transparency to every school office.","Give teachers back hours for teaching.","Keep parents connected to progress every day."].map((item) => <div key={item} className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-white/80 p-3 text-sm font-bold text-emerald-950"><Check className="size-4 text-emerald-600" />{item}</div>)}</div></div></div></section>
  </>;
}

function Showcase(){return <section className="showcase-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.12),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.12),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)]"><div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" /><div className="container relative z-10"><SectionTitle eyebrow="Product showcase" title="See Your School at a Glance" copy="Understand attendance, fees, student performance and daily activity without searching through files." center/><div className="showcase-frame mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-[#138808]/25 bg-white/80 p-3 shadow-card sm:p-5"><div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-gradient-to-r from-orange-50 via-white to-green-50 px-4 py-3"><span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#c2410c]"><span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Live school command center</span><span className="text-[10px] font-bold text-muted-foreground">Attendance • Fees • Exams • Portals</span></div><Dashboard/></div></div></section>}

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
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
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
    <section id="pricing" className="pricing-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.12),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.12),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)]">
      <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            eyebrow="Transparent School-Friendly Pricing"
            title="Affordable Without Compromise. Zero Hidden AMC."
            copy="Pay a simple subscription with unlimited student records, regular feature updates, and dedicated on-call support from Bara Bazar Madhubani."
            center
          />

          {/* Billing Switcher Toggle */}
          <div className="mt-8 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-soft">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                !isAnnual
                  ? "bg-[#138808] text-white shadow-[0_8px_20px_rgba(19,136,8,0.22)]"
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
                  ? "bg-[#FF671F] text-white shadow-[0_8px_20px_rgba(255,103,31,0.22)]"
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {/* Starter School */}
          <div className="pricing-card rounded-2xl border border-slate-200 bg-white p-7 shadow-soft flex flex-col justify-between">
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

            <a
              href="https://eduschoolsaathi.org/#trial"
              className={`${secondaryCta} mt-8 w-full`}
            >
              Choose Starter <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Standard Pro (Most Popular) */}
          <div className="pricing-card pricing-featured relative rounded-2xl border-2 border-[#138808]/50 bg-gradient-to-b from-white via-white to-green-50 p-7 shadow-card flex flex-col justify-between sm:col-span-2 lg:col-span-1 lg:scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#138808] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(19,136,8,0.24)]">
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

            <a
              href="https://eduschoolsaathi.org/#trial"
              className={`${primaryCta} mt-8 w-full`}
            >
              Start Free School Trial <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Institutional / Multi-Branch */}
          <div className="pricing-card rounded-2xl border border-slate-200 bg-white p-7 shadow-soft flex flex-col justify-between">
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

            <a
              href="https://eduschoolsaathi.org/#trial"
              className={`${secondaryCta} mt-8 w-full`}
            >
              Contact For Enterprise <ArrowRight className="size-4" />
            </a>
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
  const [activeWhy, setActiveWhy] = useState(0);
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
      <section className="why-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.11),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.11),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)] text-foreground">
        <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
        <div className="container">
          <SectionTitle
            eyebrow="A long-term partner"
            title="Why Schools Choose EduSchool-Saathi"
            center
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {why.map(([I, t, d], index) => (
              <div
                key={String(t)}
                role="button"
                tabIndex={0}
                onClick={() => setActiveWhy(index)}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActiveWhy(index); } }}
                className={`why-card cursor-pointer rounded-2xl border p-6 shadow-soft transition-all hover:-translate-y-1 ${activeWhy === index ? "border-[#138808]/45 bg-white shadow-card ring-1 ring-[#138808]/15" : "border-slate-200 bg-white/75 hover:border-[#FF671F]/45"}`}
              >
                <span className={`grid size-11 place-items-center rounded-xl ${activeWhy === index ? "bg-[#138808] text-white" : "bg-orange-50 text-[#c2410c]"}`}><I className="size-6" /></span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{t as string}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{d as string}</p>
                {activeWhy === index && <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-[#c2410c]">Why it matters <ArrowRight className="size-3" /></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="privacy-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.13),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.13),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)] text-foreground">
        <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
        <div className="container grid gap-10 lg:grid-cols-2 items-center relative z-10">
          <div>
            <SectionTitle
              eyebrow="Thoughtful by design"
              title="Built with School Data Privacy in Mind"
              copy="EduSchool-Saathi is designed around school-level data isolation, role-based access and controlled permissions."
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
                className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-white/85 backdrop-blur-md p-4 text-xs font-bold text-foreground shadow-soft transition-all hover:-translate-y-1 hover:border-[#138808]/45"
              >
                <LockKeyhole className="size-4 shrink-0 text-[#138808]" />
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQ(){const [open,setOpen]=useState(0);return <section id="faq" className="faq-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.1),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.1),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)]"><div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" /><div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><SectionTitle eyebrow="Questions, answered" title="Everything You Need to Know" copy="Clear answers for school owners and directors exploring EduSchool-Saathi."/><div className="faq-list rounded-2xl border border-slate-200 bg-white/85 p-3 shadow-card">{faqs.map(([q,a],i)=><div key={q} className={`faq-item rounded-xl border transition-all ${open===i?"border-[#138808]/30 bg-emerald-50/50":"border-transparent"}`}><button type="button" className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-bold text-foreground" onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span className="flex items-center gap-3"><span className={`grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-black ${open===i?"bg-[#138808] text-white":"bg-orange-50 text-[#c2410c]"}`}>{String(i+1).padStart(2,"0")}</span>{q}</span><ChevronDown className={`size-4 shrink-0 transition ${open===i?"rotate-180 text-[#138808]":"text-muted-foreground"}`}/></button><div className={`grid transition-all ${open===i?"grid-rows-[1fr] pb-4":"grid-rows-[0fr]"}`}><p className="overflow-hidden px-14 text-sm leading-6 text-muted-foreground">{a}</p></div></div>)}</div></div></section>}

function FinalCta({ openDemo }: { openDemo: () => void }) {
  return (
    <section id="contact" className="final-cta-light section relative overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.16),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.16),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)] text-foreground">
      <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
      <div className="container relative grid items-center gap-10 lg:grid-cols-[.78fr_1.22fr]">
        <div className="final-founder-poster relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-[#138808]/30 bg-white p-2 shadow-card">
          <div className="absolute inset-x-0 top-0 z-10 h-1 tricolor-sheen" />
          <img src={founderAdvertisementImg} alt="Abhishek Kumar, Founder and CEO of EduSchool-Saathi" className="block h-auto w-full rounded-2xl object-contain" loading="lazy" decoding="async" />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/92 p-3 shadow-soft backdrop-blur">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c2410c]">Founder & CEO</span>
            <b className="mt-1 block font-display text-base text-foreground">Abhishek Kumar</b>
            <span className="text-[11px] font-semibold text-emerald-700">Building better education, one school at a time.</span>
          </div>
        </div>
        <div className="text-center lg:text-left">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#FF671F]/35 bg-orange-50 px-3 py-1 text-xs font-extrabold uppercase tracking-[.18em] text-[#c2410c]">🇮🇳 Apne School Ko Digital Banayein</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-black text-foreground sm:text-5xl lg:mx-0">
          Ready to Take Your School Digital?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground lg:mx-0">
          Join the journey towards simpler, smarter and more connected school management — from Bara Bazar Madhubani and Darbhanga to schools across Bihar & India.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a
            href="https://eduschoolsaathi.org/#trial"
            className={primaryCta}
          >
            Request a Free Demo <ArrowRight className="size-4" />
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-[#138808]/40 hover:bg-green-50"
            href="mailto:eduschoolsaathi@gmail.com"
          >
            <Mail className="size-4" /> Contact EduSchool-Saathi
          </a>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left grid-cols-1 sm:grid-cols-3 lg:mx-0">
          <div className="cta-contact-card rounded-2xl border border-slate-200 bg-white/85 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-brand-warm">
              <MapPin className="size-4" />
              <b className="text-xs uppercase tracking-wider">Office Address</b>
            </div>
            <p className="mt-2 text-xs font-bold text-foreground">Bara Bazar Madhubani</p>
            <span className="text-[11px] text-muted-foreground block mt-0.5">Bihar, India</span>
          </div>

          <div className="cta-contact-card rounded-2xl border border-slate-200 bg-white/85 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-brand-warm">
              <Phone className="size-4" />
              <b className="text-xs uppercase tracking-wider">Call / WhatsApp</b>
            </div>
            <div className="mt-2 space-y-1">
              <a href="tel:6200087830" className="block text-xs font-bold text-sky-700 hover:text-[#c2410c] transition-colors">
                +91 62000 87830
              </a>
              <a href="tel:9934276622" className="block text-xs font-bold text-sky-700 hover:text-[#c2410c] transition-colors">
                +91 99342 76622
              </a>
              <a href="tel:94700741183" className="block text-xs font-bold text-sky-700 hover:text-[#c2410c] transition-colors">
                +91 94700 74183 / 94700741183
              </a>
            </div>
          </div>

          <div className="cta-contact-card rounded-2xl border border-slate-200 bg-white/85 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-brand-warm">
              <Mail className="size-4" />
              <b className="text-xs uppercase tracking-wider">Official Email</b>
            </div>
            <a
              href="mailto:eduschoolsaathi@gmail.com"
              className="mt-2 block text-xs font-bold text-sky-700 hover:text-[#c2410c] transition-colors break-all"
            >
              eduschoolsaathi@gmail.com
            </a>
            <span className="text-[11px] text-muted-foreground block mt-0.5">Instant response for schools</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [openFooterColumn, setOpenFooterColumn] = useState<string | null>(null);
  const cols = [
    { t: "Platform", a: [["About Platform", "#about"], ["25+ Schools Network", "/schools-network"], ["Partners", "#ecosystem"], ["All Features", "#features"], ["How It Works", "#how-it-works"], ["Pricing Plans", "#pricing"]] },
    { t: "Portals", a: [["School Management", "#roles"], ["Teacher Portal", "#roles"], ["Student Dashboard", "#roles"], ["Parent App", "#roles"]] },
    { t: "Resources", a: [["FAQ", "#faq"], ["Request Demo", "#home"], ["School Benefits", "#benefits"], ["Contact Us", "#contact"]] },
    { t: "Ecosystem", a: [["Sehaat Saathi App", "https://sehaat-saathi.vercel.app/"], ["TechSeva IT Solutions", "https://techseva-it-solutions.vercel.app/"], ["Privacy Policy", "#about"], ["Terms of Service", "#about"]] },
  ];

  return (
    <footer className="footer-light relative overflow-hidden border-t border-slate-200 bg-[radial-gradient(circle_at_8%_18%,rgba(255,103,31,0.13),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(19,136,8,0.13),transparent_30%),linear-gradient(135deg,#fffdf9,#ffffff_52%,#f4fbf3)] py-14 text-foreground">
      <div className="absolute inset-x-0 top-0 h-1 tricolor-sheen" />
      <div className="pointer-events-none absolute -right-40 top-20 size-96 rounded-full bg-[#138808]/10 blur-3xl" />
      <div className="container grid gap-10 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Brand />
          <p className="footer-description mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
            EduSchool-Saathi is a next-generation multi-school ERP and educational SaaS platform designed to automate attendance, fee collection, examinations, and communication.
          </p>

          {/* Official Sponsorship & Powered By Badges in Footer */}
          <div className="footer-alliance mt-6 max-w-sm space-y-2.5 rounded-2xl border border-[#FF671F]/25 bg-white/85 p-4 shadow-soft">
            <div className="text-[11px] font-bold text-foreground flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-[#FF671F]" /> Strategic Tech Alliances
            </div>
            <div className="footer-alliance-link text-xs text-muted-foreground">
              <span className="font-semibold text-emerald-700">Sponsored by:</span>{" "}
              <a
                href="https://sehaat-saathi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground hover:text-emerald-700 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              >
                Sehaat Saathi App <ExternalLink className="size-2.5" />
              </a>
            </div>
            <div className="footer-alliance-link text-xs text-muted-foreground">
              <span className="font-semibold text-sky-700">Powered by:</span>{" "}
              <a
                href="https://techseva-it-solutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground hover:text-sky-700 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              >
                TechSeva IT Solutions Agency <ExternalLink className="size-2.5" />
              </a>
            </div>
          </div>

          <p className="footer-contact mt-5 text-xs leading-5">
            <b>Address:</b> Bara Bazar Madhubani, Bihar, India<br />
            <b>Phone:</b>{" "}
            <a href="tel:6200087830" className="footer-contact-link underline">6200087830</a> •{" "}
            <a href="tel:9934276622" className="footer-contact-link underline">9934276622</a> •{" "}
            <a href="tel:94700741183" className="footer-contact-link underline">94700741183</a><br />
            <b>Email:</b>{" "}
            <a href="mailto:eduschoolsaathi@gmail.com" className="footer-contact-link underline">eduschoolsaathi@gmail.com</a><br />
            Empowering Rural, Semi-Urban & Growing Schools across Bihar & India
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {cols.map((c) => (
            <div key={c.t} className="footer-column">
              <button type="button" onClick={() => setOpenFooterColumn(openFooterColumn === c.t ? null : c.t)} className="flex w-full items-center justify-between text-left text-xs font-extrabold uppercase tracking-widest text-[#138808] sm:pointer-events-none">
                {c.t}<ChevronDown className={`size-4 transition sm:hidden ${openFooterColumn === c.t ? "rotate-180" : ""}`} />
              </button>
              <div className={`${openFooterColumn === c.t ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"} mt-2 grid transition-all sm:mt-4 sm:grid-rows-[1fr] sm:pb-0`}>
              <div className="min-h-0 space-y-2.5 overflow-hidden">
                {c.a.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="block text-xs text-muted-foreground transition-colors hover:translate-x-1 hover:text-[#c2410c]"
                  >
                    {label} {href.startsWith("http") ? "↗" : ""}
                  </a>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span>© 2026 </span>
          <span className="font-bold inline-flex items-center">
            <span className="text-sky-400">Edu</span>
            <span className="text-amber-400">School</span>
            <span className="text-slate-400">-</span>
            <span className="text-emerald-700">Saathi</span>
          </span>
          <span>. All rights reserved.</span>
          <span>•</span>
          <span className="text-[#c2410c] font-semibold">Har School Ka Saathi</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <span className="text-muted-foreground">#1 School Management SaaS in Bihar</span>
          <span>•</span>
          <a href="#about" className="hover:text-[#c2410c] transition-colors">Privacy</a>
          <span>•</span>
          <a href="#about" className="hover:text-[#138808] transition-colors">Security</a>
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
  const openTrial = () => {
    window.location.href = "https://eduschoolsaathi.org/#trial";
  };

  return (
    <>
      <Navbar openDemo={openTrial} />
      <main>
        <Hero openDemo={openTrial} />
        <FounderPoster />
        <TrustStrip />
        <Problems />
        <Platform openDemo={openTrial} />
        <RoiCalculator openDemo={openTrial} />
        <Features />
        <Roles />
        <HowItWorks />
        <Benefits />
        <MissionPremium />
        <FounderLeadership openDemo={openTrial} />
        <Showcase />
        <MobileExperience />
        <Pricing openDemo={openTrial} />
        <WhyAndPrivacy />
        <FAQ />
        <FinalCta openDemo={openTrial} />
      </main>
      <Footer />
      <DemoModal open={demo} onClose={() => setDemo(false)} />
      <PwaInstallPrompt />
      <WhatsappChatbot />
    </>
  );
}
