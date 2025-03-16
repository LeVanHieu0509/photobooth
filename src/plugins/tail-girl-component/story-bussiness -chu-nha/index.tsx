"use client";
import { Container } from "@/styles/common";
import { StoryBusinessWrapper, StoryWrapper } from "./styled";

interface StoryBusinessProps {}

const StoryBusinessMaster = ({}: StoryBusinessProps) => {
  return (
    <StoryBusinessWrapper className="mt-60">
      <Container>
        <h2 className="text-center text-orange">QUYỀN LỢI KHI TRỞ THÀNH CHỦ NHÀ </h2>
        <div className="relative bg-white pb-[80px] pt-[50px] sm:pt-[0px] dark:bg-dark lg:pt-[50px] lg:w-4/5 w-full mx-auto ">
          <div className="flex flex-wrap justify-center w-100">
            <StoryWrapper>
              <div className="mr-32 sm:ml-0">
                <div className="relative z-10 inline-block md:pt-11 lg:pt-0 sm-pt-24">
                  <img
                    height={500}
                    width={1000}
                    src="https://cdn.pixabay.com/photo/2024/06/02/08/13/signature-8803705_1280.png"
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
                  <h3 className="text-bold">Quản lý và điều hành</h3>
                  <p className="mb-8 text-lg ">
                    Bạn có quyền quản lý và yêu cầu người lao động thực hiện các công việc theo đồng.
                  </p>
                  <h3 className="text-bold">Bồi thường thiệt hại</h3>
                  <p className="mt-8 text-lg ">
                    Nếu người lao động gây thiệt hại tài sản trong gia đình, bạn có quyền yêu cầu bồi thường theo quy
                    định của pháp luật và thỏa thuận giữa các bên.
                  </p>
                  <h3 className="text-bold">Phí dịch vụ</h3>
                  <p className="mt-8 text-lg ">
                    Sau khi đồng ý nhận người lao động, bạn sẽ thanh toán phí dịch vụ cho công ty giới gồm các chi phí
                    khác như chi phí vận chuyển người lao động.
                  </p>
                  <h3 className="text-bold">Đảm bảo không cho vay mượn</h3>
                  <p className="mt-8 text-lg ">
                    Bạn có quyền tự quản lý tài sản và không cho người lao động mượn tiền trong thời gian làm việc. Công
                    ty giới thiệu không chịu trách nhiệm nếu xảy ra tình trạng này, nhưng sẽ hỗ trợ cung cấp thông tin
                    cần thiết khi cần thiết.
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

export default StoryBusinessMaster;
