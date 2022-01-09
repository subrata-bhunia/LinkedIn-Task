import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import { Card, Icon } from "react-native-elements";
import FastImage from 'react-native-fast-image';
import { SliderBox } from 'react-native-image-slider-box';
import dummyServices from './Data/dummy.services';
import { version } from './package.json';
const images =[
  require('./assets/Images/main.png'),
  require('./assets/Images/main.png'),
  require('./assets/Images/main.png'),
  require('./assets/Images/main.png')
]

const Box =({logo,name})=>{
  return(
    <View style={{height:120,width:129,backgroundColor:'#fff',marginTop:3}}>
      <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:120,width:120,backgroundColor:'#fff'}}>
        <Image source={logo} style={{height:50,width:50,resizeMode:'contain'}} />
        <Text style={{fontFamily:"Inter-SemiBold",fontSize:14,color:"#000",marginTop:3}}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const Box2 =({image,name})=>{
  return(
    <View style={{height:100,backgroundColor:'#fff',marginTop:3,alignItems:'center',width:75}}>
      <FastImage source={image} style={{height:50,width:50,resizeMode:'contain'}} />
      <Text style={{fontFamily:"Inter",fontSize:11,color:"#000",marginTop:3,textAlign:'center'}}>
        {name}
      </Text>
    </View>
  )
}
const Box3 =({image,heading,description})=>{
  return(
    <Card containerStyle={{borderRadius:10,backgroundColor:"#fff"}} >
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <View>
          <FastImage source={image} style={{height:70,width:70}} resizeMode='contain' />
        </View>
        <View style={{width:"86%",paddingHorizontal:3}}>
          <Text style={{fontFamily:"Raleway-Bold",color:"#000",fontSize:18}}>{heading}</Text>
          <Text style={{fontFamily:"Raleway",color:"#000",marginVertical:5,fontSize:14}}>{description}</Text>
        </View>
      </View>
    </Card>
  )
}
const Box4 =({image,heading,description})=>{
  return(
    <View style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>
      <View>
        <FastImage source={image} style={{height:70,width:70}} resizeMode='contain' />
      </View>
      <View style={{width:"85%",paddingHorizontal:5}}>
        <Text style={{fontFamily:"Inter-Bold",color:"#000",fontSize:18}}>{heading}</Text>
        <Text style={{fontFamily:"Inter",color:"#7E7E7E",letterSpacing:1.3,fontSize:12}}>{description}</Text>
      </View>
    </View>
  )
}
const Home = () => {
  const renderItem=({item})=>{
    return(
      <TouchableOpacity style={{paddingHorizontal:10}}>
        <FastImage source={{uri:`${item.img}`}}  style={{height:120,width:170,borderRadius:10}} />
        <Text style={{fontFamily:"Inter-SemiBold",fontSize:14,color:"#545454",marginTop:3}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <ScrollView style={styles.container}>
      {/* location */}
      <View style={styles.searchAlign}>
        <View>
          <View style={styles.location}>
            <Icon name="ios-location-outline" size={22} color="black" type="ionicon"  />
            <Text style={{fontFamily:'Inter-Bold',fontSize:18,color:'#000'}}>
              Home
            </Text>
            <Icon name="sort-down" size={15} color="black" type="font-awesome" />
          </View>
          <Text style={{fontFamily:'Inter',color:'#000'}}>
            Inner Circle, Connaught Place, New Delhi, Del...
          </Text>
        </View>
        <View>
          <Icon name="search-outline" type="ionicon" color="#000" size={30} />
        </View>
      </View>
      {/* Carousel */}

      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={250}
          resizeMode={'stretch'}
          dotColor="#FFF"
          inactiveDotColor="rgba(255, 255, 255, 0.17)"
          // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        />
      </View>
      {/* Menu */}
      <View style={{flexDirection:'row',paddingVertical:10,flexWrap:'wrap',justifyContent:'space-around'}}>
        <Box name="Renovation" logo={require('./assets/icons/menu_1.png')}  />
        <Box name="Handyman" logo={require('./assets/icons/menu_2.png')}  />
        <Box name="Home shifting" logo={require('./assets/icons/menu_3.png')}  />
        <Box name="Gardening" logo={require('./assets/icons/menu_4.png')}  />
        <Box name="Declutter" logo={require('./assets/icons/menu_5.png')}  />
        <Box name="Painting" logo={require('./assets/icons/menu_6.png')}  />
      </View>
      {/* Services */}
      <View style={{backgroundColor:"#fff",padding:10,marginVertical:5}}>
        <Text style={{fontFamily:"Raleway-Bold",fontSize:24,color:"#000"}}>
          Popular Services
        </Text>
        <FlatList
         horizontal 
         renderItem={renderItem} 
         data={dummyServices} 
         scrollEnabled
         style={{marginTop:20}}
         showsHorizontalScrollIndicator={false}
         />
      </View>
      {/* Cert */}
      <View style={{backgroundColor:"#fff",padding:10,marginVertical:5,flexDirection:'row'}}>
        <Box2 name="On Demand / Scheduled" image={require('./assets/icons/sub_menu_1.png')} />
        <Box2 name="Verified Partners" image={require('./assets/icons/sub_menu_2.png')} />
        <Box2 name="Satisfaction Guarantee" image={require('./assets/icons/sub_menu_3.png')} />
        <Box2 name="Upfront Pricing" image={require('./assets/icons/sub_menu_4.png')} />
        <Box2 name="Highly Trained Professionals" image={require('./assets/icons/sub_menu_5.png')} />
      </View>
      {/* Why */}
      <View style={{backgroundColor:"#fff",padding:10,marginVertical:5}}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
          <Icon name="security" type="material" reverse size={20} />
          <Text style={{fontFamily:"Raleway-Bold",fontSize:24,color:"#000"}}>
            Why Choose Us
          </Text>
        </View>
        <Box3
         image={require('./assets/icons/image_1.png')} 
         heading="Quality Assurance" 
         description="Your satisfaction is guaranteed."
         />
        <Box3
         image={require('./assets/icons/image_2.png')} 
         heading="Fixed Prices" 
         description="No hidden costs, all the prices are known and fixed before booking"
         />
        <Box3
         image={require('./assets/icons/image_3.png')} 
         heading="Hassel free" 
         description="convenient, time saving and secure"
         />
      </View>
      {/* Best-in Class Safety Measures */}
      <View style={{backgroundColor:"#000",padding:10,marginVertical:5,height:70,justifyContent:'center'}}>
        <Text style={{fontFamily:"Raleway-SemiBold",fontSize:20,color:"#fff",textAlign:'center'}}>Best-in Class Safety Measures</Text>
      </View>
      <View style={{padding:10,marginTop:5,backgroundColor:"#F8FAFB"}}>
        <Box4
          image={require('./assets/icons/safety_1.png')} 
          heading="Usage of masks, gloves & Sanitisers" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst nullam mauris malesuada in. Eget in condimentum porttitor nec tristique penatibus ipsum nunc. "
          />
        <Box4
          image={require('./assets/icons/safety_2.png')} 
          heading="Low-contact Service Experience" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst nullam mauris malesuada in. Eget in condimentum porttitor nec tristique penatibus ipsum nunc. "
          />
      </View>
      <View style={{height:200,width:"100%",backgroundColor:'#FFF',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontFamily:"Inter-Bold",fontSize:18,color:"rgba(196, 196, 196, 0.55)",textAlign:'center'}}>
          HASSLE FREE{'\n'}QUALITY SERVICE
        </Text>
        <Text style={{marginTop:10,fontFamily:"Inter",fontSize:18,color:"rgba(196, 196, 196, 0.55)",textAlign:'center'}}>
          V {version}
        </Text>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F4F4"
  },
  location:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    width:100
  },
  searchAlign:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
    backgroundColor:'#fff'
  }
})



