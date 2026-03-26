// Example of the Stat Card Component used in the Dashboard
const StatCard = ({ label, value, description, iconColor, statusIcon }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start transition-hover hover:shadow-md">
    <div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <h2 className="text-2xl font-black text-slate-900 leading-tight">{value}</h2>
      <p className="text-[10px] text-slate-400 mt-4 font-medium">{description}</p>
    </div>
    <div className={`p-3 rounded-xl ${iconColor}`}>
      {statusIcon}
    </div>
  </div>
);

// Example of the Sticky Top Navigation
const TopNav = ({ user }) => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b px-8 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="bg-red-500 w-8 h-8 rounded-lg flex items-center justify-center text-white">🩸</div>
      <h1 className="font-bold text-lg">Blood Donation</h1>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
      <a href="/dashboard" className="hover:text-red-500 transition-colors">Dashboard</a>
      <a href="/schedule" className="hover:text-red-500 transition-colors">Schedule Donation</a>
      <a href="/history" className="hover:text-red-500 transition-colors">Donation History</a>
    </div>
    <div className="flex items-center gap-6">
      <div className="relative cursor-pointer text-slate-400 hover:text-slate-600">🔔</div>
      <button className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-red-500 transition-colors">
        Logout <span>→</span>
      </button>
    </div>
  </nav>
);