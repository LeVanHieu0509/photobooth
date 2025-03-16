import { useCallback, useEffect, useRef, useState } from "react";
import { Content, ExpandItemWrapper, PlusIcon, SubLinkWrapper, TitleWrapper } from "./styled";
import useWindowResize from "@/hooks/use-window-resize";
import { Spacing } from "@/styles/common";
import Icons from "../icons";
import IconPlus from "./icon-plus";
import { ButtonIcon } from "@/styles/button";

export interface DataExpand {
  title: string;
  children: React.ReactNode;
}

const ExpandItem = ({ data }: { data: DataExpand }) => {
  const [style, setStyle] = useState({ maxHeight: 0 });
  const size = useWindowResize();
  const ref = useRef<any>();

  useEffect(() => {
    if (style.maxHeight !== 0) {
      const height = ref.current.scrollHeight;
      setStyle({ maxHeight: height });
    }
  }, [size]);

  const onClick = useCallback(() => {
    if (style.maxHeight === 0) {
      const height = ref.current.scrollHeight;
      setStyle({ maxHeight: height });
    } else {
      setStyle({ maxHeight: 0 });
    }
  }, [style]);

  return (
    <ExpandItemWrapper>
      <Content>
        <TitleWrapper show={style.maxHeight !== 0} onClick={onClick}>
          {style.maxHeight ? (
            <div className="primary-color" dangerouslySetInnerHTML={{ __html: data.title }}></div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: data.title }}></div>
          )}

          <Spacing />
          <div> {data.children && <PlusIcon show={style.maxHeight !== 0} />}</div>
        </TitleWrapper>

        <SubLinkWrapper ref={ref} style={style}>
          <div className="mt-16" dangerouslySetInnerHTML={{ __html: data.children as string }}></div>
        </SubLinkWrapper>
      </Content>
    </ExpandItemWrapper>
  );
};

export default ExpandItem;
