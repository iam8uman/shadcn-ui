import Nav from "@/components/Nav";
import UltraNav from "@/components/UntraNav";

export default function Home() {
  return (
    <>
      <div className="container m-10 p-10">
        <div className="my-20">
          <Nav />
        </div>

        <div className="my-20">
          <UltraNav />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl text-center font-serif m-2 underline">
            All About Navigation Bar!
          </h2>
        </div>
      </div>
    </>
  );
}
