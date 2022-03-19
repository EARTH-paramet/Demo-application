import "./Home.scss";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { connect,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

const mapStateToProps = (state) => {
  return {
    data: state.dataProduct,
  };
};

function AddProduct({ data, barcode },props) {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [exp, setExp] = useState('')
    const [cat, setCat] = useState('')
    const [des, setDes] = useState('')
    const [createAt, setCreateAt] = useState('')
    

  const handleClick=()=> {
    const fullData = {
        name:document.getElementById("name").value,
        exp:exp,
        cat:document.getElementById("name").value,
        des:des,
        createAt:createAt
    }
    console.log(fullData)
      dispatch({type:"ADD_PRODUCT",payload:fullData})
  }

  return (
    <div className="container">
      <div className="d-flex-column justify-content">
        <div className="row">
          <NavLink to="/">
            <div className="col-2">
              <h2>&lt;--</h2>
            </div>
          </NavLink>
          <div className="col-10 text-center">
            <h2>Add Product</h2>
          </div>
        </div>
        <div className="text-center mt-5">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
          </svg>
          {data.masterProduct.map((val,index) => {
            if (barcode == val.barcode) {
              return (
                <div key={index}>
                  <h2 className="mt-3">Food Details</h2>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                    id="name"
                      type="text"
                      defaultValue={val.name}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                    id="cat"
                      type="text"
                      defaultValue={val.category}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                    
                      type="text"
                      defaultValue={barcode}
                      className="form-control"
                      onChange={(e)=>setDes(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input id="date" type="date" className="form-control" onChange={(e)=>setExp(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Time</label>
                    <input id="time" type="time" className="form-control" onChange={(e)=>setCreateAt(e.target.value)} />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <Button
          className="w-100"
          color="warning text-white"
          onClick={handleClick}
        >
          Add Product
        </Button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(AddProduct);
