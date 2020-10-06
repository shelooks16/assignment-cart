import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import categories from '../db/categories.json';

const Home = () => {
  return (
    <Container>
      <Row>
        {categories.map(c => (
          <Col
            tag={Link}
            key={c.id}
            to={`/category/${c.id}`}
            className="text-dark mb-3 bg-white py-5 shadow-sm rounded-lg flex-fill text-center"
          >
            <h2 className="h3">{c.name}</h2>
            <div>{c.description}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
