export const Loading = () => {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-yellow-300 animate-spin-slow shadow-xl shadow-orange-400/30"></div>
      <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900"></div>
    </div>
  );
};
