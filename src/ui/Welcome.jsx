/** @format */

const WelcomeHero = () => {
  return (
    <div
      className="flex flex-col w-[90%] max-w-md bg-white/40 dark:bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-slate-700/60 transition-colors"
      dir="rtl"
    >
      <div className="flex flex-row-reverse items-center justify-around py-3">
        <img
          className="w-14"
          src="/images/businessman-hitting-a-computer-svgrepo-com.svg"
          alt=""
        />
        <img
          className="w-5 "
          src="/images/arrow-right-3-svgrepo-com.svg"
          alt=""
        />
        <img
          className="w-14"
          src="/images/businessman-shaking-hands-svgrepo-com.svg"
          alt=""
        />
        <img
          className="w-5"
          src="/images/check-circle-svgrepo-com.svg"
          alt=""
        />
        <img className="w-14" src="/images/send-money-svgrepo-com.svg" alt="" />
      </div>
      <h1 className="text-base font-bold py-3 text-text-secondary">
        <span className="block">جایی که کار حرفه‌ای</span>
        <span className="block text-primary">
          با فرصت‌های بی‌نظیر ملاقات می‌کند.
        </span>
      </h1>

      <p className="mt-4 text-secondary text-base sm:text-lg leading-relaxed">
        بهترین بازار برای همکاری فریلنسرها و کارفرماها جهت رشد و شکوفایی
        ایده‌ها.
      </p>
    </div>
  );
};

export default WelcomeHero;
