import SupabaseDownloadItems from "~/components/SupabaseDownloadItems";

export function generateStaticParams() {
  // Hardcoded for now. Can be dynamically generated, but it would run on
  // every request even locally, which is pretty slow. I just copied the output
  // of the result of recursiveSearch() from the console to the static params array.

  const pathArray: {
    path: string[];
  }[] = [
    { path: ["band-bash"] },
    { path: ["band-bash", "advanced-jazz"] },
    { path: ["band-bash", "intermediate-jazz"] },
    { path: ["band-bash", "lake-mountain"] },
    { path: ["band-bash", "vista-heights"] },
    { path: ["band-bash", "westlake-concert-band"] },
    { path: ["band-bash", "westlake-symphonic-band"] },
    { path: ["band-bash", "westlake-wind-symphony"] },
    { path: ["christmas-concerts"] },
    { path: ["christmas-concerts", "concert-bands"] },
    { path: ["christmas-concerts", "concert-bands", "concert-band"] },
    { path: ["christmas-concerts", "concert-bands", "symphonic-band"] },
    { path: ["christmas-concerts", "concert-bands", "wind-symphony"] },
    { path: ["christmas-concerts", "jazz-bands"] },
    { path: ["christmas-concerts", "jazz-bands", "advanced-jazz"] },
    { path: ["christmas-concerts", "jazz-bands", "intermediate-jazz"] },
    { path: ["spring-concerts"] },
    { path: ["spring-concerts", "concert-bands"] },
    { path: ["spring-concerts", "concert-bands", "concert-band"] },
    { path: ["spring-concerts", "concert-bands", "symphonic-band"] },
    { path: ["spring-concerts", "concert-bands", "wind-symphony"] },
    { path: ["spring-concerts", "jazz-bands"] },
    { path: ["spring-concerts", "jazz-bands", "advanced-jazz"] },
    { path: ["spring-concerts", "jazz-bands", "intermediate-jazz"] },
    { path: ["veterans-day-concert"] },
  ];

  // async function recursiveSearch(path: string[]) {
  //   const { data: folderItems } = await supabase.storage
  //     .from("downloads")
  //     .list(path.join("/") ?? undefined);
  //   console.log("🚀 ~ generateStaticParams ~ folderItems:", folderItems);

  //   if (folderItems) {
  //     for (const item of folderItems) {
  //       if (!item.metadata) {
  //         pathArray.push({ path: [...path, item.name] });
  //         await recursiveSearch([...path, item.name]);
  //       }
  //     }
  //   }
  // }

  // await recursiveSearch([]);

  console.log("🚀 ~ generateStaticParams ~ pathArray:", pathArray);

  return pathArray;
}

export default function Page({ params }: { params: { path: [string] } }) {
  return <SupabaseDownloadItems path={params.path} />;
}
