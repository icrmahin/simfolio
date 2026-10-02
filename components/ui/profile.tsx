import Image from "next/image";

export default function Profile() {
  return (
    <section>
      <div className="inline-block rounded-3xl shadow-2xl shadow-[#0a0e15]/40">
        <Image
          src="/pfp.png"
          alt="Profile picture"
          width={80}
          height={80}
          className="h-20 w-20 rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
