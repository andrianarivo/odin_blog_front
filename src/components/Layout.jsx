import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { isAuthenticated } from '../utils/auth';

function Layout() {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Container fluid>
      <Outlet />
    </Container>
  );
}

export default Layout;
