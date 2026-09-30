const variants = {
  primary:
    'bg-brand-green text-white shadow-lg shadow-brand-green/20 hover:-translate-y-0.5 hover:bg-brand-greenDark hover:shadow-xl hover:shadow-brand-green/25 focus-visible:ring-brand-green/60',
  secondary:
    'border border-brand-green/40 bg-white text-brand-green shadow-sm hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-greenSoft hover:shadow-md focus-visible:ring-brand-green/40',
  light:
    'bg-white text-brand-green shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:bg-brand-greenSoft hover:shadow-xl focus-visible:ring-white/70'
};

function Button({ href, children, variant = 'primary', className = '', type = 'button' }) {
  const baseClass =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  if (href) {
    return (
      <a href={href} className={`${baseClass} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={`${baseClass} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
