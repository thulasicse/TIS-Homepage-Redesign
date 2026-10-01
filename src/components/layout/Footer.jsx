import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#12372A] text-white dark:border-white/10">
      <div className="container-main py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl font-semibold">
              Tulas International School
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              A learning environment where academic foundations,
              curiosity, confidence and character grow together.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Explore
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/80">
              <a href="#about" className="block hover:text-white">
                About
              </a>

              <a href="#academics" className="block hover:text-white">
                Academics
              </a>

              <a href="#campus" className="block hover:text-white">
                Campus
              </a>

              <a href="#admissions" className="block hover:text-white">
                Admissions
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/80">
              <div className="flex gap-3">
                <MapPin size={18} />
                <span>Andhra Pradesh, India</span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <span>Contact Admissions</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>Admissions Office</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Tulas International School.
            All rights reserved.
          </p>

          <a
            href="#top"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;