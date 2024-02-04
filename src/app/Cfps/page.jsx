"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Cfps() {
  const [Cfps, setCfps] = useState([]);
  const getCfps = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/public/fetchAllCfps");
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
              <th>Name</th>
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
                  <td>{Cfp.until}</td>
                  <td>{Cfp.conf.location}</td>
                  <td><Link href={Cfp.link}>Apply</Link></td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
