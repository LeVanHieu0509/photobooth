import Button from "@/components/button";
import Link from "next/link";
import React, { useMemo } from "react";

interface ListBlog {
  image: string;
  title: string;
  description: string;
  href: string;
}
const Blog = ({ data }: any) => {
  const fotmatListBlog: ListBlog[] = useMemo(() => {
    return data.data.map((item: any) => ({
      image: item.attributes.cover_img?.data?.attributes.url,
      title: item.attributes.title,
      description: item.attributes.description,
      href: `/tin-tuc/noi-bat/${item.attributes.slug}`,
    }));
  }, []);

  return (
    <>
      <section className="bg-white pb-40 pt-24 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[40px] max-w-[510px] text-center">
                <h2 className="mb-4 font-bold text-primary dark:text-white">TIN TỨC NỔI BẬT</h2>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {fotmatListBlog.slice(0, 3).map((item: ListBlog) => (
              <BlogCard
                href={item.href}
                CardTitle={item.title}
                CardDescription={item.description}
                image={`${process.env.NEXT_GRAPHQL_API_ENDPOINT}${item.image}`}
              />
            ))}
          </div>

          <ul className="flex flex-wrap justify-center items-center mt-16">
            <li className="">
              <Link
                href="/tin-tuc/noi-bat"
                className="bg-yellow inline-flex items-center justify-center rounded-md  px-4 py-3 text-center text-base font-medium text-white hover:opacity-80 lg:px-7"
              >
                Xem Thêm
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, href, CardTitle, CardDescription }: any) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 pointer">
      <div className="mb-10 w-full h-full hover:shadow-md">
        <div className="sm-p-0 p-16">
          <a href={href}>
            <div className="mb-8 overflow-hidden rounded-sm lg:h-[200px]">
              <img src={image} alt="" className="w-full object-cover h-full" />
            </div>
            <div>
              <h3 className="mb-4 mt-10 inline-block text-xl font-semibold text-dark ">{CardTitle}</h3>
              <div
                className="text-base text-body-color dark:text-dark-6 underline-offset-2"
                dangerouslySetInnerHTML={{ __html: CardDescription }}
              ></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
