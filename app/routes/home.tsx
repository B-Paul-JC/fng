import type { Route } from "./+types/home";
import { Welcome } from "../welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Converter App" },
    {
      name: "description",
      content: "An app for converting files from docx to latex",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
