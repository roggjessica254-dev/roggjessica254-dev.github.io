import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Startseite" },
  {
    label: "Training",
    submenu: [
      { href: "/kinder-taekwondo", label: "Kinder (6–14 Jahre)" },
      { href: "/jugendliche", label: "Jugendliche (ab 15 Jahren)" },
      { href: "/erwachsene", label: "Erwachsene (ab 18 Jahren)" },
    ],
  },
  {
    label: "Standorte",
    submenu: [
      { href: "/taekwondo-heimenkirch", label: "Heimenkirch" },
      { href: "/taekwondo-kisslegg", label: "Kißlegg" },
    ],
  },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/aktuelles", label: "Aktuelles" },
  {
    label: "Infos",
    submenu: [
      { href: "/mitgliedsbeitraege", label: "Mitgliedsbeiträge" },
      { href: "/downloads", label: "Downloads & Ferienzeiten" },
      { href: "/lernvideos", label: "Lernvideos" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tkd-navy/95 backdrop-blur-md border-b border-white/5">
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src={IMAGES.tigerLogo}
            alt="Jessi's Taekwondoschule Logo"
            className="h-11 lg:h-14 w-auto invert"
          />
          <div className="hidden sm:block">
            <span className="text-sm lg:text-base font-heading font-bold text-white leading-tight block">
              Jessi's
            </span>
            <span className="text-xs lg:text-sm font-heading font-semibold text-tkd-cyan leading-tight block">
              Taekwondoschule
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isSubmenu = "submenu" in link;
            return (
              <div key={isSubmenu ? link.label : link.href} className="relative group">
                {isSubmenu ? (
                  <>
                    <button className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-white/80 hover:text-tkd-cyan hover:bg-white/5 flex items-center gap-1">
                      {link.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <div className="absolute left-0 mt-0 w-52 bg-tkd-navy border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {"submenu" in link && link.submenu && link.submenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2.5 text-sm font-medium first:rounded-t-md last:rounded-b-md transition-colors ${
                            location === item.href
                              ? "text-tkd-cyan bg-white/5"
                              : "text-white/70 hover:text-tkd-cyan hover:bg-white/5"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location === link.href
                        ? "text-tkd-cyan bg-white/5"
                        : "text-white/80 hover:text-tkd-cyan hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+491629277072"
            className="hidden md:flex items-center gap-2 text-sm text-tkd-cyan hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>0162 9277072</span>
          </a>
          <Link
            href="/probetraining"
            className="hidden sm:inline-flex px-4 py-2 bg-[#FF6B6B] text-white text-sm font-heading font-semibold rounded-md hover:bg-[#e85555] transition-colors"
          >
            Probetraining
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-white hover:text-tkd-cyan transition-colors"
            aria-label="Navigation öffnen"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-tkd-navy border-t border-white/5 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isSubmenu = "submenu" in link;
                return (
                  <div key={isSubmenu ? link.label : link.href}>
                    {isSubmenu ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === link.label ? null : link.label)
                          }
                          className="w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors text-white/80 hover:text-tkd-cyan hover:bg-white/5 flex items-center justify-between"
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              {"submenu" in link && link.submenu && link.submenu.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                  className={`block px-8 py-2.5 text-sm font-medium transition-colors ${
                                    location === item.href
                                      ? "text-tkd-cyan bg-white/5"
                                      : "text-white/70 hover:text-tkd-cyan hover:bg-white/5"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                          location === link.href
                            ? "text-tkd-cyan bg-white/5"
                            : "text-white/80 hover:text-tkd-cyan hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
              <Link
                href="/probetraining"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 bg-[#FF6B6B] text-white text-center font-heading font-semibold rounded-md"
              >
                Kostenloses Probetraining sichern
              </Link>
              <a
                href="tel:+491629277072"
                className="flex items-center justify-center gap-2 px-4 py-3 text-tkd-cyan"
              >
                <Phone className="w-4 h-4" />
                <span>0162 9277072</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
