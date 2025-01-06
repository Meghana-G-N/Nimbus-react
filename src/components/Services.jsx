const Services = () => {
    const services = [
      { title: "Photography", description: "Capture moments beautifully." },
      { title: "Videography", description: "Create stunning videos." },
      { title: "Editing", description: "Professional photo and video editing." },
      { title: "Consulting", description: "Expert design advice." },
    ];
  
    return (
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  