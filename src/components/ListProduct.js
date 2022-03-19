import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalBody } from "reactstrap";

const mapStateToProps = (state) => {
    return {
        data: state.dataProduct,
    };
};

function ListProduct({ data }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const toggle = () => setModalOpen(!modalOpen);
    return (
        <div className="container">
            {data.productData.map((item, index) => (
                <div
                    style={{ borderRadius: "18px" }}
                    className="row py-2"
                    key={index}
                >
                    <a
                        href="#"
                        className="list-group-item d-flex gap-3 py-3"
                        aria-current="true"
                        onClick={() => {
                            setModalData(item);
                            toggle();
                        }}
                    >
                        <img
                            src="https://github.com/twbs.png"
                            alt="twbs"
                            width="32"
                            height="32"
                            className="rounded-circle flex-shrink-0"
                        />
                        <div className="d-flex w-100 justify-content-between">
                            <div>
                                <p className="mb-0">{item.name}</p>
                            </div>
                            <small className="opacity-50 text-nowrap">
                                {item.exp}
                            </small>
                        </div>
                    </a>
                </div>
            ))}
            <div>
                <Modal size="sm" isOpen={modalOpen} toggle={() => toggle()}>
                    <ModalBody>
                        <div className="container">
                            <h6 className="font-weight-bold">
                                Name: {modalData.name}
                            </h6>
                            <h6 className="font-weight-bold">
                                Exp: {modalData.exp}
                            </h6>
                            <h6 className="font-weight-bold">
                                Category: {modalData.cat}
                            </h6>
                            <h6 className="font-weight-bold">รายละเอียด</h6>
                            <p>{modalData.des}</p>
                            <div className="row py-2">
                                <NavLink to={`/edit/1`}>
                                    <Button
                                        className="w-100"
                                        color="light text-dark"
                                    >
                                        Edit
                                    </Button>
                                </NavLink>
                            </div>
                            <div className="row py-2">
                                <Button
                                    className="w-100"
                                    color="warning text-white"
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(ListProduct);
