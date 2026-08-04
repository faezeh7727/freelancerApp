/** @format */

export const Logo = ({ className }) => {
  return (
    <div className="flex justify-center w-12 h-12 lg:w-14 lg:h-14 ml-2 lg:ml-0  ">
    <img 
      src="/public/icons8-freelance-64.png" // دقت کنید: حتماً با یک / شروع شود
      alt="Logo"
      className={className}
    />
    </div>
  );
};
