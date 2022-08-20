import React from "react";
import { getLayout } from "components/Layout";
import Router from "next/router";
const Blog = () => {
  const goToDetail = React.useCallback(() => {
    Router.push({
      pathname: "blog/read",
    });
  });

  return (
    <div className="w-full h-full bg-white">
      <div className="grid grid-flow-row grid-cols-2 gap-1 gap-y-4">
        <div
          className="bg-white border w-full h-auto rounded-xl overflow-hidden"
          onClick={goToDetail}
        >
          <div className="bg-green-500 w-full h-44"></div>
          <div className="bg-green-700 w-full h-24"></div>
        </div>
        <div className="bg-white border w-full h-auto rounded-xl overflow-hidden">
          <div className="bg-green-500 w-full h-44"></div>
          <div className="bg-green-700 w-full h-24"></div>
        </div>
        <div className="bg-white border w-full h-auto rounded-xl overflow-hidden">
          <div className="bg-green-500 w-full h-44"></div>
          <div className="bg-green-700 w-full h-24"></div>
        </div>
        <div className="bg-white border w-full h-auto rounded-xl overflow-hidden">
          <div className="bg-green-500 w-full h-44"></div>
          <div className="bg-green-700 w-full h-24"></div>
        </div>
        <div className="bg-white border w-full h-auto rounded-xl overflow-hidden">
          <div className="bg-green-500 w-full h-44"></div>
          <div className="bg-green-700 w-full h-24"></div>
        </div>
        <div className="bg-white border w-full h-auto rounded-xl overflow-hidden">
          <div className="bg-green-500 w-full h-44"></div>
          <div className="bg-green-700 w-full h-24"></div>
        </div>
      </div>
    </div>
  );
};

Blog.getLayout = getLayout;
export default Blog;
