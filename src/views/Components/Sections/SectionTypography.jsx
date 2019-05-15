import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Small from "components/Typography/Small.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import Info from "components/Typography/Info.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image from "assets/img/foods/1.jpeg";
import image1 from "assets/img/foods/2.jpeg";
import image2 from "assets/img/foods/3.jpeg";
import image3 from "assets/img/foods/4.jpeg";
import image4 from "assets/img/foods/5.jpeg";
import image5 from "assets/img/foods/6.jpeg";
import image6 from "assets/img/foods/7.jpeg";
import image7 from "assets/img/foods/8.jpeg";
import image8 from "assets/img/foods/9.jpeg";
import image9 from "assets/img/foods/10.jpeg";
import image10 from "assets/img/foods/11.jpeg";
import image11 from "assets/img/foods/12.jpeg";
import image12 from "assets/img/foods/13.jpeg";
import image13 from "assets/img/foods/14.jpeg";
import image14 from "assets/img/foods/15.jpeg";
import image15 from "assets/img/foods/16.jpeg";
import image16 from "assets/img/foods/17.jpeg";
import image17 from "assets/img/foods/18.jpeg";
import image18 from "assets/img/foods/19.jpeg";
import image19 from "assets/img/foods/20.jpeg";
import image20 from "assets/img/foods/21.jpeg";
import image21 from "assets/img/foods/22.jpeg";
import image22 from "assets/img/foods/23.jpeg";
import image23 from "assets/img/foods/24.jpeg";
import image24 from "assets/img/foods/25.jpeg";
import image25 from "assets/img/foods/26.jpeg";
class SectionTypography extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
          <div className={classes.title}>
              <h2 style={{display:'flex',justifyContent:'center'}}>A Little About Us...</h2>
          </div>
           <GridContainer>
              <div className={classes.typo}>
                <div className={classes.note}></div>
                <p><b>Who Are We?</b> We would love our work to be cherished amongst our client. Our work is a piece of art and<br/> we do every bit of it with passion. We do product photography and food photography,
                 and <br/>we are experienced professionals and doing this for 3 years</p>
                 <br/>
                 <br/>
                 <p><b>What We Do ?</b> We expertise in food photography and product photography as well as photo production services,<br/> and art direction. The most exciting thing to be working on projects that involve the construction 
                 of ideas and <br/>their execution until the end.</p>
              </div>
            </GridContainer>
            <div className={classes.title}>
              <h2 style={{display:'flex',justifyContent:'center'}}>With Our Photography Packages you'll...</h2>
            </div>
            <br/>
            <GridContainer>
              <div className={classes.typo}>
                <div className={classes.note}></div>
                <Quote
                  text="Sell your product without saying a word"
                  // author=" Kanye West, Musician"
                />
              </div>
              <div className={classes.typo}>
                <div className={classes.note}></div>
                <Quote
                  text="Stop looking like an amateur with unprofessional photography.
                         High quality product photography builds credibility and trust. "
                  // author=" Kanye West, Musician"
                />
              </div>
              <div className={classes.typo}>
                <div className={classes.note}></div>
                <Quote
                  text="Choose curated stock photography, traditional product shots, 
                        or lifestyle photography that connects with your customer’s lifestyle.  "
                  // author=" Kanye West, Musician"
                />
              </div>
              <div className={classes.typo}>
                <div className={classes.note}></div>
                <Quote
                  text="Stock up on photography for growing your social media presence, 
                        building your website, and taking your ad campaigns to the next level.  "
                  // author=" Kanye West, Musician"
                />
              </div>
            </GridContainer>
          </div>
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h2>Our Portfolio</h2>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2} >
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image1}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image2}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image3}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2} >
                <img
                  src={image4}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image5}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image6}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image7}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2} >
                <img
                  src={image8}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image9}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image10}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image11}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2} >
                <img
                  src={image12}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image13}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image14}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image15}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2} >
                <img
                  src={image16}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image17}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image18}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image19}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2} >
                <img
                  src={image20}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image21}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image22}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image23}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image24}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}  className={classes.marginLeft}>
                <img
                  src={image25}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
            </GridContainer>
            <GridContainer />
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(SectionTypography);
