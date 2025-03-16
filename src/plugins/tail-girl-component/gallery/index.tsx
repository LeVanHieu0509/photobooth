import { HousekeeperOutput } from "@/@custom-types/graphql";
import { Alert } from "@/components/alert";
import { GET_HOUSEKEEPER } from "@/graphql/queries/blog";
import { formatDataGraphql, formatNumber } from "@/utils";
import { useLazyQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GalleryWrapper } from "./styled";

interface GalleryProps {}

const Gallery = ({}: GalleryProps) => {
  const [housekeepers, setHousekeeper] = useState<HousekeeperOutput[]>([]);

  const [getHousekeeper] = useLazyQuery<HousekeeperOutput[]>(GET_HOUSEKEEPER, {
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    getHousekeeper()
      .then(({ data }) => {
        const formatData = formatDataGraphql(data, "housekeepers");
        if (formatData) {
          setHousekeeper(formatData);
        }
      })
      .catch((e) => {
        Alert("ERROR", "");
        console.log(e);
      });
  }, []);

  return (
    <GalleryWrapper>
      <section className="sec_community pt-50">
        <div className="wraper">
          <div className="row row_column">
            <div className="w-full lg:w-2/3">
              <h3 className="ttl text-primary fnt_bold fz-28 pt-50">
                <p>
                  <span style={{ fontFamily: "helvetica, arial, sans-serif", fontSize: "14pt" }}>
                    HomeEase được xây dựng nền móng từ năm 2024 với tiền thân là cộng đồng kết nối việc làm Toàn Quốc –
                    cộng đồng quy tụ đối tượng tìm kiếm việc lớn nhất Việt Nam cho tới bây giờ.
                  </span>
                </p>
              </h3>
            </div>

            {housekeepers.length >= 1 && (
              <div className="lg:w-1/3">
                <div className="images4">
                  <div className="imgDrop">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${housekeepers[0].image.data.attributes.url}`}
                      alt={housekeepers[0].name}
                      className="mainImg"
                    />
                  </div>
                  <div className="content flexBox center bottom">
                    <div className="inner h-full">
                      <div className="">
                        <h3>{housekeepers[0].name}</h3>
                      </div>
                      <div className="text mt-16">
                        <p className="body-2" style={{ fontFamily: "helvetica, arial, sans-serif" }}>
                          {housekeepers[0].description}
                        </p>
                        {housekeepers[0].sallary ? (
                          <p className="body-1" style={{ fontFamily: "helvetica, arial, sans-serif" }}>
                            Mức lương mong muốn: {formatNumber(housekeepers[0].sallary)}
                          </p>
                        ) : null}

                        <ul className="flex flex-wrap justify-center items-center mt-16">
                          <li className="">
                            <Link
                              href="/dang-ky-thong-tin/dang-ky-chu-nha"
                              className="bg-yellow inline-flex items-end justify-center rounded-md  px-2 py-2 text-center text-base font-medium text-white hover:opacity-99 lg:px-2"
                            >
                              Tư vấn ngay!
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="row row_column">
            {housekeepers.length > 1 &&
              housekeepers.slice(1, housekeepers.length).map((item) => (
                <div className="lg:w-1/3">
                  <div className="images4">
                    <div className="imgDrop">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${item.image.data.attributes.url}`}
                        alt={item.name}
                        className="mainImg"
                      />
                    </div>
                    <div className="content flexBox center bottom">
                      <div className="inner h-full">
                        <div className="">
                          <h3>{item.name}</h3>
                        </div>
                        <div className="text mt-16">
                          <p className="body-2" style={{ fontFamily: "helvetica, arial, sans-serif" }}>
                            {item.description}
                          </p>
                          {item.sallary ? (
                            <p className="body-1" style={{ fontFamily: "helvetica, arial, sans-serif" }}>
                              Mức lương mong muốn: {formatNumber(item.sallary)}
                            </p>
                          ) : null}

                          <ul className="flex flex-wrap justify-center items-center mt-16">
                            <li className="">
                              <Link
                                href="/dang-ky-thong-tin/dang-ky-chu-nha"
                                className="bg-yellow inline-flex items-end justify-center rounded-md  px-2 py-2 text-center text-base font-medium text-white hover:opacity-99 lg:px-2"
                              >
                                Tư vấn ngay!
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </GalleryWrapper>
  );
};

export default Gallery;
