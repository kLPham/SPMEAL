import React, { Component } from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';
import './MeetUs.css';

const MeetUs = () => (
  <div className="cardContainer">
    {/* EMPLOYEE 1 */}
    <Card>
      <Image src="http://www.pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg" />
      <Card.Content>
        <Card.Header>Christian Harrison</Card.Header>
        <Card.Meta>
          <span className="date">Cheif Executive Officer</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    {/* EMPLOYEE 2 */}
    <Card>
      <Image src="http://www.pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg" />
      <Card.Content>
        <Card.Header>John Smith</Card.Header>
        <Card.Meta>
          <span className="date">Cheif Financial Officer</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    {/* EMPLOYEE 3 */}
    <Card>
      <Image src="http://www.pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg" />
      <Card.Content>
        <Card.Header>John Smith</Card.Header>
        <Card.Meta>
          <span className="date">Cheif Opperating Officer</span>
        </Card.Meta>
      </Card.Content>
    </Card>

    {/* EMPLOYEE 4 */}
    <Card>
      <Image src="http://www.pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg" />
      <Card.Content>
        <Card.Header>John Smith</Card.Header>
        <Card.Meta>
          <span className="date">Chef</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    {/* EMPLOYEE 5*/}
    <Card>
      <Image src="http://www.pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg" />
      <Card.Content>
        <Card.Header>John Smith</Card.Header>
        <Card.Meta>
          <span className="date">Store Manager</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    {/* EMPLOYEE 6 */}
    <Card>
      <Image src="http://www.pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg" />
      <Card.Content>
        <Card.Header>John Smith</Card.Header>
        <Card.Meta>
          <span className="date">Manufacturer's sales</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    {/* EMPLOYEE 7*/}
    <Card>
      <Image src="http://www.pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg" />
      <Card.Content>
        <Card.Header>John Smith</Card.Header>
        <Card.Meta>
          <span className="date">Delivery Person</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    {/* EMPLOYEE 8*/}
    <Card>
      <Image src="http://www.pezal.com/UserFiles/Image/kontakt/PiotrZaleskiSS.jpg" />
      <Card.Content>
        <Card.Header>Kelly Pham</Card.Header>
        <Card.Meta>
          <span className="date">Web Developer</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

export default MeetUs;
