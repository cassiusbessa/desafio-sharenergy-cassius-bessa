import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { getCustomers, getToken } from '../../apis/main-api';
import CustomerCard from '../../components/CustomerCard';
import { Customer } from '../../interfaces/customers';
import Header from '../../components/Header';


export default function CustomerAlbum() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const token = getToken() as string;
    getCustomers(token).then((data) => {
      setCustomers(data);
    });
  }, []);

  return (
    <>
      <Header />
      <Grid container justifyContent="center" spacing={2}>
        {customers.map((customer) => (
          <Grid item key={customer._id}>
            <CustomerCard customer={customer} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}