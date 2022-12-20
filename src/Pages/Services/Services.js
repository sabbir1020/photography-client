import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Service from "../Service/Service";

const Services = () => {
  const services = useLoaderData();
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("https://photography-server-jade.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, []);
  // console.log(services);
  // const { loading } = useContext(AuthContext);
  // console.log(services);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-7 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </>
  );
};

export default Services;
