import React, { useEffect, useState } from 'react';
import {
  Button, Container, Form, Stack,
} from 'react-bootstrap';
import { PropagateLoader } from 'react-spinners';
import { Link, Navigate } from 'react-router-dom';
import { BsQuestionCircle } from '@react-icons/all-files/bs/BsQuestionCircle';
import AuthStack from '../components/styled/AuthStack';
import { isAuthenticated, signUp } from '../utils/auth';

function SignUp() {
  const [fields, setFieldValue] = useState({
    name: '', email: '', bio: '', password: '', password_confirm: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [accepts, setAccepts] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  const handleOnChange = (e) => {
    setFieldValue({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (accepts) {
      setLoading(true);
      try {
        await signUp(fields);
        setLoading(false);
        setAuthenticated(true);
      } catch (e) {
        setLoading(false);
      }
    }
  };

  if (authenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <AuthStack>
        <form onChange={handleOnChange} onSubmit={handleSignUp}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              aria-label="Username"
              name="name"
              value={fields.name}
              onChange={() => {
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              name="email"
              value={fields.email}
              onChange={() => {
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Biography"
              aria-label="Bio"
              name="bio"
              value={fields.bio}
              onChange={() => {
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              aria-label="Password"
              name="password"
              value={fields.password}
              onChange={() => {
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirm password"
              aria-label="Confirm password"
              name="password_confirm"
              value={fields.password_confirm}
              onChange={() => {
              }}
            />
          </Form.Group>

          <Stack className="justify-content-start mb-3 gap-1" direction="horizontal">
            <Form.Check
              type="checkbox"
              label="I accept the usage condition licence"
              checked={accepts}
              onChange={(e) => setAccepts(e.target.checked)}
            />
            <BsQuestionCircle />
          </Stack>

          <Button className="w-100 mb-3" type="submit">
            {isLoading
              ? <p className="py-1"><PropagateLoader color="#fff" /></p>
              : 'Sign Up'}
          </Button>

          <Stack className="justify-content-center gap-2" direction="horizontal">
            Already have an account?
            <Link to="/login">Login</Link>
          </Stack>
        </form>
      </AuthStack>
    </Container>
  );
}

export default SignUp;
