import React from "react";
import PageTitle from "../PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container mt-2"
    >
      <PageTitle title="Blogs" />
      <div className="accordion" id="accordionExample">
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Q1. Difference between Javascript and NodeJS?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <figure className="table table-striped table-hover table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th className="text-center" scope="col">
                        Javascript
                      </th>
                      <th className="text-center" scope="col">
                        NodeJS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>
                        <p>
                          Javascript is a programming language that is used for
                          writing scripts on the website.&nbsp;
                          <br />
                          &nbsp;
                        </p>
                        <p>&nbsp;</p>
                      </td>
                      <td>NodeJS is a Javascript runtime environment.</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Javascript can only be run in the browsers.</td>
                      <td>
                        We can run Javascript outside the browser with the help
                        of NodeJS.
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>It is basically used on the client-side.</td>
                      <td>It is mostly used on the server-side.</td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>
                        Javascript is capable enough to add HTML and play with
                        the DOM.&nbsp;
                        <br />
                        &nbsp;
                      </td>
                      <td>Nodejs does not have capability to add HTML tags.</td>
                    </tr>
                    <tr>
                      <td>5.</td>
                      <td>
                        Javascript can run in any browser engine as like JS core
                        in safari and Spidermonkey in Firefox.&nbsp;
                        <br />
                        &nbsp;
                      </td>
                      <td>
                        V8 is the Javascript engine inside of node.js that
                        parses and runs Javascript.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td>6.</td>
                      <td>Javascript is used in frontend development.</td>
                      <td>Nodejs is used in server-side development.</td>
                    </tr>
                    <tr>
                      <td>7.</td>
                      <td>
                        Some of the javascript frameworks are RamdaJS, TypedJS,
                        etc.&nbsp;
                        <br />
                        &nbsp;
                      </td>
                      <td>
                        Some of the Nodejs modules are Lodash, express etc.
                        These modules are to be imported from npm.&nbsp;
                        <br />
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td>8.</td>
                      <td>
                        It is the upgraded version of ECMA script that uses
                        Chrome’s V8 engine written in C++.&nbsp;
                        <br />
                        &nbsp;
                      </td>
                      <td>Nodejs is written in C, C++ and Javascript.</td>
                    </tr>
                  </tbody>
                </table>
              </figure>
            </div>
          </div>
        </div>

        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q2. When should you use nodejs and when should you use mongodb?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  Node. js is primarily used for non-blocking, event-driven
                  servers, due to its single-threaded nature. It's used for
                  traditional web sites and back-end API services, but was
                  designed with real-time, push-based architectures in mind.
                </li>
                <li>
                  NoSQL databases like MongoDB are a good choice when your data
                  is document-centric and doesn't fit well into the schema of a
                  relational database, when you need to accommodate massive
                  scale, when you are rapidly prototyping, and a few other use
                  cases.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Q3. Differences between sql and nosql databases?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ol>
                <li>
                  <span>
                    SQL databases are relational, NoSQL databases are
                    non-relational.
                  </span>
                </li>
                <li>
                  <span>
                    SQL databases use structured query language and have a
                    predefined schema. NoSQL databases have dynamic schemas for
                    unstructured data.
                  </span>
                </li>
                <li>
                  <span>
                    SQL databases are vertically scalable, while NoSQL databases
                    are horizontally scalable.
                  </span>
                </li>
                <li>
                  <span>
                    SQL databases are table-based, while NoSQL databases are
                    document, key-value, graph, or wide-column stores.
                  </span>
                </li>
                <li>
                  <span>
                    SQL databases are better for multi-row transactions, while
                    NoSQL is better for unstructured data like documents or
                    JSON.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Q4. What is the purpose of JWT and how does it work?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
