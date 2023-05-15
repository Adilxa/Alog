import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth, usersRef } from '../../firebase/firebase';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToProfile, setRedirectToProfile] = useState(false);
    const navigate = useNavigate();
    const [id, setId] = useState(null);

    console.log(id);
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
            });
    };

    if (redirectToProfile) {
        return navigate(`/user/${id}`);
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={(e) => handleLogin(e)}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
