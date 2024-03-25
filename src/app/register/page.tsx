"use client";

import { TextField, Button, Typography, Container, Grid } from "@mui/material";
import { useState } from "react";
import RegisterUser from "@/libs/registerUser";

export default function Register() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const register = async () => {
    try {
      alert(name + " " + tel + " " + email + " " + pass);
      const res = await RegisterUser(name, tel, email, pass);
      console.log(res);
    } catch (error) {
      console.error("Registration failed:", error);
    }
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
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Telephone"
              name="tel"
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="text-black"
              onClick={(e) => {
                e.preventDefault();
                register();
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
