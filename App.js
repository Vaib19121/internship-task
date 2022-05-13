import {  Text, View } from "react-native";
import CustomInput from "./components/CustomInput";
import Navbar from "./components/Navbar";
import CompanyLogo from "./components/CompanyLogo";
import CustomText from "./components/CustomText";
import CustomButton from "./components/CustomButton";
import Nextbtn from "./components/Nextbtn";

export default function App() {
  return (
    <View style={{ backgroundColor: "#fa892d" }}>
      <Navbar />
      <CompanyLogo />
      <CustomText text="GUARONTORS INFORMATION" size={23} />
      <CustomInput name="Name" icon="person" />
      <CustomInput name="Business Name" icon="work" />
      <CustomInput name="Contact" icon="phone" />
      <CustomInput name="Address" icon="pin-drop" />
      <CustomText text="UPLOAD IDENTITY DOCUMENT" size={18} />
      <CustomButton />
      <Nextbtn />
      <View style={{flexDirection:"row",alignSelf:'center',justifyContent:'space-between',paddingTop:12,paddingBottom:12}}>
        <Text style={{fontSize:18,color:'white',alignContent:'center'}}>Already have an account? </Text>
        <Text style={{fontSize:18,color:'white',alignContent:'center',textDecorationLine:'underline'}}>LogIn </Text>
      </View>
    </View>
  );
}
