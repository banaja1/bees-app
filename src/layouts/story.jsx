import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon, PlusIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Configurator2,
  Footer,
} from "@/widgets/layout";
import sidebarMenu from "@/sidebarMenu";
import { useMaterialTailwindController, setOpenConfigurator, setOpenConfigurator2 } from "@/context";

export function Story() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={sidebarMenu}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
      {/* <div className="flex-grow p-4 xl:ml-80 overflow-y-auto"> */}
        <DashboardNavbar />
        <Configurator />
        <Configurator2 />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <IconButton
          size="lg"
          color="blue"
          className="fixed bottom-8 right-20 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator2(dispatch, true)}
        >
          <PlusIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {sidebarMenu.map(
            ({ layout, pages }) =>
              layout === "story" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Story.displayName = "/src/layout/story.jsx";

export default Story;
