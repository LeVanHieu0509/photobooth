export const english = {
  header: {
    menu_1: "Trang chủ",
    menu_2: "Giới thiệu",
    menu_3: "Chủ đề",
    menu_4: "Hỏi đáp",
  },
};

export type FlattenKeys<T> = T extends object
  ? {
      [K in keyof T]-?: `${K & string}${string extends T[K] ? "" : "."}${FlattenKeys<T[K]>}`;
    }[keyof T]
  : "";

export type Language = typeof english;
export type LanguageKey = FlattenKeys<Language>;
