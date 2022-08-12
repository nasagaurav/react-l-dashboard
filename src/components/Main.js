import React from "react";

export default function Main(props) {
  return (
    <div>
      <>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Dashboard-Page</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">b1</a>
                </li>
                <li className="breadcrumb-item">b2</li>
                <li className="breadcrumb-item active">b3</li>
              </ol>
            </nav>
          </div>
          {/* End Page Title */}
          <section className="section">
            <div className="row">
              {props.children}
            </div>
          </section>
        </main>
        {/* End #main */}
      </>
    </div>
  );
}
