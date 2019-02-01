import React, { Component } from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';
import './MeetUs.css';

const MeetUs = () => (
  <div className="cardContainer">
    {/* EMPLOYEE 1 */}
    <Card>
      <Image src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/18671672_2308871259337290_1910861756640163003_o.jpg?_nc_cat=110&_nc_ht=scontent-dfw5-2.xx&oh=0a3ec636086e7e487407a4dc7915c458&oe=5CB3F533" />
      <Card.Content>
        <Card.Header>Christian Harrison</Card.Header>
        <Card.Meta>
          <span className="date">Cheif Executive Officer</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    {/* EMPLOYEE 2 */}
    <Card>
      <Image src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/17218283_2258165251074558_3645654436422985471_o.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-2.xx&oh=cde896272c975f1b9064765eecc55fb2&oe=5CC4414C" />
      <Card.Content>
        <Card.Header>Masion Smith</Card.Header>
        <Card.Meta>
          <span className="date">Cheif Financial Officer</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    {/* EMPLOYEE 3 */}
    <Card>
      <Image src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/34089326_2581729205384826_5703445221644173312_o.jpg?_nc_cat=102&_nc_ht=scontent-dfw5-2.xx&oh=202349aa7041500fb6af51745c733f90&oe=5CC066A2" />
      <Card.Content>
        <Card.Header>Dave Carter</Card.Header>
        <Card.Meta>
          <span className="date">Cheif Opperating Officer</span>
        </Card.Meta>
      </Card.Content>
    </Card>

    {/* EMPLOYEE 4 */}
    <Card>
      <Image src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/29389393_2530772283813852_3027708676732354560_n.jpg?_nc_cat=102&_nc_ht=scontent-dfw5-2.xx&oh=988685b3e318f23c1ceb0cd766c13ebf&oe=5CB2F916" />
      <Card.Content>
        <Card.Header>Kelsey King</Card.Header>
        <Card.Meta>
          <span className="date">Store Manager</span>
        </Card.Meta>
      </Card.Content>
    </Card>

    {/* EMPLOYEE 5*/}
    <Card>
      <Image src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/17637117_2274906102733806_1547837230150861157_o.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-2.xx&oh=72a63c09fe6813ad8d9843f8804b6880&oe=5CFD854F" />
      <Card.Content>
        <Card.Header>Dave Carter</Card.Header>
        <Card.Meta>
          <span className="date">Chef</span>
        </Card.Meta>
      </Card.Content>
    </Card>

    {/* EMPLOYEE 6 */}
    <Card>
      <Image src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/20621913_2368722136685535_98657887829111651_n.jpg?_nc_cat=102&_nc_ht=scontent-dfw5-2.xx&oh=0564a37fb8229fe018711b82362e87b0&oe=5CF71338" />
      <Card.Content>
        <Card.Header>Larry Patterson</Card.Header>
        <Card.Meta>
          <span className="date">Manufacturer's sales</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    {/* EMPLOYEE 7*/}
    <Card>
      <Image src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/39972416_2682953955262350_5369636944605085696_o.jpg?_nc_cat=100&_nc_ht=scontent-dfw5-2.xx&oh=c2a74e74cbfc970e1741b9d4ef02eea0&oe=5CBBFB06" />
      <Card.Content>
        <Card.Header>John Biles</Card.Header>
        <Card.Meta>
          <span className="date">Delivery Person</span>
        </Card.Meta>
      </Card.Content>
    </Card>

    {/* EMPLOYEE 8*/}
    <Card>
      <Image src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/50813617_2234457980139407_1501646044151152640_n.jpg?_nc_cat=106&_nc_ht=scontent-dfw5-2.xx&oh=00f87c279c5632ca20f3a4db3d3e49e0&oe=5CB6E681" />
      <Card.Content>
        <Card.Header>Kelly Pham</Card.Header>
        <Card.Meta>
          <span>Web Developer</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

export default MeetUs;
