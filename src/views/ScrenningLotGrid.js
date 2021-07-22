import React, { useState, useEffect } from "react";
import ReactFlexyTable from "react-flexy-table";

import deleteIcon from "./../assets/images/delete.png"
import editIcon from "./../assets/images/edit.png"
import "react-flexy-table/dist/index.css"

import "../styles/grid.css";
import { withRouter } from "react-router-dom";
import Grids from "../components/Grids";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';
const axios = require('axios').default;



const ScrenningLotGrid = (props) => {

  const [selRecordArray, setSelectedRecords] = useState([]);
  let [scrLotgriddata, setScrLotgriddata] = useState([]);
  useEffect(async () => {

    const data = await getScreening();
    console.log("DYNAMIC ARRAY>>>>>>>>>>>>>>> ", data);

    let screeningArr = [];
    data.map((option, i) => {
      //console.log( ">>>>",Object.keys(option))
      console.log(">>>>", option)
      screeningArr.push({
        "screeningID": option._id,
        "movieID": option.movieID,
        "theatreID": option.theatreID,
        "movieName": option.movieDetail[0].movieName,
        "theatreName": option.theatreDetail[0].theatreName,
        "City": option.theatreDetail[0].city,
        "screeningTime": option.screeningTime,
        "ticketPrice": option.ticketPrice,
        "pocName": option.pocName,
        "pocNo": option.pocNo,
        "minBids": option.minBids,
        "maxBids": option.maxBids,
        "totalBids": option.totalBids

      })

    })


    setScrLotgriddata(screeningArr);

  }, [])

  async function getScreening() {
    try {

      const response = await axios.get('http://localhost:5003/movieman/screening/get/screenings')
      return response.data;
    } catch (e) {
      return e;
    }

  }

  function openAddRecord() {
    // getTheatre();
    console.log(">>>>>>>");
    props.history.push({
      pathname: "/AddScreeningLot",
    });
  }
  function editRecord(val) {
    // try{ 
    //    const response =   axios.get('http://localhost:5001/movieman/movie/editMovies', {data: { id: val }})
    //    console.log("Selected Movie", response);

    //    return response.data;
    //  }catch(e){
    //     return e;
    //  }

    console.log(">>" + val);
    props.history.push({
      pathname: "/ScrenningLotGrid",
    });

  }

  function selectRecords(event) {
    console.log(">>>>>>>>>>>checkbox >>>>>>>> :", event.target.value);
    let arrRecord = [...selRecordArray];
    if (event.target.checked) {
      arrRecord.push(event.target.value);
      setSelectedRecords(arrRecord)
    } else {
      let index = arrRecord.indexOf(event.target.value)
      arrRecord.splice(index, 1);
      setSelectedRecords(arrRecord)
    }

    console.log("arrRecord >>>>>>>>>>>>> ", arrRecord);

  }

  function publishBidding(arrVal) {
    var publishBoolean = true;
    var firstCity; 
    for (var i = 0; i < arrVal.length; i++) {
      firstCity = (arrVal[0].split("|"))[3];
      const splitcity = arrVal[i].split("|");
      if (firstCity !== splitcity[3]) {
        publishBoolean = false
        alertify.alert('Wrong City', 'Kindly select All same city!', function () { });
      }
    }
    if (publishBoolean) {
      try {
        alertify.prompt('Enter Bid Span', 'In Days', '',
          function (evt, value) {
            const response = axios.post('http://localhost:5004/movieman/ongoingbid/add',
              { data: { arrayIds: arrVal, bidSpan:value} })
            alertify.success('You entered: ' + value)
            return response.data;
          }, function () { alertify.error('Cancel') });
      } catch (e) {
        return e;
      }
    }

  }

  function deleteRecord(val) {
    console.log("Delete record>>" + val);
    alertify.confirm('Confirm', 'Do you really want to Delete the record?', function () {
      axios.delete('http://localhost:5003/movieman/screening/deleteScreening', { data: { id: val } })
        .then(function (response) {
          getScreening();
          console.log("SUCCESSFULLY ADDED RECORD: ", response);
        })
        .catch(function (error) {
          console.log("ERROR ADDED RECORD: ", error);
        });
    }
      , function () { },

    ).set({ labels: { ok: 'Yes', cancel: 'No' } });




  }

  const formatData = () => {
    return [
      {
        header: "",
        key: "",
        td: (data) => {
          return <div>
            <input type="checkbox" value={data.screeningID + "|" + data.movieID + "|" + data.theatreID + "|" + data.City}
              onClick={(event) => selectRecords(event)} />
          </div>
        }
      },
      {
        header: "Movie Name",
        key: "movieName"
      }, {
        header: "Theatre Name",
        key: "theatreName"
      }, {
        header: "City",
        key: "City"
      }, {
        header: "Screening Time",
        key: "screeningTime"
      }, {
        header: "Ticket Price",
        key: "ticketPrice"
      }, {
        header: "Poc Name",
        key: "pocName"
      }, {
        header: "Poc No",
        key: "pocNo"
      }, {
        header: "Min Bids",
        key: "minBids"
      }, {
        header: "Max Bids",
        key: "maxBids"
      }, {
        header: "Total Bids",
        key: "totalBids"
      }, {
        header: "Action",
        key: "action",
        td: (data) => {
          return <div>
            <img src={deleteIcon} width="30" height="20" onClick={() => alert("this is delete for id " + data._id)} />
            <img src={editIcon} width="30" height="20" onClick={() => alert("this is edit for id " + data._id)} />

          </div>
        }
      },

    ]
  }



  return (
    <div>
      <input
        type="button"
        class="button"
        value="Add New"
        onClick={openAddRecord}
      ></input>
      <ReactFlexyTable data={scrLotgriddata} sortable filterable columns={formatData()} />
      <div>
        <input
          type="button"
          class="button"
          value="Publish Bidding"
          onClick={() => publishBidding(selRecordArray)}
        ></input>
      </div>
    </div>


  );



};
export default withRouter(ScrenningLotGrid);
