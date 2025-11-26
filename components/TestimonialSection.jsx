
"use client";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sayra Ibnath",
      feedback:
        "Amazing products! The quality and service are top-notch. Highly recommend.",
    },
    {
      name: "Mahia Juthi",
      feedback:
        "Customer support was super helpful. Loved the seamless shopping experience.",
    },
    {
      name: "Mrs.Elim ",
      feedback:
        "The best place to buy skincare and makeup. Always fast delivery!",
    },
  ];

  return (
    <section className="bg-pink-100 py-12 px-6 max-w-7xl mx-auto rounded-lg">
      <h2 className="text-3xl font-semibold mb-8 text-center font-[YourFontName]">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-pink-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <p className="italic mb-4 text-gray-900">"{t.feedback}"</p>
            <h3 className="font-semibold text-black text-right">- {t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
