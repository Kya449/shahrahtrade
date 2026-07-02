import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>

          <SectionTitle
            subtitle="در باره ما"
            title="تیم شاهراه تجارت "
          />

          <p className="mt-8 leading-9 text-slate-700">
            شاهراه تجارت با تکیه بر شبکه گسترده تجاری خود،
            خدمات تخصصی بازرگانی بین‌المللی، تأمین کالا، ترخیص، لجستیک، 
            حمل‌ونقل و واردات خودرو را از طریق مرز باشماق ارائه می‌دهد
          </p>

          <p className="mt-6 leading-9 text-slate-700">
            ما با ارائه راهکارهای جامع بازرگانی بین‌المللی،
            لجستیک، ترخیص کالا و زنجیره تأمین، به کسب‌وکارها کمک می‌کنیم 
            تجارت فرامرزی خود را با اطمینان، سرعت و شفافیت توسعه دهند
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">

          <Image
            src="/images/trade.jpg"
            alt="About Shahrah Trade"
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}