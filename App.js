import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LearnReadingLettersA from "./src/screens/LearnReadingLetter-A";
import ReadingLettersResultA from "./src/screens/ReadingLettersResult-A";
import LearnReadingLettersB from "./src/screens/LearnReadingLetter-B";
import ReadingLettersResultB from "./src/screens/ReadingLettersResult-B";
import LearnReadingLettersC from "./src/screens/LearnReadingLetter-C";
import ReadingLettersResultC from "./src/screens/ReadingLettersResult-C";
import LearnReadingLettersD from "./src/screens/LearnReadingLetter-D";
import ReadingLettersResultD from "./src/screens/ReadingLettersResult-D";
import LearnReadingLettersE from "./src/screens/LearnReadingLetter-E";
import ReadingLettersResultE from "./src/screens/ReadingLettersResult-E";
import LearnReadingLettersF from "./src/screens/LearnReadingLetter-F";
import ReadingLettersResultF from "./src/screens/ReadingLettersResult-F";
import LearnReadingLettersG from "./src/screens/LearnReadingLetter-G";
import ReadingLettersResultG from "./src/screens/ReadingLettersResult-G";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    LearnReading: LearnReadingLettersA,
    ReadingResult: ReadingLettersResultA,
    LearnReadingB: LearnReadingLettersB,
    ReadingResultB: ReadingLettersResultB,
    LearnReadingC: LearnReadingLettersC,
    ReadingResultC: ReadingLettersResultC,
    LearnReadingD: LearnReadingLettersD,
    ReadingResultD: ReadingLettersResultD,
    LearnReadingE: LearnReadingLettersE,
    ReadingResultE: ReadingLettersResultE,
    LearnReadingF: LearnReadingLettersF,
    ReadingResultF: ReadingLettersResultF,
    LearnReadingG: LearnReadingLettersG,
    ReadingResultG: ReadingLettersResultG,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
