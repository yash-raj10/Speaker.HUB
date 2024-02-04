"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Cfps() {
  const [Cfps, setCfps] = useState([]);
  const getCfps = async () => {
    try {
      const res = await axios.get("/api/v1/public/fetchAllCfps");
      if (res.data.success) {
        setCfps(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCfps();
  }, []);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Deadline to Apply</th>
              <th>Location</th>
              <th>Link</th>
            </tr>
          </thead>
          {Cfps && (
            <tbody>
              {Cfps.map((Cfp) => (
                <tr key={Cfp._id}>
                  <td>{Cfp.conf.name}</td>
                  <td>{Cfp.conf.date}</td>
                  <td>{Cfp.until}</td>
                  <td>{Cfp.conf.location}</td>
                  <td>{Cfp.link}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
