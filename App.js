import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import{
  Container,
  Content,
  Header,
  Body,
  Title,
  Form,
  Item,
  Input,
  Icon,
  Spinner,
  Button,
  Text,
  TextInput,
} from 'native-base';

export default class App extends Component<> {
  constructor(props){
    super(props);
    this.state = { 
      f1: null, 
      f2: null,
      text1: null,
      sum: 0, 
       };
}


calculateSum = () => {
  const { f1, f2, text1, sum} = this.state;
 let sum1= 0;
 sum1=(((Number(f1)*4) + (Number(f2)*6))/10);
 let text = null;
  if (sum1>=6) {
    text = <Text>Aprovado</Text>;
  } else {
    if(sum1<6 && sum1>4){
      text = <Text>Prova Final</Text>;
    }else{
      text = <Text>Reprovado</Text>;
    }
    
  }
  this.setState({

    sum: sum1,
    text1: text
  });
}
  render() {
    
    return (
      
    <Container>
        <Header>
          <Body>
            <Title>CALCMEDIA</Title>
          </Body>
        </Header>
        <Content>
          <Form>
          <Item>
            <Input onChangeText={(text) => this.setState({f1: parseInt(text)})}
placeholder="Insira 1° nota"/>
          </Item>
          <Item>
            <Input onChangeText={(text) => this.setState({f2: parseInt(text)})} placeholder="Insira 2° nota"/>
          </Item>
          
        </Form>
        <Button style={{marginTop:10}} onPress={this.calculateSum} >
        <Text>Calcular</Text>
        </Button>

        <Text >{`Média: ${this.state.sum}`}</Text>
        {this.state.text1}
      </Content>
    </Container>
  );
   
  }
}



