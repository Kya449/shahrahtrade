export default function Stats() {
  return (
    <section className="bg-[#0A2342] py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">

        <div>
          <p className="text-4xl font-bold">10+</p>
          <p className="mt-2 text-white/70">سال تجربه</p>
        </div>

        <div>
          <p className="text-4xl font-bold">250+</p>
          <p className="mt-2 text-white/70">پروژه موفق</p>
        </div>

        <div>
          <p className="text-4xl font-bold">100+</p>
          <p className="mt-2 text-white/70">رضایت مشتری</p>
        </div>

        <div>
          <p className="text-4xl font-bold">24/7</p>
          <p className="mt-2 text-white/70">پشتیبانی</p>
        </div>

      </div>
    </section>
  );
}