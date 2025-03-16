"use client";
import { Container } from "@/styles/common";
import { StoryHomeEaseWrapper, StoryWrapper } from "./styled";
import Link from "next/link";

interface StoryHomeEaseProps {}

const StoryHomeEase = ({}: StoryHomeEaseProps) => {
  return (
    <StoryHomeEaseWrapper className="mt-40 sm-mt-24">
      <Container>
        <h2 className="text-center text-primary">CÂU CHUYỆN HOMEEASE</h2>
        <div className="relative bg-white pb-[80px] pt-[24px] sm:pt-[0px] dark:bg-dark lg:pt-[50px] lg:w-4/5 w-full mx-auto ">
          <div className="flex flex-wrap justify-center w-100">
            <StoryWrapper>
              <div className="hero-content">
                <h1 className="sm-mt-40 mb-5 text-xl !leading-[1.208] text-dark dark:text-white sm:text-[24px] lg:text-[24px] xl:text-xl"></h1>

                <p className="mb-8 ">
                  <b>HomeEase</b> tự hào là cầu nối giữa chủ nhà với người giúp việc hàng đầu toàn quốc. Với sứ mệnh xây
                  dựng một cộng đồng kết nối <b>CHẤT LƯỢNG, AN TOÀN và MINH BẠCH</b>, quyền lợi của khách hàng thông qua
                  các cam kết bảo hộ rủi ro rõ ràng và minh bạch.
                </p>
                <p className="mt-8">
                  Tại HomeEase, chúng tôi tôn vinh những giá trị trung thực và kinh doanh văn minh, và đây chính là
                  triết lý làm việc của chúng tôi.
                </p>
                <p className="mt-8">
                  HomeEase có nghĩa là sự dễ dàng và thoải mái trong ngôi nhà. Đó là tinh thần và sứ mệnh của chúng tôi
                  trong việc mang lại hàng triệu ngôi nhà tiện nghi, ấm cúng, và dễ dàng cho mọi gia đình tại Việt Nam.
                  Đây là tầm nhìn của nhà sáng lập công ty – Ông Hồ Thanh Phúc, và cũng là một trong những giá trị cốt
                  lõi của chúng tôi.
                </p>

                <ul className="flex flex-wrap justify-center items-center mt-16">
                  <li className="">
                    <Link
                      href="/ve-homeease"
                      className="bg-yellow inline-flex items-center justify-center rounded-md  px-4 py-3 text-center text-base font-medium text-white hover:opacity-80 lg:px-7"
                    >
                      Xem Thêm
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="ml-32 sm:ml-0">
                <div className="relative z-10 inline-block md:pt-11 lg:pt-0 pt-0">
                  <img
                    height={500}
                    width={1000}
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
            </StoryWrapper>
          </div>
        </div>
      </Container>
    </StoryHomeEaseWrapper>
  );
};

export default StoryHomeEase;
