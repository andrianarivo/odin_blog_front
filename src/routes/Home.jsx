import React from 'react';
import {
  Card, Col, Container, Image, Row,
} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { FiMail } from '@react-icons/all-files/fi/FiMail.js';
import Post from '../components/Post';

function Home() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Image src="https://shackmanlab.org/wp-content/uploads/2013/07/person-placeholder.jpg" />
            <Card.Body>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <h3>David Stanley</h3>
                <p className="text-secondary">Fullstack Developer</p>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-around mx-5">
                <SocialIcon
                  url="https://www.linkedin.com/andrianarivo"
                />
                <SocialIcon
                  url="https://www.github.com/andrianarivo"
                />
                <SocialIcon
                  url="https://www.twitter.com/dandrianarivo"
                />
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body className="d-flex gap-5 flex-column">
              <div className="d-flex justify-content-between">
                <h3>David&apos;s Blog</h3>
                <FiMail color="#" />
              </div>
              <Post />
              <Post />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
