import { Link } from "@tanstack/react-router";

import { MdDashboard, MdOutlineMoreHoriz } from "react-icons/md";
import { RiPieChartFill } from "react-icons/ri";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const TabNavigation = () => {
  //   const { data: getPlatform } = useGetPlatformQuery();
  //   const [tab, setTab] = useState("/app");
  //   const location = useLocation();

  //   useEffect(() => {
  //     setTab(location.pathname);
  //   }, [location.pathname]);

  //   const getTabClass = (path) => {
  //     return tab === path ? "text-[#E5B63C]" : "text-white";
  //   };

  return (
    <div className="w-full h-[200px] md:hidden z-50">
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-10 bg-secondary rounded-t-3xl"
      >
        <div id="tabs" className="flex justify-between pb-[60px]">
          <Link
            to="/"
            className="w-full mx-[23px] mt-[10px] justify-center inline-block text-center pt-2 pb-1"
          >
            <MdDashboard className="inline-block w-7 h-7 mb-1 text-primary" />
            <span className="tab tab-whishlist block text-xs text-primary">
              Dashboard
            </span>
          </Link>

          <Link
            to="/about"
            className="w-full mx-[23px] mt-[10px] justify-center inline-block text-center pt-2 pb-1"
          >
            <BiSolidBarChartAlt2 className="inline-block w-7 h-7 mb-1 text-secondary-foreground" />
            <span className="tab tab-whishlist block text-xs text-secondary-foreground">
              Market
            </span>
          </Link>

          <Link
            to="/setting"
            className="w-full mx-[23px] mt-[10px] justify-center inline-block text-center pt-2 pb-1"
          >
            <RiPieChartFill className="inline-block w-7 h-7 mb-1 text-secondary-foreground" />
            <span className="tab tab-home block text-xs text-secondary-foreground">
              Portfolio
            </span>
          </Link>

          <Link
            to="/"
            className="w-full mx-[23px] mt-[10px] justify-center inline-block text-center pt-2 pb-1"
          >
            <MdOutlineMoreHoriz className="inline-block w-7 h-7 mb-1 text-secondary-foreground" />
            <span className="tab tab-account block text-xs text-secondary-foreground">
              More
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TabNavigation;
