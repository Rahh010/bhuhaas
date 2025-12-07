import Image from "next/image";

export default function Logo() {
  return (
    <div className="h-[60px] w-[40vw] bg-[#7524A2] fixed top-5 rounded-tr-[30px] rounded-br-[30px] border border-l-0 border-[#9A6AE8] shadow-[0_0_10px_#9A6AE8] z-999">
      <div className="relative w-full h-[70px]">
        <Image
          src="/logo.png"
          alt="photo"
          fill
          className="object-cover"
        />
      </div>    
    </div>
  );
}