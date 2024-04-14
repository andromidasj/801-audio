import SupabaseDownloadItem from "~/components/SupabaseDownloadItem";

export default function Page({ params }: { params: { path: [string] } }) {
  console.log("🚀 ~ Page ~ params:", params);
  return <SupabaseDownloadItem path={params.path} />;
}
