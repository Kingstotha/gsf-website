// Two button styles: a filled green one for the main action, and an ink outline.
const variants = {
  primary: 'bg-green text-paper hover:bg-deepgreen',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-paper'
};

function Button({ href, children, variant = 'primary', external = false, className = '', onClick, type = 'button' }) {
  const classes = `inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-nav font-medium no-underline transition-colors duration-150 ${
    variants[variant] || variants.primary
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
