import Image from 'next/image';
import { YoutubeEmbed } from '../components/YoutubeEmbed';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-[#29403d] text-white flex items-center justify-between px-8 py-3">
        <div className="flex items-center gap-2">
          <Image src="/homePage/logo.png" alt="Logo" width={40} height={40} />
          <div className="font-semibold text-sm leading-tight">
            Piano-Guitar & <br /> English Gò Vấp
          </div>
        </div>
        <nav className="flex gap-6">
          <a href="#about" className="bg-[#e6e6d8] text-[#29403d] px-4 py-2 rounded hover:bg-[#d1d1c1]">Về chúng tôi</a>
          <a href="#courses" className="bg-[#e6e6d8] text-[#29403d] px-4 py-2 rounded hover:bg-[#d1d1c1]">Lịch học</a>
          <a href="#contact" className="bg-[#e6e6d8] text-[#29403d] px-4 py-2 rounded hover:bg-[#d1d1c1]">Liên hệ</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#29403d]">Lớp học Piano - Guitar & English Gò Vấp</h1>

        {/* Courses Section */}
        <section id="courses" className="space-y-12">
          {/* Piano */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image src="/homePage/piano.png" alt="Piano" width={220} height={180} />
            </div>
            <div className="bg-[#d1d1e6]/60 rounded-3xl p-6 flex-1 shadow-md">
              <h2 className="font-bold text-lg mb-2 text-[#29403d]">Lớp Piano</h2>
              <p className="text-sm text-gray-700">
                Bạn đang tìm kiếm một lớp học Piano chất lượng, phù hợp với mọi lứa tuổi? Hãy đến với lớp học Piano của chúng tôi, nơi âm nhạc chắp cánh cho đam mê của bạn!<br />
                Lớp học Piano của chúng tôi nổi bật với những đặc điểm ưu việt, dành cho nhiều lứa tuổi đa dạng của học viên. Chúng tôi tự hào là nơi đào tạo âm nhạc chuyên nghiệp, dành cho mọi lứa tuổi, từ các bé 3 tuổi làm quen với âm nhạc, đến người trưởng thành, thiết kế các chương trình theo nhu cầu, khoa học, phù hợp với từng đối tượng và trình độ. Đội ngũ giáo viên tận tình, sáng tạo, cung cấp hai hình thức linh hoạt: học tại lớp và học tại nhà.
              </p>
            </div>
          </div>

          {/* Guitar */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-shrink-0">
              <Image src="/homePage/guitar.png" alt="Guitar" width={120} height={220} />
            </div>
            <div className="bg-[#f3f3d1]/60 rounded-3xl p-6 flex-1 shadow-md">
              <h2 className="font-bold text-lg mb-2 text-[#29403d]">Lớp Guitar</h2>
              <p className="text-sm text-gray-700">
                Khơi dậy đam mê âm nhạc với lớp học Guitar của chúng tôi! Dành cho mọi lứa tuổi, từ người mới bắt đầu đến người muốn nâng cao trình độ. Chúng tôi cung cấp các chương trình học đa dạng, bài bản, giúp bạn chinh phục cây Guitar một cách dễ dàng và hiệu quả. Với đội ngũ giảng viên giàu kinh nghiệm và phương pháp giảng dạy hiện đại, chúng tôi cam kết mang đến cho bạn những trải nghiệm học tập tuyệt vời nhất.
              </p>
            </div>
          </div>

          {/* English */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image src="/homePage/english.png" alt="English" width={180} height={120} />
            </div>
            <div className="bg-[#b7d6d9]/60 rounded-3xl p-6 flex-1 shadow-md">
              <h2 className="font-bold text-lg mb-2 text-[#29403d]">Lớp Tiếng Anh</h2>
              <p className="text-sm text-gray-700">
                Lớp học Tiếng Anh của chúng tôi trang bị cho học sinh từ cấp 1 đến THCS nền tảng vững chắc, tự tin chinh phục mọi kỳ thi ở trường. Chương trình học bám sát chương trình của Bộ Giáo dục, tập trung phát triển toàn diện các kỹ năng, đảm bảo học sinh đạt kết quả cao trong các bài kiểm tra. Giáo viên tận tâm sẽ theo sát từng em, giúp các em tiến bộ vượt bậc.
              </p>
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="mt-16 bg-[#e6e6d8] rounded-lg py-10 px-4 text-center">
          <h2 className="text-xl font-bold mb-8 text-[#29403d]">Đội ngũ giáo viên</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="flex flex-col items-center">
              <Image src="/homePage/teacher1.png" alt="Thầy Tùng Trần" width={120} height={120} className="rounded-full" />
              <div className="font-semibold mt-4">Thầy Tùng Trần</div>
              <div className="text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/homePage/teacher2.png" alt="Cô Mai Nguyễn" width={120} height={120} className="rounded-full" />
              <div className="font-semibold mt-4">Cô Mai Nguyễn</div>
              <div className="text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="mt-16 flex justify-center">
          <div className="w-full max-w-xl">
            <YoutubeEmbed embedId="QwLHZzZlV2o" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#29403d] text-white py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs">
            <div className="font-semibold mb-1">Thông tin liên hệ</div>
            <div>236 Nguyễn Thượng Hiền, Phường 5, Gò Vấp, Hồ Chí Minh, Vietnam</div>
            <div>(+84) 909 353 077</div>
          </div>
          <div className="flex gap-3 mt-2 md:mt-0">
            <a href="#" aria-label="Facebook"><img src="/homePage/facebook.svg" alt="Facebook" width={20} height={20} /></a>
            <a href="#" aria-label="YouTube"><img src="/homePage/youtube.svg" alt="YouTube" width={20} height={20} /></a>
            <a href="#" aria-label="Email"><img src="/homePage/email.svg" alt="Email" width={20} height={20} /></a>
          </div>
          <div className="text-xs text-right">©Developed by An Tran</div>
        </div>
      </footer>
    </div>
  );
}