"use client";
import { Container } from "@/styles/common";
import { StoryBusinessWrapper, StoryWrapper } from "./styled";

interface StoryBusinessProps {}

const AboutStory = ({}: StoryBusinessProps) => {
  return (
    <StoryBusinessWrapper className="relative">
      <img
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover z-1"
        src="https://hismile.com.vn/wp-content/uploads/2022/03/5068978-scaled.jpg"
        alt=""
      />

      <div className="wrapper ">
        <Container>
          <div className="relative pb-[80px] pt-[0px] dark:bg-dark lg:pt-[50px] lg:w-4/5 w-full mx-auto ">
            <div className="flex flex-wrap justify-center w-100">
              <StoryWrapper>
                <div className="mr-32 sm:ml-0">
                  <div className="flex items-end lg:h-full relative z-10 inline-block md:pt-11 lg:pt-0 sm-pt-24">
                    <img
                      height={500}
                      width={2000}
                      src="https://hismile.com.vn/wp-content/uploads/2022/03/hhwserdh.jpg"
                      alt="hero"
                      className="rounded-xl"
                    />
                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                      <svg width={93} height={93} viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#37ABF4" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#37ABF4" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#37ABF4" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#37ABF4" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#37ABF4" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#37ABF4" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#37ABF4" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#37ABF4" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#37ABF4" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#37ABF4" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#37ABF4" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#37ABF4" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#37ABF4" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#37ABF4" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#37ABF4" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#37ABF4" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#37ABF4" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#37ABF4" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#37ABF4" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#37ABF4" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#37ABF4" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#37ABF4" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#37ABF4" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#37ABF4" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#37ABF4" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="hero-content text-white">
                  <div>
                    <h1 className="text-left pt-40 pb-16">HomeEase - KHÁT VỌNG THAY ĐỔI NGÀNH DỊCH VỤ</h1>

                    <p className="mb-8 ">
                      HomeEase kết nối dịch vụ chất lượng trên toàn quốc với hơn 600 đối tác tại 63 tỉnh, thành phố lớn,
                      giúp chủ nhà dễ dàng tìm kiếm các dịch vụ đã được kiểm duyệt chặt chẽ. Chúng tôi cam kết sự an
                      toàn và đền bù 100% nếu dịch vụ không đạt yêu cầu.
                    </p>
                    <p className="mt-8">
                      Khát vọng của HomeEase là trở thành nền tảng kết nối dịch vụ giữa chủ nhà và người giúp việc hàng
                      đầu tại Việt Nam, với mục tiêu “tạo ra giá trị kinh doanh tử tế và phát triển bền vững vì sự an
                      toàn và hài lòng của chủ nhà”. Chúng tôi hướng đến việc xây dựng môi trường dịch vụ an toàn và
                      minh bạch cho chủ nhà và người giúp việc.
                    </p>
                    <p className="mt-8">Tầm nhìn của chúng tôi trong việc triển khai nền tảng này:</p>
                    <p className="mt-8">
                      Trở thành đối tác toàn diện và hiệu quả trong việc hỗ trợ kết nối chủ nhà và các người giúp việc
                      một cách nhanh chóng, thấu hiểu, chất lượng và an toàn.
                    </p>
                    <p className="mt-8">
                      Là đối tác mang lại sự thành công cho cả chủ nhà và người giúp việc. Thực hiện sứ mệnh mang lại
                      hàng triệu trải nghiệm dịch vụ hạnh phúc tại Việt Nam.
                    </p>
                  </div>
                </div>
              </StoryWrapper>
            </div>
          </div>
        </Container>
      </div>
    </StoryBusinessWrapper>
  );
};

export default AboutStory;
