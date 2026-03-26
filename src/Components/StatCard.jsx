import React from "react";

const StatCard = ({title,value,icon,color}) => {
  return (

    <div className="bg-white p-6 rounded-lg shadow flex justify-between">

      <div>

        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <h2 className="text-2xl font-bold mt-1">
          {value}
        </h2>

      </div>

      <div className={`text-2xl ${color}`}>
        {icon}
      </div>

    </div>

  );
};

export default StatCard;