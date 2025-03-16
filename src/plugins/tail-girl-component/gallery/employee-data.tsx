import { floated } from "@material-tailwind/react/types/components/card";

export interface Employeedata {
  id: number;
  name: string;
  birthdayDay: number;
  bornArea: string;
  experiment: string;
  wish: string;
  ability: string;
  heath: string;
  maritalStatus: string;
  education: string;
  OtherDesription: string;
  src: string;
}

export const EmpoyeeDatalist: Employeedata[] = [
  {
    id: 1,
    name: "Chị Trang",
    birthdayDay: 1983, // Or use "birthday-day": 1983 if you prefer the hyphen
    bornArea: "Đà Nẵng",
    experiment:
      " giúp việc nhà, nấu ăn ngon, chăm bé theo phương pháp hiện đại, massa, rơ lưỡi, tắm rửa, quan sát được bé ốm,",
    wish: " giúp việc nhà, nấu ăn , chăm bé",
    ability: "nhanh nhẹn,không ngại khó, không ngại bẩn",
    heath: "Tốt, leo lầu được, không bị bệnh nền, đi xe máy được",
    maritalStatus: "ly hôn chồng , 1 bé ở với ck, không vướng bận gia đình",
    education: " 12/12",
    OtherDesription: "Làm ở sg, tết ở lại được.",
    src: "/img/cong_dong_7.jpg",
  },
];
