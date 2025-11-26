export default function CategoriesSection() {
  const categories = [
    {
      title: "Makeup Essentials",
      description: "Discover high-quality products to perfect your look.",
      image: "/images/makeup-1.jpg",
    },
    {
      title: "Skincare Rituals",
      description: "Gentle and effective care for radiant skin every day.",
      image: "/images/skincare-2.jpg",
    },
    {
      title: "Fragrances",
      description: "Captivating scents crafted to inspire and enchant.",
      image: "/images/perfume-3.jpg",
    },
    {
      title: "Accessories",
      description: "Stylish tools and accessories to complete your beauty routine.",
      image: "/images/accessories-4.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-pink-700 mb-12 text-center tracking-wide font-serif">
        Explore Our Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {categories.map(({ title, description, image }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-pink-600 mb-2 font-serif">
                {title}
              </h3>
              <p className="text-gray-700 flex-grow leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
