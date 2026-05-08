const AboutView = () => {
  return (
    <section className="py-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="team"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>
          <p className="text-blue-500 font-semibold">ABOUT COMPANY</p>

          <h1 className="text-5xl font-bold text-slate-800 mt-4 leading-tight">
            We Create Digital Products That Help Your Business Grow
          </h1>

          <p className="mt-8 text-slate-600 text-lg leading-relaxed">
            DigitalCorp adalah perusahaan teknologi yang fokus membantu bisnis
            berkembang melalui website modern dan solusi digital terbaik.
          </p>

          <div className="space-y-5 mt-10">
            <div className="bg-slate-100 p-5 rounded-2xl">
              ✔ Professional Team
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              ✔ Responsive Design
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              ✔ Fast Performance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutView;
