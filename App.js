import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View } from 'react-native';
import { LineChart,BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Main from './components/main-o-s';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main/>
      <LineChart
    data={{
      labels: ["jan","feb","mar","apr","may","jun"],
      datasets:[
        {
          data:[5,3,1,7,6,9]
        }
      ]
    }}
    width={Dimensions.get('window').width} 
    height={220}
    yAxisLabel={''}
    chartConfig={{
      backgroundColor: '#808080',
      backgroundGradientFrom: 'black',
      backgroundGradientTo: '#808080',
      decimalPlaces: 0, 
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  <Text>Monthly sales</Text>

  <BarChart
    // style={graphStyle}
    data={{
      labels: ["jan","feb","mar","apr","may","jun"],
      datasets:[
        {
          data:[5,3,5,7,6,9]
        }
      ]
    }}
    width={Dimensions.get('window').width} 
    height={220}
    yAxisLabel={''}
    chartConfig={{
      backgroundColor: '#808080',
      backgroundGradientFrom: 'black',
      backgroundGradientTo: '#808080',
      decimalPlaces: 0, 
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,

      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
/>
<Text>Monthly sales</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
