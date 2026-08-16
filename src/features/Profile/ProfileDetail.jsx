/** @format */

import React, { useState } from "react";
import useUser from "../authentications/useUser";
import Loading from "../../ui/Loading";
import Modal from "../../ui/Modal";
import EditProfileForm from "./EditProfileForm";
import TolocalDateShort from "../../utils/TolocalDateShort";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineShieldCheck,
  HiOutlinePencilSquare,
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
  HiOutlineSparkles,
  HiCheckCircle,
  HiClock,
} from "react-icons/hi2";

export default function ProfileDetail() {
  const { isLoading, user } = useUser();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (isLoading) return <Loading />;

  if (!user) {
    return (
      <div className="text-center py-12 text-secondary">
        اطلاعات کاربر یافت نشد. لطفاً مجدداً وارد شوید.
      </div>
    );
  }

  const roleLabel =
    user.role === "ADMIN" ? "مدیر سیستم"
    : user.role === "OWNER" ? "کارفرما"
    : user.role === "FREELANCER" ? "فریلنسر"
    : "کاربر عادی";

  const roleBadgeClass =
    user.role === "ADMIN" ?
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
    : user.role === "OWNER" ?
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";

  const isVerified = Number(user.status) === 2;

  return (
    <div className="space-y-6 max-w-5xl mx-auto" dir="rtl">
      {/* Top Banner & Profile Header Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border-secondary bg-bg-secondary shadow-sm">
        {/* Cover Background Accent */}
        <div className="h-28 sm:h-36 bg-gradient-to-l from-primary/80 via-primary-light/60 to-primary/40" />

        <div className="px-6 pb-6 pt-0">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-14 sm:-mt-16 gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 text-center sm:text-right">
              <div className="relative">
                <img
                  src={user.avatar || "/images/user.jpg"}
                  alt={user.name || "کاربر"}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-bg-secondary shadow-md"
                />
                {isVerified && (
                  <span
                    className="absolute -bottom-1 -left-1 p-1 bg-green-500 text-white rounded-full shadow"
                    title="احراز هویت شده"
                  >
                    <HiCheckCircle className="w-5 h-5" />
                  </span>
                )}
              </div>

              <div className="space-y-1 sm:pb-2">
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-2xl font-bold text-text-secondary">
                    {user.name || "کاربر گرامی"}
                  </h1>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${roleBadgeClass}`}
                  >
                    {roleLabel}
                  </span>
                </div>
                <p className="text-sm text-secondary">
                  {user.email || "بدون ایمیل"}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary-light transition-all shadow-sm text-sm font-medium"
            >
              <HiOutlinePencilSquare className="w-5 h-5" />
              <span>ویرایش حساب کاربری</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left/Main Column: Bio, Skills, Company */}
        <div className="md:col-span-2 space-y-6">
          {/* Bio & About Section */}
          <div className="p-6 rounded-2xl border border-border-secondary bg-bg-secondary shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-text-secondary font-bold text-base border-b pb-3 border-border-secondary">
              <HiOutlineUser className="w-5 h-5 text-primary" />
              <span>درباره من</span>
            </div>
            <p className="text-sm leading-relaxed text-secondary whitespace-pre-line">
              {user.biography ||
                "هنوز بیوگرافی یا توضیحی برای حساب کاربری ثبت نشده است. با زدن دکمه ویرایش می‌توانید معرفی کوتاهی از خود بنویسید."}
            </p>
          </div>

          {/* Role specific info: Freelancer Skills OR Owner Company */}
          {user.role === "FREELANCER" && (
            <div className="p-6 rounded-2xl border border-border-secondary bg-bg-secondary shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-text-secondary font-bold text-base border-b pb-3 border-border-secondary">
                <HiOutlineSparkles className="w-5 h-5 text-primary" />
                <span>مهارت‌ها و تخصص‌ها</span>
              </div>
              {user.skills && user.skills.length > 0 ?
                <div className="flex flex-wrap gap-2 pt-1">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-lg bg-bg-primary text-primary text-xs font-semibold border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              : <p className="text-sm text-secondary">
                  مهارتی ثبت نشده است. برای نمایش توانمندی‌های خود در لیست
                  پروژه‌ها، مهارت‌های خود را اضافه کنید.
                </p>
              }
            </div>
          )}

          {user.role === "OWNER" && user.companyName && (
            <div className="p-6 rounded-2xl border border-border-secondary bg-bg-secondary shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-text-secondary font-bold text-base border-b pb-3 border-border-secondary">
                <HiOutlineBuildingOffice2 className="w-5 h-5 text-primary" />
                <span>مشخصات شرکت و کسب‌وکار</span>
              </div>
              <div className="text-sm space-y-2 text-secondary">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-text-secondary">
                    نام سازمان / شرکت:
                  </span>
                  <span>{user.companyName}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right/Sidebar Column: Account Info & Verification */}
        <div className="space-y-6">
          {/* Contact & Account details */}
          <div className="p-6 rounded-2xl border border-border-secondary bg-bg-secondary shadow-sm space-y-4">
            <h3 className="text-text-secondary font-bold text-base border-b pb-3 border-border-secondary">
              اطلاعات حساب
            </h3>

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center justify-between text-secondary">
                <span className="flex items-center gap-2 text-xs font-medium">
                  <HiOutlinePhone className="w-4 h-4 text-primary" />
                  شماره موبایل
                </span>
                <span
                  className="font-mono font-medium text-text-secondary"
                  dir="ltr"
                >
                  {user.phoneNumber || "---"}
                </span>
              </li>

              <li className="flex items-center justify-between text-secondary">
                <span className="flex items-center gap-2 text-xs font-medium">
                  <HiOutlineEnvelope className="w-4 h-4 text-primary" />
                  ایمیل
                </span>
                <span
                  className="font-medium text-text-secondary text-xs truncate max-w-[140px]"
                  dir="ltr"
                >
                  {user.email || "---"}
                </span>
              </li>

              <li className="flex items-center justify-between text-secondary">
                <span className="flex items-center gap-2 text-xs font-medium">
                  <HiOutlineBriefcase className="w-4 h-4 text-primary" />
                  نقش کاربری
                </span>
                <span className="font-medium text-text-secondary">
                  {roleLabel}
                </span>
              </li>

              <li className="flex items-center justify-between text-secondary">
                <span className="flex items-center gap-2 text-xs font-medium">
                  <HiOutlineCalendar className="w-4 h-4 text-primary" />
                  تاریخ عضویت
                </span>
                <span className="font-medium text-text-secondary">
                  {user.createdAt ? TolocalDateShort(user.createdAt) : "---"}
                </span>
              </li>
            </ul>
          </div>

          {/* Account Status & Security */}
          <div className="p-6 rounded-2xl border border-border-secondary bg-bg-secondary shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-text-secondary font-bold text-base border-b pb-3 border-border-secondary">
              <HiOutlineShieldCheck className="w-5 h-5 text-primary" />
              <span>وضعیت حساب کاربری</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-secondary text-xs">تأیید هویت:</span>
                {isVerified ?
                  <span className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 dark:bg-green-950/30 px-2 py-1 rounded-md">
                    <HiCheckCircle className="w-4 h-4" />
                    تأیید شده
                  </span>
                : <span className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 dark:bg-amber-950/30 px-2 py-1 rounded-md">
                    <HiClock className="w-4 h-4" />
                    در انتظار بررسی
                  </span>
                }
              </div>

              <div className="flex items-center justify-between">
                <span className="text-secondary text-xs">وضعیت فعالیت:</span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-md">
                  فعال
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="ویرایش مشخصات حساب کاربری"
      >
        <EditProfileForm
          user={user}
          onClose={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
