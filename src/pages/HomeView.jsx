import TitleHeader from "../components/TitleHeader";

const HomeView = () => {
  return (
    <>
     <TitleHeader title="home"/>

      <section className="min-h-screen bg-slate-900 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 font-semibold text-lg">
              DIGITAL COMPANY
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-4">
              Build Modern Website For Your Business
            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-relaxed">
              Kami membantu bisnis berkembang dengan website modern, responsive,
              cepat, dan profesional menggunakan teknologi terbaru.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-semibold shadow-lg">
                Get Started
              </button>

              <button className="border border-white hover:bg-white hover:text-slate-900 transition px-8 py-4 rounded-2xl font-semibold">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="office"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>


      <section className="py-28 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-blue-500 font-semibold">OUR SERVICES</p>

            <h1 className="text-5xl font-bold text-slate-800 mt-4">
              What We Provide
            </h1>

            <p className="text-slate-600 mt-6 text-lg">
              Solusi digital terbaik untuk membantu bisnis Anda berkembang.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-3 transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                💻
              </div>

              <h1 className="text-2xl font-bold mt-8">Web Development</h1>

              <p className="text-slate-600 mt-5 leading-relaxed">
                Website modern dan responsive untuk semua perangkat.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-3 transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                🎨
              </div>

              <h1 className="text-2xl font-bold mt-8">UI/UX Design</h1>

              <p className="text-slate-600 mt-5 leading-relaxed">
                Design modern dan profesional untuk pengalaman terbaik.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-3 transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                📈
              </div>

              <h1 className="text-2xl font-bold mt-8">Digital Marketing</h1>

              <p className="text-slate-600 mt-5 leading-relaxed">
                Membantu bisnis menjangkau lebih banyak customer secara online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeView;
