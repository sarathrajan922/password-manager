// import { Input } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Search from "./search";
import { DefaultPagination } from "./pagination";
import { AddPassword } from "../../features/Axios/user/addPassword";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getAllPasswords } from "../../features/Axios/user/AllPasswords";
import { deletePassword } from "../../features/Axios/user/deletePassword";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  password: Yup.string().required("Password is required"),
});

const MainSection = () => {
  const notify = (type, message) => {
    if (type === "err") {
      toast.error(`${message}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast(message);
    }
  };
  const [passwordData, setPasswordData] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    getAllPasswords().then((response) => {
      setPasswordData(response.reverse());
    });
  }, [status]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const removePasswords = (title) => {
    deletePassword(title).then((response) => {
      if (response) {
        notify("success", "Password Deleted Successfully");
        setStatus(!status);
      } else {
        notify("err", "something went wrong");
      }
    });
  };

  return (
    <>
      <div className="flex flex-row w-full  max-h-screen">
        <div className="w-full flex ">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Password Manager
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <Formik
                initialValues={{ title: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  // Handle form submission here

                  AddPassword(values).then((response) => {
                    if (response === "title already exists") {
                      notify("err", "Title Already Exists!");
                    } else {
                      notify("success", "Password Saved Successfully!");
                    }
                    setStatus(!status);
                  });

                  resetForm();
                }}
              >
                {({ handleSubmit }) => (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="w-72">
                      <label htmlFor="title">Title</label>
                      <Field
                        type="text"
                        id="title"
                        name="title"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="w-72">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Add Password
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        <div className="w-full bg-sky-600 ">
          <ul className="max-w-md  pt-16 divide-gray-200 dark:divide-gray-700">
            <div className="py-3 my-3">
              <Search />
            </div>
            <ToastContainer />
            {passwordData.map((item, index) => (
              <li className="py-3 sm:pb-4" key={index}>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item?.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      <Button size="sm" onClick={() => toggleOpen(index)}>
                        view
                      </Button>
                      <Collapse open={openIndex === index}>
                        <Card className="my-4 mx-auto w-8/12">
                          <CardBody>
                            <Typography>
                              Your <span className="text-bold">{item?.title}</span> password <br />
                              {item?.password} 
                              <IconButton size="sm" style={{ marginLeft:'10px' }}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                              </IconButton>
                            </Typography>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <IconButton color="red">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => {
                          removePasswords(item?.title);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </IconButton>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <DefaultPagination />
        </div>
      </div>
    </>
  );
};

export default MainSection;
