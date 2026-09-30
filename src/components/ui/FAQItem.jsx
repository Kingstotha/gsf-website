function FAQItem({ item, isOpen, onToggle, id }) {
  return (
    <article className={`overflow-hidden rounded-2xl border bg-white transition-colors ${isOpen ? 'border-brand-green/30' : 'border-slate-200'}`}>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold leading-6 text-slate-950 transition hover:bg-slate-50 focus-visible:outline-offset-[-4px] sm:text-base"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
        >
          {item.question}
          <span
            className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-greenSoft text-brand-green transition duration-300 ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={`faq-answer-${id}`}
        aria-hidden={!isOpen}
        className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-7 text-slate-600">{item.answer}</p>
        </div>
      </div>
    </article>
  );
}

export default FAQItem;
