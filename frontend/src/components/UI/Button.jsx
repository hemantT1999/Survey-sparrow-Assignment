export const Button = ({ children, variant = "primary", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg transition-all duration-300 font-medium relative overflow-hidden";

  const variants = {
    primary: `
      bg-gradient-to-r from-[#FF0080] to-[#7928CA] 
      hover:from-[#7928CA] hover:to-[#FF0080] 
      text-white shadow-lg hover:shadow-pink-500/25 
      transform hover:-translate-y-1
      before:absolute before:inset-0 before:bg-white/20 
      before:translate-x-[-100%] hover:before:translate-x-[100%]
      before:transition-transform before:duration-700
      before:skew-x-12
    `,
    secondary: `
      bg-white/10 backdrop-blur-md 
      hover:bg-white/20 text-white 
      border border-white/20
      shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]
      hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]
    `,
    success: `
      bg-gradient-to-r from-emerald-400 to-cyan-400
      hover:from-emerald-500 hover:to-cyan-500
      text-white shadow-lg hover:shadow-emerald-500/25
    `,
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${props.className || ""}`}
    >
      {children}
    </button>
  );
};
