import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Nav,
  Badge,
  InputGroup
} from "react-bootstrap";

import React, { useState ,useEffect} from "react";
import axios from 'axios';

// function CartButton(props) {
//   return (
//     <Nav.Link
//       eventKey={2}
//       onClick={() => {
//         //console.log(carts);
//       }}
//     >
//       Carts <Badge bg="warning">{props.carts.length}</Badge>
//       <span className="visually-hidden">unread messages</span>
//     </Nav.Link>
//   );
// }

function Product({navigation}) {


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/admin_users`);
        
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [navigation]);


  const [products, setProducts] = useState([
    {
      id: 1,
      brand: "Head and Shoulders",
      name: "Shampoo",
      qty: 0,
      price: 10.0
    },
    {
      id: 2,
      brand: "Cream Silk",
      name: "Conditioner",
      qty: 0,
      price: 12.0
    },
    {
      id: 3,
      brand: "Dove",
      name: "Soap",
      qty: 0,
      price: 6.0
    }
  ]);

  const [carts, setCarts] = useState([]);

  const handleQtyChange = (e, index) => {
    const newPro = [...products];
    console.log(e.target.value);

    newPro[index][e.target.name] = e.target.value;

    // newPro[index]['subtotal'] = newPro[index]['price'] * e.target.value;
    setProducts(newPro);
  };

  const handleAddToCart = (e, index) => {
    const selectedPro = [...products];
    const currentCart = [...carts];

    if (carts.length === 0) {
      setCarts((products) => [...products, selectedPro[index]]);
    } else {
      if (currentCart[index] !== undefined) {
        if (currentCart[index]["id"] === index + 1) {
          currentCart[index]["qty"] = selectedPro[index]["qty"];

          setCarts(currentCart);
        } else {
          setCarts((products) => [...products, selectedPro[index]]);
        }
      } else {
        setCarts((products) => [...products, selectedPro[index]]);
      }
    }
  };

  const handleAddQty = (e, index) => {
    e.preventDefault();
    const addQtyPro = [...products];
    if (addQtyPro[index]["qty"] === "") {
      addQtyPro[index]["qty"] = 0;
    } else {
      addQtyPro[index]["qty"] += 1;
    }

    setProducts(addQtyPro);
  };

  const handleRemoveQty = (e, index) => {
    e.preventDefault();
    const removeQtyPro = [...products];
    if (removeQtyPro[index]["qty"] > 0) {
      removeQtyPro[index]["qty"] -= 1;
    }

    setProducts(removeQtyPro);
  };

  return (
    <React.Fragment>
      <br />
      <h4>Utilisateurs</h4>
      <Table bordered striped hover>
        <thead className="table-warning">
          <tr>
            <td>Photo</td>
            <td>Pseudo</td>
            <td>Email</td>
           
          
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr>
          <td>
      <img src={`http://127.0.0.1:3000/${product.picture}`} alt={`Product ${index + 1}`} />
    </td>
    <td>{product.username}</td>
    <td>{product.email}</td>
             
              <td>
                <Button
                  onClick={(e) => handleAddToCart(e, index)}
                  variant="warning"
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

export default Product;
