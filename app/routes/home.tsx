import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Applio" },
    { name: "description", content: "Smart analysis for your resume" },
  ];
}

export default function Home() {
  return <main >
    </main>;
}
