export default function Footer() {
  return (
    <footer className="border-t border-warm-gray-light/20 bg-oat">
      <div className="section-padding py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-display text-lg tracking-ultra font-medium text-charcoal">
            ENTONO
          </span>
          <p className="mt-2 text-sm text-warm-gray max-w-xs leading-relaxed">
            Autumn wear, redefined. Crafted for the season that defines all others.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-8">
            <a href="#collections" className="text-[13px] tracking-widest text-warm-gray-dark hover:text-charcoal transition-colors uppercase">
              Collections
            </a>
            <a href="#lookbook" className="text-[13px] tracking-widest text-warm-gray-dark hover:text-charcoal transition-colors uppercase">
              Lookbook
            </a>
            <a href="#about" className="text-[13px] tracking-widest text-warm-gray-dark hover:text-charcoal transition-colors uppercase">
              About
            </a>
            <a href="#contact" className="text-[13px] tracking-widest text-warm-gray-dark hover:text-charcoal transition-colors uppercase">
              Contact
            </a>
          </div>
          <p className="text-xs text-warm-gray-light tracking-wide">
            &copy; {new Date().getFullYear()} Entono. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
