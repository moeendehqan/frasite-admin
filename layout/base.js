import UserContext from "@/context/userContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { OnRun } from "@/api/api";
import { useRouter } from "next/router";
import SideBar from "@/src/sidebar";
const BaseLayout = ({ children }) => {
  const router = useRouter();
  const { value, setValue } = useContext(UserContext);

  const idVerify = () => {
    if (value) {
      axios
        .post(OnRun + "/authentication/checkcookies", { _id: value })
        .then((response) => {
            response.status !== 200;
        })
        .catch((erorr) => {
          router.push("/");
        });
        
      }else{
      router.push("/");

    }
  };
  useEffect(idVerify, []);

  return (
    <>

      <SideBar />
      
      <div className="mx-10 p-4 top-0 md:mr-64 sm:mr-80">
        {children}
      </div>
    </>
  );
};

export default BaseLayout;
