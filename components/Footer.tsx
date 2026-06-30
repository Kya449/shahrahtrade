export default function Footer() {
  return (
    <footer className="bg-[#04111F] py-16 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-bold">
            SHAHRAH TRADE
          </h2>

          <p className="mt-4 leading-8 text-slate-400">
            Specialized in vehicle import through Bashmaq Free Zone, customs clearance, logistics and international commercial services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            Contact
          </h3>

          <p className="mt-4 text-slate-400">
            +98 918 788 3475
          </p>

          <p className="mt-2 text-slate-400">
            kyanoosh.khornegah@gmail.com
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            Address
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            Parsian Building
            <br />
            Bashmaq Border
            <br />
            Marivan
          </p>
        </div>

      </div>

      <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">
        © 2026 Shahrah Trade. All rights reserved.
      </div>

    </footer>
  );
}