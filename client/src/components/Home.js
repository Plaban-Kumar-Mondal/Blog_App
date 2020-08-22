import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../apiCalls/blogAPI";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  const loadAllBlogs = () => {
    getAllBlogs().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setAllBlogs(["name", "1233", "wefjnfew"]);
        console.log("Data", data);
        console.log("All Blogs", allBlogs);
      }
    });
  };

  useEffect(() => {
    loadAllBlogs();
  }, []);

  const footerElement = () => {
    return (
      <footer className="page-footer purple darken-3">
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <h6 className="white-text">
                © 2020 Copyright Plaban Kumar Mondal
              </h6>
              <p className="gry-text lighten-3">This is made with MERN Stack</p>
            </div>
            <div className="col s12 m4">
              <p className="text-white">Twitter</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div>
      <section className="container">
        <div className="row">
          {/* {allBlogs.map((blog, index) => {
            return (
              <div key={index} className="col s12">
                <div className="card indigo lighten-5">
                  <div className="card-content ">
                    <span className="card-title center-align">
                      {blog.title}
                    </span>
                    <h5>{blog.author}</h5>
                    <p>{blog.body}</p>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </section>
      {footerElement()}
    </div>
  );
};

export default Home;
