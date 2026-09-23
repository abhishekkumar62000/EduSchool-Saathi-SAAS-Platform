import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Layers, School, Users, GraduationCap, ShieldCheck, MapPin, 
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, Activity, 
  Database, Lock, Server, Globe2, BarChart3, Search, Filter,
  Phone, ArrowLeft, HeartHandshake, Zap, Compass, Building2
} from "lucide-react";
import logoImg from "../assets/logo-optimized.png";
import { WhatsappChatbot } from "../components/WhatsappChatbot";

export const Route = createFileRoute("/schools-network")({
  head: () => ({
    meta: [
      { title: "25+ Schools Network Architecture | EduSchool Saathi™ SaaS Bihar" },
      {
        name: "description",
        content: "Explore the EduSchool Saathi multi-tenant cloud architecture in Indian Flag Tricolor theme. Centralized Super Admin engine connecting 25+ partner schools across Bihar with 100% isolated databases and instant analytics.",
      },
      { name: "keywords", content: "EduSchool Saathi network, Bihar school ERP network, multi-tenant school architecture, Madhubani Darbhanga school SaaS, Abhishek Kumar EduSchool Saathi" },
      { property: "og:title", content: "25+ Schools Network Architecture | EduSchool Saathi™ SaaS" },
      { property: "og:description", content: "Super Admin central hub connecting 25+ schools across Bihar with 100% data isolation and real-time rollcall and fee analytics." },
      { property: "og:url", content: "https://eduschoolsaathi.org/schools-network" },
      { property: "og:image", content: "https://eduschoolsaathi.org/logo-optimized.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "25+ Schools Network Architecture | EduSchool Saathi™ SaaS" },
      { name: "twitter:description", content: "Centralized Super Admin engine connecting 25+ partner schools across Bihar with 100% isolated databases." },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://eduschoolsaathi.org/schools-network",
      },
    ],
  }),
  component: SchoolsNetworkPage,
});

interface SchoolNode {
  id: string;
  name: string;
  code: string;
  district: string;
  state: string;
  students: number;
  teachers: number;
  parents: number;
  collection: string;
  attendanceRate: string;
  status: "Live Active" | "Syncing" | "Enterprise Verified";
  roleAccess: string;
  plan: string;
  dbCluster: string;
  zone: "North Bihar" | "Central Bihar" | "South Bihar" | "East Bihar" | "West Bihar";
}

const networkSchools: SchoolNode[] = [
  // 1-3: The 3 Core Top Tree Nodes (Exact match to User Image)
  {
    id: "sch-1",
    name: "DPS Public School",
    code: "DPS-MBI-01",
    district: "Bara Bazar, Madhubani",
    state: "Bihar",
    students: 580,
    teachers: 28,
    parents: 540,
    collection: "₹4.8L /mo",
    attendanceRate: "96.4%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-north-pod-1 (Encrypted)",
    zone: "North Bihar",
  },
  {
    id: "sch-2",
    name: "ABC Public School",
    code: "ABC-DBG-02",
    district: "Laheriasarai, Darbhanga",
    state: "Bihar",
    students: 420,
    teachers: 19,
    parents: 395,
    collection: "₹3.6L /mo",
    attendanceRate: "95.1%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Starter School ERP",
    dbCluster: "bihar-north-pod-1 (Encrypted)",
    zone: "North Bihar",
  },
  {
    id: "sch-3",
    name: "XYZ International Academy",
    code: "XYZ-PTN-03",
    district: "Boring Road, Patna",
    state: "Bihar",
    students: 650,
    teachers: 34,
    parents: 610,
    collection: "₹7.2L /mo",
    attendanceRate: "97.8%",
    status: "Enterprise Verified",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Enterprise Multi-Branch",
    dbCluster: "bihar-central-pod-1 (Encrypted)",
    zone: "Central Bihar",
  },
  // 4-15: Additional Schools
  {
    id: "sch-4",
    name: "St. Xavier's Model School",
    code: "SXM-SMP-04",
    district: "Samastipur Central",
    state: "Bihar",
    students: 490,
    teachers: 22,
    parents: 460,
    collection: "₹4.1L /mo",
    attendanceRate: "94.2%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-central-pod-2 (Encrypted)",
    zone: "Central Bihar",
  },
  {
    id: "sch-5",
    name: "Mithila Vidya Mandir",
    code: "MVM-JHN-05",
    district: "Jhanjharpur, Madhubani",
    state: "Bihar",
    students: 380,
    teachers: 16,
    parents: 360,
    collection: "₹3.1L /mo",
    attendanceRate: "96.0%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Starter School ERP",
    dbCluster: "bihar-north-pod-1 (Encrypted)",
    zone: "North Bihar",
  },
  {
    id: "sch-6",
    name: "Darbhanga Public Academy",
    code: "DPA-DBG-06",
    district: "Donar Chowk, Darbhanga",
    state: "Bihar",
    students: 530,
    teachers: 25,
    parents: 505,
    collection: "₹4.5L /mo",
    attendanceRate: "95.5%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-north-pod-2 (Encrypted)",
    zone: "North Bihar",
  },
  {
    id: "sch-7",
    name: "Gyan Niketan Residential",
    code: "GNR-MFP-07",
    district: "Muzaffarpur Road",
    state: "Bihar",
    students: 720,
    teachers: 38,
    parents: 690,
    collection: "₹6.8L /mo",
    attendanceRate: "98.1%",
    status: "Enterprise Verified",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Enterprise Multi-Branch",
    dbCluster: "bihar-west-pod-1 (Encrypted)",
    zone: "West Bihar",
  },
  {
    id: "sch-8",
    name: "Modern English School",
    code: "MES-BGP-08",
    district: "Bhagalpur Town",
    state: "Bihar",
    students: 440,
    teachers: 20,
    parents: 420,
    collection: "₹3.9L /mo",
    attendanceRate: "93.9%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Starter School ERP",
    dbCluster: "bihar-east-pod-1 (Encrypted)",
    zone: "East Bihar",
  },
  {
    id: "sch-9",
    name: "Patliputra Central School",
    code: "PCS-KBR-09",
    district: "Kankarbagh, Patna",
    state: "Bihar",
    students: 810,
    teachers: 42,
    parents: 780,
    collection: "₹8.4L /mo",
    attendanceRate: "97.4%",
    status: "Enterprise Verified",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Enterprise Multi-Branch",
    dbCluster: "bihar-central-pod-1 (Encrypted)",
    zone: "Central Bihar",
  },
  {
    id: "sch-10",
    name: "Saraswati Shishu Mandir",
    code: "SSM-BKP-10",
    district: "Benipatti, Madhubani",
    state: "Bihar",
    students: 310,
    teachers: 14,
    parents: 295,
    collection: "₹2.5L /mo",
    attendanceRate: "96.7%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Starter School ERP",
    dbCluster: "bihar-north-pod-1 (Encrypted)",
    zone: "North Bihar",
  },
  {
    id: "sch-11",
    name: "Holy Cross Convent",
    code: "HCC-GAY-11",
    district: "Civil Lines, Gaya",
    state: "Bihar",
    students: 620,
    teachers: 31,
    parents: 590,
    collection: "₹5.9L /mo",
    attendanceRate: "95.8%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-south-pod-1 (Encrypted)",
    zone: "South Bihar",
  },
  {
    id: "sch-12",
    name: "Heritage Valley High School",
    code: "HVH-PUN-12",
    district: "Purnea City",
    state: "Bihar",
    students: 470,
    teachers: 24,
    parents: 450,
    collection: "₹4.3L /mo",
    attendanceRate: "94.6%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-east-pod-2 (Encrypted)",
    zone: "East Bihar",
  },
  {
    id: "sch-13",
    name: "Bright Scholars Academy",
    code: "BSA-BGS-13",
    district: "Begusarai Town",
    state: "Bihar",
    students: 510,
    teachers: 26,
    parents: 490,
    collection: "₹4.6L /mo",
    attendanceRate: "96.2%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-central-pod-3 (Encrypted)",
    zone: "Central Bihar",
  },
  {
    id: "sch-14",
    name: "Al-Hira Public Mission School",
    code: "AHM-MBI-14",
    district: "Station Road, Madhubani",
    state: "Bihar",
    students: 390,
    teachers: 18,
    parents: 375,
    collection: "₹3.3L /mo",
    attendanceRate: "95.0%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Starter School ERP",
    dbCluster: "bihar-north-pod-1 (Encrypted)",
    zone: "North Bihar",
  },
  {
    id: "sch-15",
    name: "Chanakya Gurukul Academy",
    code: "CGA-NAL-15",
    district: "Rajgir, Nalanda",
    state: "Bihar",
    students: 560,
    teachers: 29,
    parents: 535,
    collection: "₹5.1L /mo",
    attendanceRate: "97.1%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-south-pod-2 (Encrypted)",
    zone: "South Bihar",
  },
  // 16-25: 10 Brand New Schools Expanding to 25 Total
  {
    id: "sch-16",
    name: "Aryabhatta International School",
    code: "AIS-BXB-16",
    district: "Bara Bazar, Madhubani",
    state: "Bihar",
    students: 460,
    teachers: 21,
    parents: 440,
    collection: "₹4.0L /mo",
    attendanceRate: "96.5%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Starter School ERP",
    dbCluster: "bihar-north-pod-3 (Encrypted)",
    zone: "North Bihar",
  },
  {
    id: "sch-17",
    name: "Maa Sharda Model Academy",
    code: "MSM-SAH-17",
    district: "Saharsa Main",
    state: "Bihar",
    students: 520,
    teachers: 27,
    parents: 495,
    collection: "₹4.7L /mo",
    attendanceRate: "95.8%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-east-pod-3 (Encrypted)",
    zone: "East Bihar",
  },
  {
    id: "sch-18",
    name: "Kosi Progressive High School",
    code: "KPH-SUP-18",
    district: "Supaul Town",
    state: "Bihar",
    students: 370,
    teachers: 17,
    parents: 350,
    collection: "₹3.2L /mo",
    attendanceRate: "94.7%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Starter School ERP",
    dbCluster: "bihar-north-pod-2 (Encrypted)",
    zone: "North Bihar",
  },
  {
    id: "sch-19",
    name: "Vaishali Global Gurukul",
    code: "VGG-HJP-19",
    district: "Hajipur, Vaishali",
    state: "Bihar",
    students: 680,
    teachers: 35,
    parents: 650,
    collection: "₹6.4L /mo",
    attendanceRate: "97.3%",
    status: "Enterprise Verified",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Enterprise Multi-Branch",
    dbCluster: "bihar-central-pod-2 (Encrypted)",
    zone: "Central Bihar",
  },
  {
    id: "sch-20",
    name: "Greenfield Public School",
    code: "GPS-ARA-20",
    district: "Arrah, Bhojpur",
    state: "Bihar",
    students: 430,
    teachers: 21,
    parents: 410,
    collection: "₹3.8L /mo",
    attendanceRate: "95.2%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Starter School ERP",
    dbCluster: "bihar-west-pod-2 (Encrypted)",
    zone: "West Bihar",
  },
  {
    id: "sch-21",
    name: "Buddha Valley Public School",
    code: "BVP-BDG-21",
    district: "Bodh Gaya",
    state: "Bihar",
    students: 590,
    teachers: 30,
    parents: 565,
    collection: "₹5.5L /mo",
    attendanceRate: "96.9%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-south-pod-1 (Encrypted)",
    zone: "South Bihar",
  },
  {
    id: "sch-22",
    name: "Champaran Heritage Academy",
    code: "CHA-MOT-22",
    district: "Motihari, East Champaran",
    state: "Bihar",
    students: 610,
    teachers: 32,
    parents: 580,
    collection: "₹5.8L /mo",
    attendanceRate: "96.1%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-west-pod-1 (Encrypted)",
    zone: "West Bihar",
  },
  {
    id: "sch-23",
    name: "Vidyapati Memorial Mission",
    code: "VMM-MBI-23",
    district: "Madhubani District HQ",
    state: "Bihar",
    students: 480,
    teachers: 23,
    parents: 455,
    collection: "₹4.2L /mo",
    attendanceRate: "95.6%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-north-pod-1 (Encrypted)",
    zone: "North Bihar",
  },
  {
    id: "sch-24",
    name: "Katihar Central Academy",
    code: "KCA-KTR-24",
    district: "Mirchaibari, Katihar",
    state: "Bihar",
    students: 540,
    teachers: 28,
    parents: 515,
    collection: "₹4.9L /mo",
    attendanceRate: "96.3%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Standard Pro Cloud",
    dbCluster: "bihar-east-pod-1 (Encrypted)",
    zone: "East Bihar",
  },
  {
    id: "sch-25",
    name: "Sitamarhi Model Senior School",
    code: "SMS-STM-25",
    district: "Dumra, Sitamarhi",
    state: "Bihar",
    students: 410,
    teachers: 19,
    parents: 390,
    collection: "₹3.5L /mo",
    attendanceRate: "94.8%",
    status: "Live Active",
    roleAccess: "TEACHERS • STUDENTS • PARENTS",
    plan: "Starter School ERP",
    dbCluster: "bihar-north-pod-3 (Encrypted)",
    zone: "North Bihar",
  },
];

function SchoolsNetworkPage() {
  const [selectedSchool, setSelectedSchool] = useState<SchoolNode | null>(networkSchools[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterZone, setFilterZone] = useState("All");

  const totalStudents = networkSchools.reduce((acc, s) => acc + s.students, 0);
  const totalTeachers = networkSchools.reduce((acc, s) => acc + s.teachers, 0);
  const totalParents = networkSchools.reduce((acc, s) => acc + s.parents, 0);

  const filteredSchools = networkSchools.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesZone = filterZone === "All" || s.zone === filterZone;
    return matchesSearch && matchesZone;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-[#FF671F] selection:text-white font-sans">
      {/* 🇮🇳 INDIAN FLAG TRICOLOR AMBIENT LIGHTING BACKGROUND */}
      {/* Saffron Top Glow */}
      <div className="fixed top-0 left-0 right-0 h-96 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,103,31,0.22),rgba(255,255,255,0))]" />
      {/* Ashoka Blue Center Accent */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] pointer-events-none rounded-full bg-[radial-gradient(circle,rgba(30,64,175,0.18),rgba(255,255,255,0))]" />
      {/* India Green Bottom Ambient Glow */}
      <div className="fixed bottom-0 left-0 right-0 h-96 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(4,120,87,0.25),rgba(255,255,255,0))]" />

      {/* Grid line overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 border-b border-[#FF671F]/25 bg-slate-950/85 backdrop-blur-2xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <a href="/" className="inline-flex items-center gap-2.5 group">
            <div className="size-10 rounded-xl bg-white p-0.5 shadow-md overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform border border-[#FF671F]/40">
              <img src={logoImg} alt="EduSchool Logo" className="size-full object-contain" />
            </div>
            <div>
              <span className="font-display font-black text-sm sm:text-base tracking-tight inline-flex items-center">
                <span className="text-[#38BDF8]">Edu</span>
                <span className="text-[#FB923C]">School</span>
                <span className="text-white/40">-</span>
                <span className="text-[#4ADE80]">Saathi</span>
              </span>
              <span className="block text-[8px] sm:text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#FF671F]">
                -: HAR SCHOOL KA SAATHI :-
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-bold text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              <ArrowLeft className="size-3.5 text-[#FF671F]" /> Back to Main Website
            </a>
            <a
              href="tel:6200087830"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FF671F]/20 via-blue-900/30 to-[#047857]/20 border border-[#FF671F]/40 px-3.5 py-1.5 text-xs font-bold text-amber-300 hover:brightness-125 transition-all"
            >
              <Phone className="size-3.5 text-emerald-400" /> +91 62000 87830
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 sm:px-6 py-10 relative z-10">
        {/* ============================================================ */}
        {/* HERO SECTION WITH TRICOLOR GLOW (Saffron • White • Green) */}
        {/* ============================================================ */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF671F]/40 bg-gradient-to-r from-[#FF671F]/20 via-blue-950/40 to-[#047857]/25 px-4 py-1.5 text-xs font-black backdrop-blur-md shadow-lg">
            <span className="size-2 rounded-full bg-[#FF671F] animate-ping" />
            <span className="text-[#FB923C] font-extrabold">25+ SCHOOLS CONNECTED</span>
            <span className="text-white/40">•</span>
            <span className="text-sky-300">1 CENTRAL SUPER ADMIN</span>
            <span className="text-white/40">•</span>
            <span className="text-[#4ADE80] font-extrabold">100% ISOLATED PODS</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            <span className="text-white">One Common School Engine.</span>
            <span className="mt-2 block font-black">
              <span className="text-[#38BDF8]">25+ Partner Schools</span>{" "}
              <span className="text-[#FB923C]">Unified Under</span>{" "}
              <span className="text-[#4ADE80]">EduSchool-Saathi</span>
            </span>
          </h1>

          {/* Saffron-Green Tricolor Underline accent bar */}
          <div className="mx-auto w-48 h-1 rounded-full bg-gradient-to-r from-[#FF671F] via-white to-[#047857] shadow-[0_0_15px_rgba(255,103,31,0.6)]" />

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            EduSchool-Saathi empowers multiple independent schools across Bihar and India with private student databases, zero data leakage, and lightning-fast local operations.
          </p>

          {/* Live KPI Metric Strip with Tricolor Accents */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            {/* Metric 1 - Saffron Accent */}
            <div className="rounded-2xl border border-[#FF671F]/35 bg-gradient-to-br from-[#FF671F]/10 via-slate-900 to-slate-950 p-4 shadow-md backdrop-blur-md group hover:border-[#FF671F] transition-all">
              <span className="text-[10px] uppercase font-black text-[#FB923C] tracking-wider block">Connected Schools</span>
              <b className="text-2xl font-black text-white mt-1 block flex items-center gap-1.5">
                <School className="size-5 text-[#FB923C]" /> 25 Campuses
              </b>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Across Bihar Districts</span>
            </div>

            {/* Metric 2 - Ashoka Blue Accent */}
            <div className="rounded-2xl border border-blue-500/35 bg-gradient-to-br from-blue-950/30 via-slate-900 to-slate-950 p-4 shadow-md backdrop-blur-md group hover:border-blue-400 transition-all">
              <span className="text-[10px] uppercase font-black text-sky-300 tracking-wider block">Total Students Active</span>
              <b className="text-2xl font-black text-white mt-1 block flex items-center gap-1.5">
                <GraduationCap className="size-5 text-sky-400" /> {totalStudents.toLocaleString()}+
              </b>
              <span className="text-[10px] text-slate-400 mt-0.5 block">10-Second Attendance Daily</span>
            </div>

            {/* Metric 3 - India Green Accent */}
            <div className="rounded-2xl border border-[#047857]/35 bg-gradient-to-br from-[#047857]/15 via-slate-900 to-slate-950 p-4 shadow-md backdrop-blur-md group hover:border-emerald-400 transition-all">
              <span className="text-[10px] uppercase font-black text-[#4ADE80] tracking-wider block">Teaching Staff</span>
              <b className="text-2xl font-black text-white mt-1 block flex items-center gap-1.5">
                <Users className="size-5 text-emerald-400" /> {totalTeachers}+ Teachers
              </b>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Role-Based Portals</span>
            </div>

            {/* Metric 4 - Multi-Tenant Security */}
            <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-4 shadow-md backdrop-blur-md group hover:border-amber-400 transition-all">
              <span className="text-[10px] uppercase font-black text-amber-300 tracking-wider block">Multi-Tenant Engine</span>
              <b className="text-2xl font-black text-emerald-400 mt-1 block flex items-center gap-1.5">
                <ShieldCheck className="size-5 text-emerald-400" /> 100% Isolated
              </b>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Zero Cross-School Leakage</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* HIERARCHICAL TREE ARCHITECTURE (Matching User Image Format) */}
        {/* ============================================================ */}
        <section className="mt-14 pt-8 border-t border-white/15">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FF671F]">
              Visual SaaS Hierarchy & Multi-Tenant Data Flow
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1.5">
              Interactive Tree Architecture Format
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
              Tap any connected School Card below to simulate instant tenant switching and inspect live isolated database pods.
            </p>
          </div>

          {/* Master Tree Framework Container */}
          <div className="relative max-w-6xl mx-auto rounded-3xl border border-[#FF671F]/25 bg-slate-900/50 p-6 sm:p-12 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-[#FF671F]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-[#047857]/20 blur-3xl" />

            {/* LEVEL 1: TOP SUPER ADMIN ENGINE (Matching User Image Royal Blue Card) */}
            <div className="flex flex-col items-center relative z-10">
              <div className="relative group cursor-pointer transition-all duration-300 hover:scale-105">
                {/* Glowing border ring */}
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#FF671F] via-[#1E40AF] to-[#047857] opacity-80 blur-md group-hover:opacity-100 transition-opacity" />

                {/* Main Blue Card (Exact match to image) */}
                <div className="relative w-80 sm:w-[420px] rounded-2xl bg-[#0066FF] text-white p-6 text-center shadow-2xl border-2 border-white/30">
                  {/* Layer Stack Icon inside rounded square */}
                  <div className="mx-auto size-12 rounded-xl bg-white/20 backdrop-blur-sm grid place-items-center mb-2.5 shadow-inner">
                    <Layers className="size-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-black tracking-tight text-white">
                    EduSchool-Saathi
                  </h3>
                  <span className="mt-0.5 block text-sm font-bold text-blue-100">
                    Super Admin • Central SaaS Operating Engine
                  </span>
                  <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-slate-950/40 border border-white/20 px-3.5 py-1 text-[11px] font-extrabold text-amber-200 uppercase tracking-wider">
                    <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                    Routing 25+ Independent Schools
                  </div>
                </div>
              </div>

              {/* VERTICAL STEM FROM SUPER ADMIN */}
              <div className="w-1 h-12 bg-gradient-to-b from-[#0066FF] via-white to-slate-400 relative">
                {/* Animated Data Pulse traversing the stem */}
                <div className="absolute size-3 bg-[#FF671F] rounded-full -left-[4px] animate-bounce shadow-[0_0_10px_#FF671F]" />
              </div>

              {/* HORIZONTAL DISTRIBUTION BAR (Tree Branch across Schools) */}
              <div className="w-[85%] sm:w-[94%] h-1 bg-gradient-to-r from-[#FF671F] via-white to-[#047857] relative shadow-md">
                {/* Decorative node ticks */}
                <div className="absolute -left-1.5 -top-1.5 size-4 rounded-full bg-[#FF671F] ring-2 ring-white" />
                <div className="absolute -right-1.5 -top-1.5 size-4 rounded-full bg-[#047857] ring-2 ring-white" />
                <div className="absolute left-1/2 -top-1.5 size-4 rounded-full bg-[#1E40AF] -translate-x-1/2 ring-2 ring-white" />
              </div>
            </div>

            {/* LEVEL 2: 3 CORE PROMINENT CARDS (Exact Match to DPS, ABC, XYZ from User Image) */}
            <div className="relative z-10 mt-0 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {networkSchools.slice(0, 3).map((school, index) => {
                  const isSelected = selectedSchool?.id === school.id;
                  const borderGlow =
                    index === 0
                      ? "hover:border-[#FF671F] focus:border-[#FF671F]"
                      : index === 1
                      ? "hover:border-sky-400 focus:border-sky-400"
                      : "hover:border-[#047857] focus:border-[#047857]";

                  return (
                    <div key={school.id} className="flex flex-col items-center">
                      {/* Vertical line drop from the horizontal branch */}
                      <div className="w-1 h-8 bg-slate-500 mb-0 hidden md:block" />

                      {/* White/Glass Card matching the user's uploaded image style */}
                      <div
                        onClick={() => setSelectedSchool(school)}
                        className={`w-full rounded-2xl p-6 transition-all duration-300 cursor-pointer text-center relative ${
                          isSelected
                            ? "bg-slate-900 border-2 border-[#FF671F] shadow-[0_0_40px_rgba(255,103,31,0.35)] scale-[1.03] ring-4 ring-[#FF671F]/20"
                            : `bg-slate-900/90 hover:bg-slate-900 border border-slate-700/80 shadow-xl ${borderGlow}`
                        }`}
                      >
                        {/* School Icon inside soft blue square container (Exact match to image) */}
                        <div className="mx-auto size-12 rounded-xl bg-sky-500/20 border border-sky-400/30 grid place-items-center mb-3 text-sky-400 shadow-sm">
                          <School className="size-6" />
                        </div>

                        <h4 className="font-display text-lg font-black text-white tracking-tight">
                          {school.name}
                        </h4>
                        <span className="block text-xs font-semibold text-slate-400 mt-0.5">
                          School Admin
                        </span>

                        {/* Metrics Bar: Students & Teachers (Exact match to image format) */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/70 p-3.5 grid grid-cols-2 gap-2 text-center">
                          <div>
                            <b className="text-lg font-black text-white block">{school.students}</b>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Students</span>
                          </div>
                          <div className="border-l border-white/10">
                            <b className="text-lg font-black text-white block">{school.teachers}</b>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Teachers</span>
                          </div>
                        </div>

                        {/* Role Tags: TEACHERS • STUDENTS • PARENTS (Exact match to image footer) */}
                        <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                          TEACHERS • STUDENTS • PARENTS
                        </div>

                        {isSelected && (
                          <div className="mt-3 inline-flex items-center gap-1 text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                            <CheckCircle2 className="size-3 text-emerald-400" /> Active Inspecting Pod
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* LEVEL 3: COMPLETE 25-SCHOOL NETWORK CLUSTER */}
            <div className="mt-14 pt-10 border-t border-white/15 relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-[#047857] ring-2 ring-emerald-400 animate-pulse" />
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      Full SaaS Grid: 25 Connected Schools Across Bihar
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Click any school card to inspect isolated databases, fee collections, and live portals:
                  </p>
                </div>

                {/* Search & Zone Filter Bar */}
                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search 25 schools by name or town..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-9 pl-9 pr-3 rounded-full border border-white/15 bg-white/5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-[#FF671F]"
                    />
                  </div>

                  <select
                    value={filterZone}
                    onChange={(e) => setFilterZone(e.target.value)}
                    className="h-9 px-3 rounded-full border border-white/15 bg-slate-900 text-xs text-white outline-none cursor-pointer focus:border-[#047857]"
                  >
                    <option value="All">All Bihar Zones ({networkSchools.length})</option>
                    <option value="North Bihar">North Bihar (Madhubani, Darbhanga, Supaul)</option>
                    <option value="Central Bihar">Central Bihar (Patna, Samastipur, Begusarai)</option>
                    <option value="South Bihar">South Bihar (Gaya, Nalanda)</option>
                    <option value="East Bihar">East Bihar (Bhagalpur, Purnea, Katihar)</option>
                    <option value="West Bihar">West Bihar (Muzaffarpur, Motihari, Arrah)</option>
                  </select>
                </div>
              </div>

              {/* Grid of All 25 Schools with Saffron-Green Tricolor Accents */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSchools.map((s, idx) => {
                  const isSelected = selectedSchool?.id === s.id;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setSelectedSchool(s)}
                      className={`group relative rounded-2xl border p-5 transition-all duration-300 cursor-pointer overflow-hidden ${
                        isSelected
                          ? "border-[#FF671F] bg-slate-900 ring-2 ring-[#FF671F]/30 shadow-[0_0_25px_rgba(255,103,31,0.25)] -translate-y-1"
                          : "border-white/10 bg-slate-900/60 hover:bg-slate-900 hover:border-[#047857]/60 shadow-md"
                      }`}
                    >
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="size-10 rounded-xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border border-blue-400/30 text-blue-300 grid place-items-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                            <School className="size-5" />
                          </span>
                          <div>
                            <b className="text-sm font-black text-white block group-hover:text-amber-300 transition-colors">
                              {s.name}
                            </b>
                            <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <MapPin className="size-3 text-[#FF671F]" /> {s.district}
                            </span>
                          </div>
                        </div>

                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10 shrink-0">
                          {s.code}
                        </span>
                      </div>

                      {/* Numerical Stats (Matching User Image Format) */}
                      <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/80 p-2.5 grid grid-cols-3 gap-1 text-center">
                        <div>
                          <b className="text-sm font-black text-white">{s.students}</b>
                          <span className="text-[9px] uppercase font-bold text-slate-400 block">Students</span>
                        </div>
                        <div className="border-x border-white/10">
                          <b className="text-sm font-black text-white">{s.teachers}</b>
                          <span className="text-[9px] uppercase font-bold text-slate-400 block">Teachers</span>
                        </div>
                        <div>
                          <b className="text-sm font-black text-emerald-400">{s.attendanceRate}</b>
                          <span className="text-[9px] uppercase font-bold text-slate-400 block">Daily</span>
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px]">
                        <span className="text-slate-400 font-bold uppercase tracking-wider">
                          TEACHERS • STUDENTS • PARENTS
                        </span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Isolated Pod
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* DETAIL INSPECTION PANEL FOR THE SELECTED SCHOOL */}
        {/* ============================================================ */}
        {selectedSchool && (
          <section className="mt-12 rounded-3xl border border-[#FF671F]/40 bg-gradient-to-r from-[#FF671F]/10 via-slate-900 to-[#047857]/15 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-300">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Tenant Pod Inspected: {selectedSchool.zone}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                  {selectedSchool.name}{" "}
                  <span className="text-slate-400 text-base sm:text-lg font-normal">({selectedSchool.code})</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1"><MapPin className="size-3.5 text-[#FF671F]" /> {selectedSchool.district}, {selectedSchool.state}</span>
                  <span>•</span>
                  <span>Database: <b className="text-sky-300 font-mono text-xs">{selectedSchool.dbCluster}</b></span>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/#home"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF671F] to-orange-600 px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg hover:scale-105 transition-all"
                >
                  <School className="size-4" /> Connect My School to Network
                </a>
                <a
                  href="https://wa.me/916200087830?text=Hi%20EduSchool-Saathi!%20I%20want%20to%20connect%20my%20school%20to%20the%2025%20Schools%20Network."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/50 px-4 py-3 text-xs font-bold text-emerald-300 hover:bg-emerald-900/60 hover:text-white transition-all"
                >
                  <Phone className="size-4" /> Founder WhatsApp Enquiry
                </a>
              </div>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Subscription Tier</span>
                <b className="text-sm font-bold text-amber-300 mt-1 block">{selectedSchool.plan}</b>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Estimated Collection</span>
                <b className="text-sm font-bold text-emerald-400 mt-1 block">{selectedSchool.collection}</b>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Daily Attendance Rate</span>
                <b className="text-sm font-bold text-sky-400 mt-1 block">{selectedSchool.attendanceRate}</b>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Parent App Users</span>
                <b className="text-sm font-bold text-white mt-1 block">{selectedSchool.parents} Active</b>
              </div>
            </div>
          </section>
        )}

        {/* Multi-Tenant Security & Infrastructure Highlights */}
        <section className="mt-14 mb-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Saffron Highlight */}
          <div className="rounded-2xl border border-[#FF671F]/30 bg-slate-900/40 p-6 backdrop-blur-md hover:border-[#FF671F]/60 transition-colors">
            <div className="size-10 rounded-xl bg-[#FF671F]/20 grid place-items-center text-[#FF671F] mb-3">
              <Lock className="size-5" />
            </div>
            <h4 className="font-display text-base font-bold text-white">100% Data Isolation</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Every school operates in its own isolated schema. School A can never view, export, or access student fees or marks of School B.
            </p>
          </div>

          {/* Card 2: Ashoka Blue Highlight */}
          <div className="rounded-2xl border border-blue-500/30 bg-slate-900/40 p-6 backdrop-blur-md hover:border-blue-400/60 transition-colors">
            <div className="size-10 rounded-xl bg-blue-500/20 grid place-items-center text-blue-400 mb-3">
              <Server className="size-5" />
            </div>
            <h4 className="font-display text-base font-bold text-white">Cloud Multi-Branch Engine</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Principals running 2 or more branches can switch between branches in 1 click without separate software logins.
            </p>
          </div>

          {/* Card 3: India Green Highlight */}
          <div className="rounded-2xl border border-[#047857]/30 bg-slate-900/40 p-6 backdrop-blur-md hover:border-emerald-400/60 transition-colors">
            <div className="size-10 rounded-xl bg-emerald-500/20 grid place-items-center text-emerald-400 mb-3">
              <Activity className="size-5" />
            </div>
            <h4 className="font-display text-base font-bold text-white">Instant 1-Second Sync</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Attendance and WhatsApp fee receipts taken on 2G/3G in rural Bihar sync in real-time to the central cloud cluster.
            </p>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Support */}
      <WhatsappChatbot />
    </div>
  );
}
