function FAQItem({ item, isOpen, onToggle, id }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-900"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
        >
          {item.question}
          <span
            className={`text-brand-green transition-transform duration-300 ${
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
        className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-6 text-slate-700">{item.answer}</p>
        </div>
      </div>
    </article>
  );
}

export default FAQItem;
