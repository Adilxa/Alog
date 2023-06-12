import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth, usersRef } from '../../firebase/firebase';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToProfile, setRedirectToProfile] = useState(false);
    const navigate = useNavigate();
    const [id, setId] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const arr = [];
                const refLogin = query(usersRef, where('uid', '==', user.uid));
                const q = await getDocs(refLogin);
                q?.forEach((doc) => arr.push({ ...doc.data() }));
                setId(arr[0]?.userId);
                setRedirectToProfile(true);
            }).catch((err) => alert(err))

    };

    if (redirectToProfile) {
        return navigate(`/user/${id}`);
    }

    return (
        <Grid sx={{
            display: "flex",
            // alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100vh"
        }}>
            <h2>Login Page</h2>
            <form style={{
                gap: "10px", display: "flex",
                flexDirection: "column"
            }} onSubmit={(e) => handleLogin(e)}>
                <TextField
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant='outlined' type="submit">Login</Button>
            </form>
        </Grid>
    );
};

export default LoginPage;
