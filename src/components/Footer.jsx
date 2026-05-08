const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h1 className="text-3xl font-bold text-blue-400">DigitalCorp</h1>

            <p className="mt-5 text-slate-300 leading-relaxed">
              Modern digital solutions untuk membantu bisnis berkembang lebih
              cepat dengan website dan teknologi terbaik.
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-5">Navigation</h1>

            <ul className="space-y-3 text-slate-300">
              <li className="hover:text-blue-400 transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-blue-400 transition cursor-pointer">
                About
              </li>

              <li className="hover:text-blue-400 transition cursor-pointer">
                Contact
              </li>

              <li className="hover:text-blue-400 transition cursor-pointer">
                Todo
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-5">Contact</h1>

            <div className="space-y-3 text-slate-300">
              <p>📍 Jakarta, Indonesia</p>

              <p>✉ digitalcorp@gmail.com</p>

              <p>☎ +62 812 3456 7890</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-400">
          © 2026 DigitalCorp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
