import { MediaOutput } from "@/@custom-types/graphql";
import { isEmpty } from "lodash";
import moment from "moment";
import { ReadonlyURLSearchParams } from "next/navigation";

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = ["SHOPIFY_STORE_DOMAIN", "SHOPIFY_STOREFRONT_ACCESS_TOKEN"];
  const missingEnvironmentVariables = [] as string[];

  requiredEnvironmentVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      missingEnvironmentVariables.push(envVar);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join(
        "\n"
      )}\n`
    );
  }

  if (process.env.SHOPIFY_STORE_DOMAIN?.includes("[") || process.env.SHOPIFY_STORE_DOMAIN?.includes("]")) {
    throw new Error(
      "Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them."
    );
  }
};

export const formatNumberTwoString = (stt: number) => {
  if (stt < 10) return stt.toString().length > 1 ? stt : "0" + stt.toString();
  return stt;
};

export const coverDateNumberToString = (date: any) => {
  if (date?.length < 10) {
    return date;
  }
  if (/[0-3][0-9]\/[0-1][0-9]\/[1-2]\d{3}/.test(date)) {
    return date;
  }
  if (date && moment(date).isValid()) {
    return moment(date).format("DD/MM/YYYY");
  }
  return date;
};

export const formatNumber = (num: number | string, minimumFractionDigits = 0) => {
  return !isNaN(+num) ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
};

export const removeVietnameseTones = (str: string) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  // str = str.replace(/ + /g, " ");
  // str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  // str = str.replace(
  //   /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|`|-|{|}|\||\\/g,
  //   ""
  // );
  return str;
};

export function validateEmail(email: string) {
  // var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var re = /^([a-zA-Z0-9_.-]*)@[a-zA-Z\-0-9]+(\.[a-zA-Z]{2,})+$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Check valid date format DD/MM/YYYY
 * @param date {string | number} date
 * @returns {boolean} date is valid
 */
export const isValidDate = (date?: string): boolean => {
  if (!date || date?.length < 10) {
    return false;
  }
  return moment(date, "DD/MM/YYYY", true).isValid();
};

export const isIOS = () => {
  return (
    ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
};

export const getMediaData = (data: MediaOutput) => {
  return data?.data.attributes;
};

export const formatDataGraphql = (data: any, type: string) => {
  if (data) {
    return data[type].data.map((item: any) => item.attributes);
  }
};

export const getTextContent = (htmlString: string) => {
  const parser = htmlString?.replace(/<\/?[^>]+(>|$)/g, "");

  return parser;
};

// export const createQueryString = useCallback(
//   (name: string, value: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set(name, value);

//     return params.toString();
//   },
//   [searchParams]
// );
const validatePhoneRegx = (phone: string) => {
  var re = /^(0[9|3|7|8|5]([0-9]{8}))$/i;
  return re.test(phone);
};

export const validateEmpty = (e: string) => (isEmpty(e) || e === "//" ? "Vui lòng điền đủ thông tin" : null);

export const validatePhone = (e: string) =>
  validateEmpty(e) || (!validatePhoneRegx(e) ? "Số điện thoại không đúng định dạng" : null);
