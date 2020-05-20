import React, { Component } from 'react';


import { AppRegistry, Text, View, TouchableHighlight, Dimensions, StyleSheet, Image } from 'react-native';


import Constants from 'expo-constants';





let deviceHeight = Dimensions.get('window').height;


let deviceWidth = Dimensions.get('window').width;





export default class App extends Component {





// Initially, Welcome page is displayed


state = {


homePage: 'block',


platformPage: 'none',


hightopPage: 'none',


lowtopPage: 'none',


platformPage1: 'none',


hightopPage1: 'none',


lowtopPage1: 'none',

}





// When Welcome Page button is pressed, hide Info page and show Welcome page


handleHomePagePress = () => this.setState(state => ({


homePage: 'block',


platformPage: 'none',


hightopPage: 'none',


lowtopPage: 'none',


platformPage1: 'none',


hightopPage1: 'none',


lowtopPage1: 'none',


}));




// When Info Page button is pressed, hide Welcome page and show Info page


handlePlatformPagePress = () => this.setState(state => ({


homePage: 'none',


platformPage: 'block',


hightopPage: 'none',


lowtopPage: 'none',


platformPage1: 'none',


hightopPage1: 'none',


lowtopPage1: 'none',

}));


handleHightopPagePress = () => this.setState(state => ({


homePage: 'none',


platformPage: 'none',


hightopPage: 'block',


lowtopPage: 'none',


platformPage1: 'none',


hightopPage1: 'none',


lowtopPage1: 'none',

}));


handleLowtopPagePress = () => this.setState(state => ({


homePage: 'none',


platformPage: 'none',


hightopPage: 'none',


lowtopPage: 'block',


platformPage1: 'none',


hightopPage1: 'none',


lowtopPage1: 'none',

}));


handlePlatform1PagePress = () => this.setState(state => ({


homePage: 'none',


platformPage: 'none',


hightopPage: 'none',


lowtopPage: 'none',


platformPage1: 'block',


hightopPage1: 'none',


lowtopPage1: 'none',

}));



handleHightop1PagePress = () => this.setState(state => ({


homePage: 'none',


platformPage: 'none',


hightopPage: 'none',


lowtopPage: 'none',


platformPage1: 'none',


hightopPage1: 'block',


lowtopPage1: 'none',

}));

handleLowtop1PagePress = () => this.setState(state => ({


homePage: 'none',


platformPage: 'none',


hightopPage: 'none',


lowtopPage: 'none',


platformPage1: 'none',


hightopPage1: 'none',


lowtopPage1: 'block',

}));



render() {


return (


<View style={styles.container}>




{/*FIRST PAGE*/}


<View style={{ display: this.state.homePage }}>


<View style={styles.contentContainer}>


<Text style={styles.title}>


Welcome to the Sneaker App!

Find the Perfect Sneaker for you! 


</Text>


<Image


source={{ uri: 'https://codehs.com/uploads/b3c7e2d8fb06fd0e1c035fa437ad64aa' }}


style={{ height: 200, width: 200 }}


/>


</View>


</View>





{/*PLATFORM PAGE !!!*/}


<View style={{ display: this.state.platformPage }}>


<View style={styles.contentContainer}>


<Text style={styles.paragraph}>

PLATFORMS

</Text>


<Image


source={{ uri: 'https://codehs.com/uploads/b3c7e2d8fb06fd0e1c035fa437ad64aa' }}


style={{ height: 200, width: 200 }}


/>



<TouchableHighlight style={styles.navButton}


onPress={this.handlePlatform1PagePress}


>


<Text style={styles.navButtonText}>


VIEW MORE


</Text>


</TouchableHighlight>


</View>


</View>




{/*HIGH TOP PAGE !!!*/}

<View style={{ display: this.state.hightopPage }}>


<View style={styles.contentContainer}>


<Text style={styles.title}>

HIGHTOP


</Text>



<Image


source={{ uri: 'https://codehs.com/uploads/756c06dd712c32a4717062a659a611aa' }}


style={{ height: 200, width: 200 }}


/>


<TouchableHighlight style={styles.navButton}


onPress={this.handleHightop1PagePress}


>


<Text style={styles.navButtonText}>


COMING SOON


</Text>


</TouchableHighlight>


</View>


</View>




{/*LOWTOP PAGE !!!*/}

<View style={{ display: this.state.lowtopPage }}>


<View style={styles.contentContainer}>


<Text style={styles.title}>

LOWTOP


</Text>


<Image


source={{ uri: 'https://codehs.com/uploads/92e709edc47402546d0bee62c468e7b5' }}


style={{ height: 200, width: 200 }}


/>

<TouchableHighlight style={styles.navButton}


onPress={this.handleLowtop1PagePress}


>


<Text style={styles.navButtonText}>


COMING SOON


</Text>


</TouchableHighlight>
</View>


</View>



{/*BOTTOM NAV BUTTONS*/}


<View style={styles.navbarContainer}>


<TouchableHighlight style={styles.navButton}


onPress={this.handlePlatformPagePress}


>


<Text style={styles.navButtonText}>


Platforms


</Text>


</TouchableHighlight>


<TouchableHighlight style={styles.navButton}


onPress={this.handleLowtopPagePress}


>


<Text style={styles.navButtonText}>


Lowtops


</Text>


</TouchableHighlight>


<TouchableHighlight style={styles.navButton}


onPress={this.handleHightopPagePress}


>


<Text style={styles.navButtonText}>


Hightops


</Text>


</TouchableHighlight>


</View>

<View style={{ display: this.state.platform1Page }}>


<View style={styles.contentContainer}>


<Text style={styles.title}>

PLATFORMS        


</Text>


<Image


source={{ uri: 'https://codehs.com/uploads/b3c7e2d8fb06fd0e1c035fa437ad64aa' }}


style={{ height: 140, width: 200 }}


/>

<Image


source={{ uri: 'https://codehs.com/uploads/3d8de68195e213fcd7e65d7447dce02d' }}


style={{ height: 140, width: 200 }}


/>

<Image


source={{ uri: 'https://codehs.com/uploads/cea0e56b4ea34a09d0e7a2c392bfc59c' }}


style={{ height: 140, width: 200 }}


/>
<TouchableHighlight style={styles.navButton}


onPress={this.handleHomePagePress}


>


<Text style={styles.navButtonText}>


Go back


</Text>


</TouchableHighlight>
</View>
</View>






</View>


);


}


}





const styles = StyleSheet.create({


container: {


height: deviceHeight,


width: deviceWidth,


},


contentContainer: {


height: 5*(deviceHeight/6),


width: deviceWidth,


alignItems: 'center',


justifyContent: 'center',


backgroundColor: '#52b1ff',


},


title: {


fontSize: 20,


textAlign: 'center',


fontWeight: 'bold',


color: 'black',


},


paragraph: {


fontSize: deviceHeight/20,


textAlign: 'center',


color: 'white',


},


navbarContainer: {


height: deviceHeight/6,


width: deviceWidth,


backgroundColor: '#b494ff',


flexDirection: 'row',


alignItems: 'center',


justifyContent: 'center',


borderTopWidth: 10,


borderColor: 'white',


},


navButton: {


height: deviceHeight/14,


width: deviceWidth/4,


backgroundColor: '#52b1ff',


borderColor: 'white',


borderWidth: 2,


alignItems: 'center',


justifyContent: 'center',


margin: 20,


},


navButtonText: {


fontSize: deviceHeight/40,


textAlign: 'center',


color: 'black',


},





});
