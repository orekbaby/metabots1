import dynamic from "next/dynamic";

// const MetabotsTabs = dynamic(
//   () => import("@/components/metabots/MetabotsTabs"),
//   {
//     ssr: false,
//   }
// );
interface DashbordLayoutProps {
  children: React.ReactNode;
}

export default async function MetaLayout({ children }: DashbordLayoutProps) {
  return (
    <div className="">
      {/* <MetabotsTabs /> */}
      {children}
    </div>
  );
}
