import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';

export default class FAQ extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        {/* SECTION 1 */}
        <section>
          <img
            alt="faq image"
            src="https://fthmb.tqn.com/d_1uyjfmol0ytuR485Z13kY09Kw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/man-with-glasses-having-eyesight-problems-with-laptop-600060600-5a9c3cc704d1cf0038fccfca.jpg"
            style={{
              height: '70vh',
              width: '80%',
              marginLeft: '10%',
              marginTop: '5%'
            }}
          />
          <h2 style={{ fontWeight: 900, fontSize: '50px' }}>
            Frequently Asked Questions
          </h2>
          <br />
        </section>
        {/* SECTION 2 */}
        <section>
          <Accordion
            styled
            style={{
              height: '80%',
              width: '80%',
              fontSize: '20px',
              marginLeft: '10%',
              marginBottom: '10%'
            }}
          >
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              How do I get started?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 0}
              style={{ fontSize: '15px' }}
            >
              <p>
                Congrats, you’ve come to the right place! The easiest way to get
                started is by checking out our website and deciding which meals
                you’d like depending on your fitness goals and dietary needs.
                Our READY MADE MEALS are delicious—perfect for on-the-go people
                who want to eat well and don’t have time to cook.
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              How do i order?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 1}
              style={{ fontSize: '15px' }}
            >
              <p>
                Easiest way to order is right here on our website. However, you
                can also call us: (972) 984-0817, email @Spartanperformancemeals
                .
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Tell me more about the meals. Do you use sodium? What about
              preservatives?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 2}
              style={{ fontSize: '15px' }}
            >
              <p>
                Our food is lightly seasoned with house-made spices. We don’t
                add any preservatives. Healthy Course meals are cooked fresh
                with natural ingredients.
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Where can I find the nutritional/calorie content for the meals?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 3}
              style={{ fontSize: '15px' }}
            >
              <p>
                All of the nutritional content for our food is listed next to
                each food item. And we’ve made it super easy for you—as your
                build your meals, we’ll add up the nutritional content such as
                calories and grams, taking the guess work out of it.
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              What if I have a food allergy?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 4}
              style={{ fontSize: '15px' }}
            >
              <p>
                We can accomodate you! Just tell us during the ordering process
                about your food allergies and we will make the necessary
                changes. You can also call us at (972) 984-0817 if you discuss
                it further or have any questions.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 5}
              index={5}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              How soon can I get my food?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 5}
              style={{ fontSize: '15px' }}
            >
              <p>
                A better question is: how soon do you want it? If you order
                today you can get your food as early as tomorrow after 6:00pm
                (Fridays excluded). However, we’ve found that most of our
                customers like to start their work week off eating healthy—so we
                suggest you place your order online by Saturday morning to get
                your meals on Sunday. When you place your online order, you will
                be asked which day and time you want to pick up your meals or
                have them delivered.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 6}
              index={6}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Do you offer guilt-free desserts?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 6}
              style={{ fontSize: '15px' }}
            >
              <p>
                Why yes we do! Check out our healthy dessert options in
                <a
                  style={{ marginLeft: '.5%', marginRight: '.5%' }}
                  href="/Meals/Dessert"
                >
                  Dessert Menu
                </a>
                and also
                <a
                  style={{ marginLeft: '.5%', marginRight: '.5%' }}
                  href="https://www.facebook.com/Spartanperformancemeals/"
                >
                  FOLLOW US ON FACEBOOK
                </a>{' '}
                for delicious dessert updates.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 7}
              index={7}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Can I buy food by the pound?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 7}
              style={{ fontSize: '15px' }}
            >
              <p>
                Sure thing. If you’re the type that likes to do your own meal
                prep, more power to you! For that very reason we sell our meats,
                veggies and carbs by the pound in a vacuum sealed bag for
                ultimate freshness.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 8}
              index={8}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Do you deliver?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 8}
              style={{ fontSize: '15px' }}
            >
              <p>Yes we do! Delivery is FREE if you order $70 or more.</p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 9}
              index={9}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Where can i pick up my orders?
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === 9}
              style={{ fontSize: '15px' }}
            >
              <p>You can pick up your order at any of these LOCATIONS below:</p>

              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">EMPIRE FITNESS</List.Header>
                    <List.Description as="a">
                      400 N Central ExpressWay ste 102 Mckinney, Tx 75069
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>

              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">
                      Metro-Flex Ft Worth, The Castle
                    </List.Header>
                    <List.Description as="a">
                      5501 Thelin St Fort Worth, Tx 76115
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>

              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">Extreme Iron Pro Gym</List.Header>
                    <List.Description as="a">
                      17390 Preston Rd STE 360, Dallas, Tx 75252
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>

              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">DTS Fitness, Carrollton</List.Header>
                    <List.Description as="a">
                      2515 E Rosemead Pkwy Ste 400 Carrollton, Tx 75007
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Accordion.Content>
          </Accordion>
        </section>
      </div>
    );
  }
}
