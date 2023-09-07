import React from 'react';
import { Container } from 'react-bootstrap';

function Post() {
  return (
    <Container fluid>
      <h3>How to make your company website based on bootstrap framework on localhost?</h3>
      <p className="text-secondary">
        November 23, 2015 / by
        {' '}
        <a href="" className="text-success text-decoration-none">Alex Parker</a>
      </p>
      <p>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
        Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor
        sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore
        et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
        reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum
        fugiat, quo voluptas nulla pariatur?
      </p>
      <a href="" className="text-success text-decoration-none">Read more</a>
    </Container>
  );
}

export default Post;
