import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ProductList = () => {
  // const scrollRef = useRef<HTMLDivElement | null>(null);



  return (
    <>
      <MaxWidthWrapper>
        <h1 className="text-2xl font-medium p-4">이달의 웹사이트</h1>
        <h1 className="text-2xl font-medium p-4">이달의 리스트</h1>
      </MaxWidthWrapper>
    </>
  );
};

export default ProductList;