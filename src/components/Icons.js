const Icons = ({ icon, iconText }) => {
  return (
    <div className="transition-duration-300 group flex cursor-pointer items-center gap-4 p-3 transition ease-in-out hover:rounded-2xl hover:bg-[#FAFAFA] dark:hover:bg-lightDark lg:pr-20">
      <i className="text-[14px] group-hover:scale-[1.05] group-hover:fill-black">
        {icon}
      </i>
      <p className="hidden text-[16px] group-active:font-bold lg:block">
        {iconText}{" "}
      </p>
    </div>
  );
};

export default Icons;
