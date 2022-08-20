import React from "react";
const AboutMe = () => {
  return (
    <div>
      <p className="text-xl md:text-2xl font-bold border-b pb-2">
        Halo panggilanku Fandy
      </p>
      <div className="py-4">
        <p>
          Aku adalah Fullstack Developer, saya berasal dari Bali, kelahiran 2003
          dan hobi saya adalah beatbox.
        </p>
        <p>
          Sebenarnya aku gak terlalu suka dunia programming karena dipikiran
          saya, suatu program harus di maintenance terus menerus, harus
          dikembangin, semisal ada kejanggalan harus di perbaikin dan semua hal
          ini paling gak aku suka, ibaratnya kita terikat sama program yang kita
          buat gitu.
        </p>
        <p>
          Tapi gimana lagi selain harus di dunia IT, aku gak tau kalo aku ini
          bisa lakuin hal apa aja, alias masi bingung.
        </p>
      </div>
    </div>
  );
};

export default React.memo(AboutMe);
