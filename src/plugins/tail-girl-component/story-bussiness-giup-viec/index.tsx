"use client";
import { Container } from "@/styles/common";
import { StoryBusinessWrapper, StoryWrapper } from "./styled";

interface StoryBusinessProps {}

const StoryBusinessHousekeeper = ({}: StoryBusinessProps) => {
  return (
    <StoryBusinessWrapper className="mt-60">
      <Container>
        <h2 className="text-center text-orange">QUYỀN LỢI KHI TRỞ THÀNH GIÚP VIỆC</h2>
        <div className="relative bg-white pb-[80px] pt-[50px] sm:pt-[0px] dark:bg-dark lg:pt-[50px] lg:w-4/5 w-full mx-auto ">
          <div className="flex flex-wrap justify-center w-100">
            <StoryWrapper>
              <div className="mr-32 sm:ml-0">
                <div className="relative z-10 inline-block md:pt-11 lg:pt-0 sm-pt-24">
                  <img
                    height={500}
                    width={1000}
                    src="https://png.pngtree.com/background/20230314/original/pngtree-old-female-contractor-doing-housework-vector-picture-image_2132950.jpg"
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

              <div className="hero-content">
                <div>
                  <h3 className="text-bold">Thanh toán tiền lương và phụ cấp</h3>
                  <p className="mb-8 text-lg ">
                    Bạn sẽ được nhận đầy đủ tiền lương, các khoản phụ cấp bổ sung, tiền thưởng, và chi phí tàu xe về nơi
                    cư trú theo thỏa thuận trong hợp đồng lao động.
                  </p>
                  <h3 className="text-bold">Bố trí chỗ ăn ở</h3>
                  <p className="mb-8 text-lg ">
                    Nếu bạn sống cùng gia đình người sử dụng lao động, bạn sẽ được bên A bố trí chỗ ăn ở và trang bị các
                    dụng cụ lao động cần thiết theo thỏa thuận.
                  </p>
                  <h3 className="text-bold">Giới thiệu công việc phù hợp</h3>
                  <p className="mb-8 text-lg ">
                    Công ty giới thiệu lao động (Bên C) có trách nhiệm giới thiệu cho bạn công việc phù hợp với khả năng
                    và tư vấn kỹ lưỡng trước khi bạn nhận việc.
                  </p>
                  <h3 className="text-bold">Thử việc và nhận lương</h3>
                  <p className="mb-8 text-lg ">
                    Trong thời gian thử việc, bạn sẽ nhận lương theo thỏa thuận ban đầu giữa bạn và người sử dụng lao
                    động. Nếu không phù hợp với công việc, bạn vẫn được nhận đầy đủ tiền lương cho những ngày đã làm
                    việc.
                  </p>
                  <h3 className="text-bold">Hỗ trợ sinh hoạt ban đầu</h3>
                  <p className="mb-8 text-lg ">
                    Nếu bạn tìm việc ở khu vực Thành phố Hồ Chí Minh, Bên C sẽ cung cấp nơi ở và phí sinh hoạt (ăn uống)
                    ban đầu cho bạn trong tối đa 7 ngày cho đến khi tìm được công việc phù hợp.
                  </p>
                  <h3 className="text-bold">Quyền gặp gỡ trực tiếp người sử dụng lao động</h3>
                  <p className="mb-8 text-lg ">
                    Bạn sẽ được Bên C tạo điều kiện thuận lợi để gặp trực tiếp Bên A để thỏa thuận công việc, đảm bảo
                    hiểu rõ về công việc trước khi bắt đầu
                  </p>
                </div>
              </div>
            </StoryWrapper>
          </div>
        </div>
      </Container>
    </StoryBusinessWrapper>
  );
};

export default StoryBusinessHousekeeper;
