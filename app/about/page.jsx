"use client";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-6 text-center">
        About Blush Bazaar
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
        Welcome to <span className="font-semibold text-pink-600">Blush Bazaar</span>, your
        ultimate destination for premium makeup, skincare, and fashion products. We are
        passionate about helping you discover beauty and confidence through carefully
        curated collections that inspire and empower.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Blush Bazaar, our mission is to provide high-quality, trendy, and
            affordable products that celebrate individuality and enhance your natural
            beauty. We believe everyone deserves to feel confident and radiant every day.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Promise</h2>
          <p className="text-gray-700 leading-relaxed">
            We promise to bring you only the best products from trusted brands, ensuring
            quality, safety, and satisfaction. Customer happiness is at the heart of
            everything we do, and we are committed to creating an exceptional shopping
            experience.
          </p>
        </section>
      </div>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Meet the Team</h2>
        <p className="text-gray-700 max-w-xl mx-auto leading-relaxed">
          Our passionate team works tirelessly behind the scenes to bring you the latest
          trends and personalized service. From product curation to customer support, we
          are here for you every step of the way.
        </p>
      </section>

      <div className="mt-12 flex justify-center gap-8">
        <div className="rounded-full overflow-hidden w-24 h-24 shadow-lg border-4 border-pink-300">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Team member"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="rounded-full overflow-hidden w-24 h-24 shadow-lg border-4 border-pink-300">
          <img
            src="https://randomuser.me/api/portraits/men/43.jpg"
            alt="Team member"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="rounded-full overflow-hidden w-24 h-24 shadow-lg border-4 border-pink-300">
          <img
            src="https://randomuser.me/api/portraits/women/90.jpg"
            alt="Team member"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
