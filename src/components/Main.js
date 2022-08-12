import React from "react";
import { useSelector } from "react-redux";
export default function Main(props) {
  const state = useSelector((s) => s);
  const { title, rows, cols } = state;
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
              <h3>api {title}</h3>
              <table className="table table-hover datatable">
                <thead>
                  <tr>
                    {cols.map((x) => (
                      <th>{x}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr>
                      {cols.map((col) => (
                        <td>{row[col]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
        {/* End #main */}
      </>
    </div>
  );
}
