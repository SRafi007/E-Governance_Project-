import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/citizen/Signup.module.css';

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Call API or perform authentication
    setIsLoading(false);
    router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name"className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="nid" className={styles.label}>NID Number:</label>
          <input
            type="number"
            id="nid"
            name="nid"
            placeholder="Enter your NID number"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber"className={styles.label}>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className={styles.input}
          />
        </div>
        <button type="submit" disabled={isLoading} className={styles.button}>
          {isLoading ? 'Signing up...' : 'Sign up'}
        </button>
        <button type="submit" disabled={isLoading} className={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signup;
