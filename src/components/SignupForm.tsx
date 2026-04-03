import { useState } from 'react';
import type { FormEvent } from 'react';
import { submitMaker, submitBacker } from '../lib/airtable';
import styles from './SignupForm.module.css';

type MakerFormProps = { variant: 'maker' };
type BackerFormProps = { variant: 'backer' };
type Props = MakerFormProps | BackerFormProps;

export function SignupForm({ variant }: Props) {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [social, setSocial]   = useState('');
  const [inspo, setInspo]     = useState('');
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errMsg, setErrMsg]   = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) {
      setErrMsg('Enter a valid email.');
      return;
    }
    setStatus('loading');
    setErrMsg('');

    try {
      if (variant === 'maker') {
        await submitMaker({ Name: name, Email: email, Social: social, Inspo: inspo });
      } else {
        await submitBacker({ Name: name, Email: email });
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setErrMsg('Something went wrong — try again.');
    }
  }

  if (status === 'success') {
    return (
      <p className={styles.success}>
        {variant === 'maker'
          ? "You're in — we'll be in touch soon."
          : "You're in — first to know when we launch."}
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        disabled={status === 'loading'}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => { setEmail(e.target.value); setErrMsg(''); }}
        disabled={status === 'loading'}
        className={errMsg ? styles.inputError : ''}
      />
      {variant === 'maker' && (
        <>
          <input
            type="text"
            placeholder="Instagram or portfolio (optional)"
            value={social}
            onChange={e => setSocial(e.target.value)}
            disabled={status === 'loading'}
          />
          <input
            type="url"
            placeholder="Inspo link — Pinterest, Are.na, mood board (optional)"
            value={inspo}
            onChange={e => setInspo(e.target.value)}
            disabled={status === 'loading'}
          />
        </>
      )}
      {errMsg && <p className={styles.error}>{errMsg}</p>}
      <button
        type="submit"
        className={`${styles.btn} ${variant === 'maker' ? styles.filled : styles.ghost}`}
        disabled={status === 'loading'}
      >
        {status === 'loading'
          ? 'Submitting…'
          : variant === 'maker'
          ? 'Join as a Founding Maker'
          : 'Get Early Access'}
      </button>
    </form>
  );
}
