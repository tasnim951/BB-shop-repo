export default function FeaturesSection() {
  const features = [
    {
      title: "Fast Delivery",
      description: "Get your favorite products delivered to your doorstep quickly and safely.",
    },
    {
      title: "Premium Quality",
      description: "We offer only top-quality products to ensure your satisfaction and beauty.",
    },
    {
      title: "Exclusive Offers",
      description: "Enjoy special discounts and offers available only to our customers.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center font-[YourFontName] text-black">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="bg-[#19181866] bg-opacity-80 rounded-lg p-8 transition-transform transform hover:-translate-y-2 hover:shadow-lg cursor-default"
            >
              <h3 className="text-2xl font-semibold mb-4 font-[YourFontName]">{title}</h3>
              <p className="text-pink-300 font-light leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
