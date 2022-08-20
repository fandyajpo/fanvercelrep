import React from "react";
import Image from "next/future/image";

import IceCream from "public/icecream.jpg";
import Brownis from "public/choko.jpg";

const FoodImage = () => {
  return (
    <div>
      <Image src={IceCream} className="w-44 h-44" />
      <div className="flex items-end justify-end">
        <Image src={Brownis} className="w-44 h-44" />
      </div>
    </div>
  );
};

export default React.memo(FoodImage);
