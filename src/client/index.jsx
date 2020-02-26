import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';

//Accessing first object within the array
console.log(tweets.tweets[0]);


//Mistake made earlier:
////this.props.tweets.map ---> should be tweets.tweets because only by doing so, will be able to access the objects within the array.
////Important to note: type in the syntax that will enable to get access directly for .map
////display tweetsList by putting it in the 'return' section. Otherwise, nothing will appear
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

//Accessing number of likes
class Likes extends React.Component {
  render () {
    return (
      <span>
        <i>thumb_up</i> {this.props.likes}
      </span>
    )
  }
}


//Note how </span> is used, is useful!
//Be more diverse when it comes to tags used - Don't be rigid to only stick the few common ones.
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


//Accessing retweet numbers
class Retweets extends React.Component {
  render() {
    return (
      <span>
        <i>double_arrow</i> {this.props.retweets}
      </span>
    )
  }
}


//Accessing tweet text
//Note how classes are named - straightforward and consistent
class TweetText extends React.Component {
  render () {
    return (
      <p>{this.props.text}</p>
    )
  }
}


//!!! IMPORTANT !!!/// -----> if statements.
//If this.props.entities is null, return empty div. (?)
//Nested: If tweet is an image, return it in an image tag, otherwise return empty div.
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


//!!! IMPORTANT !!!///
//By accessing all the classes directly, will be able to access it the way they are in their various parts. (?)

//E.g. <User user={this.props.tweet.user} ...>
//Because of ----> <Tweet tweet={tweet}/> in User class, we can now access user with 'tweet'. When the map is going through all the objects, it is being assigned the var name "tweet". (?)

//Not too sure about ^ 
//Remember to clarify tomorrow.

class Tweet extends React.Component {
  render() {
    return (
      <div>

        <div>
          <User user={this.props.tweet.user} date={this.props.tweet.created_at}/>
          <TweetText text={this.props.tweet.text}/>
        </div>

        <div>
          <Likes likes={this.props.tweet.favorite_count}/> 
          <Retweets retweets={this.props.tweet.retweet_count}/>
        </div>
      <TweetMedia entities={this.props.tweet.entities}/>
    </div>
    );
  }
}

//Why tweets={tweets} when above, it was tweet={tweet}? I AM CONFUSEEEEEE
const element = document.getElementById('app');
ReactDOM.render(<App tweets={tweets}/>, element);