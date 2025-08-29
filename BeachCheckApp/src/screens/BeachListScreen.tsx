import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Beach } from '../types';
import { mockBeaches, getTimeAgo, getConditionIcon, getBeachById } from '../data/mockData';

type BeachListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BeachList'
>;

interface Props {
  navigation: BeachListScreenNavigationProp;
}

const BeachListScreen: React.FC<Props> = ({ navigation }) => {
  const renderBeachItem = ({ item: beach }: { item: Beach }) => {
    const latestReport = beach.latestReport;
    
    return (
      <TouchableOpacity
        style={styles.beachCard}
        onPress={() => {
          const updatedBeach = getBeachById(beach.id) || beach;
          navigation.navigate('BeachDetail', { beach: updatedBeach });
        }}
      >
        <View style={styles.beachHeader}>
          <Text style={styles.beachName}>{beach.name}</Text>
        </View>
        
        {latestReport ? (
          <View style={styles.conditionsContainer}>
            <View style={styles.conditionRow}>
              <Text style={styles.conditionIcon}>
                {getConditionIcon('water', latestReport.water)}
              </Text>
              <Text style={styles.conditionText}>
                {latestReport.water === 'clean' ? 'Clean' : 
                 latestReport.water === 'muddy' ? 'Muddy water' : 'Dirty'}
              </Text>
            </View>
            
            <View style={styles.conditionRow}>
              <Text style={styles.conditionIcon}>
                {getConditionIcon('waves', latestReport.waves)}
              </Text>
              <Text style={styles.conditionText}>
                {latestReport.waves === 'none' ? 'No waves' :
                 latestReport.waves === 'small' ? 'Small waves' : 'Big waves'}
              </Text>
            </View>
            
            <View style={styles.conditionRow}>
              <Text style={styles.conditionIcon}>
                {getConditionIcon('wind', latestReport.wind)}
              </Text>
              <Text style={styles.conditionText}>
                {latestReport.wind === 'weak' ? 'Weak' :
                 latestReport.wind === 'moderate' ? 'Moderate' : 'Strong'}
              </Text>
            </View>
            
            <View style={styles.conditionRow}>
              <Text style={styles.conditionIcon}>
                {getConditionIcon('people', latestReport.people)}
              </Text>
              <Text style={styles.conditionText}>
                {latestReport.people === 'few' ? 'Few people' :
                 latestReport.people === 'normal' ? 'Normal' : 'Crowded'}
              </Text>
            </View>
            
            <Text style={styles.timeStamp}>
              {getTimeAgo(latestReport.timestamp)}
            </Text>
          </View>
        ) : (
          <Text style={styles.noReports}>No recent reports</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockBeaches}
        renderItem={renderBeachItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  beachCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#000',
  },
  beachHeader: {
    marginBottom: 16,
  },
  beachName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  conditionsContainer: {
    gap: 8,
  },
  conditionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  conditionIcon: {
    fontSize: 20,
    width: 30,
  },
  conditionText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  timeStamp: {
    fontSize: 14,
    color: '#666',
    marginTop: 12,
    fontStyle: 'italic',
  },
  noReports: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    padding: 20,
  },
});

export default BeachListScreen;
