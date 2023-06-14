import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

const Restos = () => {
  const [adminrestos, setAdminrestos] = useState([]);

  useEffect(() => {
    fetchRestos();
  }, []);
  const fetchRestos = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/getalladminrestos"
      );
      setAdminrestos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirm = async (restoId) => {
    try {
      await axios.post(
        `http://127.0.0.1:5000/confirm_resto?idResto=${restoId}`
      );
      fetchRestos();
      console.log("Restaurant confirmed:", restoId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (restoId) => {
    // Implement your delete logic here
    console.log("Deleting resto with ID:", restoId);
  };

  return (
    <React.Fragment>
      <br />
      <h4>Restaurants</h4>
      <Table bordered striped hover>
        <thead className="table-warning">
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Nom Restaurant</th>
            <th>Propriétaire</th>
            <th>Reference Resto</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {adminrestos.map((resto, index) => (
            <tr key={resto._id}>
              <td>{index + 1}</td>
              <td>{resto.photo}</td>
              <td>{resto.name}</td>
              <td>{resto.owner}</td>
              <td>{resto.reference}</td>
              <td>{resto.isConfirmed ? "Confirmer" : "Non Confirmer"}</td>
              <td>
                {!resto.isConfirmed && (
                  <Button
                    variant="success"
                    onClick={() => handleConfirm(resto._id)}
                    style={{ marginRight: "5px" }}>
                    Confirmer
                  </Button>
                )}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(resto._id)}>
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default Restos;
