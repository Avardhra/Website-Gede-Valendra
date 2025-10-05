import gue from "/assets/img/gue.png";

export default function Home() {
    return (
        <main className="position w-full min-h-[100vh] p-[3%] sm:px-[4%] md:px-[6%] lg:px-[10%] flex flex-col gap-4">
                <div className="position mt-[6vh] w-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
                        <div className="lg:hidden relative w-full h-fit flex justify-center items-center">
                                <img src={gue} alt="Gede Valendra" className="w-[60%] md:w-48 md:h-48 lg:w-[50vh] lg:h-[50vh] bg-white rounded-full object-cover shadow-lg" />
                                <span className="absolute bottom-0 bg-white px-10 py-1 rounded-[100px] shadow-lg outline outline-1 outline-black/20">Programmer</span>
                        </div>
                        <div className="max-w-[100vh] w-full flex flex-col gap-5 items-center lg:items-start">
                                <h1 className="text-4xl font-bold">Gede Valendra</h1>
                                <div className="flex flex-col gap-2">
                                        <p>Halslo, kenalin gua Gede Valendra seorang Mahasiswa aktif Teknik Informatika Institut Teknologi Sumatera.</p>
                                        <p>Kerja sama tim, berkolaborasi, pengembangan skills adalah deskripsi singkat mengenai pribadi saya.</p>
                                </div>
                                <div className="flex gap-4 bg-white p-2 rounded shadow-lg w-fit">
                                        <a href="#" className="flex items-center gap-2 outline outline-1 outline-black/20 rounded p-2 transition-transform duration-200 hover:scale-95 hover:bg-black hover:text-white hover:outline-black">
                                                <i className="bx bx-phone"></i> Hubungi
                                        </a>
                                        <a href="#" className="flex items-center gap-2 outline outline-1 outline-black/20 rounded p-2 transition-transform duration-200 hover:scale-95 hover:bg-black hover:text-white hover:outline-black">
                                                <i className="bx bx-download"></i> Unduh Portfolio
                                        </a>
                                </div>
                        </div>
                        <img src={gue} alt="Gede Valendra" className="hidden lg:block w-32 h-32 md:w-48 md:h-48 lg:w-[50vh] lg:h-[50vh] bg-white rounded-bl-full rounded-tr-[40px] rounded-br-[5px] rounded-tl-[5px] object-cover shadow-lg" />
                </div>
        </main>
    );
}