function LogoMark({ compact = false, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full ${
          light ? 'bg-white/10 ring-white/20' : 'bg-white ring-brand-green/15'
        } p-1 shadow-sm ring-1`}
      >
        <img
          src="/gsf-logo.svg.png"
          alt="Good Seed Fellowship logo"
          className={`${compact ? 'h-9 w-9' : 'h-12 w-12'} rounded-full bg-white object-contain`}
        />
      </span>
      <div className="min-w-0 leading-tight">
        <p className={`truncate text-sm font-semibold ${light ? 'text-white' : 'text-slate-950'}`}>
          Good Seed Fellowship
        </p>
        <p className={`truncate text-xs ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          Community through fellowship
        </p>
      </div>
    </div>
  );
}

export default LogoMark;
