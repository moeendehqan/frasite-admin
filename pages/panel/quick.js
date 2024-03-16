import UserContext from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/router";
import SideBar from "@/src/sidebar";
import { OnRun, domin } from "@/api/api";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";

const Static = () => {
  const { value, setValue } = useContext(UserContext);
  const [domain, setDomain] = useState(domin);
  const [Url, setUrl] = useState("");
  const [Title, setTitle] = useState("");
  const [data, setData] = useState({
    Domain: domain,
    Title: "",
    Url: "",
    _id: value,
  });
  const router = useRouter();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .get("?_limit=10")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const Setup = (title, url) => {
  //   axios
  //     .post(OnRun + "/quickaccess/setup", {
  //       Title: title,
  //       Url: url,
  //       Domain: domain,
  //       _id: value,
  //     })
  //     .then((res) => {
  //       setData([res.data, ...data]);
  //     });
  //   setData({ Title: "", Title: "", Domain: domain, _id: value });
  // };
  const Setup = () => {
    e.preventDefault();
    axios
      .post(OnRun + "/quickaccess/setup", data)
      .then((response) => {
        setData(response.data);
        console.log(response);
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
          router.push("/");
        });
    } else {
      router.push("/");
    }
  };
  useEffect(idVerify, []);

  return (
    <>
      <SideBar />
      <div className="mx-10 p-4 top-0 md:mr-64 sm:mr-80">
        <>
          <div className=" bg-white rounded-lg m-5 p-10 shadow-lg">
            <div className="py-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                دسترسی سریع
              </h3>
              <button
                onClick={Setup}
                type="button"
                className="focus:outline-none flex justify-end text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                ذخیره
              </button>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    <p>عنوان</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={data.Title}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    <p>url</p>
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      id="first-name"
                      value={data.Url}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Static;


// import React, { useState } from "react";
// import axios from "axios";

// const AddPost = () => {
//   // State to store the form data
//   const [formData, setFormData] = useState({
//     title: "",
//     body: "",
//   });

//   // Function to handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Function to submit the form data using Axios
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
//       setFormData({ title: "", body: "" });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="title">Title:</label>
//       <input
//         type="text"
//         name="title"
//         value={formData.title}
//         onChange={handleChange}
//       />
//       <br />
//       <label htmlFor="body">Body:</label>
//       <textarea
//         name="body"
//         value={formData.body}
//         onChange={handleChange}
//       />
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AddPost;