import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { WaveLevel, WaterQuality, WindStrength, CrowdLevel } from '../types';

type ReportScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Report'
>;

type ReportScreenRouteProp = RouteProp<RootStackParamList, 'Report'>;

interface Props {
  navigation: ReportScreenNavigationProp;
  route: ReportScreenRouteProp;
}

const ReportScreen: React.FC<Props> = ({ navigation, route }) => {
  const { beach } = route.params;
  
  const [waves, setWaves] = useState<WaveLevel | null>(null);
  const [water, setWater] = useState<WaterQuality | null>(null);
  const [wind, setWind] = useState<WindStrength | null>(null);
  const [people, setPeople] = useState<CrowdLevel | null>(null);

  const handleSubmit = () => {
    if (!waves || !water || !wind || !people) {
      Alert.alert('Incomplete', 'Please select all conditions before submitting.');
      return;
    }

    // In a real app, this would send data to the server
    Alert.alert(
      'Report Submitted!',
      `Thank you for reporting conditions at ${beach.name}`,
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  const OptionButton: React.FC<{
    title: string;
    isSelected: boolean;
    onPress: () => void;
  }> = ({ title, isSelected, onPress }) => (
    <TouchableOpacity
      style={[styles.optionButton, isSelected && styles.selectedOption]}
      onPress={onPress}
    >
      <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Make a report</Text>
        
        {/* Waves Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Waves:</Text>
          <View style={styles.optionsRow}>
            <OptionButton
              title="None"
              isSelected={waves === 'none'}
              onPress={() => setWaves('none')}
            />
            <OptionButton
              title="Small"
              isSelected={waves === 'small'}
              onPress={() => setWaves('small')}
            />
            <OptionButton
              title="Big"
              isSelected={waves === 'big'}
              onPress={() => setWaves('big')}
            />
          </View>
        </View>

        {/* Water Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Water:</Text>
          <View style={styles.optionsRow}>
            <OptionButton
              title="Clean"
              isSelected={water === 'clean'}
              onPress={() => setWater('clean')}
            />
            <OptionButton
              title="Muddy"
              isSelected={water === 'muddy'}
              onPress={() => setWater('muddy')}
            />
            <OptionButton
              title="Dirty"
              isSelected={water === 'dirty'}
              onPress={() => setWater('dirty')}
            />
          </View>
        </View>

        {/* Wind Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wind:</Text>
          <View style={styles.optionsRow}>
            <OptionButton
              title="Weak"
              isSelected={wind === 'weak'}
              onPress={() => setWind('weak')}
            />
            <OptionButton
              title="Moderate"
              isSelected={wind === 'moderate'}
              onPress={() => setWind('moderate')}
            />
            <OptionButton
              title="Strong"
              isSelected={wind === 'strong'}
              onPress={() => setWind('strong')}
            />
          </View>
        </View>

        {/* People Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>People:</Text>
          <View style={styles.optionsRow}>
            <OptionButton
              title="Few"
              isSelected={people === 'few'}
              onPress={() => setPeople('few')}
            />
            <OptionButton
              title="Normal"
              isSelected={people === 'normal'}
              onPress={() => setPeople('normal')}
            />
            <OptionButton
              title="Many"
              isSelected={people === 'many'}
              onPress={() => setPeople('many')}
            />
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 32,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#e5e5e5',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#0ea5e9',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  selectedOptionText: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#e5e5e5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});

export default ReportScreen;

