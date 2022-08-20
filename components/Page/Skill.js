import React from "react";
import { Checker } from "lib/svg";
const Skill = () => {
  return (
    <div>
      <div className="flex flex-row items-center gap-x-4 border-b pb-2">
        <div className="w-10 h-10 p-2 border rounded-full">
          <Checker />
        </div>
        <p className="text-xl md:text-2xl font-bold">
          Kemampuanku yang ku rasa bisa
        </p>
      </div>
      <div className="py-4 space-y-2">
        <div>
          <p className="text-lg font-bold text-blue-600">Bahasa Pemrograman</p>
          <div className="flex items-center gap-x-2 py-2">
            <div className="bg-orange-500 px-4 py-2 rounded-full text-white text-sm md:text-base lg:text-xl font-bold flex items-center justify-center">
              HTML
            </div>
            <div className="bg-blue-500 px-4 py-2 rounded-full text-gray-800 text-sm md:text-base lg:text-xl font-bold flex items-center justify-center">
              CSS
            </div>
            <div className="bg-yellow-500 px-4 py-2 rounded-full text-gray-800 text-sm md:text-base lg:text-xl font-bold flex items-center justify-center">
              JS
            </div>
          </div>
          <p>
            Bahasa pemrograman yang aku PD adalah yang di atas itu bulet bulet
            gitu.
          </p>
          <p>
            Terus menerus mengkoding, skill kuh makin naik, lalu aku pindah dari
            native ke framework dibawah :
          </p>
          <div className="flex items-center gap-x-2 py-2">
            <div className="bg-black border border-gray-500 px-4 py-2 rounded-full text-white text-sm md:text-base lg:text-xl font-bold flex items-center justify-center">
              NEXTJS
            </div>
            <div className="bg-emerald-500 border border-emerald-500 px-4 py-2 rounded-full text-gray-800 text-sm md:text-base lg:text-xl font-bold flex items-center justify-center">
              TAILWIND
            </div>
            <div className="bg-white border border-green-500 px-4 py-2 rounded-full text-green-500 text-sm md:text-base lg:text-xl font-bold flex items-center justify-center">
              NODEJS
            </div>
          </div>
          <p>Sampai saat ini aku masih pakai NextJS Tailwind</p>
        </div>
        <div>
          <p className="text-lg font-bold text-blue-600">User Interface</p>
          <p>
            Aku rasa semua orang bisa untuk ngebuat user interface, karena ini
            hanya butuh Html, Css sama Javascript aja loh, tapi selain itu bisa
            juga pake bahasa atau framework lain, gatau deh.
          </p>
          <p>
            Insya&apos;allah aku bisa handle untuk user interface ini, tapi kalo
            si UI UX atau Designer ngebuat hal yang expert atau segala macem,
            aku bakal pening.
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-blue-600">Rest API</p>
          <p>
            Secara singkat API itu penghubung antara database dengan program
            kamu. Kamu bisa ambil data atau nampilin data di program kamu terus
            si data itu ambilnya dari DB.
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-blue-600">
            Performance Optimization
          </p>
          <p>
            Di react itu kalo kita ga gunain state atau hooks dengan bener,
            bakal pengaruh sama kinerja aplikasi yang kamu buat.
          </p>
          <p>
            Ada yang namanya rerendered component, jadi si component ini ke
            render terus padahal contentnya sama, seharusnya ga gitu dong.
            Seharusnya semua component di render hanya sekali dan bisa dirender
            lagi di kondisi tertentu, performance optimization ini aku baru
            paham dikit, jadi belum terlalu jagolah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Skill);
