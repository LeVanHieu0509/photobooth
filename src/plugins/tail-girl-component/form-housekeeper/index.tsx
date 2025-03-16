import { ModifiedData } from "@/@custom-types";
import { createHousekeeper } from "@/api/rest";
import { Alert } from "@/components/alert";
import FormInput from "@/components/form-input";
import { useCallback, useMemo, useState } from "react";
import { FormWrapper } from "./styled";
import { isNil } from "lodash";
import { validateEmpty, validatePhone } from "@/utils";

interface FormProps {
  onSubmit?: any;
}

interface FormHousekeeperProp {
  name_housekeeper: string;
  year_housekeeper: string;
  religion_housekeeper: string;
  address_housekeeper: string;
  phone_housekeeper: string;
  phone_relative_housekeeper: string;
  where_work_housekeeper: string;
  level_housekeeper: string;
  health_housekeeper: string;
  family_housekeeper: string;
  skill_housekeeper: string;
  desire_housekeeper: string;
  salary_housekeeper: string;
}

const FormHouseKeeper = ({ onSubmit }: FormProps) => {
  const [disabled, setDisabled] = useState<any>({});
  const [modifiedData, setModifiedData] = useState<ModifiedData<FormHousekeeperProp>>({
    name_housekeeper: null,
    year_housekeeper: null,
    religion_housekeeper: null,
    address_housekeeper: null,
    phone_housekeeper: null,
    phone_relative_housekeeper: null,
    where_work_housekeeper: null,
    level_housekeeper: null,
    health_housekeeper: null,
    family_housekeeper: null,
    skill_housekeeper: null,
    desire_housekeeper: null,
    salary_housekeeper: null,
  });

  const listDropdownType = [
    {
      value: "chu-nha",
      label: "Chủ Nhà",
    },
    {
      value: "nguoi-tim-viec",
      label: "Người Giúp Việc",
    },
  ];

  const listInput: any = useMemo(
    () => [
      [
        {
          label: "Họ tên",
          placeHolder: "Vui lòng nhập...",
          name: "name_housekeeper",
          note: "",
          subType: "text",
          type: "input",
          disabled: disabled?.name_housekeeper,
          error: () => validate("name_housekeeper"),
        },
      ],
      [
        {
          label: "Năm sinh",
          placeHolder: "Vui lòng nhập...",
          name: "year_housekeeper",
          note: "",
          subType: "text",
          type: "input",
          disabled: disabled?.year_housekeeper,
          error: () => validate("year_housekeeper"),
        },
        {
          label: "Tôn giáo",
          placeHolder: "Vui lòng nhập...",
          name: "religion_housekeeper",
          note: "",
          subType: "text",
          type: "input",
          disabled: disabled?.religion_housekeeper,
          error: () => validate("religion_housekeeper"),
        },
      ],
      [
        {
          label: "Quê quán",
          placeHolder: "Vui lòng nhập...",
          name: "address_housekeeper",
          note: "",
          subType: "text",
          type: "input",
          disabled: disabled?.address_housekeeper,
          error: () => validate("address_housekeeper"),
        },
      ],
      [
        {
          label: "Số điện thoại",
          placeHolder: "Vui lòng nhập...",
          name: "phone_housekeeper",
          note: "",
          subType: "text",
          type: "input",
          disabled: disabled?.phone_housekeeper,
          error: () => validate("phone_housekeeper"),
        },
        {
          label: "Số điện thoại người thân",
          placeHolder: "Vui lòng nhập...",
          name: "phone_relative_housekeeper",
          note: "",
          subType: "text",
          type: "input",
          disabled: disabled?.phone_relative_housekeeper,
          error: () => validate("phone_relative_housekeeper"),
        },
      ],
      [
        {
          label: "Làm được tại đâu",
          placeHolder: "Vui lòng nhập...",
          name: "where_work_housekeeper",
          note: "",
          subType: "text",
          type: "input",
          disabled: disabled?.where_work_housekeeper,
          error: () => validate("where_work_housekeeper"),
        },
        {
          label: "Trình độ học vấn",
          placeHolder: "Vui lòng nhập",
          name: "level_housekeeper",
          note: "",
          subType: "text",
          type: "input",
          disabled: disabled?.level_housekeeper,
          error: () => validate("level_housekeeper"),
        },
      ],
      [
        {
          label: "Sức khoẻ",
          placeHolder: "Vui lòng nhập...",
          name: "health_housekeeper",
          note: "",
          subType: "textarea",
          type: "textarea",
          disabled: disabled?.health_housekeeper,
          error: () => validate("health_housekeeper"),
        },
        {
          label: "Gia đình",
          placeHolder: "Vui lòng nhập...",
          name: "family_housekeeper",
          note: "",
          subType: "textarea",
          type: "textarea",
          disabled: disabled?.family_housekeeper,
          error: () => validate("family_housekeeper"),
        },
      ],

      [
        {
          label: "Chuyên môn",
          placeHolder: "Vui lòng nhập kinh nghiệm làm việc...",
          name: "skill_housekeeper",
          note: "",
          subType: "textarea",
          type: "textarea",
          disabled: disabled?.skill_housekeeper,
          error: () => validate("skill_housekeeper"),
        },
      ],
      [
        {
          label: "Mong muốn công việc",
          placeHolder: "Vui lòng nhập...",
          name: "desire_housekeeper",
          note: "",
          subType: "textarea",
          type: "textarea",
          error: () => validate("desire_housekeeper"),
        },
      ],
      [
        {
          label: "Mức lương mong muốn",
          placeHolder: "Vui lòng nhập...",
          name: "salary_housekeeper",
          note: "",
          subType: "text",
          type: "input",
          error: () => validate("salary_housekeeper"),
        },
      ],
    ],
    [modifiedData]
  );

  const validate = (key: keyof ModifiedData<FormHousekeeperProp>) => {
    switch (key) {
      case "name_housekeeper":
      case "address_housekeeper":
      case "desire_housekeeper":
      case "family_housekeeper":
      case "health_housekeeper":
      case "level_housekeeper":
      case "religion_housekeeper":
      case "salary_housekeeper":
      case "skill_housekeeper":
      case "where_work_housekeeper":
      case "year_housekeeper":
        return validateEmpty(modifiedData[key]);
      case "phone_housekeeper":
      case "phone_relative_housekeeper":
        return validatePhone(modifiedData[key]);
      default:
        break;
    }
  };

  const handleChange = useCallback(
    (name: keyof any, value: any) => {
      setModifiedData((pre) => ({ ...pre, [name]: value }));
    },
    [modifiedData]
  );

  const disabledBtn = useMemo(
    () => Object.values(modifiedData).some((item) => item == "" || isNil(item)),
    [modifiedData]
  );

  const handleSubmit = async () => {
    if (!disabledBtn) {
      try {
        const res = await createHousekeeper({
          ...modifiedData,
        });

        if (res.data.status == "1") {
          Alert("SUCCESSFUL", "Bạn đã gửi thông tin tới HomeEase thành công!");
        } else {
          Alert("WARNING", res.data.message);
        }
      } catch (e) {
        Alert("ERROR", "Có lỗi xảy ra!");
      }
    } else {
      Alert("ERROR", "Vui lòng điền đầy đủ thông tin!");
    }
  };

  return (
    <FormWrapper>
      <section className="relative z-10 overflow-hidden bg-white dark:bg-dark  ">
        {" "}
        <img
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover z-1"
          src="https://hismile.com.vn/wp-content/uploads/2022/03/technology-network-background-scaled.jpg"
          alt=""
        />
        <div className="wrapper lg:py-[120px] text-white">
          <div className="container mx-auto lg:flex lg:justify-center">
            <div className="flex flex-wrap -mx-4 lg:justify-center  lg:w-full">
              <div className="w-full px-4 py-4 lg:w-1/2 xl:w-5/12">
                <div className="mb-12 max-w-[450px] lg:mb-0">
                  <h1 className="">Giúp việc cùng kết nối với HomeEase</h1>
                  <hr className="w-2/5 mt-16" />
                  <div>
                    <p className="body-1 mt-16">TẬN HƯỞNG NHỮNG LỢI ÍCH ĐỘC QUYỀN TỪ HomeEase</p>
                    <p className="mt-24 body-1 leading-relaxed dark:text-dark-6">
                      HomeEase, được thành lập vào năm 2024, là nền tảng hàng đầu trên toàn quốc, kết nối cơ hội việc
                      làm với cộng đồng lao động rộng lớn trên khắp Việt Nam.
                    </p>
                    <p className="body-1 mt-16 leading-relaxed dark:text-dark-6">
                      Trung bình mỗi ngày HomeEase tiếp nhận và kết nốt hơn 500 lượt yêu cầu tìm kiếm việc làm từ những
                      người giúp việc đến chủ nhà trên toàn quốc.
                    </p>
                    <p className="body-1 mt-16 leading-relaxed dark:text-dark-6">
                      Đội ngũ sales sẽ theo sát và hướng dẫn chủ nhà từ bước kết nối với người giúp việc cho đến khi kí
                      đồng.
                    </p>
                    <p className="mt-16  font-bold">LỰA CHỌN LÀ CỦA CHÍNH BẠN!!!</p>
                    <p className="mt-16">Để lại thông tin chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.</p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-24 px-4 py-4 lg:w-1/2 xl:w-5/12">
                <div className="relative text-black p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
                  <h2 className="text-center py-5">Đăng ký ngay!</h2>
                  <div className="mt-8 mb-2 w-full">
                    <FormInput listInput={listInput} modifiedData={modifiedData} onChange={handleChange} />
                  </div>
                  <div>
                    <button
                      onClick={handleSubmit}
                      style={{ background: "#37ABF4" }}
                      type="submit"
                      className="w-full p-3 text-white transition border rounded pointer  hover:bg-opacity-90"
                    >
                      Đăng ký
                    </button>
                  </div>

                  <div>
                    <span className="absolute -top-10 -right-9 z-[-1]">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                          fill="#37ABF4"
                        />
                      </svg>
                    </span>
                    <span className="absolute -right-10 top-[90px] z-[-1]">
                      <svg width={34} height={134} viewBox="0 0 34 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="31.9993" cy={132} r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296" />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle cx="31.9993" cy={88} r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296" />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle cx="31.9993" cy={45} r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296" />
                        <circle cx="31.9993" cy={16} r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296" />
                        <circle cx="31.9993" cy={59} r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296" />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle cx="17.3333" cy={132} r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296" />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle cx="17.3333" cy={88} r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296" />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle cx="17.3333" cy={45} r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296" />
                        <circle cx="17.3333" cy={16} r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296" />
                        <circle cx="17.3333" cy={59} r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296" />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle cx="2.66536" cy={132} r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296" />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle cx="2.66536" cy={88} r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296" />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle cx="2.66536" cy={45} r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296" />
                        <circle cx="2.66536" cy={16} r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296" />
                        <circle cx="2.66536" cy={59} r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296" />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                    <span className="absolute -left-7 -bottom-7 z-[-1]">
                      <svg
                        width={107}
                        height={134}
                        viewBox="0 0 107 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="104.999" cy={132} r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296" />
                        <circle
                          cx="104.999"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 104.999 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 104.999 102.667)"
                          fill="#13C296"
                        />
                        <circle cx="104.999" cy={88} r="1.66667" transform="rotate(180 104.999 88)" fill="#13C296" />
                        <circle
                          cx="104.999"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 104.999 73.3333)"
                          fill="#13C296"
                        />
                        <circle cx="104.999" cy={45} r="1.66667" transform="rotate(180 104.999 45)" fill="#13C296" />
                        <circle cx="104.999" cy={16} r="1.66667" transform="rotate(180 104.999 16)" fill="#13C296" />
                        <circle cx="104.999" cy={59} r="1.66667" transform="rotate(180 104.999 59)" fill="#13C296" />
                        <circle
                          cx="104.999"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 104.999 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 104.999 1.66665)"
                          fill="#13C296"
                        />
                        <circle cx="90.3333" cy={132} r="1.66667" transform="rotate(180 90.3333 132)" fill="#13C296" />
                        <circle
                          cx="90.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 90.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 90.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle cx="90.3333" cy={88} r="1.66667" transform="rotate(180 90.3333 88)" fill="#13C296" />
                        <circle
                          cx="90.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 90.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle cx="90.3333" cy={45} r="1.66667" transform="rotate(180 90.3333 45)" fill="#13C296" />
                        <circle cx="90.3333" cy={16} r="1.66667" transform="rotate(180 90.3333 16)" fill="#13C296" />
                        <circle cx="90.3333" cy={59} r="1.66667" transform="rotate(180 90.3333 59)" fill="#13C296" />
                        <circle
                          cx="90.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 90.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 90.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle cx="75.6654" cy={132} r="1.66667" transform="rotate(180 75.6654 132)" fill="#13C296" />
                        <circle cx="31.9993" cy={132} r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296" />
                        <circle
                          cx="75.6654"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 75.6654 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 75.6654 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle cx="75.6654" cy={88} r="1.66667" transform="rotate(180 75.6654 88)" fill="#13C296" />
                        <circle cx="31.9993" cy={88} r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296" />
                        <circle
                          cx="75.6654"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 75.6654 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle cx="75.6654" cy={45} r="1.66667" transform="rotate(180 75.6654 45)" fill="#13C296" />
                        <circle cx="31.9993" cy={45} r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296" />
                        <circle cx="75.6654" cy={16} r="1.66667" transform="rotate(180 75.6654 16)" fill="#13C296" />
                        <circle cx="31.9993" cy={16} r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296" />
                        <circle cx="75.6654" cy={59} r="1.66667" transform="rotate(180 75.6654 59)" fill="#13C296" />
                        <circle cx="31.9993" cy={59} r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296" />
                        <circle
                          cx="75.6654"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 75.6654 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 75.6654 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle cx="60.9993" cy={132} r="1.66667" transform="rotate(180 60.9993 132)" fill="#13C296" />
                        <circle cx="17.3333" cy={132} r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296" />
                        <circle
                          cx="60.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 60.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 60.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle cx="60.9993" cy={88} r="1.66667" transform="rotate(180 60.9993 88)" fill="#13C296" />
                        <circle cx="17.3333" cy={88} r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296" />
                        <circle
                          cx="60.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 60.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle cx="60.9993" cy={45} r="1.66667" transform="rotate(180 60.9993 45)" fill="#13C296" />
                        <circle cx="17.3333" cy={45} r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296" />
                        <circle cx="60.9993" cy={16} r="1.66667" transform="rotate(180 60.9993 16)" fill="#13C296" />
                        <circle cx="17.3333" cy={16} r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296" />
                        <circle cx="60.9993" cy={59} r="1.66667" transform="rotate(180 60.9993 59)" fill="#13C296" />
                        <circle cx="17.3333" cy={59} r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296" />
                        <circle
                          cx="60.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 60.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 60.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle cx="46.3333" cy={132} r="1.66667" transform="rotate(180 46.3333 132)" fill="#13C296" />
                        <circle cx="2.66536" cy={132} r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296" />
                        <circle
                          cx="46.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 46.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 46.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle cx="46.3333" cy={88} r="1.66667" transform="rotate(180 46.3333 88)" fill="#13C296" />
                        <circle cx="2.66536" cy={88} r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296" />
                        <circle
                          cx="46.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 46.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle cx="46.3333" cy={45} r="1.66667" transform="rotate(180 46.3333 45)" fill="#13C296" />
                        <circle cx="2.66536" cy={45} r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296" />
                        <circle cx="46.3333" cy={16} r="1.66667" transform="rotate(180 46.3333 16)" fill="#13C296" />
                        <circle cx="2.66536" cy={16} r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296" />
                        <circle cx="46.3333" cy={59} r="1.66667" transform="rotate(180 46.3333 59)" fill="#13C296" />
                        <circle cx="2.66536" cy={59} r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296" />
                        <circle
                          cx="46.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 46.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 46.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FormWrapper>
  );
};

export default FormHouseKeeper;
