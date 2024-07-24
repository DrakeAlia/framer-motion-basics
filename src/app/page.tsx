import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <section className="grid grid-cols-3 p-10 gap-10">
        <div className="bg-slate-800 aspect-sqaure rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect-sqaure rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect-sqaure rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect-sqaure rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect-sqaure rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect-sqaure rounded-lg justify-center flex items-center gap-10"></div>
      </section>
    </div>
  );
}
