import Image from "next/image";
import { Inter } from "next/font/google";
import { OnRun } from "@/api/api";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
import UserContext from "@/context/userContext";
import { useContext } from 'react';
import { useRouter } from 'next/router';

import axios from "axios";
export default function Home() {
  const [imageCaptcha, setImageCaptcha] = useState(null);
  const [encrypted_response, setEncrypted_response] = useState(null);
  const [mobile, setMobile] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [code, setCode] = useState('');
  const { value, setValue } = useContext(UserContext);
  const router = useRouter();


  const [step, setStep] = useState(1);

  const handleCaptcha = () => {
    axios.get(OnRun + "/authentication/captcha").then((response) => {
      setImageCaptcha(response.data.image);
      setEncrypted_response(response.data.encrypted_response);
    });
  };

  const handleSubmit = () => {
    if (step==1) {
      axios
        .post(OnRun + "/authentication/mobileverification", {
          mobile: mobile,
          captcha: captcha,
          encrypted_response: encrypted_response,
        })
        .then((response) => {
          setStep(2);
        })
        .catch((erorr) => {
          alert(erorr.response.data.message);
        });
    }else{
      axios.post(OnRun+'/authentication/otp',{mobile:mobile, code:code})
      .then(response=>{
        setValue(response.data._id)
        router.push('/panel')
        
      })
      .catch(erorr=>{
        alert(erorr.response.data.message)
      })
    }
  };


  useEffect(handleCaptcha, []);

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100 rtl">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div className="mb-4">
          <p className="text-gray-600">فراسایت</p>
          <h2 className="text-xl font-bold">ورود مدیریت</h2>
        </div>
        <div>
          <input
            disabled={step == 2}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="شماره همراه"
          />
        </div>
        {step == 1 ? (
          <>
            <div>
              <input
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="کد کپچا"
              />
            </div>
            <div>
              {imageCaptcha ? (
                <img
                onClick={handleCaptcha}
                src={`data:image/png;base64,${imageCaptcha}`}
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="کد کپچا"
                />
              ) : null}
            </div>
          </>
        ) : 
        
                <div>
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                    type="text"
                    placeholder="کد تایید"
                  />
                </div>
        
        
        }
        <div>
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
          >
            تایید
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label
              htmlFor="comments"
              className="ml-2 text-sm font-normal text-gray-600"
            >
              مرا نگهدار
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
