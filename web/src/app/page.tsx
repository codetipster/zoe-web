import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className="bg-portfolioColorBtn text-white">Read More</Button>
      <Button className="bg-heroSectionColor text-white">Read More</Button>
      <Button className="bg-aboutSectionColor text-white">Read More</Button>
    </main>
  );
}
