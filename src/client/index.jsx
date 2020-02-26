import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';

console.log(tweets.tweets[0]);


class App extends React.Component {
  render() { 
    let tweetsList = this.props.tweets.tweets.map( ( tweet ) => {
      return <Tweet tweet={tweet}/>
    })

    return (
      <div>
        {tweetsList}
      </div>
    );
  }
}


class Likes extends React.Component {
  render () {
    return (
      <span>
        <i>thumb_up</i> {this.props.likes}
      </span>
    )
  }
}


class User extends React.Component {
  render() {
    return (
      <div>
        <h5>
          {this.props.user.screen_name}
          <a href={this.props.user.url}>{this.props.user.name}</a> 
          <span>@{this.props.user.screen_name} - {this.props.date}</span>
        </h5>
      </div>
    );
  }
}


//tweets

class Retweets extends React.Component {
  render() {
    return (
      <span>
        <i>double_arrow</i> {this.props.retweets}
      </span>
    )
  }
}


class TweetText extends React.Component {
  render () {
    return (
      <p>{this.props.text}</p>
    )
  }
}


class TweetMedia extends React.Component {
  render() {

    if (this.props.entities) {
      if (this.props.entities.media) {
        return (
          <div>
            <img src={this.props.entities.media[0].media_url}/>
          </div>
        )
      }
      return (
        <div></div>
      )
    }

    return (
      <div></div>
    ) 
  }
}


class Tweet extends React.Component {
  render() {
    return (
      <div>

        <div>
          <User user={this.props.tweet.user} date={this.props.tweet.created_at}/>
          <TweetText text={this.props.tweet.text}/>
        </div>

        <div>
          <Likes likes={this.props.tweet.favorite_count}/> <Retweets retweets={this.props.tweet.retweet_count}/>
        </div>
      <TweetMedia entities={this.props.tweet.entities}/>
    </div>
    );
  }
}


const element = document.getElementById('app');
ReactDOM.render(<App tweets={tweets}/>, element);