"use client";

import { it } from "node:test";
import IconService1 from "./service-1-icon";
import IconService2 from "./service-2-icon";
import IconService3 from "./service-3-icon";
import IconService4 from "./service-4-icon";
import IconService5 from "./service-5-icon";
import IconService6 from "./service-6-icon";
import { ServiceWrapper } from "./styled";

const Service = () => {
  const listService = [
    {
      title: "ĐỐI TÁC VIỆC LÀM UY TÍN HÀNG ĐẦU",
      icon: <IconService1 />,
      des: "Chúng tôi đã lựa chọn và kết nối với các đối tác tuyển dụng chất lượng nhất tại 63 tỉnh thành trên toàn quốc. 100% đối tác đều qua kiểm duyệt chặt chẽ và có nhiều năm kinh nghiệm trong ngành.",
    },
    {
      title: "BẢO VỆ QUYỀN LỢI CÁC BÊN",
      icon: <IconService2 />,

      des: "HomeEase cam kết bảo vệ quyền lợi cho mọi bên. Tất cả thay đổi, bổ sung hoặc sự không phù hợp trong quá trình thực hiện hợp đồng cần phải được thông báo và thỏa thuận lại với công ty giới thiệu lao động ",
    },
    {
      title: "GIÁ THÀNH KHÔNG THAY ĐỔI",
      icon: <IconService3 />,
      des: "Khi làm việc qua nền tảng của HomeEase, bạn sẽ được tư vấn MIỄN PHÍ và không phải chịu bất kỳ chi phí phát sinh nào so với việc trực tiếp tìm kiếm cơ hội việc làm khác.",
    },
    {
      title: "GIẢI QUYẾT TRANH CHẤP",
      icon: <IconService4 />,
      des: "HomeEase trách nhiệm phối hợp và hỗ trợ các bên giải quyết tranh chấp một cách hợp lý và đúng quy định pháp luật",
    },
    {
      title: "TỰ DO CHỌN LỰA VIỆC LÀM YÊU THÍCH",
      icon: <IconService5 />,
      des: "Bạn có thể tự do lựa chọn công việc phù hợp với tiêu chí cá nhân thông qua nền tảng của HomeEase, đảm bảo chất lượng và sự uy tín.",
    },
    {
      title: "TẶNG KÈM ƯU ĐÃI ĐẶC BIỆT ",
      icon: <IconService6 />,
      des: "Khách hàng khi đăng ký qua HomeEase sẽ nhận ngay các ưu đãi đặc biệt từ đối tác của chúng tôi như quà tặng và các dịch vụ hỗ trợ khác.",
    },
  ];

  return (
    <ServiceWrapper>
      <section className="p-0 dark:bg-dark lg:pb-[90px] lg:pt-[120px] relative">
        <img
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover z-1"
          src={`${process.env.basePath}/img/service.jpg`}
          alt=""
        />
        <div className="wrapper mx-auto relative z-3">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-2.5">
                <div className="mx-auto mb-24 max-w-[700px] text-center lg:mb-24">
                  <h4 className="mb-3 mt-60  font-bold leading-[1.2] text-white dark:text-white">
                    TẠI SAO NÊN KẾT NỐI QUA HOMEEASE THAY VÌ TỰ TÌM NƠI LÀM VIỆC
                  </h4>
                  <p className="text-base text-white dark:text-dark-6 text-bold">
                    Trờ thành khách hàng của HomeEase sẽ nhận được nhiều lợi ích hơn.
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
              {listService.map((item) => (
                <ServiceCard key={item} title={item.title} details={item.des} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ServiceWrapper>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }: any) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] h-90 lg:h-4/5 bg-white p-16 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="flex gap-3 items-center  ">
            <div className="mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl">{icon}</div>
            <h5 className="font-semibold text-dark dark:text-white">{title}</h5>
          </div>
          <p className="text-body-color dark:text-dark-6 flex-1 pb-16">{details}</p>
        </div>
      </div>
    </>
  );
};
