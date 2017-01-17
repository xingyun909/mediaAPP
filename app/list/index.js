import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TabBarIOS,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCff',
  },
  header: {
    backgroundColor: "#ee735c",
    paddingTop: 25,
    paddingBottom: 12
  },
  headerTitle: {
    fontSize: 16,
    textAlign: "center"
  },
  item: {
    width: width,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  thumb: {
    width: width,
    height: width * 0.56,
    resizeMode: 'cover',
    backgroundColor: "#eee"
  },
  title: {
    padding: 10,
    fontSize: 18,
    color: "#333"
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: "#eee"
  },
  handleBox: {
    padding: 10,
    flexDirection: 'row',
    width: width / 2 - 0.5,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  play: {
    position: "absolute",
    bottom: 14,
    right: 14,
    width: 46,
    height: 46,
    paddingTop: 9,
    paddingLeft: 18,
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 23,
    color: "#ed7b66"
  },
  handleText: {
    paddingLeft: 12,
    fontSize: 18,
    color: "#333"
  },
  up: {
    fontSize: 22,
    color: "#333"
  },
  commentIcon: {
    fontSize: 22,
    color: "#333"
  }

});

export default class List extends React.Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          "id": "230000198804059112",
          "thumb": "http://dummyimage.com/1280x720/a2cf66)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        },
        {
          "id": "52000020041111196X",
          "thumb": "http://dummyimage.com/1280x720/643b3d)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        },
        {
          "id": "620000199303157846",
          "thumb": "http://dummyimage.com/1280x720/b0adef)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        },
        {
          "id": "320000199505151185",
          "thumb": "http://dummyimage.com/1280x720/0323d1)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        },
        {
          "id": "540000201505053789",
          "thumb": "http://dummyimage.com/1280x720/aa9f9a)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        },
        {
          "id": "310000197708166554",
          "thumb": "http://dummyimage.com/1280x720/30232b)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        },
        {
          "id": "650000198307105147",
          "thumb": "http://dummyimage.com/1280x720/55cb25)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        },
        {
          "id": "230000197204304749",
          "thumb": "http://dummyimage.com/1280x720/fc8714)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        },
        {
          "id": "320000199010130825",
          "thumb": "http://dummyimage.com/1280x720/63c700)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        },
        {
          "id": "310000199209169063",
          "thumb": "http://dummyimage.com/1280x720/79bedc)",
          "title": "测试内容56o8",
          "vedio": "http://m.youku.com/video/id_XODc4MTMxMTg4.html?f=26046309"
        }
      ])
    };
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight>
        <View style={styles.item}>
          <Text style={styles.title}>{rowData.title}</Text>
          <Image
            source={{ uri: rowData.thumb }}
            style={styles.thumb}
            >
            <Icon
              name="ios-play"
              size={28}
              style={styles.play}
              />
          </Image>

          <View style={styles.itemFooter}>
            <View style={styles.handleBox}>
              <Icon
                name="ios-heart-outline"
                size={28}
                style={styles.up}
                />
              <Text style={styles.handleText}>喜欢</Text>
            </View>
            <View style={styles.handleBox}>
              <Icon
                name="ios-chatboxes-outline"
                size={28}
                style={styles.commentIcon}
                />
              <Text style={styles.handleText}>评论</Text>
            </View>
          </View>
        </View>

      </TouchableHighlight>
    )
  }

  componentDidMount() {
    this._fetchData()
  }
  _fetchData() {
    fetch('http://rap.taobao.org/mockjs/12955/api/videos?accessToken=abcd')
      .then((response) => response.json())
      .then((responseJson) => {
        // return responseJson.movies;
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>列表页面</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          automaticallyAdjustContentInsets={false}
          />


      </View>
    )
  }
}