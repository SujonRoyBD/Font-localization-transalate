import Navbar from "@/app/Components/Shared/Navbar";

export default function SiteLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

