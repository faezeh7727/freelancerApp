/** @format */
import { Link } from "react-router-dom";
import WelcomeHero from "../ui/Welcome";
import useUser from "../features/authentications/useUser";
import getRedirectPathByRole from "../utils/getRedirectPathByRole";
export default function Home() {
  const { user, isloading } = useUser();
  return (
    <div
      className="min-h-screen bg-bg-secondary flex flex-col justify-between"
      dir="rtl"
    >
      {/* Top Header */}
      <header className="p-4 sm:p-6 flex items-center justify-between border-b border-border-secondary max-w-7xl w-full mx-auto">
        <div className="flex items-center gap-3">
          <img
            src="/icons8-freelance-64.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="font-bold hidden md:block text-lg  text-primary">
            پلتفرم فریلنسری
          </span>
        </div>
        <div className="flex items-center gap-4">
          {user ?
            <Link
              to={getRedirectPathByRole(user)}
              className="btn-primary px-1.5 py-2 rounded-lg text-sm font-semibold"
            >
              ورود به داشبورد ({user.name || user.phoneNumber})
            </Link>
          : <Link
              to="/auth"
              className="btn-primary px-3 py-1 rounded-lg text-sm font-semibold"
            >
              ورود / ثبت‌نام
            </Link>
          }
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto w-full gap-8">
        <WelcomeHero />

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link
            to={user ? getRedirectPathByRole(user) : "/auth"}
            className="btn-primary px-8 py-3 rounded-xl text-base font-bold shadow-lg hover:shadow-xl transition"
          >
            شروع فعالیت
          </Link>
          <Link
            to="/owner/dashboard"
            className="px-6 py-3 rounded-xl text-base font-bold bg-secondary/10 text-secondary hover:bg-secondary/20 transition"
          >
            پنل کارفرما
          </Link>
          <Link
            to="/freelancer/dashboard"
            className="px-6 py-3 rounded-xl text-base font-bold bg-secondary/10 text-secondary hover:bg-secondary/20 transition"
          >
            پنل فریلنسر
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-secondary-light border-t border-border-secondary">
        پلتفرم فریلنسری و مدیریت پروژه © ۱۴۰۵
      </footer>
    </div>
  );
}
