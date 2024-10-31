import { Views } from "@/data/data";

const ActionsAbout = () => {
  return (
    <section>
      <div className="mt-[120px] grid grid-cols-1 px-2 sm:px-0 gap-y-4 lg:gap-y-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-x-14  w-full">
        {Views.map((view) => (
          <div
            key={view.icon}
            className="border rounded-sm flex flex-col items-center py-8 px-8   hover:shadow-xl hover:border-hidden transition-all duration-200 hover:shadow-btn hover:bg-btn hover:text-white fill-black"
          >
            <div className="p-2 rounded-full bg-[#d2ffd4]  ">
              <div className="bg-black rounded-full p-2 flex justify-center items-center   ">
                <img className=" " src={view.icon} alt={view.title} />
              </div>
            </div>
            <div className="text-3xl font-semibold mt-6 ">{view.views}k</div>
            <p className="">{view.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActionsAbout;
