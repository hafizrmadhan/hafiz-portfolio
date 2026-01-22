import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Spinner */}
      <div className="relative w-16 h-16">
        <div
          className="
            absolute inset-0 rounded-full animate-spin
            bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400
            p-1
          "
        >
          <div className="w-full h-full rounded-full bg-black"></div>
        </div>

        <div
          className="
            absolute inset-3 rounded-full animate-spin-slow
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
            p-1
          "
        >
          <div className="w-full h-full rounded-full bg-black"></div>
        </div>
      </div>

      {/* Text */}
      <p className="mt-8 text-sm tracking-widest text-white animate-pulse">
        LOADING
      </p>
    </div>
  );
};

export default PreLoader;
