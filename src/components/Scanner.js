import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import useStateRef from "react-usestateref";
import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import AddProduct from "./AddProduct";
import NewProduct from "./NewProduct";

const Scanner = ({ master }) => {
  const [checked, setChecked] = useState("Not_Found");
  const [data, setData, dataRef] = useStateRef("Not Found");
  if (checked == "Not_Found") {
    return (
      <div>
        <NavLink to="/">
          <div className="col-2">
            <h2>&lt;--</h2>
          </div>
        </NavLink>
        <div className="row pt-5">
          <div className="col-6"></div>
          <div className="col-6">
            <h2 className="text-white">Add Product</h2>
          </div>
        </div>
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) {
              master.masterProduct.map((val) => {
                setData(result.text);
                if (val.barcode == result.text) {
                  setChecked("Master_Data");
                  
                } else {
                  setChecked("New_Data");
                //   setData(result.text);
                }
              });
              // console.log(master.masterProduct)
              // dispatch({
              //   type: "ADD_DATA_COMPANY",
              //   payload: response.data.result,
              //   loading: true
              // });
              // setData(result.text);
            } else setData("Not Found");
          }}
        />
        <p>{data}</p>
      </div>
    );
  } else if (checked == "Master_Data") {
    return (
     
        <AddProduct barcode={dataRef.current} />
 
    )
    //     <div>
    //         <h1>มีข้อมูลเก่า map หา master</h1>
    //     </div>
  } else if (checked == "New_Data") {

     return (
     
        <NewProduct barcode={dataRef.current} />
 
    )
    // return (
    //     <div>
    //         <h1>ไม่มีข้อมูลเก่า สร้างใหม่เลย</h1>
    //     </div>
    // );
  } else {
    return (
      <div>
        <h1>fail</h1>
      </div>
    );
  }
  // return()
};
const mapStateToProps = (state) => {
  return {
    master: state.dataProduct,
  };
};
export default connect(mapStateToProps)(Scanner);
