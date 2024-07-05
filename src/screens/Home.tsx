import Header from "../components/Header";
import NavSidebar from "../components/NavSidebar";
import WorkspaceSidebar from "../components/WorkspaceSidebar";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Header />
        <div className="w-full h-full grid grid-cols-13">
           <WorkspaceSidebar />
           <div className="w-full h-full col-[2_/_span_20] border-[#1D4965] border-2">
           <div className="w-full h-full grid grid-cols-5 ">
           <NavSidebar />
            <div className="w-full h-full col-span-4">
              
            </div>
           </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Home;
