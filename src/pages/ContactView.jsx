const ContactView = () => {
  return (
    <section className="py-28 bg-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white p-12 rounded-3xl shadow-xl">
          <div className="text-center">
            <p className="text-blue-500 font-semibold">CONTACT US</p>

            <h1 className="text-5xl font-bold text-slate-800 mt-4">
              Let's Work Together
            </h1>

            <p className="mt-6 text-slate-600 text-lg">
              Hubungi kami untuk konsultasi project bisnis Anda.
            </p>
          </div>

          <form className="space-y-6 mt-12">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-10 py-4 rounded-2xl font-semibold shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactView;
