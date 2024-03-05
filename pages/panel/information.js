import { OnRun } from "@/api/api";
import UserContext from "@/context/userContext";
import {
  DocumentArrowDownIcon,
  PhotoIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const Information = () => {
  const { value, setValue } = useContext(UserContext);
  const [logo, setLogo] = useState(String || undefined);
  const [name, setName] = useState(String || undefined);
  const [domain, setDomain] = useState(String || undefined);
  const [telePhone, setTelePhone] = useState(String || undefined);
  const [address, setAddress] = useState(String || undefined);
  const [nationalID, setNationalNumber] = useState(String || undefined);
  const [about, setAbout] = useState(String || undefined);
  const [socialMedia, setSocialMedia] = useState({});
  const [theme, setTheme] = useState(Number);
  const [catalog, setCatalog] = useState(String || undefined);
  const [description, setDescription] = useState(String || undefined);
  const [keyword, setKeyword] = useState(String || undefined);
  const [data, setData] = useState({
    id: "",
    Logo: logo,
    Name: name,
    Domain: domain,
    Telephone: telePhone,
    Adress: address,
    NationalID: nationalID,
    Aboutus: about,
    Socialmedia: socialMedia,
    Theme: theme,
    Catalog: catalog,
    Description: description,
    Keyword: keyword,
  });
  const getSetup = () => {
    console.log("dataaaa isssss", data);
    axios
      .post(OnRun + "/information/setup", { _id: value, data })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("logoooooo", data.Logo);
  useEffect(getSetup, []);
  return (
    <>
      <div className=" bg-white rounded-lg m-5 p-10 shadow-lg">
        <div className="py-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            اطلاعات پایه
          </h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                لوگو
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="mt-2 flex items-center gap-x-3">
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={data.Logo}
                      alt=""
                      id="Logo"
                    />
                  </div>
                  <label
                    htmlFor="file-upload"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <span>تغییر عکس</span>
                    <input
                      id="Logo"
                      name="file-upload"
                      type="file"
                      onChange={(e) => e.target.value(setLogo())}
                      className="sr-only "
                    />
                  </label>
                </div>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <p>نام:</p>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  id="first-name"
                  value={name}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
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
                  value={telePhone}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <p>دامین:</p>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  id="first-name"
                  value={domain}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <p> شناسه‌ ملی:</p>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  id="first-name"
                  value={nationalID}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <p> کلمه کلیدی:</p>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  id="first-name"
                  value={keyword}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <p> درباره ما:</p>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={about}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <p> توضیحات :</p>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={description}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </dd>
            </div>
            {/* {Data.map((item) => (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  {item.name}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    id="first-name"
                    value={item.value}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                  />
                </dd>
              </div>
            ))} */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                تم
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="inline-flex items-center ml-2 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  خاکستری
                </span>
                <span className="inline-flex items-center ml-2 rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  قرمز
                </span>
                <span className="inline-flex items-center ml-2 rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  زرد
                </span>
                <span className="inline-flex items-center ml-2 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  سبز
                </span>
                <span className="inline-flex items-center ml-2 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  آبی
                </span>
                <span className="inline-flex items-center ml-2 rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                  نیلی
                </span>
                <span className="inline-flex items-center ml-2 rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                  بنفش
                </span>
                <span className="inline-flex items-center ml-2 rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                  صورتی
                </span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                شبکه های اجتماعی
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="flex flex-row">
                  <div className="flex flex-row ml-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="2em"
                      width="2em"
                      className="ml-2"
                    >
                      <path d="M7 2 H17 A5 5 0 0 1 22 7 V17 A5 5 0 0 1 17 22 H7 A5 5 0 0 1 2 17 V7 A5 5 0 0 1 7 2 z" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                    </svg>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="instagram @"
                      value={socialMedia}
                      className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="flex flex-row ml-2">
                    <svg
                      fill="none"
                      viewBox="0 0 15 15"
                      height="2em"
                      width="2em"
                      className="ml-2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        d="M14.5 1.5l-14 5 4 2 6-4-4 5 6 4 2-12z"
                      />
                    </svg>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="telegram@"
                      value={socialMedia}
                      onChange={(e) => e.target.value(setSocialMedia)}
                      className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                کاتالوگ
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <DocumentArrowDownIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer px-1 rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only "
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PDF upload to 10MB
                    </p>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};
export default Information;
