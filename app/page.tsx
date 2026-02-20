import ThreeDCardDemo from "@/components/3d-card-demo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Button>Click me</Button>
      <h1 className="text-lg bg-red-800">Hello world</h1>
      <ThreeDCardDemo />
      <div className="p-4 ">
        <p>Hello World</p>
        <span>Hover me</span>
      </div>
    </>
  );
}
