/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// core components
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx";

class SectionDownload extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Did you like our work?</h2>
              <h4>
                Cause if you did, it can be yours contact us, we would be happy to work for you
                we know the importance of small businesses as we are one like you. Let us make your business
                exquisite.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="primary"
                size="lg"
                // href="https://www.creative-tim.com/product/material-kit-react"
                target="_blank"
              >
                Book Now
              </Button>
              <Button
                color="primary"
                size="lg"
                // href="https://www.creative-tim.com/product/material-kit"
                target="_blank"
              >
                See Our Side Work
              </Button>
            </GridItem>
          </GridContainer>
          <br />
          <br />
          
          <div className={classes.textCenter + " " + classes.sharingArea}>
            <GridContainer justify="center">
              <h3>Thank you for supporting us!</h3>
            </GridContainer>
            <Button color="twitter">
              <i className={classes.socials + " fab fa-twitter"} /> Tweet
            </Button>
            <Button color="facebook">
              <i className={classes.socials + " fab fa-facebook-square"} />{" "}
              Share
            </Button>
            <Button color="google">
              <i className={classes.socials + " fab fa-google-plus-g"} />
              Share
            </Button>
            <Button color="github">
              <i className={classes.socials + " fab fa-github"} /> Star
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionDownload);
