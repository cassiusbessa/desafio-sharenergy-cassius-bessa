/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import { Customer } from '../../interfaces/customers';
import { deleteCustomer, getToken, updateCustomer } from '../../apis/main-api';

interface Props {
  customer: Customer;
}

const CustomerCard = ({ customer }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState(customer);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedCustomer({ ...customer, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    setIsExpanded(false);
  }, [handleInputChange]);
  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  }

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  }

  const handleSaveClick = async () => {
    const token = getToken() as string;
    const updatedCustomer = await updateCustomer(token, editedCustomer);
    setEditedCustomer(updatedCustomer);
    setIsEditing(false);
  }

  const handleDeleteClick = async (_id: string) => {
    const token = getToken() as string;
    await deleteCustomer(token, _id);
  }


  return(
    <Card className={`customer-card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <CardContent>
        <Typography variant="h5">{customer.name}</Typography>
        <Typography>{customer.email}</Typography>
        <Typography>{customer.phone}</Typography>
        {isExpanded && (
          <>
            <TextField
              label="Nome"
              name="name"
              variant="outlined"
              value={customer.name}
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              value={customer.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Fone"
              name="phone"
              variant="outlined"
              value={customer.phone}
              onChange={handleInputChange}
            />
            <TextField
              label="CPF"
              name="cpf"
              variant="outlined"
              value={customer.cpf}
              onChange={handleInputChange}
            />
            <TextField
              label="Rua"
              name='street'
              variant="outlined"
              value={customer.address.street}
              onChange={handleInputChange}
            />
            <TextField
              name='number'
              label="Número"
              variant="outlined"
              value={customer.address.number}
              onChange={handleInputChange}
            />
            <TextField
              label="Cidade"
              name='city'
              variant="outlined"
              value={customer.address.city}
              onChange={handleInputChange}
            />
            <TextField
              label="Estado"
              name='state'
              variant="outlined"
              value={customer.address.state}
              onChange={handleInputChange}
            />
            <TextField
              label="País"
              name='country'
              variant="outlined"
              value={customer.address.country}
              onChange={handleInputChange}
            />
            <TextField
              label="CEP"
              name='zipcode'
              variant="outlined"
              value={customer.address.zipcode}
              onChange={handleInputChange}
            />
            <TextField
              label="Complemento"
              name='complement'
              variant="outlined"
              value={customer.address.complement}
              onChange={handleInputChange}
            />
            <div className="edit-delete-container">
              <Button onClick={() => handleEditClick()}>Editar</Button>
              <Button onClick={() => handleDeleteClick(customer._id)}>Deletar</Button>
              <Button onClick={() => handleSaveClick()}>Salvar</Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default CustomerCard;




