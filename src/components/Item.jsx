import React, { useState } from "react";
import Copy from "./icons/Copy";
import Delete from "./icons/Delete.";

const Item = ({ dataList,handleDelete }) => {

  const [copy,setCopy] = useState(false)

  const copyLink = (text) => {
    navigator.clipboard.writeText(text).then(() => setCopy(true))
    setTimeout(() => {
      setCopy(false)
    },1000)
  }

  return (
    <div className="bg-white p-6 my-3 rounded-md shadow flex justify-between items-center text-gray-500">
      <div>
        {copy ? <p className="text-xl font-bold text-green-500">Link copied</p> : <p className="text-xl text-blue-500">{dataList.full_short_link}</p>}
        <p className="text-sm">{dataList.original_link}</p>
      </div>
      <div className="flex gap-2">
        <button className="cursor-pointer" onClick={() => copyLink(dataList.full_short_link)}><Copy/></button>
        <button className="cursor-pointer" onClick={() => handleDelete(dataList.code)}><Delete/></button>
      </div>
    </div>
  );
};

export default Item;
