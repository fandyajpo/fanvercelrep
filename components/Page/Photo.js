import Image from "next/future/image";
import ProfilePhoto from "public/fandy.jpg";
import React from "react";
const Photo = () => {
  return (
    <Image
      src={ProfilePhoto}
      className="w-52 h-full border p-4 bg-white shadow-md"
    />
  );
};

export default React.memo(Photo);
