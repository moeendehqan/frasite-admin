import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import UserContext from "@/context/userContext";
import axios from "axios";
import { OnRun } from "@/api/api";
import { useRouter } from "next/router";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const { value, setValue } = useContext(UserContext);

  const getMenu = () => {
    axios
      .post(OnRun + "/menu/list", { id: value })

      .then((response) => {
        setData(response.data);
        console.log("dataaaa", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getMenu, []);
  const [data, setData] = useState([{ url: "", title: "" }]);
  const router = useRouter();
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const pathname = usePathname();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = (target) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (key) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="block fixed top-0 right-0 z-40 w-64 rounded-l-lg shadow-lg h-screen transition-transform -translate-x-full md:hidden">
        <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              داشبورد
            </Typography>
          </div>
          <List>
            <hr className="my-2 border-blue-gray-50" />
            {data.map((item) => (
              <ListItem
                onClick={() => {
                  // pathname.includes(item.url)
                  router.push("/panel/" + item.url);
                }}
              >
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                {item.title}
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </>
  );
};

export default SideBar;
