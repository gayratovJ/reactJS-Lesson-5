import React, { Fragment, useState } from "react";
import DebtCard from "../components/card/DebtCard";
import PropTypes from "prop-types"; // ES6
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

const DebtsPage = () => {
  const [validated, setValidated] = useState(false);

  const [debts, setDebts] = useState([
    {
      id: 0,
      name: "Sunnat",
      debt: 120,
      phone: 993001706,
      data: "22.11.2023",
      debtData: "22.12.2023",
    },
  ]);
  const [debt, setDebt] = useState({
    name: "",
    debt: "",
    phone: "",
    data: "",
    debtData: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setValidated(false);
  };
  const handleShow = () => setShow(true);

  const submit = (e) => {
    const form = e.currentTarget;
    setValidated(true);
    e.preventDefault();
    if (form.checkValidity()) {
      handleClose();
      setDebts([...debts, debt]);
    } else {
    }
  };

  const handelDebt = (e) => {
    setDebt({ ...debt, [e.target.id]: e.target.value });
  };

  return (
    <Fragment>
      <div className="debt-create d-flex justify-content-end">
        <button
          className="mt-3 text-center btn btn-success"
          onClick={handleShow}
        >
          Add
        </button>
      </div>
      <div className="phone">
        <h3>All debts</h3>
        {debts.map((debt) => (
          <DebtCard key={debt.id} {...debt} />
        ))}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Creating Debts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={submit}
              noValidate
              validated={validated}
              className="Modal"
            >
              <Form.Group className="mb-3" controlId="name" md="4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={debt.name}
                  onChange={handelDebt}
                  required
                  type="text"
                  placeholder="Name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Pleace fill!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="number" md="4">
                <Form.Label>Debt</Form.Label>
                <Form.Control
                  value={debt.debt}
                  onChange={handelDebt}
                  required
                  type="number"
                  placeholder="Debt"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Pleace fill!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone" md="4">
                <Form.Label>phone</Form.Label>
                <Form.Control
                  value={debt.phone}
                  onChange={handelDebt}
                  required
                  type="number"
                  placeholder="phone"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Pleace fill!
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="Date" md="4">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  value={debt.data}
                  onChange={handelDebt}
                  type="text"
                  placeholder="Date"
                />
                <Form.Control.Feedback type="invalid">
                  Pleace fill!
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      ;
    </Fragment>
  );
};

// DebtCard.propTypes = {
//   name: PropTypes.string,
//   phone: PropTypes.number,
//   debt: PropTypes.number,
//   data: PropTypes.string,
// };

export default DebtsPage;
