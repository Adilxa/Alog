import React, { useState } from 'react';
import { auth, usersRef, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleRegistration = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const usersCollection = collection(db, 'users');
            const docRef = await addDoc(usersCollection, {
                email: user.email,
                uid: user.uid,
                role: 'user',
                cart: []
            });

            const userId = docRef.id;

            await setDoc(doc(db, 'users', docRef.id), { userId }, { merge: true });

            navigate("/login")
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <Grid sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px"
        }}>
            <h2>Registration</h2>
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
            <Button variant='outlined' onClick={handleRegistration}>Register</Button>
        </Grid>
    );
};

export default RegistrationForm;
