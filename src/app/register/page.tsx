"use client";

import { TextField, Button, Typography, Container, Grid } from "@mui/material";
import { FormEvent } from "react";

export default async function Register() {
  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        tel: formData.get("tel"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
  };

  return (
    <Container
      maxWidth="xs"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        padding: "50px",
        borderRadius: "10px",
        marginTop: "100px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={register}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" name="name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Telephone" name="tel" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" name="email" type="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="text-black"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
