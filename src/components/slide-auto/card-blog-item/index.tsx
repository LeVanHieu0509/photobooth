import { Flex, FlexColumn } from "@/styles/common";
import { ListData } from "..";
import { CardBlogItemWrapper } from "./styled";
import moment from "moment";

const CardBlogItem = ({ item }: { item: ListData }) => {
  return (
    <CardBlogItemWrapper href={item.href ?? "#"}>
      <img src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${item.image}`} alt={item.title} />

      <FlexColumn className="mt-16" style={{ flex: 1 }} justify="space-between">
        <FlexColumn gap={10}>
          <h6 className="">{item.title}</h6>
          <Flex align="center" justify="space-between">
            <p className="primary label-7">{moment(item.date).format("DD.MM.YYYY")}</p>
          </Flex>
        </FlexColumn>
      </FlexColumn>
    </CardBlogItemWrapper>
  );
};

export default CardBlogItem;
