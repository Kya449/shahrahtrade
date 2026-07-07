export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07182D] px-6 text-center text-white">
      <div>
        <h1 className="text-4xl font-black text-[#D4AF37]">
          درخواست شما ثبت شد
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          کارشناسان شاهراه تجارت به‌زودی با شما تماس خواهند گرفت.
        </p>
        <a href="/" className="mt-10 inline-block rounded-xl bg-[#D4AF37] px-8 py-4 font-bold text-[#07182D]">
          بازگشت به صفحه اصلی
        </a>
      </div>
    </main>
  );
}