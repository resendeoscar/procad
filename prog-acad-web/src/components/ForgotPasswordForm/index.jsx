import React, { useContext, useState } from 'react'
import {
    TextField,
    Button,
    Typography,
    Grid
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { GlobalStateContext } from "../../store/index";
import { CircularProgress, Box } from "@mui/material"
import './style.css';

export default function ForgotPasswordForm({ handleSubmit }) {

    const [state, dispatch] = useContext(GlobalStateContext);

    const [email, setEmail] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();

        const dto = {
            email
        }

        handleSubmit(dto)
    }

    return (
        <div style={{ marginTop: '64px' }}>
            <div className="app-title-container">
                <h1 className="app-title">procad</h1>
            </div>
            <div className="signup-container">
                <form className="signup-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography variant="h5" style={{ marginBottom: '16px', alignSelf: 'start' }}>Recuperar Senha</Typography>
                    <Grid container spacing={12}>
                        <TextField
                            required
                            id="email-input"
                            fullWidth
                            label="Email"
                            size="small"
                            name="email"
                            variant="outlined"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            style={{ marginBottom: '8px' }}
                        />
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={8}>
                            <Button
                                onClick={onSubmit}
                                color="primary"
                                variant="contained"
                                type="submit"
                                fullWidth>
                                Recuperar
                            </Button>
                        </Grid>
                    </Grid>
                    <Link to="/login">
						<Button
							color="primary"
							className="margin"
							fullWidth>
							Voltar
						</Button>
					</Link>
                </form>
            </div>
        </div>
    )
}
