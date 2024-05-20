import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MasterCard from '@/components/cards/aboutMaster';

interface AppointmentCardProps {
  service: string;
  date: string;
  time: string;
  details: {
    name: string;
    imageUrl: string;
    alias: string;
    rating: number;
    location: string;
    nextAppointment: string;
    orders: number;
    clients: number;
    price: string;
    services: string[];
  };
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ service, date, time, details }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handlePress} style={styles.header}>
        <Text style={styles.serviceText}>{service}</Text>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.details}>
          <MasterCard
            name={details.name}
            imageUrl={details.imageUrl}
            alias={details.alias}
            rating={details.rating}
            location={details.location}
            nextAppointment={details.nextAppointment}
            orders={details.orders}
            clients={details.clients}
          />
          <Text style={styles.priceText}>{details.price}</Text>
          <View style={styles.servicesContainer}>
            {details.services.map((service, index) => (
              <Text key={index} style={styles.serviceTag}>
                {service}
              </Text>
            ))}
          </View>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageButtonText}>Написать сообщение</Text>
          </TouchableOpacity>
          <View style={styles.contactButtons}>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>📞</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>📍</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4A4A58',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'column',
  },
  serviceText: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: '#A9A9A9',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  details: {
    marginTop: 10,
  },
  priceText: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 10,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  serviceTag: {
    backgroundColor: '#6A6A6E',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    marginTop: 5,
    color: '#FFF',
  },
  messageButton: {
    backgroundColor: '#9c0135',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  messageButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contactButton: {
    backgroundColor: '#9c0135',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
  },
  contactButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppointmentCard;
