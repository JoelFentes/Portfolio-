import { Code, Smartphone, LayoutDashboard } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">My Services</h2>
          <p className="text-xl text-slate-600">What I can do for you</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code className="w-8 h-8 text-blue-600" />}
            title="Web Development"
            description="Custom websites and web applications built with modern technologies and best practices."
            bg="bg-blue-100"
          />
          <ServiceCard
            icon={<LayoutDashboard className="w-8 h-8 text-purple-600" />}
            title="UI/UX Design"
            description="Beautiful, user-centered designs that create memorable experiences and drive results."
            bg="bg-purple-100"
          />
          <ServiceCard
            icon={<Smartphone className="w-8 h-8 text-green-600" />}
            title="Mobile Apps"
            description="Native and cross-platform mobile applications for iOS and Android devices."
            bg="bg-green-100"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className={`w-16 h-16 ${bg} rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-4">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
