import React from "react";

const MetaverseAssests = () => {
  return (
    <div className="w-3/5 mx-auto flex flex-col gap-10 py-10">
      <p className="text-3xl">
        Collection of original assets owned by users to be transferred to the
        metaverse:
      </p>
      <div className="flex justify-between gap-5">
        <div className="flex flex-col gap-5 border-l-8 border-l-yellow-400 pl-4">
          <p className="text-4xl font-semibold">113’652</p>
          <p className="text-3xl">Land Plots</p>
        </div>
        <div className="flex flex-col gap-5 border-l-8 border-l-yellow-400 pl-4">
          <p className="text-4xl font-semibold">39,314</p>
          <p className="text-3xl">Buildings</p>
        </div>
        <div className="flex flex-col gap-5 border-l-8 border-l-yellow-400 pl-4">
          <p className="text-4xl font-semibold">83/105</p>
          <p className="text-3xl">Districts</p>
        </div>
        <div className="flex flex-col gap-5 border-l-8 border-l-yellow-400 pl-4">
          <p className="text-4xl font-semibold">94’564</p>
          <p className="text-3xl">Citizens</p>
        </div>
      </div>
    </div>
  );
};

export default MetaverseAssests;
