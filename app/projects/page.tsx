import React from "react";
import { ProjectItem } from "@/components";
import type { Metadata } from "next";
import { DATABASE_ID, TOKEN } from "@/config/index";

export const metadata: Metadata = {
  title: "빡코딩",
  description: "빡코딩 포폴",
};

async function getData() {
  const options = {
    method: "POST",

    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
    },

    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };
  // { cache: 'no-store' }
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    { ...options, cache: "no-store" }
  );

  const projects = await res.json();

  return projects;
}

const Projects = async () => {
  const projects = await getData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10 ">
      <h1 className="text-4xl font-bold sm:text-6xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 m-6 px-20 py-10 gap-8 w-full">
        {projects.results.map((value: any, index: number) => (
          <ProjectItem key={value.id} data={value} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
