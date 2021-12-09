import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import "./content.css";

export default function Content() {
  return (
    <div id="content">
      <Segment
        style={{ adding: "1em 0em", marginBottom: "3rem" }}
        id="header-section"
        vertical
      >
        <Grid verticalAlign="middle" textAlign="center" style={{ 'min-height': 700}}>
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h1"
                style={{
                  fontSize: "4rem",
                  margin: "10rem auto",
                  color: "white",
                }}
              >
                Proctor Creek Watershed
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <div style={{ padding: "0 5rem" }}>
        <Container text>
          <Header as="h2">Overview</Header>
          <p>
            The West Side Provisions neighborhood, which has been a center of
            Atlanta gentrification, is chock-full of suave ice cream shops,
            designer furniture stores, and LuluLemon outlets. Rapid development
            has led to the rise of towering condos and luxury apartments that
            crowd the congested two-lane street below. However, taking a short
            drive on that very same street will land you in a very different
            West Side neighborhood. These neighborhoods, located near Proctor
            Creek, are suffering from an environmental crisis that few are aware
            of as they wait in line at the latest brunch spot, a few minutes
            drive away.
          </p>

          <p>
            The Proctor Creek area of Westside Atlanta is suffering from erosion
            and high bacteria levels from stormwater and sewage overflow. This
            creek, in turn, is a source of flooding which brings the pollutants
            from the waterway directly into the surrounding Proctor Creek
            neighborhood. These public health threats are only worsened by
            gentrification.
          </p>
        </Container>

        <Divider />

        <Container text>
          <Header as="h2">Getting Involved</Header>

          <p>
            The Greening Youth Foundation needs personnel to assist in the
            cleanup of the Proctor Creek Watershed. We have several job and
            internship opportunities for members of the Atlanta community to get
            involved with this project.
          </p>
        </Container>
        <Segment>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column>
                <Header as="h3">Internship</Header>

                <Container text>
                  <p>
                    The Greening Youth Foundation seeks motivated candidates who
                    are passionate about giving back to the environment.
                    Regardless of skill level, there is some way for everyone to
                    contribute to making Atlanta a cleaner and better city.
                    Apply below to learn how you can get involved.
                  </p>
                <Button style={{ color: "white", background: "#9bc68e" }}>
                  Apply Now (Internship)
                </Button>
                </Container>

              </Grid.Column>

              <Grid.Column>
                <Header as="h3">Full Time</Header>

                <Container text>
                  <p>
                    Looking for a full time position? There are countless ways
                    that you can contribute to improving the environment and
                    living conditions of Atlanta residents. Apply below to find
                    out how!
                  </p>
                  <Button style={{ color: "white", background: "#9bc68e" }}>
                    Apply Now (Full Time)
                  </Button>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    </div>
  );
}
