import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 50,
  },
  headerTitle: {
    color: "#2F2D2C",
    fontSize: 18,
    fontFamily: "SoraMedium",
  },
  optionsContainer: {
    marginTop: 10,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#F2F2F2",
    padding: 4,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 32,
  },
  option: {
    width: 150,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
  },
  optionText: {
    fontSize: 16,
    color: "#2F2D2C",
    fontFamily: "SoraMedium",
  },
  addressContainer: {
    paddingBottom: 20,
    borderBottomColor: "#EAEAEA",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  addressTitle: {
    fontSize: 16,
    fontFamily: "SoraBold",
    color: "#2F2D2C",
    marginBottom: 12,
  },
  address: {
    fontSize: 14,
    fontFamily: "SoraBold",
    color: "#2F2D2C",
    marginBottom: 4,
  },
  addressDesc: {
    fontSize: 12,
    fontFamily: "SoraRegular",
    color: "#808080",
    marginBottom: 12,
  },
  addressButtonsContainer: {
    flexDirection: "row",
  },
  addressButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    borderRadius: 16,
    marginRight: 8,
  },
  addressButtonText: {
    fontSize: 14,
    fontFamily: "SoraRegular",
    marginLeft: 4,
    color: "#303336",
  },
  product:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:16
  },
  productContainer: {
    height: 54,
    flexDirection: "row",
  },
  productImage: {
    height: 54,
    width: 54,
    borderRadius: 12,
    marginRight:12
  },
  productInfoContainer:{
    justifyContent:"center"
  },
  productTitle:{
    color:"#2F2D2C",
    fontFamily:"SoraBold",
    fontSize:16
  },
  productSubtitle:{
    color:"#9B9B9B",
    fontFamily:"SoraRegular",
    fontSize:12
  },
  productButtonsContainer:{
    flexDirection:"row",
    alignItems:"center",
    width:90,
    justifyContent:"space-between"
  },
  productButton:{
    width:28,
    height:28,
    borderColor:"#EAEAEA",
    borderWidth:1,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
  },
  productButtonNumber:{
    fontFamily:"SoraBold",
    fontSize:14
  }


});

export default styles;
