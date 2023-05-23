import { React } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { useStateContext } from "../openContext";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 py-3 rounded-lg text-white text-md m-2 bg:main-blue";
  const normalLink =
    "flex items-center gap-5 pl-4 py-3 rounded-lg text-md text-black hover:bg-main-blue hover:text-white m-2";

  return (
    <div className="m-2 md:mt-8 md:pt-8 sidebar h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="flex justify-end">
        <Tooltip title="close" placement="bottom-end">
          <div className="md:hidden">
            <IconButton
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              sx={{
                padding: "0.75rem",
              }}
              size="large"
            >
              <CancelOutlinedIcon fontSize="inherit" />
            </IconButton>
          </div>
        </Tooltip>
      </div>
      <div>
        {links.map((item) => (
          <div key={item.title}>
            <p className="text-center p-3 text-3xl font-bold">
              <span className="uppercase">Afi</span> Dashboard
            </p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#1E3440" : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {link.icon}
                <span className="capitalize">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
