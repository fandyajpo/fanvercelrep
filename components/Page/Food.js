import { Thumbs } from "lib/svg";
import React from "react";
const Food = () => {
  return (
    <div>
      <div className="flex flex-row items-center gap-x-4 border-b pb-2">
        <div className="w-10 h-10 p-2 border rounded-full">
          <Thumbs />
        </div>
        <p className="text-xl md:text-2xl font-bold">Makanan kesukaanku</p>
      </div>
      <div className="py-4 space-y-2">
        <div>
          <p className="text-lg font-bold text-orange-600">Ice Cream</p>
          <p>
            Aku suka banget sama ice cream, apalagi rasa cokelat atau stroberi,
            enak bet. kalo di tambah kepingan cokelat juga enak, semua muanya
            enak deh.
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-orange-600">Brownies Coklat</p>
          <p>
            Brownies cokelat terus cokelatnya lumer kaya keju mozarela, itu enak
            tapi aku belum pernah rasain itu :(
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-orange-600">Jus Alpukat</p>
          <p>
            Dari kecil memang sudah suka jus Alpukat, entah kenapa ada yang
            kurang suka sama buah ini, saya ga tau kenapa.
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-orange-600">
            Daging atau Sayuran?
          </p>
          <p>
            Aku lebih suka daging ketimbang sayur, dari kecilpun gitu, jadi ga
            heran kalo susah untuk disuruh makan sayur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Food);
