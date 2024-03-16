import UserContext from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/router";
import SideBar from "@/src/sidebar";
import { OnRun, domin } from "@/api/api";
import { useContext, useEffect, useState } from "react";

const Static = () => {
  const { value, setValue } = useContext(UserContext);
  const [name, setName] = useState();
  const [count, setCount] = useState();
  const [domain, setDomain] = useState(domin);
  const [status, setStatus] = useState(true);
  const [icon, setIcon] = useState("");
  const [data, setData] = useState({
    _id: value,
    Title: name,
    Domain: domain,
    Number: count,
    Status: status,
    Icon: icon || null,
  });
  const router = useRouter();

  const Setup = () => {
    axios
      .post(OnRun + "/statistics/setup", {
        _id: value,
        Title: name,
        Domain: domain,
        Number: count,
        Status: status,
        Icon: icon || null,
      })
      .then((response) => {
        setData(response.data);
        console.log(setData(response.data));
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const idVerify = () => {
    if (setValue!== null) {
      axios
        .post(OnRun + "/authentication/checkcookies", { _id: value })
        .then((response) => {
          response.status !== 200;
        })
        .catch((erorr) => {
          console.log(erorr);
        
          // router.push("/");
        });
    } else {
      null
      // router.push("/");
    }
  };
  useEffect(idVerify, []);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   Setup();
  // }
  console.log("data isss", Setup());
  return (
    <>
      <SideBar />
      <div className="mx-10 p-4 top-0 md:mr-64 sm:mr-80">
        <form onSubmit={Setup}>
          <div className=" bg-white rounded-lg m-5 p-10 shadow-lg">
            <div className="py-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                آمار
              </h3>
              <button

                type="submit"
                className="focus:outline-none flex justify-end text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                ذخیره
              </button>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    <p>عنوان:</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={name}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    <p>مقدار:</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={count}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={(e) => setCount(e.target.value)}
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Static;
