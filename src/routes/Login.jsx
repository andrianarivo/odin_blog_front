import React, { useEffect, useState } from 'react';
import {
  Button, Container, Form, Stack,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { isAuthenticated, signIn } from '../utils/auth';
import AuthStack from '../components/styled/AuthStack';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn({ email, password });
      setLoading(false);
      setAuthenticated(true);
    } catch (e) {
      setLoading(false);
    }
  };

  if (authenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <AuthStack>
        <form onSubmit={handleSignIn}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email address"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Stack className="justify-content-around mb-3" direction="horizontal">
            <Form.Check
              type="checkbox"
              id="remember-me"
              label="Remember me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <Link to="/">Forgot password?</Link>
          </Stack>

          <Button className="w-100 mb-3" type="submit">
            {isLoading
              ? <p className="py-1"><PropagateLoader color="#fff" /></p>
              : 'Sign In'}
          </Button>

          <Stack className="justify-content-center gap-2" direction="horizontal">
            Not a member?
            <Link to="/signup">Register</Link>
          </Stack>
        </form>
      </AuthStack>
    </Container>
  );
}

export default Login;
