import React from 'react'
import Image from "next/image"
import { YoutubeEmbed } from "../components/YoutubeEmbed"

const CLASSES_DESCRIPTION: {[key: string]: string} = {
  piano: `Bạn đang tìm kiếm một lớp học Piano chất lượng, phù hợp với mọi lứa tuổi? Hãy đến với lớp học Piano của chúng tôi, nơi âm nhạc chắp cánh cho đam mê của bạn!\n
          Lớp học Piano của chúng tôi nổi bật với những đặc điểm ưu việt, đáp ứng nhu cầu đa dạng của học viên. Chúng tôi tự hào là nơi đào tạo âm nhạc chuyên nghiệp, dành cho mọi lứa tuổi, từ các bé 3 tuổi làm quen với âm nhạc, đến người trưởng thành muốn theo đuổi đam mê. Với phương châm lấy học viên làm trung tâm, chúng tôi thiết kế các chương trình học bài bản, khoa học, phù hợp với từng độ tuổi và trình độ. Để tạo điều kiện thuận lợi nhất, chúng tôi cung cấp hai hình thức học linh hoạt: học tại lớp và học tại nhà.`,
  guitar: `Khơi dậy đam mê âm nhạc với lớp học Guitar của chúng tôi! Dành cho mọi lứa tuổi, từ người mới bắt đầu đến người muốn nâng cao trình độ. Chúng tôi cung cấp các chương trình học đa dạng, bài bản, giúp bạn chinh phục cây đàn Guitar một cách dễ dàng và hiệu quả. Với đội ngũ giảng viên giàu kinh nghiệm và phương pháp giảng dạy hiện đại, chúng tôi cam kết mang đến cho bạn những trải nghiệm học tập tuyệt vời nhất.`,
  english: `Lớp học Tiếng Anh của chúng tôi trang bị cho học sinh từ cấp 1 đến THCS nền tảng vững chắc, tự tin chinh phục mọi kỳ thi ở trường. Chương trình học bám sát chương trình của Bộ Giáo dục, tập trung phát triển toàn diện các kỹ năng, đảm bảo học sinh đạt kết quả cao trong các bài kiểm tra. Giáo viên tận tâm sẽ theo sát từng em, giúp các em tiến bộ vượt bậc.`,
}


export function HomePage() {

  const renderClassImage = (nameOfClass: string) => (
    <Image
      src={`/homePage/${nameOfClass}.svg`}
      alt={nameOfClass}
      width={200}
      height={200}
      style={{width:'80%', height:'60%'}}
    />
  )

  const renderClassDescription = (nameOfClass: string, description: string, backgroundImageName: string) => (
    <div className='col-span-2'>
      <Image
        src={`/homePage/${backgroundImageName}.svg`}
        alt={nameOfClass}
        width={200}
        height={200}
        style={{width:'80%', height:'60%'}}
      />
      <div style={{ position: 'relative', top: '-300px', left: '230px', width:'50%' }}>
        <h1 className="text-2xl font-bold mb-4">Lớp học {nameOfClass}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )

  const renderSpecificClass = (nameOfClass: string, imageFirstOrder: boolean, backgroundImageName: string) => {
    return (
      <div className='grid grid-cols-3'>
        {imageFirstOrder ? (
          <>
            {renderClassImage(nameOfClass)}
            {renderClassDescription(nameOfClass, CLASSES_DESCRIPTION[nameOfClass], backgroundImageName)}
          </>
        ) : (
          <>
            {renderClassDescription(nameOfClass, CLASSES_DESCRIPTION[nameOfClass], backgroundImageName)}
            {renderClassImage(nameOfClass)}
          </>
        )}
      </div>
    )
  }

  const renderTeacher = (nameOfTeacher: string, imageName: string, description: string) => (
    <div className='flex flex-col items-center'>
      <Image
        src={`/homePage/${imageName}.svg`}
        alt={nameOfTeacher}
        width={200}
        height={200}
        className='radius-[50%]'
      />
      <h1 className="text-2xl font-bold mb-4 mt-8">{nameOfTeacher}</h1>
      <p className="text-sm pl-16 pr-16">{description}</p>
    </div>
  )

  return (
    <div className="">
      {/* <header>
        
      </header> */}
      <h1 className="text-5xl font-bold mb-4">Lớp học Piano - Guitar & English Gò Vấp</h1>
      <div>
        <div id="intro-classes">
          {renderSpecificClass('piano', true, 'background-purple')}
          {renderSpecificClass('guitar', false, 'background-yellow')}
          {renderSpecificClass('english', true, 'background-green')}
        </div>

        <div id="intro-teachers" style={{backgroundColor: '#E6ECD9'}}>
          <div className='grid grid-cols-2 gap-16 px-16 py-16'>
            {renderTeacher('Thầy Tùng Trần', 'teacher1', 'Với hơn 10 năm kinh nghiệm giảng dạy Piano và Guitar cho học sinh ở mọi lứa tuổi, thầy Tùng đã truyền cảm hứng và đào tạo thành công cho rất nhiều học viên ở mọi trình độ.')}
            {renderTeacher('Cô Mai Nguyễn', 'teacher2', 'Cô Mai đã có hơn 10 năm kinh nghiệm giảng dạy tiếng Anh cho học sinh cấp tiểu học và THCS, giúp các em xây dựng nền tảng vững chắc và khơi dậy niềm yêu thích học tập.')}
          </div>
        </div>

        <div id="intro-students">
          <YoutubeEmbed embedId="7JzfjtRYmeo" />
        </div>

      </div>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  )
}