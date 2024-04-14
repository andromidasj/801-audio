import SupabaseDownloadItems from "~/components/SupabaseDownloadItems";

export default function Page({ params }: { params: { path: [string] } }) {
  return <SupabaseDownloadItems path={params.path} />;
}
