import React, { Component } from "react";
import { StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import {    Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,

  Accordion,
  Text,
  View,
  FooterTab,
  Footer,
  Badge,
  ListItem
} from "native-base";
import { NavigationActions } from 'react-navigation';
const data = [
  {

      nama: 'Dr. Andi Wijaya',
      alamat: 'Rungkut Mejoyo Selatan IV Blok B.12',
      jam: '08.00 AM',
      tanggal: '05 June 2018'
  },
  {
      nama: 'Dr. Dara Adhelia Rusanty',
      alamat: 'Rungkut Mejoyo Selatan IV Blok B.12',
      jam: '08.00 AM',
      tanggal: '05 June 2018'
  },
  {
      nama: 'Dr. Pieter Adhitama',
      alamat: 'Rungkut Mejoyo Selatan IV Blok B.12',
      jam: '08.00 AM',
      tanggal: '05 June 2018'
  },
  {

      nama: 'Dr. Mira Pujiastuti',
      alamat: 'Rungkut Mejoyo Selatan IV Blok B.12',
      jam: '08.00 AM',
      tanggal: '05 June 2018'
  },
  {
      nama: 'Dr. Mira Pujiastuti1',
      alamat: 'Rungkut Mejoyo Selatan IV Blok B.12',
      jam: '08.00 AM',
      tanggal: '05 June 2018'
  },
  {
      nama: 'Dr. Mira Pujiastuti2',
      alamat: 'Rungkut Mejoyo Selatan IV Blok B.12',
      jam: '08.00 AM',
      tanggal: '05 June 2018'
  },
  {
      nama: 'Dr. Mira Pujiastuti3',
      alamat: 'Rungkut Mejoyo Selatan IV Blok B.12',
      jam: '08.00 AM',
      tanggal: '05 June 2018'
  },



]
export default class Home extends Component {


  constructor(props) {
    super(props)
  }
  render() {
    let navigation = this.props.navigation;
    return (

      <Container >
        <View style={{ flex: 0.7, paddingHorizontal: 25, flexDirection: 'row', }}>
          <View style={{ flex: 2, justifyContent: 'flex-end' }}>
            <Image source={require('../img/prf.png')}
              style={{ resizeMode: 'contain', alignSelf: 'center' }} />

          </View>
          <View style={{ flex: 1, paddingVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("DrawerOpen")}
              style={{ alignSelf: 'center', }}>
              <Image source={require('../img/Group18.png')}
              />
            </TouchableOpacity>

          </View>
        </View>


        <View style={{ flex: 3, paddingTop: 20 }}>

          <TouchableOpacity style={{ alignSelf: 'center', }}>
            <Image source={require('../img/Group53.png')}
            />
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 20 }}>
            <Image source={require('../img/Group21.png')}
            />
          </View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.nama}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({ item }) =>
              <View style={{ height: 80, flexDirection: 'row', padding: 16 }} >
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}
                    style={{ alignSelf: 'center', paddingTop: 5, }}>
                    <Image source={require('../img/Ellipse.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, paddingLeft: 5 }}>
                  <Text style={{ fontSize: 18, lineHeight: 23 }}>{item.nama}</Text>
                  <Text style={{ fontSize: 12, lineHeight: 23, paddingLeft: 20 }}>{item.alamat}</Text>
                  <Text style={{ fontSize: 12, lineHeight: 23, }}>{item.jam},              {item.tanggal}</Text>

                </View>
                <View>
                  <TouchableOpacity badge style={{ alignSelf: 'center', paddingTop: 5, }}>

                    <Badge style={{ backgroundColor: 'blue' }}><Text>2</Text></Badge>
                  </TouchableOpacity>
                </View>

              </View>}
          />
        </View>
      </Container>
    );
  }
}

