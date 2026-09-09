// One button style: ink outline, square corners, fills with ink on hover.
function Button({ href, children, external = false, className = '', onClick, type = 'button' }) {
  const classes = `inline-flex items-center justify-center whitespace-nowrap border border-ink px-4 py-2 text-nav font-medium text-ink no-underline hover:bg-ink hover:text-paper ${className}`;

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
