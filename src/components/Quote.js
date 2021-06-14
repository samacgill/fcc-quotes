import React from "react";
import {
  Button,
  Segment,
  Container,
  Card,
  Header,
  Icon,
} from "semantic-ui-react";

export default function Quote(props) {
  const getQuoteHandler = () => {
    props.getQuote();
  };
  return (
    <Card id="quote-box" style={{ padding: "1em", marginTop: "30px" }} centered>
      <Header icon id="text">
        <Icon name="quote left" />
        {props.quote}
      </Header>
      <p id="author">{props.author}</p>
      <div>
        <Button color="twitter">
          <Icon name="twitter" />{" "}
          <a id="tweet-quote" href='"twitter.com/intent/tweet"'>
            Tweet
          </a>
        </Button>
        <Button id="new-quote" onClick={getQuoteHandler}>
          New quote
        </Button>
      </div>
    </Card>
  );
}
