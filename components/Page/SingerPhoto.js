import Image from "next/image";
import React from "react";
const pengumuman = [
  {
    title: "Liburan",
  },
  {
    title: "Liburan",
  },
  {
    title: "Liburan",
  },
  {
    title: "Liburan",
  },
  {
    title: "Liburan",
  },
  {
    title: "Liburan",
  },
  {
    title: "Liburan",
  },
  {
    title: "Liburan",
  },
  {
    title: "Liburan",
  },
  {
    title: "Liburan",
  },
];

const SingerPhoto = () => {
  return (
    <div className="shadow-sm bg-gray-100 w-full border border-gray-300 rounded-xl overflow-hidden relative pb-2">
      <div className="w-full bg-white border-b flex items-center p-3 gap-x-1">
        <div className="w-3 h-3 rounded-full bg-blue-300" />
        <p className="w-full font-bold text-right">Penyanyi Favoriteku</p>
      </div>

      <div className="overflow-x-scroll flex flex-row w-full ">
        {pengumuman.map((p, i) => {
          return (
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6" key={i}>
              <div className="bg-gray-100 w-44 h-64 border border-gray-300 rounded-xl overflow-hidden">
                <div className="w-full border-b h-44 relative">
                  <Image
                    src={
                      "https://cdn.discordapp.com/attachments/957998627928817684/990511248808501248/unknown.png"
                    }
                    layout={"intrinsic"}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-2">
                  <p>Libur Sekolah</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(SingerPhoto);
