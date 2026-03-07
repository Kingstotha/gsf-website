function LogoMark({ compact = false, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/gsf-logo.svg.png"
        alt="Good Seed Fellowship logo"
        className={`${compact ? 'h-9 w-9' : 'h-12 w-12'} rounded-full bg-white`}
      />
      <div className="leading-tight">
        <p className={`text-sm font-semibold ${light ? 'text-white' : 'text-slate-900'}`}>
          Good Seed Fellowship
        </p>
        <p className={`text-xs ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          Community through fellowship
        </p>
      </div>
    </div>
  );
}

export default LogoMark;
