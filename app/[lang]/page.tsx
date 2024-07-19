import HomeIndex from "@/components/home/HomeIndex";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return <HomeIndex lang={lang} />;
}
