import React from 'react';
import { connect } from 'react-redux';
import { Statistic, Image, Segment } from 'semantic-ui-react';
import { fetchTweets } from '../actions';
import TwitterIcon from '../assets/twitterIcon.png';

class TweetsContainer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.dispatch(fetchTweets()) },
      180000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Segment inverted color='blue' padded='false' textAlign='center'>
        <Image src={TwitterIcon} size='tiny' inline verticalAlign='bottom' spaced='right'/>
        <Statistic inverted>
          <Statistic.Value>
            {this.props.tweets ? this.props.tweets : 0}
          </Statistic.Value>
          <Statistic.Label>Your Tweets</Statistic.Label>
        </Statistic>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(TweetsContainer);
