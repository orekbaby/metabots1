import dynamic from "next/dynamic";

interface DashbordLayoutProps {
  children: React.ReactNode;
}

export default async function MetaLayout({ children }: DashbordLayoutProps) {
  return <div className="">{children}</div>;
}
