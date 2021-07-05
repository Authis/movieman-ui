import React, { useState } from "react";

export default function Grids({ data, addRecord,editRecord,deleteRecord ,selection,publishBidding}) {
  

  const [searchStr, setSearchString] = useState("");
  const [selRecordArray, setSelectedRecords] = useState([]);

  console.log("data array>>>>>>>>>>",data );

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

  function selectRecords(event){
     // console.log(">>>>>>>>>>>checkbox >>>>>>>> :"+event.target.value);
       let arrRecord = [...selRecordArray];
      if(event.target.checked){
        arrRecord.push(event.target.value);
        setSelectedRecords(arrRecord)
      }else{
        let index =arrRecord.indexOf(event.target.value)
        arrRecord.splice(index,1);
        setSelectedRecords(arrRecord)
      }
      
     // console.log("arrRecord >>>>>>>>>>>>> "+arrRecord);
     
  }

 
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
      {
       data == undefined || data.length === 0  ? null : (
        <div class="container-table100">
          <div class="wrap-table100">
            <div class="table">
              <div class="row header">
                {selection == 'NO'? null : (
                  <div class="cell" key={0}></div>
                )}
               
                {Object.keys(data[0]).slice(1).map((head, i) => {
                  return (
                    <div class="cell" key={i}>{head}</div>
                    );
                })}
              </div>
              {generateGridData().map((option, i) => {
                var record = Object.values(option);
                console.log("I am in grid record : ",record);
                return (
                  <div class="row" key={i}>
                    {selection == 'NO'? null : (
                      <div>
                      <label class="container">
                            <input type={selection}  value={record[0]+"|"+record[3]}   onClick={(event) => selectRecords(event)}/>
                             <span class="checkmark"></span>
                         </label>
                      </div>
                     )}
               
                    {
                     
                    record.slice(1).map((values, j) => {
                      return (
                        <div class="cell" data-title={values} key={j}>  {values}  </div>
                      );
                    })
                    
                    }
                      <div>
                      <a class="edit"  title="" data-toggle="tooltip" data-original-title="Edit" >
                        <i class="material-icons">
                          <img src="../assets/images/pencil.svg"  alt="Edit" onClick={() => editRecord(record) }/>
                        </i>
                      </a>
                      <a class="delete" title="" data-toggle="tooltip" data-original-title="Delete" >
                        <i class="material-icons">
                          <img src="../assets/images/pencil.svg" alt="Delete" onClick={() => deleteRecord(record[0]) }/>
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
 {publishBidding == null ? null : (
      <div>
      <input
          type="button"
          class="button"
          value="Publish Bidding"
          onClick={() => publishBidding(selRecordArray)}
        ></input>
      </div>)}
    </div>
  );
}
