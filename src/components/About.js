import React, { Component } from "react";

export class About extends Component {
  constructor(props) {
    super(props);
    document.title = "About - Top News";
    this.props.setProgress(0)
  }
 
  render() {
    return (
      <div className="container" style={{ marginTop: "80px" }}>
        <h1>About Us</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non
          illum vero dolor necessitatibus dignissimos adipisci voluptates quis
          ratione soluta alias ex consequatur totam modi ducimus aspernatur
          voluptate, recusandae nulla esse. Accusamus fugiat expedita, unde
          nobis iste magni quod repellat dolor cum fuga. Accusantium sunt,
          necessitatibus eligendi maiores perspiciatis praesentium in itaque
          earum dolorem fugiat! Asperiores ipsum, vero commodi nulla dolore
          veniam ipsa facere officia, incidunt cupiditate quidem odio! Vitae ut
          harum quidem iusto inventore recusandae minus obcaecati, minima
          expedita vel voluptatibus aut explicabo debitis. Fuga pariatur
          mollitia accusantium ex. Ad obcaecati temporibus voluptate voluptates
          mollitia quod at facilis, ipsam doloremque facere molestiae nostrum
          autem perspiciatis minima animi voluptatum neque quia necessitatibus,
          odio sint, fugiat dolorem vel esse similique? Odit perferendis
          ducimus, nisi eos tempore natus adipisci? Adipisci, cum libero quasi,
          harum fugit nam, eius eos magnam delectus sequi distinctio tenetur rem
          repudiandae porro. Blanditiis quis totam recusandae ullam eum.
        </p>
      </div>
    );
  }
}

export default About;
