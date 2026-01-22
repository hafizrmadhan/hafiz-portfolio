const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>

      <div className="flex gap-7">
        <a href="#beranda" className="hover:text-violet-500">Beranda</a>
        <a href="#tentang" className="hover:text-violet-500">Tentang</a>
        <a href="#proyek" className="hover:text-violet-500">Proyek</a>
      </div>

      <div className="flex items-center gap-3">
        <a href="#" className="hover:text-violet-500">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/_hafizrmadhan?igsh=Y2NpMnlobDQ0ZHds" className="hover:text-violet-500">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="#" className="hover:text-violet-500">
          <i className="ri-reddit-fill ri-2x"></i>
        </a>
        <a href="#" className="hover:text-violet-500">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
