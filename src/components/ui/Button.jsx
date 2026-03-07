const variants = {
  primary:
    'bg-brand-green text-white hover:bg-brand-greenDark focus-visible:ring-brand-green/60',
  secondary:
    'border border-brand-green text-brand-green hover:bg-brand-greenSoft focus-visible:ring-brand-green/40'
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
