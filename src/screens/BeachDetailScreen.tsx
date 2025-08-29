import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { getTimeAgo, getConditionIcon } from '../data/mockData';

type BeachDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BeachDetail'
>;

type BeachDetailScreenRouteProp = RouteProp<RootStackParamList, 'BeachDetail'>;

interface Props {
  navigation: BeachDetailScreenNavigationProp;
  route: BeachDetailScreenRouteProp;
}

const BeachDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { beach } = route.params;
  const latestReport = beach.latestReport;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Beach Image Placeholder */}
        <View style={styles.imagePlaceholder}>
          <View style={styles.imageX}>
            <Text style={styles.imageXText}>✕</Text>
          </View>
        </View>

        {/* Latest Report Section */}
        <View style={styles.reportSection}>
          <Text style={styles.sectionTitle}>
            Latest report ({latestReport ? getTimeAgo(latestReport.timestamp) : 'No reports'})
          </Text>
          
          {latestReport ? (
            <View style={styles.conditionsGrid}>
              <View style={styles.conditionItem}>
                <Text style={styles.conditionIcon}>
                  {getConditionIcon('waves', latestReport.waves)}
                </Text>
                <Text style={styles.conditionLabel}>
                  {latestReport.waves === 'none' ? 'No waves' :
                   latestReport.waves === 'small' ? 'Small waves' : 'Big waves'}
                </Text>
              </View>
              
              <View style={styles.conditionItem}>
                <Text style={styles.conditionIcon}>
                  {getConditionIcon('water', latestReport.water)}
                </Text>
                <Text style={styles.conditionLabel}>
                  {latestReport.water === 'clean' ? 'Clean' :
                   latestReport.water === 'muddy' ? 'Muddy' : 'Dirty'}
                </Text>
              </View>
              
              <View style={styles.conditionItem}>
                <Text style={styles.conditionIcon}>
                  {getConditionIcon('wind', latestReport.wind)}
                </Text>
                <Text style={styles.conditionLabel}>
                  {latestReport.wind === 'weak' ? 'Weak' :
                   latestReport.wind === 'moderate' ? 'Moderate' : 'Strong'}
                </Text>
              </View>
              
              <View style={styles.conditionItem}>
                <Text style={styles.conditionIcon}>
                  {getConditionIcon('people', latestReport.people)}
                </Text>
                <Text style={styles.conditionLabel}>
                  {latestReport.people === 'few' ? 'Few' :
                   latestReport.people === 'normal' ? 'Normal' : 'Crowded'}
                </Text>
              </View>
            </View>
          ) : (
            <Text style={styles.noReports}>No recent reports available</Text>
          )}
        </View>

        {/* Make Report Button */}
        <TouchableOpacity
          style={styles.reportButton}
          onPress={() => navigation.navigate('Report', { beach })}
        >
          <Text style={styles.reportButtonText}>Make a report</Text>
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
  imagePlaceholder: {
    height: 200,
    backgroundColor: '#e5e5e5',
    borderRadius: 16,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  imageX: {
    position: 'absolute',
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageXText: {
    fontSize: 40,
    color: '#999',
    transform: [{ scaleX: 3 }, { scaleY: 3 }],
  },
  reportSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  conditionsGrid: {
    gap: 16,
  },
  conditionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  conditionIcon: {
    fontSize: 24,
    width: 40,
  },
  conditionLabel: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  noReports: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    padding: 20,
  },
  reportButton: {
    backgroundColor: '#e5e5e5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  reportButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});

export default BeachDetailScreen;

