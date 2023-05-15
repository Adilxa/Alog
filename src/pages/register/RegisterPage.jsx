import React, { useState } from 'react';
import { auth, usersRef, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const usersCollection = collection(db, 'users');
            const docRef = await addDoc(usersCollection, {
                email: user.email,
                uid: user.uid,
                role: 'user',
                basket: []
            });

            const userId = docRef.id;

            await setDoc(doc(db, 'users', docRef.id), { userId }, { merge: true });

            console.log('User ID:', userId);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div>
            <h2>Registration</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default RegistrationForm;
