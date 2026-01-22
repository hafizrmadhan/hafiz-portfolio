import { useEffect } from "react";
import DataImage, { listTools, listProyek } from "./data";

// Animate & AOS
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="hero grid lg:grid-cols-2 grid-cols-1 items-center pt-0 gap-6">
        
        {/* TEXT */}
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Foto Hafiz Ramadhan"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode yang indah, lahir dari ketekunan.</q>
          </div>

          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Hafiz Ramadhan
          </h1>

          <p className="text-base/loose mb-6 opacity-50">
            Saya memiliki ketertarikan besar dalam bidang Informatika, khususnya pada pengembangan web (Web Development), analisis data (Data Analysis), dan ilmu data (Data Science). Saya senang membangun aplikasi web yang responsif, fungsional, dan mudah digunakan, serta mengeksplorasi data untuk menemukan pola dan insight yang bermanfaat. Melalui pembelajaran dan praktik berkelanjutan, saya terus mengembangkan kemampuan teknis dan logika pemrograman untuk menciptakan solusi digital yang efektif dan relevan dengan kebutuhan saat ini.
          </p>

          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/"
              onClick={(e) => e.preventDefault()}
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>

            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        {/* FOTO HERO ESTETIK RESPONSIVE */}
        <div className="relative w-full flex justify-center lg:justify-end animate__animated animate__fadeInUp animate__delay-4s">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 blur-3xl opacity-40 rounded-3xl"></div>

          {/* Wrapper ukuran - LEBIH LEBAR */}
<div
  className="
    relative
    lg:w-[480px]
    md:w-[420px]
    sm:w-[360px]
    w-[300px]
    aspect-[3/4]
  "
><img
  src={DataImage.HeroImage}
  alt="Foto Hafiz Ramadhan"
  className="
    w-full
    h-full
    object-cover
    object-top
    rounded-3xl
    shadow-2xl
    border border-zinc-700
    transition duration-500
    hover:scale-105
  "
/>


</div>

        </div>
      </div>

      {/* TENTANG */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
        >
          <img
            src={DataImage.HeroImage}
            alt="Foto Hafiz Ramadhan"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />

          <p className="text-base/loose mb-10">
            Hi, I am Hafiz Ramadhan, an Informatics enthusiast with a strong interest in web development and data-driven technologies. I have experience in building responsive and functional web applications and enjoy exploring data-driven solutions to address real-world challenges through analysis and problem-solving.
          </p>

          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Foto Hafiz Ramadhan"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />

            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="tools mt-32">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Tools yang dipakai
          </h1>

          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 opacity-50"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Tools yang biasa saya gunakan untuk pengembangan website dan desain.
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROYEK */}
      <div id="proyek" className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up">
          Proyek
        </h1>

        <p
          className="text-center opacity-50"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Beberapa proyek yang telah saya buat.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt={proyek.nama} loading="lazy" />

              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>

              <p className="mb-4 opacity-50">{proyek.desk}</p>

              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                  className="bg-violet-700 p-3 rounded-lg hover:bg-violet-600"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KONTAK */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl font-bold text-center mb-2" data-aos="fade-up">
          Kontak
        </h1>

        <p
          className="text-center opacity-50 mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Mari terhubung dengan saya.
        </p>

        <form
          action="https://formsubmit.co/hafizrmadhannn@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              required
              className="border border-zinc-500 p-2 rounded-md"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-zinc-500 p-2 rounded-md"
            />

            <textarea
              name="pesan"
              rows="6"
              placeholder="Pesan..."
              required
              className="border border-zinc-500 p-2 rounded-md"
            ></textarea>

            <button
              type="submit"
              className="bg-violet-700 p-3 rounded-lg hover:bg-violet-600"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
