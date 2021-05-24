import React, { useState, useEffect } from "react";

export default function Grids({ data, addRecord }) {
  //console.log(data, typeof data);

  const [searchStr, setSearchString] = useState("");

  const generateGridData = () => {
    const filteredData =
      searchStr != ""
        ? data.filter((item) => {
            return Object.keys(item).some((key) =>
              item[key]
                .toString()
                .toLowerCase()
                .includes(searchStr.toLowerCase())
            );
          })
        : data;
    return filteredData;
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          class="search"
          placeholder="Search.."
          value={searchStr}
          onChange={(event) => setSearchString(event.target.value)}
        />
        <input
          type="button"
          class="button"
          value="Add New"
          onClick={addRecord}
        ></input>
      </div>
      {data == undefined ? null : (
        <div class="container-table100">
          <div class="wrap-table100">
            <div class="table">
              <div class="row header">
                {Object.keys(data[0]).map((head, i) => {
                  return (
                    <div class="cell" key={i}>
                      {" "}
                      {head}{" "}
                    </div>
                  );
                })}
              </div>
              {generateGridData().map((option, i) => {
                var body = Object.values(option);
                return (
                  <div class="row" key={i}>
                    {body.map((values, j) => {
                      return (
                        <div class="cell" data-title={values} key={j}>
                          {" "}
                          {values}{" "}
                        </div>
                      );
                    })}
                    <div>
                      <a
                        class="edit"
                        title=""
                        data-toggle="tooltip"
                        data-original-title="Edit"
                      >
                        <i class="material-icons">
                          {" "}
                          <img src="../assets/images/pencil.svg" alt="Edit" />
                        </i>
                      </a>
                      <a
                        class="delete"
                        title=""
                        data-toggle="tooltip"
                        data-original-title="Delete"
                      >
                        <i class="material-icons">
                          <img src="../assets/images/pencil.svg" alt="Edit" />
                        </i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
