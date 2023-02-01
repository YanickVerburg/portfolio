export default function Timeline2() {
  return (
    <div className="peer col-span-2 hidden h-full rounded-[2rem] bg-white p-8 transition-all duration-300 ease-in dark:bg-[#2F3763] dark:text-white sm:order-10 sm:block xl:order-7 xl:block">
      <h1 className=" absolute mt-[-0.5rem] text-2xl font-medium">Timeline</h1>
      <div className="flex ">
        <div className="h-6 w-41/50 px-2 text-right ">
          <h2 className="peer font-medium">Uw Computerstudent</h2>
          <h2 className="mt-[-8px] hidden peer-hover:block hover:block">
            Voor UCS help ik mensen met computerproblemen
          </h2>
        </div>
        <div className="h-6 w-6/50 rounded-full bg-bluelight dark:bg-[#CE81C7]" />
      </div>
      <div className="flex ">
        <div className="h-6 w-39/50  px-2 text-right ">
          <h2 className="peer mt-5 font-medium">Student aan huis</h2>
          <h2 className="mt-[-8px] hidden peer-hover:block hover:block">
            Voor SAH help ik mensen met computerproblemen
          </h2>
        </div>
        <div className="mt-5 h-6 w-8/50 rounded-full bg-bluelight  dark:bg-[#CE81C7]" />
      </div>
      <div className="flex ">
        <div className="h-6 w-39/50 px-2 text-right ">
          <h2 className="peer mt-5 font-medium">Stichting Open Nederland</h2>
          <h2 className="mt-[-8px] hidden peer-hover:block hover:block">
            Voor SON heb ik gewerkt op de hulplijn
          </h2>
        </div>
        <div className=" mt-5 h-6 w-2/50 rounded-full bg-slate-300 dark:bg-slate-500" />
      </div>
      <div className="flex">
        <div className="h-6 w-11/50 px-2 text-right ">
          <h2 className="peer mt-5 font-medium">Babypark</h2>
          <h2 className="mt-[-8px] hidden peer-hover:block hover:block">
            Magazijnmedewerker
          </h2>
        </div>
        <div className=" mt-5 h-6 w-36/50 rounded-full bg-bluelight  dark:bg-[#CE81C7]" />
      </div>
      <div className="mt-5 flex ">
        <h2 className="border-x-3  w-8/50 border-black text-center dark:border-white dark:bg-inherit">
          2016
        </h2>
        <h2 className="border-r-3 w-8/50 border-black text-center dark:border-white dark:bg-inherit">
          2017
        </h2>
        <h2 className="border-r-3 w-8/50 border-black text-center dark:border-white dark:bg-inherit">
          2018
        </h2>
        <h2 className="border-r-3 w-8/50 border-black text-center dark:border-white dark:bg-inherit">
          2019
        </h2>
        <h2 className="border-r-3 w-8/50 border-black text-center dark:border-white dark:bg-inherit">
          2020
        </h2>
        <h2 className="border-r-3 w-8/50 border-black text-center dark:border-white dark:bg-inherit">
          2021
        </h2>
        <h2 className="border-r-3 w-8/50 border-black text-center dark:border-white dark:bg-inherit">
          2022
        </h2>
      </div>
      {/* <div className="flex ">
        <div className="w-8/50  text-right px-2 ">
          <h2 className="font-medium peer">Ichthus College</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Natuur &amp; Techniek
          </h2>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-[#8D5BE9] w-29/50 h-6 rounded-full"></div>
      </div>
      <div className="flex ">
        <div className="w-38/50  text-right px-2 ">
          <h2 className="font-medium peer">Hogeschool Utrecht</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Open ICT
          </h2>
        </div> */}
      {/* <div className=" bg-gradient-to-r from-blue-500 to-[#8D5BE9] w-3/50 h-6 rounded-full"></div>
      </div> */}
    </div>
  );
}
