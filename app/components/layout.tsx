import Background from "@/components/background";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

interface LayoutProps {
  children: React.ReactNode;
  contained?: boolean;
}

export default function Layout({ children, contained = true }: LayoutProps) {
  return (
    <main className="relative mocha bg-ctp-base min-h-screen h-full">
      <Background />
      <Topbar />
      {contained ? (
        <div className="max-w-5xl mx-auto pt-16 pb-20 relative">
          {children}
        </div>
      ) : (
        children
      )}
      <Footer />
    </main>
  );
}
