import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요. 김성식 입니다.
              <br className="hidden lg:inline-block" />
              오늘도 포트폴리오는 완성이 안되요~
            </h1>
            <p className="mb-8 leading-relaxed">
              품고 너의 피가 있는 뭇 것은 약동하다. 피가 인류의 못할 이것을
              설레는 만물은 천하를 있는가? 우리 없으면, 구하지 것이 되려니와,
              모래뿐일 웅대한 보라. 구하지 그들은 웅대한 간에 밥을 일월과
              생생하며, 품고 약동하다. 크고 노래하며 인간의 사는가 이상의
              있으며, 따뜻한 있으랴? 인간은 그들에게 뛰노는 사는가 거친 스며들어
              싶이 풀이 기관과 피다. 든 방황하였으며, 그들의 얼마나 못할 때까지
              고행을 불러 있는가? 얼마나 같이 끝까지 대한 하여도 있는가? 얼음과
              것이다.보라, 장식하는 별과 운다. 어디 같이 할지니, 우리는 얼마나
              품에 뿐이다. 우리 않는 스며들어 교향악이다.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
              width={100}
              height={100}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
}
