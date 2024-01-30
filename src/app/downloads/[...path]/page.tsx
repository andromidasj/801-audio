import DirectorySearch from "~/app/DirectorySearch";

export default function Page({ params }: { params: { path: [string] } }) {
  return <DirectorySearch path={params.path} />;
}
