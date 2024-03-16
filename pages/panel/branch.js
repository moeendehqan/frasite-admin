import UserContext from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/router";
import SideBar from "@/src/sidebar";
import { OnRun, domin } from "@/api/api";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";

const Static = () => {
  const { value, setValue } = useContext(UserContext);
  const [Types, setTypes] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [domain, setDomain] = useState(domin);
  const [status, setStatus] = useState(true);
  const [Address, setAddress] = useState("");
  const [Province, setProvince] = useState("");
  const [City, setCity] = useState("");
  const [Code, setCode] = useState("");

  const router = useRouter();

  const Setup = () => {
    axios
      .post(OnRun + "/branch/setup", {
        _id: value,
        Types: Types,
        Domain: domain,
        Telephone: Telephone,
        Status: status,
        Address: Address,
        Province: Province,
        City: City,
        Code: Code,
      })
      .then((response) => {
        console.log(response.data);
        setTypes(response.data);
        setDomain(response.data);
        setTelephone(response.data);
        setStatus(response.data);
        setAddress(response.data);
        setProvince(response.data);
        setCity(response.data);
        setCode(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const idVerify = () => {
    if (value) {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    Setup();
    console.log(Setup());
  };

  return (
    <>
      <SideBar />

      <div className="mx-5 px-4 top-0  md:mr-64 sm:mr-80 ">
        <form onSubmit={handleSubmit}>
          <div className=" bg-white rounded-lg m-5 w-full p-10 shadow-lg">
            <div className="py-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                شعب
              </h3>
              <button
                // onClick={ }
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
                    <p>نوع</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={Types}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={(e) => setTypes(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    <p>آدرس:</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={Address}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    <p>استان:</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={Province}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={(e) => setProvince(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    <p>شهر:</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={City}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    <p>کد:</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={Code}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    <p>تلفن:</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={Telephone}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={(e) => setTelephone(e.target.value)}
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
