import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

const HomePage = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <header className="flex h-20 w-full items-center justify-around border-b-[1px] border-gray-200 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">Blog App</div>
        <div className="flex items-center space-x-2">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <div>
            <button className="flex items-center space-x-2 rounded-md border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900">
              <div>Write</div>
              <div>
                <FiEdit />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full  border-r border-gray-200">
          <div className="flex w-full flex-col space-y-4 py-10 px-20">
            <div className="flex w-full items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-xl border border-gray-500"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch className="w-max" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full rounded-full py-2 px-4 pl-7 text-sm outline-none placeholder:text-sm placeholder:text-gray-300"
                  placeholder="Search..."
                />
              </label>
            </div>
            <div className="flex w-full items-center justify-end space-x-4">
              <div>My topics:</div>
              <div className="flex items-center space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-3xl bg-gray-300/50 px-4 py-3">
                    tag {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-[90%] items-center justify-between border-b border-gray-200 px-20 pb-5">
            <div>articles</div>
            <div>
              <button className="flex items-center space-x-2 rounded-3xl border border-gray-600 px-5 py-3 font-semibold">
                <div>Following</div>
                <div>
                  <HiChevronDown className="text-xl" />
                </div>
              </button>
            </div>
          </div>
        </main>
        <aside className="col-span-4 h-full w-full">this is sidebar</aside>
      </section>
    </div>
  );
};

export default HomePage;
