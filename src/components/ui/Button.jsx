const variants = {
  primary:
    'border border-transparent bg-brand-green text-white shadow-md shadow-brand-green/15 hover:-translate-y-0.5 hover:bg-brand-greenDark hover:shadow-lg hover:shadow-brand-green/20 focus-visible:ring-brand-green/60',
  secondary:
    'border border-brand-green/40 bg-white text-brand-green shadow-sm hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-greenSoft hover:shadow-md focus-visible:ring-brand-green/40',
  light:
    'border border-transparent bg-white text-brand-green shadow-md shadow-black/10 hover:-translate-y-0.5 hover:bg-brand-greenSoft hover:shadow-lg focus-visible:ring-white/70'
};

function Button({ href, children, variant = 'primary', className = '', type = 'button', ...props }) {
  const baseClass =
    'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold leading-5 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transform-none disabled:cursor-not-allowed disabled:opacity-50';

  if (href) {
    return (
      <a href={href} className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
