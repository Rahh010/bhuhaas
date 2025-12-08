import Image from "next/image";

export default function Logo() {
  return (
    <div className="
      fixed top-5 z-999
      h-[60px] w-[250px]
      bg-[#7524A2]
      rounded-tr-[30px] rounded-br-[30px]
      border border-l-0 border-[#9A6AE8]
      shadow-[0_0_10px_#9A6AE8]
      transition-all duration-300 ease-in-out

    ">
    <div className="relative ml-15 w-[40%] h-[60px] transition-all duration-300 ease-in-out">
      <Image
        src="/bhuhaaslogo.png"
        alt="photo"
        fill
        className="object-fit drop-shadow-[0_0_20px_white] transition-all duration-300 ease-in-out"
      />
    </div>
    </div>
  );
}