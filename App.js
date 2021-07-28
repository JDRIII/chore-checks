import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import LoginPage from "./app/screens/LoginPage";
import TasksPage from "./app/screens/TasksPage";
import HouseholdPage from "./app/screens/HouseholdPage";
import * as firebase from "firebase";
import "firebase/firestore";
import config from "./config";
import Test from "./app/screens/Test";
import Drawer from "./app/screens/Drawer";
import { TaskPageClass } from "./app/screens/TaskPageClass";
import { TasksPage2 } from "./app/screens/TasksPage2";

var firebaseConfig = {
  apiKey: config.FIREBASE_KEY,
  authDomain: "chores-97427.firebaseapp.com",
  projectId: "chores-97427",
  storageBucket: "chores-97427.appspot.com",
  messagingSenderId: "409040868260",
  appId: "1:409040868260:web:7b6d1f00e29554af802731",
  measurementId: "G-8D3XVC7R9T",
};
// Initialize Firebase

console.log("refreshed");
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

console.log("aaaaaaaaaaaaaaaaaaaaa");
const db = firebase.firestore();

var docRef = db.doc("/houses/h38219");

export default function App() {
  // To display your page on the app, comment out the current element and add the page you are working on/want to see
  return (
    // <Drawer></Drawer>
    // <TasksPage></TasksPage>
    //<TaskPageClass></TaskPageClass>
    <TasksPage2></TasksPage2>
    //<LoginPage></LoginPage>
    //<HouseholdPage></HouseholdPage>
    //<Test></Test>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a6ddf1",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  titleText: {
    fontSize: 40,
    color: "white",
  },
  text: {
    fontSize: 20,
  },
});
