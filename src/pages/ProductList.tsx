import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Thumbnail from "@/components/Thumbnail";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useTheme } from "@/components/theme-provider";
// import { useRef } from "react";

const ProductList = () => {
  // const scrollRef = useRef<HTMLDivElement | null>(null);

  const { theme } = useTheme();

  const thumbnail = null;

  return (
    <>
      <MaxWidthWrapper>
        <h1 className="text-2xl font-medium p-4">이달의 웹사이트</h1>
        <h1 className="text-2xl font-medium p-4">이달의 리스트</h1>
        <ScrollArea className="whitespace-nowrap rounded-xl">
          <div className="flex flex-row gap-4 cursor-pointer pb-4"
          // ref={scrollRef}
          >
            <Thumbnail src={thumbnail} mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <h1 className="text-2xl font-medium p-4">핫한 키워드</h1>
        <ScrollArea className="whitespace-nowrap rounded-xl">
          <div className="flex flex-row gap-4 cursor-pointer pb-4"
          // ref={scrollRef}
          >
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <h1 className="text-2xl font-medium p-4">추천 키워드</h1>
        <ScrollArea className="whitespace-nowrap rounded-xl">
          <div className="flex flex-row gap-4 cursor-pointer pb-4"
          // ref={scrollRef}
          >
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_01" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
            <Thumbnail src="thumbnail_02" mode={theme} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <h1 className="text-2xl font-medium p-4">전체 키워드</h1>
      </MaxWidthWrapper>
    </>
  );
};

export default ProductList;