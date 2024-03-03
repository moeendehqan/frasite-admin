import UserContext from "@/context/userContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { OnRun } from "@/api/api";
import { useRouter } from "next/router";
import SideBar from "@/src/sidebar";
import Information from "./information";
const Panel = () => {
  const router = useRouter();
  const { value, setValue } = useContext(UserContext);

  const idVerify = () => {
    axios
      .post(OnRun + "/authentication/checkcookies", { _id: value })
      .then((response) => {
        console.log(response.data);
        {
          response.status !== 200;
        }
      })
      .catch((erorr) => {
        router.push("/");
        console.log(erorr);
      });
  };
  useEffect(idVerify, []);

  return (
    <>
      <SideBar />
      <div className="mx-10 p-4 top-0 md:mr-64 sm:mr-80">
        <Information />
      </div>
    </>
  );
};

export default Panel;
