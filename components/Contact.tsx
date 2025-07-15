import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Lets Work Together</h2>
          <p className="text-xl text-slate-300">Ready to bring your ideas to life?</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="pl-80 flex justify-between items-center gap-20">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-slate-300">joelfentes@gmail.com</p>
              </div>
            </div>
            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaWhatsapp className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-slate-300">(81) 98497-2303</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
