import { Header, MainContent, Navigation } from "@/components/layout";

export const HomePage = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-[#fafbfc] overflow-x-hidden"
      data-model-id="2506:56525"
    >
      <Header />
      <div className="flex flex-1 w-full">
        <Navigation />
        <MainContent />
      </div>
    </div>
  );
};
