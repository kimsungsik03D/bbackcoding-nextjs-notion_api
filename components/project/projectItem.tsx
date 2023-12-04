import React from "react";
import Image from "next/image";

const projectItem = ({ data }: any) => {
  const title = data.properties.Name.title[0]?.plain_text;
  const github = data.properties.github.url;
  const Youtube = data.properties.Youtube.url;
  const Description = data.properties.Description.rich_text[0]?.plain_text;
  const imgSrc = data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const startDateString = data.properties.workperiod.date.start;
  const endDateString = data.properties.workperiod.date.end;

  const calculatedData = (start: string, end: string) => {
    const startDataArray = start.split("-");
    const endDateArray = end.split("-");

    const startData = new Date(
      Number(startDataArray[0]),
      Number(startDataArray[1]),
      Number(startDataArray[2])
    );
    const endData = new Date(
      Number(endDateArray[0]),
      Number(endDateArray[1]),
      Number(endDateArray[2])
    );

    const diffinMs = Math.abs(Number(endData) - Number(startData));
    const result = diffinMs / (1000 * 60 * 60 * 24);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl h-3/6 object-cover"
        src={imgSrc}
        alt="cover"
        width={450}
        height={10}
        // layout="responsive"
        // objectFit="cover"
        sizes="fill"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold"> {title}</h1>
        <h3 className="mt-4 text-xl"> {Description}</h3>
        <a href={github}> 깃헙 바로가기</a>
        <a href={Youtube}> 유튜브 바로가기</a>
        <p className="my-1">
          작업기간 : {startDateString} ~ {endDateString} (
          {calculatedData(startDateString, endDateString)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((value: any) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={value.id}
            >
              {value.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projectItem;
