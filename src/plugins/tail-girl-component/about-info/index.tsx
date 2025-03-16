"use client";
import { Container } from "@/styles/common";
import { AboutInfoDiv, AboutInfoWrapper } from "./styled";

interface AboutInfoProps {}

const AboutInfo = ({}: AboutInfoProps) => {
  return (
    <AboutInfoWrapper className="mt-60 sm-mt-24">
      <Container>
        <div className="relative bg-white pb-[80px] pt-[0px] sm:pt-[0px] dark:bg-dark lg:pt-[50px] lg:w-4/5 w-full mx-auto ">
          <div className="flex flex-wrap justify-center w-100">
            <AboutInfoDiv reverse={false}>
              <div className="mr-32 sm:ml-0 w-full lg:w-1/2">
                <div className="flex flex-col justify-end">
                  <h2 className="mb-24 text-primary flex items-center">
                    <span>01</span>NIỀM TIN VÀ SỰ THẤU HIỂU
                  </h2>
                  <p className="mb-8 body-1">
                    HomeEase hoạt động dựa trên những nguyên tắc cố định, kỷ luật, và không khoan nhượng. Chúng tôi tin
                    rằng đây là những nguyên tắc cốt lõi mà chúng tôi tuân thủ, nhằm mang đến giá trị chất lượng và an
                    toàn cho chủ nhà mỗi ngày. Vì vậy, các đối tác mà chúng tôi lựa chọn đều là những công ty, tổ chức
                    uy tín, tuân thủ pháp luật, tôn trọng chuẩn mực dịch vụ, chia sẻ cùng hệ giá trị và đặt sự an toàn
                    toàn của chủ nhà lên hàng đầu trong mọi hoạt động kinh doanh.
                  </p>
                  <img
                    height={400}
                    width={1000}
                    src="https://cdn.yemek.com/uploads/2015/01/tarifi-okumak-yemek-yapmanin-altin-kurallari.jpg"
                    alt="hero"
                  />
                </div>
              </div>

              <div className="hero-content w-full lg:w-1/2">
                {" "}
                <div className="relative h-full z-10 inline-block md:pt-11 lg:pt-0 sm-pt-24">
                  <img
                    className="h-full  object-cover"
                    src="https://nld.mediacdn.vn/2020/7/1/noi-tro1-15935672332791460914763.jpg"
                    alt="hero"
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
            </AboutInfoDiv>
          </div>
        </div>

        <div className="relative bg-white pb-[80px] pt-[0px] sm:pt-[0px] dark:bg-dark lg:pt-[50px] lg:w-4/5 w-full mx-auto ">
          <div className="flex flex-wrap justify-center w-100">
            <AboutInfoDiv reverse={true}>
              <div className="mr-32 sm:ml-0 w-full lg:w-1/2">
                <div className="relative h-full z-10 inline-block md:pt-11 lg:pt-0 sm-pt-24">
                  <img
                    className="h-full  object-cover"
                    src="https://i.pinimg.com/originals/38/86/26/388626b275d75749d7e1a6ef6eb103bd.jpg"
                    alt="hero"
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

              <div className="hero-content w-full lg:w-1/2">
                <div className="flex flex-col justify-end">
                  <h2 className="mb-24 text-primary flex items-center">
                    <span>02</span>GIÁ TRỊ CỘNG ĐỒNG
                  </h2>
                  <p className="mb-8 body-1">
                    HomeEase – Thương hiệu tiên phong xây dựng Nền tảng kết nối dịch vụ giúp việc nhà đầu tiên tại Việt
                    Nam, ra đời từ tâm huyết của những người trẻ đầy khát khao xây dựng một cộng đồng dịch vụ chất
                    lượng, an toàn và minh bạch. Tại HomeEase, chúng tôi tôn vinh những giá trị trung thực và kinh doanh
                    văn minh, biến đó thành triết lý làm việc cốt lõi của mình.
                  </p>
                </div>
              </div>
            </AboutInfoDiv>
          </div>
        </div>

        <div className="relative bg-white pb-[80px] pt-[0px] sm:pt-[0px] dark:bg-dark lg:pt-[50px] lg:w-4/5 w-full mx-auto ">
          <div className="flex flex-wrap justify-center w-100">
            <AboutInfoDiv reverse={false}>
              <div className="mr-32 sm:ml-0 w-full lg:w-1/2">
                <div className="flex flex-col justify-end">
                  <h2 className="mb-24 text-primary flex items-center">
                    <span>03</span>ĐIỀU KHOẢN DỊCH VỤ
                  </h2>
                  <b>Thay đổi công việc: </b>
                  Nếu công việc thay đổi, Bên chủ nhà phải thông báo và thỏa thuận lại với Bên người giúp việc và Bên
                  công ty. Thay đổi phải được lập thành văn bản và có sự đồng ý của cả ba bên.
                  <b>Trách nhiệm của người lao động:</b>
                  Bên người giúp việc phải chịu trách nhiệm và có thể bồi thường nếu thông tin cung cấp sai lệch gây thể
                  bị chấm dứt hợp đồng.
                  <b>Bảo vệ quyền lợi:</b>
                  Các bên phải thực hiện đúng hợp đồng và thông báo thay đổi cho Bên C để bảo vệ lợi.
                  <b className="mb-2">Thỏa thuận khác:</b>Các bên có thể thỏa thuận thêm về nghỉ phép, và các lập thành
                  văn bản và có chữ ký của các bên.
                  <img
                    className="mt-2"
                    height={400}
                    width={1000}
                    src="https://www.divorcetexas.org/wp-content/uploads/2014/03/Dollarphotoclub_51241902.jpg"
                    alt="hero"
                  />
                </div>
              </div>

              <div className="hero-content w-full lg:w-1/2">
                <div className="relative h-full z-10 inline-block md:pt-11 lg:pt-0 sm-pt-24">
                  <img
                    className="h-full  object-cover"
                    src="https://images.pexels.com/photos/48195/document-agreement-documents-sign-48195.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="hero"
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
            </AboutInfoDiv>
          </div>
        </div>

        <div className="relative bg-white pb-[80px] pt-[0px] sm:pt-[0px] dark:bg-dark lg:pt-[50px] lg:w-4/5 w-full mx-auto ">
          <div className="flex flex-wrap justify-center w-100">
            <AboutInfoDiv reverse={true}>
              <div className="mr-32 sm:ml-0 w-full lg:w-1/2">
                <div className="relative h-full z-10 inline-block md:pt-11 lg:pt-0 sm-pt-24">
                  <img
                    className="h-full  object-cover"
                    src="https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="hero"
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

              <div className="hero-content w-full lg:w-1/2">
                <div className="flex flex-col justify-end">
                  <h2 className="mb-24 text-primary flex items-center">
                    <span>04</span>HÀNH ĐỘNG CỦA CHÚNG TÔI
                  </h2>
                  <div>
                    <h3>Bảo vệ an toàn</h3>
                    <p className="mb-8 body-1">
                      Quy trình tuyển chọn người giúp việc cho dịch vụ chăm sóc chủ nhà của HomeEase rất nghiêm ngặt.
                      của chúng tôi đều phải trải qua quá trình xác thực chặt chẽ về hồ sơ năng lực, chất lượng dịch vụ
                    </p>
                  </div>
                  <div>
                    <h3>Hành động cụ thể</h3>
                    <p className="mb-8 body-1">
                      Đánh giá chất lượng dịch vụ – Chủ nhà có thể đánh giá và phản hồi về trải nghiệm của mình sau mỗi
                      dịch vụ. Những thông tin này sẽ giúp HomeEase cải thiện và nâng cao chất lượng dịch vụ ngày càng
                      vụ ngày càng tốt hơn.
                    </p>
                  </div>
                </div>
              </div>
            </AboutInfoDiv>
          </div>
        </div>

        <div className="relative bg-white pb-[80px] pt-[0px] sm:pt-[0px] dark:bg-dark lg:pt-[50px] lg:w-4/5 w-full mx-auto ">
          <div className="flex flex-wrap justify-center w-100">
            <AboutInfoDiv reverse={false}>
              <div className="mr-32 sm:ml-0 w-full lg:w-1/2">
                <div className="flex flex-col justify-end">
                  <h2 className="mb-24 text-primary flex items-center">
                    <span>05</span>LỜI HỨA TỪ CHÚNG TÔI
                  </h2>
                  <p className="mb-8 body-1">
                    Thành công thực sự chỉ có được khi chúng ta chia sẻ thành công đó. Đây là lý do chúng tôi tận tâm
                    đóng góp giá trị cho ngành dịch. Tại HomeEase, chúng tôi tin rằng việc thực hiện không chỉ đơn thuần
                    là cung cấp dịch vụ chất lượng. Chúng tôi tự hào rằng HomeEase không chỉ là một thương hiệu vì lợi
                    ích, mà là một thương hiệu tôn vinh những giá trị kinh doanh tử tế và tạo ra một nền tảng kết nối an
                    toàn cho ngành dịch vụ, cùng những câu chuyện truyền cảm hứng cho hàng triệu gia đình Việt Nam.
                  </p>
                  <img
                    height={400}
                    width={1000}
                    src="http://giupviecgiaphu.com/upload/images/thue-nguoi-giup-viec-bao-an-o-lai(1).jpg"
                    alt="hero"
                  />
                </div>
              </div>

              <div className="hero-content w-full lg:w-1/2">
                {" "}
                <div className="relative h-full z-10 inline-block md:pt-11 lg:pt-0 sm-pt-24">
                  <img
                    className="h-full  object-cover"
                    src="https://giupviectot.vn/wp-content/uploads/2021/06/giup-viec-nha-theo-gio-cho-nguoi-nuoc-ngoai-4.jpg"
                    alt="hero"
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
            </AboutInfoDiv>
          </div>
        </div>
      </Container>
    </AboutInfoWrapper>
  );
};

export default AboutInfo;
